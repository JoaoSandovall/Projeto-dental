import { useRef, MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { useCountUp } from "../../hooks/useCountUp";
import { Button } from "../ui/Button";

function StatCounter({ target, suffix, label, thousands, delay }: any) {
  const { value, ref } = useCountUp(target);
  const display = thousands ? value.toLocaleString("pt-BR") : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col border-l border-[rgba(var(--c-primary-rgb),0.15)] pl-5 md:pl-6"
    >
      <div className="font-sans font-light text-3xl md:text-4xl text-[var(--c-text-main)] tracking-tight mb-1">
        {display}<span className="text-[var(--c-accent)]">{suffix}</span>
      </div>
      <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--c-text-muted)] font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const { hero, clinica } = globalData;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 45, stiffness: 50, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const imgX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: ReactMouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

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

  const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      // PADDING CORRIGIDO AQUI: pb-24 md:pb-32
      className="relative min-h-[100svh] bg-[var(--c-bg)] pt-32 md:pt-36 pb-24 md:pb-32 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-20 flex flex-col z-10 h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-2">
            <h1 
              style={serif} 
              className="text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.95] font-normal text-[var(--c-text-main)] tracking-tight"
            >
              <div className="overflow-hidden pb-2" style={{ willChange: "transform" }}>
                <motion.span variants={maskVariant} initial="hidden" animate="visible" className="block origin-top-left">
                  {hero.title1}
                </motion.span>
              </div>
              
              <div className="overflow-hidden pb-2" style={{ willChange: "transform" }}>
                <motion.span variants={maskVariant} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-[var(--c-accent)] italic block origin-top-left">
                  {hero.title2}
                </motion.span>
              </div>
              
              <div className="overflow-hidden pb-2" style={{ willChange: "transform" }}>
                <motion.span variants={maskVariant} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="block origin-top-left">
                  {hero.title3}
                </motion.span>
              </div>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end h-full pb-2"
          >
            <p className="text-[var(--c-text-muted)] text-[0.95rem] md:text-lg font-light leading-relaxed mb-8">
              {hero.desc1} <strong className="font-medium text-[var(--c-text-main)]">{hero.descBold}</strong>{hero.desc2}
            </p>
            
            <div className="flex items-center">
              <Button onClick={() => goTo("contato")} hoverText="Falar com Especialista">
                {hero.btnPrimary}
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="relative w-full h-[40vh] md:h-[55vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[var(--c-dark-deep)] shadow-[0_30px_80px_rgba(0,0,0,0.08)] mb-12 md:mb-16">
          <motion.img 
            style={{ x: imgX, y: imgY, scale: 1.05 }}
            src={hero.imgUrl} 
            alt={clinica.nome} 
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-[filter] duration-1000 will-change-transform"
          />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: noiseBg }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex flex-col md:flex-row md:items-center justify-between text-white pointer-events-none gap-2"
          >
            <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.3em] font-medium text-white/80">
              {clinica.subtitulo}
            </span>
            <span className="text-[0.65rem] md:text-xs tracking-[0.2em] font-mono text-[var(--c-accent)]">
              {hero.badgeTitle} — {hero.badgeDesc}
            </span>
          </motion.div>
        </div>

        <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[rgba(var(--c-primary-rgb),0.1)]">
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