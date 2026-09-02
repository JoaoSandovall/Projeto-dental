import { useEffect, useState } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Testimonials() {
  const { eyebrow, quote, supporting, photos } = globalData.testimonials;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const colA = photos.filter((_, i) => i % 2 === 0);
  const colB = photos.filter((_, i) => i % 2 !== 0);

  const renderTile = (photo: { img: string; alt: string }, originalIndex: number, keyPrefix: string) => (
    <button
      key={`${keyPrefix}-${originalIndex}`}
      onClick={() => setActiveIndex(originalIndex)}
      className="relative block w-full aspect-[4/5] rounded-[2rem] overflow-hidden shrink-0 group focus:outline-none shadow-sm"
    >
      {/* Removido o filtro grayscale frio. Agora a imagem é quente e natural */}
      <img
        src={photo.img}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-[var(--c-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </button>
  );

  return (
    <Section id="depoimentos" className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-center">
        
        <div className="reveal lg:sticky lg:top-32">
          <span className="eyebrow">{eyebrow}</span>
          <div className="relative mt-4">
            <span aria-hidden className="absolute -top-10 -left-4 text-[6rem] leading-none select-none opacity-10" style={{ ...serif, color: "var(--c-accent)" }}>
              &ldquo;
            </span>
            <p className="relative" style={{ ...serif, fontWeight: 400, lineHeight: 1.25, fontSize: "clamp(1.7rem, 2.6vw, 2.5rem)", color: "var(--c-text-main)" }}>
              {quote}
            </p>
          </div>
          <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[var(--c-text-muted)] max-w-[440px]">
            {supporting}
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-4 md:gap-6 h-[500px] sm:h-[600px] md:h-[680px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-col overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-6 marquee-up">
              {[...colA, ...colA].map((p, i) => renderTile(p, photos.indexOf(p), `a-${i}`))}
            </div>
          </div>
          <div className="marquee-col overflow-hidden mt-12 md:mt-20">
            <div className="flex flex-col gap-4 md:gap-6 marquee-down">
              {[...colB, ...colB].map((p, i) => renderTile(p, photos.indexOf(p), `b-${i}`))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal de visualização idêntico, mas com bordas mais amigáveis */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(44,61,48,0.95)] backdrop-blur-md px-4" onClick={close}>
          <button onClick={close} aria-label="Fechar" className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <img src={photos[activeIndex].img} alt={photos[activeIndex].alt} onClick={(e) => e.stopPropagation()} className="max-w-[90vw] max-h-[85vh] rounded-[1.5rem] object-contain shadow-2xl" />
          
          <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes marquee-up-kf { from { transform: translateY(0) translateZ(0); } to { transform: translateY(-50%) translateZ(0); } }
        @keyframes marquee-down-kf { from { transform: translateY(-50%) translateZ(0); } to { transform: translateY(0) translateZ(0); } }
        .marquee-up { animation: marquee-up-kf 40s linear infinite; will-change: transform; }
        .marquee-down { animation: marquee-down-kf 45s linear infinite; will-change: transform; }
        .marquee-col:hover .marquee-up, .marquee-col:hover .marquee-down { animation-play-state: paused; }
      `}</style>
    </Section>
  );
}