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
import { globalData } from "./data/content";
import { preloadImage, srcSetFor } from "./lib/img";

// Páginas internas em chunks separados: a home não paga pelo código delas.
// Elas são pré-carregadas quando o navegador fica ocioso (e ao passar o mouse no link),
// junto com a decodificação da foto principal do especialista, para a transição ser instantânea.
const loadResultsPage = () => import("./components/pages/ResultsPage");
const loadSpecialistPage = () => import("./components/pages/SpecialistPage");
const ResultsPage = lazy(() => loadResultsPage().then((mod) => ({ default: mod.ResultsPage })));
const SpecialistPage = lazy(loadSpecialistPage);

const SPECIALIST_HERO_SIZES = "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, (min-width: 640px) 70vw, 95vw";

export function preloadRoute(path: string): Promise<unknown> {
  if (path.includes("resultados")) {
    const firstCase = globalData.results_page.cases[0];
    return Promise.all([
      loadResultsPage(),
      firstCase ? preloadImage(firstCase.beforeImg) : Promise.resolve(),
      firstCase ? preloadImage(firstCase.afterImg) : Promise.resolve(),
    ]);
  }
  if (path.includes("especialista")) {
    const heroImg = globalData.specialties_page.hero.imgUrl;
    return Promise.all([
      loadSpecialistPage(),
      preloadImage(heroImg, srcSetFor(heroImg), SPECIALIST_HERO_SIZES),
    ]);
  }
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

  // Pré-carrega código e imagens das páginas internas quando a home já terminou de carregar.
  useEffect(() => {
    const prefetch = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
      idle(() => {
        preloadRoute("/especialista");
        preloadRoute("/resultados");
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
    // Sincronizado com pageFadeOut (.32s no CSS) + garante que o chunk e a imagem já estejam
    // decodificados na memória antes de virar a página.
    Promise.all([wait(320), preloadRoute(currentPath).catch(() => {})]).then(() => {
      if (cancelled) return;
      // html tem scroll-behavior: smooth; forçamos "instant" na troca de página para não competir
      // com a animação de entrada e o header não ficar preso no estado "scrolled".
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      requestAnimationFrame(() => {
        if (cancelled) return;
        setDisplayPath(currentPath);
        setStage("in");
      });
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
        }, 380);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  let transitionClass = "";
  if (stage === "out") transitionClass = "page-transition-out";
  if (stage === "in") transitionClass = "page-transition-in";

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (stage === "in") setStage("done");
  };

  return (
    <>
      <Header goTo={goTo} />
      
      <div className={transitionClass} onAnimationEnd={handleAnimationEnd} style={{ position: "relative" }}>
        {displayPath.includes("resultados") ? (
          <Suspense fallback={<div className="min-h-screen bg-[var(--c-bg)]" />}>
            <ResultsPage goTo={goTo} />
          </Suspense>
        ) : displayPath.includes("especialista") ? (
          <Suspense fallback={<div className="min-h-screen bg-[var(--c-dark-base)]" />}>
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
