import { useState, useEffect } from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { AboutBrief } from "./components/sections/AboutBrief";
import { Services } from "./components/sections/Services";
import { Protocol } from "./components/sections/Protocol";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { AboutMePage } from "./components/pages/AboutMePage";
import { useScrollReveal } from "./hooks/useScrollReveal";

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
    }, 300);
    return () => clearTimeout(t1);
  }, [currentPath, displayPath]);

  const goTo = (id: string) => {
    if (id.startsWith("/")) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: id }));
    } else {
      if (currentPath !== "/") {
        window.dispatchEvent(new CustomEvent("navigate", { detail: "/" }));
        setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 200);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isTransitioning = stage === "out";

  return (
    <div className="bg-[var(--c-bg)] min-h-screen text-[var(--c-text-main)]">
      <Header goTo={goTo} />
      <div className={isTransitioning ? "page-transition-out" : "page-transition-in"} onAnimationEnd={() => setStage("done")}>
        {displayPath === "/sobre-o-doutor" ? (
          <AboutMePage goTo={goTo} />
        ) : (
          <>
            <Hero goTo={goTo} />
            <AboutBrief goTo={goTo} />
            <Services />
            <Protocol />
            <FAQ />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}