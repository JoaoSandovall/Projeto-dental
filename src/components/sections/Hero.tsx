import { useEffect, useState } from "react";
import { serif, globalData } from "../../data/content";

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => { 
    setIsLoaded(true); 
  }, []);

  const data = globalData.hero;

  return (
    <div id="inicio" className="relative min-h-[100svh] flex items-center bg-[var(--c-bg)] overflow-hidden">
      
      {/* Imagem Edge-to-Edge com fusão de gradiente */}
      <div className={`absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 transition-opacity duration-[2s] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src={data.imgUrl} 
          alt="Dr. Nayhan Andrade" 
          className="w-full h-full object-cover object-top grayscale-[15%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--c-bg)] via-[var(--c-bg)]/80 lg:via-[var(--c-bg)]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-bg)] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-screen pt-32 pb-20">
        
        <div className="w-full max-w-3xl">
          <div className="flex items-center gap-6 mb-10 md:mb-14 anim-fade-down delay-100">
            <span className="w-12 h-[1px] bg-[var(--c-accent)]"></span>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[var(--c-accent)] font-semibold">
              {data.eyebrow}
            </span>
          </div>

          <h1 style={serif} className="text-6xl sm:text-7xl lg:text-[7.5rem] text-white leading-[0.92] tracking-tight mb-10 anim-fade-up delay-200">
            {data.title1} <br />
            <span className="italic text-[var(--c-accent)] font-light pr-4">{data.title2}</span> <br />
            {data.title3}
          </h1>

          <div className="pl-6 border-l border-white/10 anim-fade-up delay-300 mb-14">
            <p className="text-lg lg:text-xl text-[var(--c-text-muted)] max-w-lg font-light leading-relaxed">
              {data.desc1}<strong className="font-normal text-white">{data.descBold}</strong>{data.desc2}
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)]"></div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white font-medium">
                {data.badgeTitle} <span className="text-[var(--c-text-muted)] ml-2">| {data.badgeDesc}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 anim-fade-up delay-400">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto">
              {data.btnPrimary}
            </button>
            <button onClick={() => goTo("/sobre-o-doutor")} className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--c-text-muted)] hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              {data.btnOutline}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}