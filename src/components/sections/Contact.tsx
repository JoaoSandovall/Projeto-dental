import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function Contact() {
  const data = globalData.contact;
  return (
    <Section id="contato" className="border-b border-white/5">
      <div className="max-w-[800px] mx-auto text-center reveal">
        <span className="eyebrow">{data.eyebrow}</span>
        <h2 style={serif} className="text-4xl md:text-6xl text-white mt-4 mb-8 leading-tight">
          {data.title1} <em className="text-[var(--c-accent)] block">{data.title2}</em>
        </h2>
        <p className="text-[var(--c-text-muted)] text-lg font-light mx-auto mb-12 leading-relaxed">
          {data.desc}
        </p>
        <a href={globalData.clinica.contato.whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
          {data.btn}
        </a>
      </div>
    </Section>
  );
}