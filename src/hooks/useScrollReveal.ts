import { useEffect } from "react";

export function useScrollReveal(routeKey?: unknown) {
  useEffect(() => {
    // Configura o radar (Intersection Observer)
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        // Se o elemento entrou na tela
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
          // Uma regra de ouro do luxo: a animação só acontece na PRIMEIRA vez que você desce.
          // Ficar animando toda vez que sobe e desce dá enjoo e parece site amador.
          observer.unobserve(entry.target); 
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // A animação dispara quando 15% do elemento aparece na tela
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Manda o radar vigiar tudo que tiver as classes de reveal
    // Roda de novo a cada troca de rota (routeKey), então elementos de páginas
    // trocadas via navegação SPA também são vigiados — sem precisar de F5.
    const revealElements = document.querySelectorAll(".reveal, .reveal-l, .reveal-r, .stagger-children");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [routeKey]);
}