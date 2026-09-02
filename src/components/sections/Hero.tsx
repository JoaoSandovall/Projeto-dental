import { useEffect, useState } from "react";
import { serif, globalData } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";
import { Shield, Users, Heart } from "lucide-react";

// Novo Card Flutuante Acolhedor (Glassmorphism)
function FloatingStatCard({ target, suffix, label, icon: Icon, delay, className, thousands }: any) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;
  return (
    <div ref={ref} className={`absolute z-30 bg-white/90 backdrop-blur-xl border border-white/50 p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(44,61,48,0.08)] flex items-center gap-4 anim-fade-in ${className}`} style={{ animationDelay: delay }}>
      <div className="w-12 h-12 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] flex items-center justify-center shrink-0">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col pr-2">
        <div className="font-bold text-xl md:text-2xl text-[var(--c-text-main)] leading-none mb-1 font-sans">
          {display}<span className="text-[var(--c-accent)]">{suffix}</span>
        </div>
        <div className="text-[0.65rem] text-[var(--c-text-muted)] uppercase tracking-wider font-semibold">{label}</div>
      </div>
    </div>
  );
}

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--c-bg)] pt-20 pb-16">
      
      <div className="w-full max-w-[1280px] mx-auto relative px-6 md:px-10 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        
        {/* COLUNA ESQUERDA: Textos de Acolhimento */}
        <div className="flex flex-col justify-center w-full max-w-xl mx-auto lg:mx-0 relative z-20">
          <span className="text-[var(--c-accent)] font-semibold tracking-widest uppercase mb-4 block anim-fade-down delay-100 text-sm md:text-base">
            {globalData.hero.eyebrow}
          </span>
          <h1 style={serif} className="text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.05] font-normal text-[var(--c-text-main)] mb-6 anim-fade-down delay-200 tracking-tight">
            <span className="block mb-1">{globalData.hero.title1}</span>
            <span className="text-[var(--c-accent)] block mb-1 italic">{globalData.hero.title2}</span>
            <span className="block">{globalData.hero.title3}</span>
          </h1>
          <p className="anim-fade-up delay-[600ms]" style={{ color: "var(--c-text-muted)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300 }}>
            {globalData.hero.desc1} <strong className="font-medium text-[var(--c-text-main)]">{globalData.hero.descBold}</strong>{globalData.hero.desc2}
          </p>
          <div className="anim-fade-up delay-[700ms] flex flex-col sm:flex-row gap-4 mb-8">
            <button onClick={() => goTo("contato")} className="btn-primary w-full sm:w-auto text-center rounded-full px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {globalData.hero.btnPrimary}
            </button>
          </div>
        </div>

        {/* COLUNA DIREITA: Formas Orgânicas + Imagem Acolhedora + Cards */}
        <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center mt-10 lg:mt-0">
          
          {/* Forma Orgânica Verde */}
          <svg viewBox="0 0 200 200" className="absolute w-[110%] h-[110%] md:w-[130%] md:h-[130%] text-[var(--c-primary)] opacity-[0.04] z-0 animate-[floatY_8s_ease-in-out_infinite]">
            <path fill="currentColor" transform="translate(100 100)" d="M48,-64.5C61.4,-54.1,70.9,-38.4,75.4,-21.2C79.8,-4,79.2,14.7,71.2,30.3C63.2,45.9,47.8,58.4,30.8,66.6C13.8,74.8,-4.8,78.7,-22.1,74.5C-39.4,70.3,-55.4,58.1,-65.4,42.5C-75.4,26.9,-79.4,7.9,-75.6,-9.7C-71.8,-27.3,-60.2,-43.5,-45.8,-54C-31.4,-64.5,-15.7,-69.3,1.1,-70.8C17.9,-72.3,35.8,-70.5,48,-64.5Z" />
          </svg>
          
          {/* Forma Orgânica Terracota */}
          <svg viewBox="0 0 200 200" className="absolute w-[95%] h-[95%] md:w-[110%] md:h-[110%] text-[var(--c-accent)] opacity-[0.06] z-10 animate-[floatY_6s_ease-in-out_infinite_reverse]">
            <path fill="currentColor" transform="translate(100 100)" d="M41.7,-59.6C54.5,-51.1,65.6,-39.8,71.5,-25.9C77.4,-12,78.1,4.4,73,18.7C67.9,33,57,45.1,43.8,53.4C30.6,61.7,15.3,66.2,-0.2,66.5C-15.7,66.8,-31.4,62.8,-44.6,54.4C-57.8,46,-67.7,33.2,-72.3,18.5C-76.9,3.8,-76.2,-12.6,-69.7,-26.1C-63.2,-39.6,-50.9,-50.2,-37.2,-58.5C-23.5,-66.8,-11.8,-72.8,1.4,-74.7C14.6,-76.6,29.1,-74.4,41.7,-59.6Z" />
          </svg>

          {/* Imagem Arredondada Suave */}
          <img 
            src={globalData.hero.imgUrl} 
            alt="Atendimento Psicológico" 
            className={`relative z-20 w-[85%] md:w-[80%] h-[420px] md:h-[540px] object-cover object-center rounded-[3rem] shadow-2xl transition-transform duration-[2s] ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} 
          />

          {/* Cartões de Autoridade Posicionados */}
          <FloatingStatCard target={globalData.hero.stats[0].target} suffix={globalData.hero.stats[0].suffix} label={globalData.hero.stats[0].label} thousands={globalData.hero.stats[0].thousands} icon={Shield} className="top-[5%] -left-[2%] md:-left-[10%] stat-float delay-100" delay="600ms" />
          <FloatingStatCard target={globalData.hero.stats[2].target} suffix={globalData.hero.stats[2].suffix} label={globalData.hero.stats[2].label} thousands={globalData.hero.stats[2].thousands} icon={Heart} className="top-[45%] -right-[5%] md:-right-[12%] stat-float delay-300" delay="800ms" />
          <FloatingStatCard target={globalData.hero.stats[1].target} suffix={globalData.hero.stats[1].suffix} label={globalData.hero.stats[1].label} thousands={globalData.hero.stats[1].thousands} icon={Users} className="bottom-[5%] left-[2%] md:-left-[5%] stat-float delay-500" delay="1000ms" />
        </div>
      </div>
    </div>
  );
}