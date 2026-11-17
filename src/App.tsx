import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Methodology } from "./components/sections/Methodology";
import { Infrastructure } from "./components/sections/Infrastructure";
import { ResultsCTA } from "./components/sections/ResultsCTA";
import { FAQ } from "./components/sections/FAQ";
import { Location } from "./components/sections/Location";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

// Páginas internas em chunks separados: a home não paga pelo código delas.
// Elas são pré-carregadas quando o navegador fica ocioso, então a navegação continua instantânea.
const loadResultsPage = () => import("./components/pages/ResultsPage");
const loadSpecialistPage = () => import("./components/pages/SpecialistPage");
const ResultsPage = lazy(() => loadResultsPage().then((mod) => ({ default: mod.ResultsPage })));
const SpecialistPage = lazy(loadSpecialistPage);

function preloadRoute(path: string): Promise<unknown> {
  if (path.includes("resultados")) return loadResultsPage();
  if (path.includes("especialista")) return loadSpecialistPage();
  return Promise.resolve();
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [displayPath, setDisplayPath] = useState(window.location.pathname);
  const [stage, setStage] = useState<"in" | "out" | "done">("done");

  useScrollReveal(displayPath);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    
    const handleInternalNav = (e: Event) => {
      const path = (e as CustomEvent<string>).detail;
      window.history.pushState({}, "", path);
      setCurrentPath(path);
    };
    
    window.addEventListener("navigate", handleInternalNav);
    
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", handleInternalNav);
    };
  }, []);

  // Pré-carrega as páginas internas quando a home já terminou de carregar e o navegador está ocioso.
  useEffect(() => {
    const prefetch = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
      idle(() => {
        loadResultsPage();
        loadSpecialistPage();
      });
    };
    if (document.readyState === "complete") prefetch();
    else window.addEventListener("load", prefetch, { once: true });
    return () => window.removeEventListener("load", prefetch);
  }, []);

  useEffect(() => {
    if (currentPath === displayPath) return;
    
    let cancelled = false;
    setStage("out");
    // Mesmo tempo de fade-out de antes (260ms); se a página ainda não estiver em cache,
    // espera ela chegar para o fade-in acontecer com o conteúdo já pronto.
    Promise.all([wait(260), preloadRoute(currentPath).catch(() => {})]).then(() => {
      if (cancelled) return;
      setDisplayPath(currentPath);
      window.scrollTo(0, 0);
      setStage("in");
    });
    
    return () => { cancelled = true; };
  }, [currentPath, displayPath]);

  const goTo = (id: string) => {
    if (id.startsWith("/")) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: id }));
    } else {
      if (currentPath !== "/") {
        window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  let transitionClass = "";
  if (stage === "out") transitionClass = "page-transition-out";
  if (stage === "in") transitionClass = "page-transition-in";

  const handleAnimationEnd = () => {
    if (stage === "in") setStage("done");
  };

  return (
    <>
      <Header goTo={goTo} />
      
      <div className={transitionClass} onAnimationEnd={handleAnimationEnd} style={{ position: "relative" }}>
        {displayPath.includes("resultados") ? (
          <Suspense fallback={<div className="min-h-screen" />}>
            <ResultsPage goTo={goTo} />
          </Suspense>
        ) : displayPath.includes("especialista") ? (
          <Suspense fallback={<div className="min-h-screen" />}>
            <SpecialistPage goTo={goTo} />
          </Suspense>
        ) : (
          <>
            <Hero goTo={goTo} />
            <About />
            <Methodology />
            <Infrastructure />
            <ResultsCTA />
            <FAQ />
            <Location />
            <Contact />
          </>
        )}
      </div>
      
      {/* Footer fica global e não sofre com as transições abruptas */}
      <Footer />
    </>
  );
}
