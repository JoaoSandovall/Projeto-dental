import { globalData } from "../data/content";
import { preloadImage, srcSetFor } from "./img";

const SPECIALIST_HERO_SIZES = "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, (min-width: 640px) 70vw, 92vw";

export function preloadRoute(path: string): Promise<unknown> {
  if (path.includes("resultados")) {
    const firstCase = globalData.results_page.cases[0];
    return Promise.all([
      firstCase ? preloadImage(firstCase.beforeImg) : Promise.resolve(),
      firstCase ? preloadImage(firstCase.afterImg) : Promise.resolve(),
    ]);
  }
  if (path.includes("especialista")) {
    const heroImg = globalData.specialties_page.hero.imgUrl;
    const timelineImgs = globalData.specialties_page.timeline.map((t) =>
      preloadImage(t.img, srcSetFor(t.img), "(min-width: 640px) 320px, 280px")
    );
    return Promise.all([
      preloadImage(heroImg, srcSetFor(heroImg), SPECIALIST_HERO_SIZES),
      ...timelineImgs,
    ]);
  }
  return Promise.resolve();
}
