import { useState, useEffect } from "react";
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
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ResultsPage } from "./components/pages/ResultsPage";
import { SpecialistPage } from "./components/pages/SpecialistPage";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { preloadRoute } from "./lib/routes";

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
      if (path === window.location.pathname) return;
      window.history.pushState({}, "", path);
      setCurrentPath(path);
    };
    
    window.addEventListener("navigate", handleInternalNav);
    
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", handleInternalNav);
    };
  }, []);

  // Pré-decodifica as imagens das páginas internas na GPU quando o navegador fica ocioso.
  useEffect(() => {
    const prefetch = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1000));
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
    
    preloadRoute(currentPath);
    setStage("out");

    const timer = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setDisplayPath(currentPath);
      setStage("in");
    }, 220);
    
    return () => window.clearTimeout(timer);
  }, [currentPath, displayPath]);

  const goTo = (id: string) => {
    if (id.startsWith("/")) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: id }));
    } else {
      if (currentPath !== "/") {
        window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
        window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 280);
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
          <ResultsPage goTo={goTo} />
        ) : displayPath.includes("especialista") ? (
          <SpecialistPage />
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
      
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
