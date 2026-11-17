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
    <section id="infraestrutura" className="py-24 md:py-32 bg-[var(--c-dark-base)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 
              className="text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-white font-light tracking-tight mb-8"
              style={serif}
            >
              {title1} <br/>
              <em className="italic text-[var(--c-accent)]">{title2}</em>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
              "{quote}"
            </p>
          </div>
          
          <div className="flex flex-col gap-4 lg:text-right max-w-xs">
            <span className="text-[var(--c-accent)] text-xs tracking-[0.3em] uppercase font-bold">
              {eyebrow}
            </span>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              {supporting}
            </p>
            <div className="h-[1px] w-full bg-white/10 mt-2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-[100vh] md:h-[75vh] gap-2 md:gap-4">
          {photos.map((photo, index) => {
            const isActive = active === index;
            return (
              <m.div
                key={index}
                layout
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                initial={false}
                animate={{ 
                  flex: isActive ? 5 : 1, 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25, 
                  mass: 0.8 
                }}
                className="relative overflow-hidden rounded-2xl md:rounded-[2rem] cursor-pointer group bg-[var(--c-dark-base)] border border-white/5"
              >
                <m.img
                  src={photo.img}
                  srcSet={srcSetFor(photo.img)}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  animate={{
                    filter: isActive ? "grayscale(0%)" : "grayscale(80%)",
                    scale: isActive ? 1 : 1.1
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                  
                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <span 
                      className={`text-xs font-mono tracking-widest transition-colors duration-500 ${
                        isActive ? "text-[var(--c-accent)]" : "text-white/40"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <m.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col gap-2"
                      >
                        <h3 
                          className="text-white text-2xl md:text-3xl font-light whitespace-nowrap"
                          style={serif}
                        >
                          {photo.alt}
                        </h3>
                        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
                          {detailsLabel}
                        </span>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </m.div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-white/30 text-[0.65rem] tracking-[0.3em] uppercase font-bold">
            {footerLeft}
          </span>
          <span className="text-white/30 text-[0.65rem] tracking-[0.3em] uppercase font-bold">
            {footerRight}
          </span>
        </div>
      </div>
    </section>
  );
}