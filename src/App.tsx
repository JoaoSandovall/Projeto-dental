import { useState, useEffect } from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Convenios } from "./components/sections/Convenios";
import { Testimonials } from "./components/sections/Testimonials";
import { ResultsCTA } from "./components/sections/ResultsCTA";
import { FAQ } from "./components/sections/FAQ";
import { Location } from "./components/sections/Location";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

import { ResultsPage } from "./components/pages/ResultsPage";
import { SpecialtiesPage } from "./components/pages/SpecialtiesPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [displayPath, setDisplayPath] = useState(window.location.pathname);
  const [stage, setStage] = useState<"in" | "out" | "done">("done");

  useScrollReveal(displayPath);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    
    const handleInternalNav = (e: any) => {
      window.history.pushState({}, "", e.detail);
      setCurrentPath(e.detail);
    };
    window.addEventListener("navigate", handleInternalNav);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("navigate", handleInternalNav);
    };
  }, []);

  useEffect(() => {
    if (currentPath === displayPath) return;
    setStage("out");
    
    const t1 = setTimeout(() => {
      setDisplayPath(currentPath);
      window.scrollTo(0, 0);
      setStage("in");
    }, 260);
    
    return () => clearTimeout(t1);
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

  // === SOLUÇÃO DEFINITIVA ===
  // Renderizamos o <Header /> aqui, isolado e imune a qualquer bug de CSS
  return (
    <>
      <Header goTo={goTo} />
      {/* A div com overflow-x-hidden foi removida daqui para liberar o sticky */}
      <div className={transitionClass} onAnimationEnd={handleAnimationEnd} style={{ position: "relative" }}>
        {displayPath.includes("resultados") ? (
          <ResultsPage goTo={goTo} />
        ) : displayPath.includes("especialidades") ? (
          <SpecialtiesPage goTo={goTo} />
        ) : (
          <>
            <Hero goTo={goTo} />
            <About goTo={goTo} />
            <Convenios />
            <Testimonials />
            <ResultsCTA />
            <FAQ />
            <Location />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}