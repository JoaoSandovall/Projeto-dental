import type { PointerEvent as ReactPointerEvent } from "react";
import { m, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";
import { srcSetFor } from "../../lib/img";
import { Button } from "../ui/Button";

function StatCounter({ target, suffix, label, thousands, delay }: any) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col border-l border-[rgba(var(--c-primary-rgb),0.15)] pl-3 sm:pl-5 md:pl-6"
    >
      <div className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-[var(--c-text-main)] tracking-tight mb-0.5 sm:mb-1">
        {display}<span className="text-[var(--c-accent)]">{suffix}</span>
      </div>
      <div className="text-[0.58rem] sm:text-[0.65rem] tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[var(--c-text-muted)] font-medium leading-snug">
        {label}
      </div>
    </m.div>
  );
}

// Constantes fora do componente: não são recriadas a cada render
const springConfig = { damping: 45, stiffness: 50, mass: 0.5 };

const maskVariant: Variants = {
  hidden: { y: "115%" },
  visible: { 
    y: "0%", 
    transition: { 
      duration: 1.1, 
      ease: [0.22, 1, 0.36, 1] as any 
    } 
  }
};

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const { hero, clinica } = globalData;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const imgX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  // Só calcula parallax para mouse (ignora toques em celular para poupar CPU/GPU)
  const handlePointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget;
    const w = rect.clientWidth || 1;
    const h = rect.clientHeight || 1;
    mouseX.set(e.clientX / w - 0.5);
    mouseY.set(e.clientY / h - 0.5);
  };

  return (
    <section 
      id="inicio" 
      onPointerMove={handlePointerMove}
      className="relative min-h-[100svh] bg-[var(--c-bg)] pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-20 flex flex-col z-10 h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end mb-8 sm:mb-10 md:mb-14">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-1 sm:gap-2">
            <h1 
              style={serif} 
              className="text-[clamp(2.45rem,8.5vw,7.5rem)] md:text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.95] font-normal text-[var(--c-text-main)] tracking-tight"
            >
              <div className="overflow-hidden pb-1.5 sm:pb-2" style={{ willChange: "transform" }}>
                <m.span variants={maskVariant} initial="hidden" animate="visible" className="block origin-top-left">
                  {hero.title1}
                </m.span>
              </div>
              
              <div className="overflow-hidden pb-1.5 sm:pb-2" style={{ willChange: "transform" }}>
                <m.span variants={maskVariant} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-[var(--c-accent)] italic block origin-top-left">
                  {hero.title2}
                </m.span>
              </div>
              
              <div className="overflow-hidden pb-1.5 sm:pb-2" style={{ willChange: "transform" }}>
                <m.span variants={maskVariant} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="block origin-top-left">
                  {hero.title3}
                </m.span>
              </div>
            </h1>
          </div>

          <m.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end h-full pb-1 sm:pb-2"
          >
            <p className="text-[var(--c-text-muted)] text-[0.95rem] md:text-lg font-light leading-relaxed mb-6 md:mb-8">
              {hero.desc1} <strong className="font-medium text-[var(--c-text-main)]">{hero.descBold}</strong>{hero.desc2}
            </p>
            
            <div className="flex items-center w-full sm:w-auto">
              <Button onClick={() => goTo("contato")} className="w-full sm:w-auto">
                {hero.btnPrimary}
              </Button>
            </div>
          </m.div>
        </div>

        <div className="relative w-full h-[38svh] sm:h-[46svh] md:h-[55vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[var(--c-dark-deep)] shadow-[0_30px_80px_rgba(0,0,0,0.08)] mb-10 md:mb-16">
          <m.img 
            style={{ x: imgX, y: imgY, scale: 1.05 }}
            src={hero.imgUrl}
            srcSet={srcSetFor(hero.imgUrl)}
            sizes="(min-width: 640px) 90vw, 100vw"
            width={900}
            height={1200}
            alt={clinica.nome} 
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-[filter] duration-1000 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 md:from-black/50 md:via-transparent to-transparent pointer-events-none" />
          
          <m.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-5 sm:left-6 md:left-8 right-5 sm:right-6 md:right-8 flex flex-col md:flex-row md:items-center justify-between text-white pointer-events-none gap-1.5 sm:gap-2"
          >
            <span className="text-[0.62rem] sm:text-[0.65rem] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-white/85">
              {clinica.subtitulo}
            </span>
            <span className="text-[0.62rem] sm:text-[0.65rem] md:text-xs tracking-[0.18em] sm:tracking-[0.2em] font-mono text-[var(--c-accent)]">
              {hero.badgeTitle} — {hero.badgeDesc}
            </span>
          </m.div>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-3 sm:gap-8 pt-6 md:pt-8 border-t border-[rgba(var(--c-primary-rgb),0.1)]">
          {hero.stats.map((stat: any, index: number) => (
            <StatCounter 
              key={index}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              thousands={stat.thousands}
              delay={0.7 + index * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
