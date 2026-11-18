import { globalData } from "../data/content";
import { preloadImage, srcSetFor } from "./img";

export const loadResultsPage = () => import("../components/pages/ResultsPage");
export const loadSpecialistPage = () => import("../components/pages/SpecialistPage");

const SPECIALIST_HERO_SIZES = "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, (min-width: 640px) 70vw, 92vw";

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
