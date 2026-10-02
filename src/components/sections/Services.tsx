import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";
import { Microscope, Shield, Crosshair, FileText } from "lucide-react";

const iconMap: any = { Microscope, Shield, Crosshair, FileText };

export function Services() {
  const data = globalData.services;

  return (
    <Section id="tecnica" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow">{data.eyebrow}</span>
            <h2 style={serif} className="text-4xl md:text-6xl text-white mt-2">
              {data.title1} <em className="text-[var(--c-accent)]">{data.title2}</em>
            </h2>
          </div>
          <p className="text-[var(--c-text-muted)] text-lg font-light max-w-md md:text-right">
            {data.desc1}<strong className="text-white font-normal">{data.descBold}</strong>{data.desc2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.list.map((s: any, idx: number) => {
            const Icon = iconMap[s.iconName];
            return (
              <div key={idx} className="bg-[var(--c-bg)] p-10 reveal border border-white/5 hover:border-[var(--c-accent)] transition-all duration-500 group">
                <div className="text-[var(--c-text-muted)] group-hover:text-[var(--c-accent)] transition-colors duration-500 mb-8">
                  {Icon && <Icon size={36} strokeWidth={1} />}
                </div>
                <h3 style={serif} className="text-2xl text-white mb-4">{s.title}</h3>
                <p className="text-[var(--c-text-muted)] font-light leading-relaxed text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}