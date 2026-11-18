import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { srcSetFor } from "../../lib/img";

export function Infrastructure() {
  const { 
    eyebrow, 
    title1, 
    title2, 
    quote, 
    supporting, 
    detailsLabel, 
    footerLeft, 
    footerRight, 
    photos 
  } = globalData.testimonials;

  const [active, setActive] = useState(0);

  return (
    <section id="infraestrutura" className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 md:py-32 bg-[var(--c-dark-base)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 
              className="text-[clamp(2.6rem,8vw,6rem)] md:text-[clamp(3rem,6vw,6rem)] leading-[0.92] text-white font-light tracking-tighter mb-6 md:mb-8"
              style={serif}
            >
              {title1} <br/>
              <em className="italic text-[var(--c-accent)]">{title2}</em>
            </h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl font-light leading-[1.75] max-w-md">
              "{quote}"
            </p>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 lg:text-right max-w-xs">
            <span className="text-[var(--c-accent)] text-xs tracking-[0.3em] uppercase font-medium">
              {eyebrow}
            </span>
            <p className="text-white/40 text-sm font-light leading-[1.75]">
              {supporting}
            </p>
            <div className="h-[1px] w-full bg-white/10 mt-2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-[640px] sm:h-[720px] md:h-[75vh] gap-2.5 md:gap-4">
          {photos.map((photo, index) => {
            const isActive = active === index;
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setActive(index);
                }}
                style={{
                  flex: isActive ? 5 : 1,
                  transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                className="relative overflow-hidden rounded-2xl md:rounded-[2rem] cursor-pointer group bg-[var(--c-dark-base)] border border-white/5"
              >
                <img
                  src={photo.img}
                  srcSet={srcSetFor(photo.img)}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    transition: "filter 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className={`absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform ${
                    isActive ? "grayscale-0 scale-100" : "grayscale-[80%] scale-[1.08]"
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                  
                  {/* Número no topo (desktop sempre, mobile quando ativo) */}
                  <div className={`absolute top-5 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 ${isActive ? "block" : "hidden md:block"}`}>
                    <span 
                      className={`text-xs font-mono tracking-widest transition-colors duration-500 ${
                        isActive ? "text-[var(--c-accent)]" : "text-white/40"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Barra compacta no mobile quando a fatia está recolhida */}
                  {!isActive && (
                    <div className="md:hidden absolute inset-0 px-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono tracking-widest text-[var(--c-accent)]/80">
                          0{index + 1}
                        </span>
                        <span className="text-white/85 text-base font-light tracking-wide" style={serif}>
                          {photo.alt}
                        </span>
                      </div>
                      <span className="text-white/40 text-xs font-mono">+</span>
                    </div>
                  )}

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <m.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-1.5 sm:gap-2"
                      >
                        <h3 
                          className="text-white text-2xl md:text-3xl font-light sm:whitespace-nowrap"
                          style={serif}
                        >
                          {photo.alt}
                        </h3>
                        <span className="text-white/50 text-[0.68rem] sm:text-xs tracking-[0.2em] uppercase">
                          {detailsLabel}
                        </span>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 flex items-center justify-between border-t border-white/10 pt-5 sm:pt-6 gap-4">
          <span className="text-white/30 text-[0.62rem] sm:text-[0.65rem] tracking-[0.28em] sm:tracking-[0.3em] uppercase font-medium">
            {footerLeft}
          </span>
          <span className="text-white/30 text-[0.62rem] sm:text-[0.65rem] tracking-[0.28em] sm:tracking-[0.3em] uppercase font-medium text-right">
            {footerRight}
          </span>
        </div>
      </div>
    </section>
  );
}
