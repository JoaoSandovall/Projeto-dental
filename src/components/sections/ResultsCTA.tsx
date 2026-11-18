import { useRef, type CSSProperties } from "react";
import { m } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";
import { preloadRoute } from "../../lib/routes";

function Scanner({ beforeImg, afterImg, labelBefore, labelAfter }: { beforeImg: string, afterImg: string, labelBefore: string, labelAfter: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ "--pos": "50%" } as CSSProperties}
      className="relative w-full aspect-[16/10] lg:aspect-[4/3] bg-[#0A0A0A] overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 group cursor-ew-resize shadow-2xl"
    >
      <img
        src={afterImg}
        alt="Resultado Depois"
        width={656}
        height={396}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      <img
        src={beforeImg}
        alt="Situação Antes"
        width={653}
        height={410}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[85%] sepia-[15%] contrast-110 will-change-[clip-path]"
        style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}
        draggable={false}
      />
      
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ left: "calc(var(--pos) - 1px)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center gap-0.5 transition-transform duration-300 scale-100 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
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
        step="0.1"
        defaultValue={50}
        onInput={(e) => {
          containerRef.current?.style.setProperty("--pos", `${e.currentTarget.value}%`);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0 touch-pan-y"
        aria-label="Scanner de Antes e Depois"
      />
      
      <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-black/55 backdrop-blur-md rounded-full border border-white/10 z-10 pointer-events-none flex items-center">
        <span className="text-white text-[0.54rem] sm:text-[0.65rem] font-medium tracking-[0.12em] sm:tracking-[0.24em] uppercase whitespace-nowrap leading-none">{labelBefore}</span>
      </div>
      <div className="absolute top-3.5 right-3.5 sm:top-6 sm:right-6 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[var(--c-accent)]/90 backdrop-blur-md rounded-full border border-black/10 z-10 pointer-events-none flex items-center">
        <span className="text-black text-[0.54rem] sm:text-[0.65rem] font-medium tracking-[0.12em] sm:tracking-[0.24em] uppercase whitespace-nowrap leading-none">{labelAfter}</span>
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
    <section id="resultados" className="relative bg-[#050505] scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-[var(--c-accent)] text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
              {results_cta.eyebrow}
            </span>
            
            <h2
              className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.95] text-white font-light tracking-tighter mb-8"
              style={serif}
            >
              {results_cta.title1} <br/>
              <em className="italic text-[var(--c-accent)]">{results_cta.title2}</em>
            </h2>
            
            <p className="text-white/60 text-base font-light leading-[1.75] mb-10 max-w-md">
              {results_cta.p1} <strong className="text-white font-medium">{results_cta.p_bold1}</strong> {results_cta.p2} <strong className="text-white font-medium">{results_cta.p_bold2}</strong> {results_cta.p3}
            </p>

            <div className="w-full p-6 md:p-8 bg-[#0F0F0F] border border-white/5 rounded-2xl mb-12 max-w-md">
              <span className="text-white/30 text-[0.65rem] font-medium tracking-[0.25em] uppercase block mb-3">
                Caso em Destaque
              </span>
              <h3 className="text-[var(--c-accent)] text-xl font-light tracking-tight mb-2" style={serif}>
                {highlightCase.category}
              </h3>
              <p className="text-white/70 text-sm font-light leading-[1.75]">
                {highlightCase.procedure}
              </p>
            </div>

            <div className="hidden lg:block w-full sm:w-auto" onMouseEnter={() => preloadRoute("/resultados")}>
              <Button onClick={goToResultados} colorTheme="dark">
                {results_cta.btn}
              </Button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="lg:hidden mt-16 flex justify-center w-full" onTouchStart={() => preloadRoute("/resultados")}>
          <Button onClick={goToResultados} colorTheme="dark" className="w-full max-w-sm">
            {results_cta.btn}
          </Button>
        </div>

      </div>
    </section>
  );
}
