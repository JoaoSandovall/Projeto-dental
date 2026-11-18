import { useState } from "react";
import { m } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";
import { preloadRoute } from "../../App";

function Scanner({ beforeImg, afterImg, labelBefore, labelAfter }: { beforeImg: string, afterImg: string, labelBefore: string, labelAfter: string }) {
  const [position, setPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#0A0A0A] overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 group cursor-ew-resize shadow-2xl select-none" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={afterImg} 
        alt="Resultado Depois" 
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable={false} 
      />
      
      <img 
        src={beforeImg} 
        alt="Situação Antes" 
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[85%] sepia-[15%] contrast-110" 
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }} 
        draggable={false} 
      />
      
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
        style={{ left: `calc(${position}% - 1px)` }}
      >
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center gap-0.5 transition-transform duration-300 ${isHovered ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'scale-100'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
      
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={position} 
        onChange={(e) => setPosition(Number(e.target.value))} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0 touch-pan-y" 
        aria-label="Scanner de Antes e Depois" 
      />
      
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 sm:px-4 py-1 sm:py-1.5 bg-black/55 backdrop-blur-md rounded-full border border-white/10 z-10 pointer-events-none">
        <span className="text-white text-[0.58rem] sm:text-[0.65rem] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">{labelBefore}</span>
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-1 sm:py-1.5 bg-[var(--c-accent)]/90 backdrop-blur-md rounded-full border border-black/10 z-10 pointer-events-none">
        <span className="text-black text-[0.58rem] sm:text-[0.65rem] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">{labelAfter}</span>
      </div>
    </div>
  );
}

export function ResultsCTA() {
  const { results_cta, results_page } = globalData;
  const highlightCase = results_page.cases[0];

  const goToResultados = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
  };

  return (
    <section id="resultados" className="relative bg-[#050505] py-16 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">
          
          <m.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-[var(--c-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-5 md:mb-6 block">
              {results_cta.eyebrow}
            </span>
            
            <h2 
              className="text-[clamp(2.5rem,7.5vw,4.5rem)] md:text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.95] text-white font-light tracking-tight mb-6 md:mb-8"
              style={serif}
            >
              {results_cta.title1} <br/>
              <em className="italic text-[var(--c-accent)]">{results_cta.title2}</em>
            </h2>
            
            <p className="text-white/60 text-[0.95rem] sm:text-base font-light leading-relaxed mb-8 md:mb-10 max-w-md">
              {results_cta.p1} <strong className="text-white font-medium">{results_cta.p_bold1}</strong> {results_cta.p2} <strong className="text-white font-medium">{results_cta.p_bold2}</strong> {results_cta.p3}
            </p>

            <div className="w-full p-5 sm:p-6 md:p-8 bg-[#0F0F0F] border border-white/5 rounded-2xl mb-4 lg:mb-12">
              <span className="text-white/30 text-[0.65rem] font-bold tracking-[0.2em] uppercase block mb-2.5 sm:mb-3">
                Caso em Destaque
              </span>
              <h3 className="text-[var(--c-accent)] text-xl mb-2" style={serif}>
                {highlightCase.category}
              </h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {highlightCase.procedure}
              </p>
            </div>

            {/* NOVO BOTÃO: Desktop com colorTheme="dark" */}
            <div className="hidden lg:block w-full sm:w-auto" onMouseEnter={() => preloadRoute("/resultados")}>
              <Button onClick={goToResultados} colorTheme="dark">
                {results_cta.btn}
              </Button>
            </div>
          </m.div>

          <m.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 w-full flex justify-end"
          >
            <Scanner 
              beforeImg={highlightCase.beforeImg} 
              afterImg={highlightCase.afterImg} 
              labelBefore={results_cta.labelBefore}
              labelAfter={results_cta.labelAfter}
            />
          </m.div>

        </div>

        {/* NOVO BOTÃO: Mobile com colorTheme="dark" */}
        <div className="lg:hidden mt-10 sm:mt-14 flex justify-center w-full" onTouchStart={() => preloadRoute("/resultados")}>
          <Button onClick={goToResultados} colorTheme="dark" className="w-full sm:max-w-sm">
            {results_cta.btn}
          </Button>
        </div>

      </div>
    </section>
  );
}
