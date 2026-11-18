import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { serif, globalData } from "../../data/content";

// Mesma sequência de antes (galeria duplicada, repetida 20x = 240 itens),
// mas calculada uma única vez em vez de a cada render/clique.
const gallery = globalData.about.gallery;
const galleryLen = gallery.length;
const sixPhotos = [...gallery, ...gallery];
const infiniteItems = Array(20).fill(sixPhotos).flat() as typeof sixPhotos;
const VISIBLE_RANGE = 3;

export function About() {
  const [currentIndex, setCurrentIndex] = useState(60);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    // matchMedia só dispara quando cruza o breakpoint (antes: a cada pixel de resize)
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Só percorre os 7 cards visíveis (antes: mapeava os 240 itens a cada render)
  const visibleIndexes: number[] = [];
  for (let i = currentIndex - VISIBLE_RANGE; i <= currentIndex + VISIBLE_RANGE; i++) {
    if (i >= 0 && i < infiniteItems.length) visibleIndexes.push(i);
  }

  const activeDot = ((currentIndex % galleryLen) + galleryLen) % galleryLen;

  return (
    <section 
      id="sobre" 
      className="relative w-full bg-[var(--c-bg)] min-h-0 md:min-h-[80vh] py-14 sm:py-20 md:py-32 overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Vitrine 2.5D Stacked */}
      <div className="relative w-full h-[410px] sm:h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden z-10">
        <m.div 
          className="absolute flex items-center cursor-grab active:cursor-grabbing w-full h-full justify-center touch-pan-y"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_e, info) => {
            const offset = info.offset.x;
            const velocity = info.velocity.x;
            const offsetLimit = isMobile ? 26 : 40;
            const velocityLimit = isMobile ? 320 : 500;
            
            if (offset < -offsetLimit || velocity < -velocityLimit) {
              setCurrentIndex((prev) => prev + 1);
            } else if (offset > offsetLimit || velocity > velocityLimit) {
              setCurrentIndex((prev) => prev - 1);
            }
          }}
        >
          {visibleIndexes.map((index) => {
            const img = infiniteItems[index];
            const distance = index - currentIndex;
            const absDistance = Math.abs(distance);
            
            const scale = Math.max(1 - absDistance * 0.15, 0.65);
            const zIndex = 50 - absDistance;
            const baseOffset = isMobile ? 112 : 240;
            const secondaryOffset = isMobile ? 74 : 160;
            
            const translateX = distance === 0 
              ? 0 
              : Math.sign(distance) * (baseOffset + (absDistance > 1 ? (absDistance - 1) * secondaryOffset : 0));

            return (
              <m.div
                key={index}
                onClick={() => handleCardClick(index)}
                className="absolute flex flex-col items-center cursor-pointer will-change-transform"
                animate={{
                  x: translateX,
                  scale: scale,
                  zIndex: zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 38,
                  mass: 0.8
                }}
              >
                <div className="relative w-[256px] sm:w-[340px] md:w-[400px] aspect-[3/4.2] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] group">
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 group-hover:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none opacity-80" />
                  
                  <m.div 
                    className="absolute inset-0 bg-white pointer-events-none"
                    animate={{ opacity: absDistance === 0 ? 0 : 0.65 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {absDistance === 0 && (
                    <div className="absolute inset-0 border-[1.5px] border-[var(--c-accent)]/60 rounded-[1.75rem] md:rounded-[2rem] pointer-events-none" />
                  )}
                  
                  <m.div 
                    className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-6 flex flex-col items-center text-center pointer-events-none"
                    animate={{ 
                      opacity: absDistance === 0 ? 1 : 0.3,
                      y: absDistance === 0 ? 0 : 10
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide drop-shadow-md" style={serif}>
                      {img.title}
                    </h3>
                  </m.div>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5 sm:mt-8 z-20">
        <button 
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-[rgba(var(--c-primary-rgb),0.12)] flex items-center justify-center text-[var(--c-primary)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 active:scale-90 transition-all bg-white"
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className="flex items-center gap-2 px-1" aria-hidden="true">
          {gallery.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeDot === idx ? "w-5 bg-[var(--c-accent)]" : "w-1.5 bg-[rgba(var(--c-primary-rgb),0.18)]"
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-[rgba(var(--c-primary-rgb),0.12)] flex items-center justify-center text-[var(--c-primary)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 active:scale-90 transition-all bg-white"
          aria-label="Próximo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
