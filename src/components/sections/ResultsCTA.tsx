import type { MouseEvent } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

function goToResultados(e: MouseEvent) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
}

export function ResultsCTA() {
  const { results_cta, results_page } = globalData;
  const previewCases = results_page.cases.slice(0, 4);
  const accentCase = results_page.cases[1] ?? results_page.cases[0];

  return (
    <Section id="resultados" className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-24 items-center">
        
        <div className="reveal-l">
          <span className="eyebrow">{results_cta.eyebrow}</span>
          <h2 className="mt-3 font-normal leading-[1.08]" style={{ ...serif, fontWeight: 400, fontSize: "clamp(2.4rem, 4vw, 3.6rem)", color: "var(--c-text-main)" }}>
            {results_cta.title1} <br className="hidden lg:block" />
            <em className="italic text-[var(--c-accent)]">{results_cta.title2}</em>
          </h2>
          <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-[var(--c-text-muted)]">
            {results_cta.p1} <strong className="font-medium text-[var(--c-text-main)]">{results_cta.p_bold1}</strong> {results_cta.p2}{" "}
            <strong className="font-medium text-[var(--c-text-main)]">{results_cta.p_bold2}</strong> {results_cta.p3}{" "}
            <strong className="font-semibold" style={{ color: "var(--c-primary)" }}>{results_cta.p_bold3}</strong>.
          </p>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-4">
              {previewCases.map((c, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full overflow-hidden border-4 shrink-0"
                  style={{ borderColor: "var(--c-bg)" }}
                >
                  <img src={c.afterImg} alt={c.category} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-[var(--c-text-muted)]">
              +{results_page.cases.length} casos documentados
            </span>
          </div>

          <div className="mt-10">
            <a href="/resultados" onClick={goToResultados} className="btn-primary group inline-flex items-center gap-3">
              {results_cta.btn}
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="reveal-r relative w-full max-w-[420px] mx-auto pb-10 pl-10 lg:pb-14 lg:pl-14">
          <div className="bg-aura" style={{ width: "320px", height: "320px", background: "var(--c-accent)", top: "-40px", right: "-60px" }} />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={results_cta.imgUrl}
              alt="Resultados"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              style={{ filter: "brightness(0.94)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--c-primary-rgb),0.55)] via-transparent to-transparent" />
          </div>
          
          <div className="hidden md:block absolute bottom-0 left-0 w-36 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 rotate-[-6deg]" style={{ borderColor: "var(--c-bg)" }}>
            <img src={accentCase.afterImg} alt={accentCase.category} className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-6 -left-2 md:-left-6 bg-[var(--c-bg)] rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3 max-w-[210px]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--c-accent)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-[0.72rem] leading-snug font-semibold" style={{ color: "var(--c-text-main)" }}>
              Antes &amp; depois reais de pacientes
            </span>
          </div>
        </div>

      </div>
    </Section>
  );
}