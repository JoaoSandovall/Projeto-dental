import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";

function ScrollLinkedItem({ item, index }: { item: any; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 95%", "start 40%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <m.div 
      ref={itemRef}
      style={{ opacity, y }}
      className="flex flex-col border-t border-[rgba(var(--c-primary-rgb),0.1)] py-16 md:py-24 group"
    >
      <span className="text-[var(--c-accent)] text-sm md:text-base font-medium tracking-[0.25em] mb-6 block tabular-nums">
        0{index + 1}
      </span>
      <h3 
        className="text-3xl md:text-4xl lg:text-5xl text-[var(--c-text-main)] font-light mb-6 transition-colors duration-500 group-hover:text-[var(--c-accent)]" 
        style={serif}
      >
        {item.title}
      </h3>
      <p className="text-[var(--c-text-muted)] text-base md:text-lg font-light leading-relaxed max-w-[90%] md:max-w-[80%]">
        {item.content}
      </p>
    </m.div>
  );
}

export function Methodology() {
  const { title1, title2, title3, desc, btn, list } = globalData.convenios;

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="metodologia" className="relative bg-[var(--c-bg)] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        
        {/* Lado Fixo (Removido os pt/pb internos malucos) */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col justify-center">
          <h2 
            className="text-[clamp(3.2rem,5vw,5.5rem)] leading-[0.95] text-[var(--c-text-main)] font-normal tracking-tight" 
            style={serif}
          >
            {title1} <br />
            {title2} <br />
            <em className="italic text-[var(--c-accent)]">{title3}</em>
          </h2>
          
          <p className="mt-10 text-[var(--c-text-muted)] text-lg md:text-xl font-light leading-relaxed max-w-md">
            {desc}
          </p>

          <Button variant="outline" onClick={goToContact as any} className="mt-10 w-max">
            {btn}
          </Button>
        </div>

        {/* Lado do Scroll (Removido os padding Y internos malucos) */}
        <div className="w-full lg:w-7/12 flex flex-col mt-12 lg:mt-0">
          {list.map((item, index) => (
            <ScrollLinkedItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}