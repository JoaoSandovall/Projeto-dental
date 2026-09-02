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
      className="relative block w-full aspect-[4/5] rounded-[1.4rem] overflow-hidden shrink-0 group focus:outline-none"
    >
      <img
        src={photo.img}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 scale-[1.03] group-hover:scale-100 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-[var(--c-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.4rem]" />
    </button>
  );

  return (
    <Section id="depoimentos" style={{ background: "var(--c-bg-alt)" }} className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-center">
        
        <div className="reveal lg:sticky lg:top-32">
          <span className="eyebrow">{eyebrow}</span>
          <div className="relative mt-4">
            <span
              aria-hidden
              className="absolute -top-8 -left-2 text-[5rem] leading-none select-none opacity-15"
              style={{ ...serif, color: "var(--c-primary)" }}
            >
              &ldquo;
            </span>
            <p
              className="relative"
              style={{ ...serif, fontWeight: 400, lineHeight: 1.22, fontSize: "clamp(1.7rem, 2.6vw, 2.5rem)", color: "var(--c-text-main)" }}
            >
              {quote}
            </p>
          </div>
          <p className="mt-8 text-[0.95rem] leading-relaxed text-[var(--c-text-muted)] max-w-[440px]">
            {supporting}
          </p>
          <div className="mt-10 flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[var(--c-accent)]" />
            <span className="text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-[var(--c-text-muted)]">
              Clinmais – Camboriú, SC
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 md:gap-5 h-[460px] sm:h-[560px] md:h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-col overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-5 marquee-up">
              {[...colA, ...colA].map((p, i) => renderTile(p, photos.indexOf(p), `a-${i}`))}
            </div>
          </div>
          <div className="marquee-col overflow-hidden mt-10 md:mt-16">
            <div className="flex flex-col gap-4 md:gap-5 marquee-down">
              {[...colB, ...colB].map((p, i) => renderTile(p, photos.indexOf(p), `b-${i}`))}
            </div>
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(11,26,19,0.92)] backdrop-blur-md px-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fechar"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 border border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Foto anterior"
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 border border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <img
            src={photos[activeIndex].img}
            alt={photos[activeIndex].alt}
            loading="lazy"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] rounded-[1.2rem] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Próxima foto"
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 border border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes marquee-up-kf { 
          from { transform: translateY(0) translateZ(0); } 
          to { transform: translateY(-50%) translateZ(0); } 
        }
        @keyframes marquee-down-kf { 
          from { transform: translateY(-50%) translateZ(0); } 
          to { transform: translateY(0) translateZ(0); } 
        }
        .marquee-up { 
          animation: marquee-up-kf 34s linear infinite; 
          will-change: transform;
        }
        .marquee-down { 
          animation: marquee-down-kf 40s linear infinite; 
          will-change: transform;
        }
        .marquee-col:hover .marquee-up,
        .marquee-col:hover .marquee-down { animation-play-state: paused; }
      `}</style>
    </Section>
  );
}