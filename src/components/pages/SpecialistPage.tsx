import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { srcSetFor } from "../../lib/img";

export function SpecialistPage({ goTo }: { goTo: (id: string) => void }) {
  const { team, specialties_page } = globalData;
  const dr = team.members[0];
  const { hero, timeline } = specialties_page;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(heroScroll, [0, 1], [0, 250]);
  const imgY = useTransform(heroScroll, [0, 1], [0, -50]);
  const imgScale = useTransform(heroScroll, [0, 1], [1, 1.05]);

  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col pt-[76px] md:pt-[92px]">
      <main className="flex-grow w-full relative">
        <section 
          ref={heroRef} 
          className="relative w-full h-[85vh] md:h-[100vh] bg-[var(--c-dark-base)] overflow-hidden flex items-end justify-center"
        >
          <m.div 
            style={{ y: textY }} 
            className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-30 select-none pointer-events-none"
          >
            <h1 
              style={serif} 
              className="text-[clamp(5rem,15vw,18rem)] leading-[0.8] text-white text-center whitespace-nowrap tracking-tighter"
            >
              {hero.title1} <br />
              <em className="italic text-[var(--c-accent)] pr-12 lg:pr-32">{hero.title2}</em>
            </h1>
          </m.div>

          <m.div 
            style={{ y: imgY, scale: imgScale }} 
            className="relative z-10 w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-[85%] flex items-end justify-center"
          >
            <img
              src={hero.imgUrl}
              srcSet={srcSetFor(hero.imgUrl)}
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, (min-width: 640px) 70vw, 95vw"
              alt={dr.name}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain object-bottom grayscale-[15%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </m.div>

          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex items-end justify-between z-20 pointer-events-none">
            <div className="text-white/90">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-[var(--c-accent)] mb-2">
                {hero.badge}
              </p>
              <p className="text-sm md:text-base font-light uppercase tracking-widest">
                {dr.name}
              </p>
            </div>
            <div className="text-white/40 text-[0.65rem] font-mono tracking-widest uppercase text-right">
              {dr.cro}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[var(--c-bg)] py-32 md:py-48 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[rgba(var(--c-primary-rgb),0.1)] md:-translate-x-1/2" />
            
            <div className="flex flex-col gap-32 md:gap-48 relative z-10">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"} pl-12 md:pl-0`}>
                      <span 
                        className="text-[clamp(4.5rem,8vw,9rem)] leading-none text-[var(--c-primary)] font-light tracking-tighter mb-4 select-none"
                        style={serif}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-[1.1rem] md:text-[1.3rem] text-[var(--c-text-main)] font-semibold tracking-[0.1em] uppercase mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[var(--c-text-muted)] text-[0.95rem] md:text-base font-light leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center pl-12 md:pl-0">
                      <div className="relative w-full max-w-[320px] aspect-[3/4.5] overflow-hidden rounded-[2rem] bg-[var(--c-light-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                        <m.img
                          initial={{ scale: 1.25 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false, margin: "0px 0px -20% 0px" }}
                          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                          src={item.img}
                          srcSet={srcSetFor(item.img)}
                          sizes="320px"
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                        />
                        <div className="absolute inset-0 border border-[rgba(var(--c-primary-rgb),0.1)] rounded-[2rem] pointer-events-none" />
                      </div>
                    </div>

                    <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-[var(--c-bg)] border-[2.5px] border-[var(--c-primary)] rounded-full -translate-x-[7px] md:-translate-x-1/2 mt-2 md:mt-0" />
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