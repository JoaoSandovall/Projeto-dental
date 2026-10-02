import { useState } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 style={serif} className="text-3xl md:text-5xl text-white">{globalData.faq.title}</h2>
        </div>
        <div className="border-t border-white/10">
          {globalData.faq.list.map((faq: any, i: number) => (
            <div key={i} className="reveal border-b border-white/10">
              <button onClick={() => setActive(active === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className={`text-lg font-light transition-colors ${active === i ? 'text-[var(--c-accent)]' : 'text-white group-hover:text-[var(--c-accent)]'}`}>{faq.q}</span>
                <span className="text-[var(--c-accent)] text-2xl font-light ml-4">{active === i ? "−" : "+"}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                <p className="text-[var(--c-text-muted)] font-light leading-relaxed pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}