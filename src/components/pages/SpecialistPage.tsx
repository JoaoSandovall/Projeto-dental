import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { srcSetFor } from "../../lib/img";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export function SpecialistPage() {
  const { clinica, team, specialties_page } = globalData;
  const dr = team.members[0];
  const { hero, timeline } = specialties_page;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(heroScroll, [0, 1], [0, 220]);
  const imgY = useTransform(heroScroll, [0, 1], [0, -45]);

  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col pt-[72px] sm:pt-[76px] xl:pt-[92px]">
      <main className="flex-grow w-full relative">
        <section 
          ref={heroRef} 
          className="relative w-full h-[62svh] sm:h-[76svh] md:h-[88vh] min-h-[440px] bg-[var(--c-dark-base)] overflow-hidden flex items-end justify-center pt-6 md:pt-10"
        >
          <m.div 
            style={{ y: textY }} 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ duration: 0.85, ease: easeLuxury }}
            className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-6 md:pt-8 z-0 select-none pointer-events-none will-change-transform"
          >
            <img
              src={clinica.logoUrl}
              alt=""
              aria-hidden="true"
              className="w-[75vw] sm:w-[60vw] md:w-[48vw] max-w-[660px] h-auto max-h-[82%] object-contain"
            />
          </m.div>

          <m.div 
            style={{ y: imgY }} 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: easeLuxury }}
            className="relative z-10 w-[95%] sm:w-[80%] md:w-[68%] lg:w-[58%] max-w-[780px] h-[92%] md:h-[94%] flex items-end justify-center will-change-transform"
          >
            <img
              src={hero.imgUrl}
              srcSet={srcSetFor(hero.imgUrl)}
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, (min-width: 640px) 70vw, 92vw"
              width={660}
              height={740}
              alt={dr.name}
              fetchPriority="high"
              decoding="async"
              style={{ transform: "translateZ(0)" }}
              className="w-full h-full object-contain object-bottom grayscale-[15%] drop-shadow-[0_20px_36px_rgba(0,0,0,0.55)]"
            />
          </m.div>

          {/* Gradiente inferior para garantir contraste das informações sobre o jaleco branco */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[var(--c-dark-base)] via-[var(--c-dark-base)]/65 to-transparent z-10 pointer-events-none" />

          <m.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeLuxury }}
            className="absolute bottom-6 sm:bottom-8 left-6 md:left-12 right-6 md:right-12 flex items-end justify-between gap-4 z-20 pointer-events-none"
          >
            <div className="text-white/95">
              <p className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.28em] sm:tracking-[0.3em] font-medium text-[var(--c-accent)] mb-1.5 sm:mb-2">
                {hero.badge}
              </p>
              <p className="text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.22em]">
                {dr.name}
              </p>
            </div>
            <div className="text-white/55 text-[0.62rem] sm:text-[0.65rem] font-mono tracking-widest uppercase text-right shrink-0">
              {dr.cro}
            </div>
          </m.div>
        </section>

        <section className="relative w-full bg-[var(--c-bg)] py-20 sm:py-28 md:py-48 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[rgba(var(--c-primary-rgb),0.1)] md:-translate-x-1/2" />
            
            <div className="flex flex-col gap-20 sm:gap-28 md:gap-48 relative z-10">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 44 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                    transition={{ duration: 0.85, ease: easeLuxury }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12 md:gap-24 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"} pl-8 sm:pl-12 md:pl-0`}>
                      <span 
                        className="text-[clamp(3.5rem,12vw,9rem)] md:text-[clamp(4.5rem,8vw,9rem)] leading-none text-[var(--c-primary)] font-light tracking-tighter mb-3 sm:mb-4 select-none"
                        style={serif}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-[0.8rem] sm:text-[0.85rem] md:text-[0.95rem] text-[var(--c-text-main)] font-medium tracking-[0.25em] uppercase mb-3 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[var(--c-text-muted)] text-[0.95rem] md:text-base font-light leading-[1.75] max-w-sm">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-8 sm:pl-12 md:pl-0">
                      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4.5] overflow-hidden rounded-[1.75rem] md:rounded-[2rem] bg-[var(--c-light-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                        <m.img
                          initial={{ scale: 1.18 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                          transition={{ duration: 1.2, ease: easeLuxury }}
                          src={item.img}
                          srcSet={srcSetFor(item.img)}
                          sizes="(min-width: 640px) 320px, 280px"
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                        />
                        <div className="absolute inset-0 border border-[rgba(var(--c-primary-rgb),0.1)] rounded-[1.75rem] md:rounded-[2rem] pointer-events-none" />
                      </div>
                    </div>

                    {/* Ponto da linha do tempo: cravado exatamente sobre a linha vertical tanto no mobile quanto no desktop */}
                    <div className="absolute left-0 md:left-1/2 top-5 md:top-auto w-3.5 h-3.5 md:w-4 md:h-4 bg-[var(--c-bg)] border-[2.5px] border-[var(--c-primary)] rounded-full -translate-x-1/2" />
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SpecialistPage;
