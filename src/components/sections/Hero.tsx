import { useEffect, useState } from "react";
import { serif, globalData } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";
import { ArrowRight } from "lucide-react";

// Componente de Estatística: Aciona a contagem sincronizada com o surgimento da seção
function MinimalStat({ target, suffix, label, delay, thousands, startDelay }: any) {
  const { value, ref } = useCountUp(target, 2500, startDelay);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center anim-fade-up" style={{ animationDelay: delay }}>
      <div className="font-sans font-bold text-[2rem] md:text-[2.5rem] text-[var(--c-primary)] leading-none mb-2 tracking-tighter drop-shadow-sm">
        {display}<span className="text-[var(--c-accent)]">{suffix}</span>
      </div>
      <div className="text-[0.6rem] md:text-[0.7rem] text-[var(--c-text-muted)] uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  );
}

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => { 
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="inicio" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[var(--c-bg)] pt-28 md:pt-32 pb-8 md:pb-12 px-4 md:px-6">

      {/* AURAS VIVAS NO FUNDO */}
      <div className="bg-aura w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[var(--c-primary)] top-[-10%] left-[-10%]"></div>
      <div className="bg-aura bg-aura-reverse w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-[var(--c-accent)] bottom-[20%] right-[-5%] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-white/40 to-transparent z-0 pointer-events-none"></div>

      {/* PARTE CENTRAL: TIPOGRAFIA DE ALTO IMPACTO */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto relative z-20 mt-4 md:mt-0">

        {/* Logo + Localização */}
        <div className="anim-fade-down delay-[800ms] flex items-center justify-center gap-3 md:gap-4 bg-white/70 backdrop-blur-md border border-[rgba(var(--c-primary-rgb),0.08)] px-5 md:px-6 py-2 rounded-full mb-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
          <img
            src={globalData.clinica.logoUrl}
            alt="Logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain mix-blend-multiply"
          />
          <span className="w-[1px] h-4 bg-[var(--c-primary)] opacity-15"></span>
          <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[var(--c-accent)]">
            {globalData.hero.eyebrow}
          </span>
        </div>

        {/* NOME DA CLÍNICA ENVOLVIDO PELO "Z" GEOMÉTRICO */}
        <div className="relative inline-block mb-8 md:mb-10 text-center z-10">
          
          <h1 className="anim-blur-reveal delay-[1200ms] uppercase text-[clamp(3.5rem,13vw,10.5rem)] leading-[0.85] text-[var(--c-primary)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.04em", animationDelay: "1.2s" }}>
            {globalData.clinica.nome}
          </h1>

          {/* AS 3 LINHAS ARQUITETÔNICAS */}
          <div className="absolute -bottom-4 md:-bottom-5 left-0 w-full h-[1.5px] pointer-events-none">
            
            {/* ETAPA 1: Linha Esquerda */}
            <div className="absolute right-full top-0 w-[100vw] h-[1.5px] origin-bottom-right rotate-[30deg] md:rotate-[35deg]">
              <div 
                className="w-full h-full bg-[var(--c-primary)] opacity-35 origin-left"
                style={{ 
                  transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 1.2s linear 0s' 
                }}
              ></div>
            </div>

            {/* ETAPA 2: Linha Central */}
            <div 
              className="absolute left-0 top-0 w-full h-[1.5px] bg-[var(--c-primary)] opacity-35 origin-left"
              style={{ 
                transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.5s linear 1.2s' 
              }}
            ></div>

            {/* ETAPA 3: Linha Direita */}
            <div className="absolute left-full top-0 w-[100vw] h-[1.5px] origin-top-left rotate-[30deg] md:rotate-[35deg]">
              <div 
                className="w-full h-full bg-[var(--c-primary)] opacity-35 origin-left"
                style={{ 
                  transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 1.2s ease-out 1.7s' 
                }}
              ></div>
            </div>

          </div>
        </div>

        {/* Bordão Pequeno */}
        <h2 style={serif} className="anim-fade-up delay-[1800ms] text-[clamp(1.4rem,3vw,2.2rem)] text-[var(--c-text-main)] leading-tight mb-6 max-w-3xl mx-auto px-2 text-center">
          {globalData.hero.title1} <span className="italic text-[var(--c-accent)]">{globalData.hero.title2}</span> {globalData.hero.title3}
        </h2>

        {/* Descrição */}
        <p className="anim-fade-up delay-[2000ms] text-[0.95rem] md:text-[1.05rem] text-[var(--c-text-muted)] max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-4 text-center">
          {globalData.hero.desc1} <strong className="font-semibold text-[var(--c-text-main)]">{globalData.hero.descBold}</strong> {globalData.hero.desc2}
        </p>

        {/* Botão Editorial Magnético */}
        <div className="anim-fade-up delay-[2200ms] flex justify-center mb-8">
          <button
            onClick={() => goTo("contato")}
            className="group relative flex items-center gap-3 text-[var(--c-primary)] font-bold uppercase tracking-[0.15em] text-[0.75rem] md:text-[0.85rem] pb-2 transition-colors duration-300 cursor-pointer hover:text-[var(--c-accent)]"
          >
            {globalData.hero.btnPrimary}
            <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-500 ease-out" />
            
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(var(--c-primary-rgb),0.2)]"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--c-accent)] transition-all duration-500 ease-out group-hover:w-full"></span>
          </button>
        </div>
      </div>

      {/* PARTE INFERIOR: BARRA DE MÉTRICAS COM CONTADOR ANIMADO */}
      <div className="w-full max-w-[900px] mx-auto relative z-20 mt-8 md:mt-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(var(--c-primary-rgb),0.1)] to-transparent mb-6 md:mb-10"></div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-8 px-2">
          {/* Esquerda: Surge imediatamente */}
          <MinimalStat 
            target={globalData.hero.stats[0].target} 
            suffix={globalData.hero.stats[0].suffix} 
            label={globalData.hero.stats[0].label} 
            thousands={globalData.hero.stats[0].thousands} 
            delay="0ms"
            startDelay={100} 
          />
          {/* Meio: Surge após 0.5s */}
          <MinimalStat 
            target={globalData.hero.stats[1].target} 
            suffix={globalData.hero.stats[1].suffix} 
            label={globalData.hero.stats[1].label} 
            thousands={globalData.hero.stats[1].thousands} 
            delay="500ms"
            startDelay={600} 
          />
          {/* Direita: Surge após 1.0s */}
          <MinimalStat 
            target={globalData.hero.stats[2].target} 
            suffix={globalData.hero.stats[2].suffix} 
            label={globalData.hero.stats[2].label} 
            thousands={globalData.hero.stats[2].thousands} 
            delay="1000ms"
            startDelay={1100} 
          />
        </div>
      </div>

    </div>
  );
}