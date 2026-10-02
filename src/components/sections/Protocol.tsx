import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Protocol() {
  const data = globalData.protocol;

  return (
    <Section id="protocolo">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-5 reveal-l">
          <div className="sticky top-32">
            <span className="eyebrow">{data.eyebrow}</span>
            <h2 style={serif} className="text-4xl md:text-6xl text-white mb-8 leading-tight">
              {data.title1} <br/> <em className="text-[var(--c-accent)]">{data.title2}</em>
            </h2>
            <p className="text-[var(--c-text-muted)] text-lg font-light leading-relaxed max-w-md">{data.desc}</p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12 stagger-children border-l border-white/10 pl-8 md:pl-16 ml-2 md:ml-0">
          {data.list.map((item: any, i: number) => (
            <div key={i} className="reveal relative">
              <span className="absolute -top-2 -left-[4.5rem] md:-left-[6.5rem] text-[var(--c-bg-alt)] text-5xl md:text-6xl font-bold font-serif opacity-50">
                {item.step}
              </span>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-4 tracking-wide font-serif">{item.title}</h3>
              <p className="text-[var(--c-text-muted)] font-light leading-relaxed text-lg">{item.content}</p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}