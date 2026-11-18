import { useState } from "react";
import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";

function BeforeAfterSlider({ beforeImg, afterImg, labelBefore, labelAfter }: { beforeImg: string, afterImg: string, labelBefore: string, labelAfter: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-[260px] sm:h-[360px] md:h-[450px] bg-[var(--c-bg)] overflow-hidden select-none rounded-2xl group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={afterImg} alt="Resultado Depois" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <img src={beforeImg} alt="Situação Antes" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }} draggable={false} />
      
      <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/80 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ left: `calc(${sliderPosition}% - 0.75px)` }}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-white/90 scale-110 shadow-xl' : 'bg-white/50 backdrop-blur-sm shadow-md border border-white/40'}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l-6-6 6-6" /><path d="M15 18l6-6-6-6" /></svg>
        </div>
      </div>
      
      <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 m-0 p-0 touch-pan-y" aria-label="Controle deslizante de antes e depois" />
      
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-black/45 backdrop-blur-md border border-white/20 text-[#FFFFFF] text-[0.58rem] sm:text-[0.6rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full pointer-events-none">{labelBefore}</div>
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[rgba(var(--c-primary-rgb),0.75)] backdrop-blur-md border border-white/20 text-[#FFFFFF] text-[0.58rem] sm:text-[0.6rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full pointer-events-none">{labelAfter}</div>
    </div>
  );
}

export function ResultsPage({ goTo }: { goTo: (id: string) => void }) {
  const { results_page } = globalData;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col pt-[80px] md:pt-[100px]">
      <main className="flex-grow w-full relative">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 w-full pt-4 sm:pt-8 md:pt-[4rem]">
          <div className="bg-[var(--c-primary)] w-full rounded-[2rem] md:rounded-[3rem] pt-12 pb-28 sm:pt-16 sm:pb-32 md:pt-24 md:pb-44 px-5 sm:px-6 md:px-10 text-center shadow-2xl relative z-10 flex flex-col items-center">
            <div className="anim-fade-up">
              <span className="inline-block font-['DM_Sans',sans-serif] text-[0.65rem] sm:text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[var(--c-accent)] pb-1 border-b border-[rgba(var(--c-accent-rgb),0.4)] mb-5 sm:mb-6">
                {results_page.eyebrow}
              </span>
              <h1 style={{ ...serif }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#FFFFFF] font-normal tracking-tight leading-tight max-w-4xl mx-auto">
                {results_page.title1} <em className="italic text-[var(--c-accent)]">{results_page.title2}</em>
              </h1>
              <p className="text-[#FFFFFF]/80 max-w-2xl mx-auto mt-5 sm:mt-6 font-light text-[0.95rem] sm:text-[1.05rem] leading-relaxed">
                {results_page.p1} <strong className="font-medium text-white">{results_page.p_bold1}</strong>{results_page.p2} <strong className="font-medium text-white">{results_page.p_bold2}</strong> {results_page.p3}
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-10 -mt-16 sm:-mt-20 md:-mt-28 relative z-20 pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {results_page.cases.map((item, index) => (
              <div key={index} className="flex flex-col anim-fade-up bg-white rounded-[2rem] p-3 shadow-[0_15px_50px_rgba(var(--c-primary-rgb),0.08)] border border-[rgba(var(--c-primary-rgb),0.05)]" style={{ animationDelay: `${(index % 2) * 200 + 100}ms` }}>
                <BeforeAfterSlider 
                  beforeImg={item.beforeImg} 
                  afterImg={item.afterImg} 
                  labelBefore={results_page.labelBefore}
                  labelAfter={results_page.labelAfter}
                />
                <div className="pt-6 sm:pt-8 px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <h3 style={{ ...serif }} className="text-2xl md:text-[1.75rem] text-[var(--c-text-main)]">{item.category}</h3>
                    <span className="text-[var(--c-accent)] text-[0.65rem] uppercase tracking-[0.15em] border border-[rgba(var(--c-accent-rgb),0.4)] px-4 py-1.5 sm:py-2 rounded-full font-medium w-max">
                      {item.duration}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 flex-grow border-l-2 border-[rgba(var(--c-primary-rgb),0.15)] pl-4 sm:pl-6">
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--c-text-muted)] font-semibold mb-2 sm:mb-3">{results_page.labelChallenge}</h4>
                      <p className="text-[var(--c-text-main)] font-light text-[0.95rem] leading-relaxed">"{item.complaint}"</p>
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--c-accent)] font-semibold mb-2 sm:mb-3">{results_page.labelSolution}</h4>
                      <p className="text-[var(--c-text-main)] font-light text-[0.95rem] leading-relaxed">{item.procedure}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-5 sm:pt-6 border-t border-[rgba(var(--c-primary-rgb),0.1)] flex justify-center w-full">
                    <Button onClick={() => goTo("contato")} variant="skew" hoverText="Iniciar Tratamento" className="w-full mt-2 sm:mt-4 h-[54px] !rounded-full">
                      {results_page.btnSaberMais}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sm:mt-28 text-center anim-fade-in delay-500">
            <a href="/" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("navigate", { detail: "/" })); }} className="group inline-flex items-center gap-3 text-[var(--c-text-muted)] hover:text-[var(--c-text-main)] font-medium transition-colors py-2">
              <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span className="border-b border-transparent group-hover:border-[var(--c-text-main)] pb-0.5 transition-colors duration-300">{results_page.btnVoltar}</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
