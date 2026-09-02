import type { MouseEvent } from "react";
import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

function goToResultados(e: MouseEvent) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
}

export function ResultsCTA() {
  const { results_cta } = globalData;

  return (
    <Section id="resultados" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* TEXTO DE ACOLHIMENTO */}
        <div className="reveal-l">
          <span className="eyebrow">{results_cta.eyebrow}</span>
          <h2 className="mt-3 font-normal leading-[1.08]" style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 3.6rem)", color: "var(--c-text-main)" }}>
            {results_cta.title1} <br className="hidden lg:block" />
            <em className="italic text-[var(--c-accent)]">{results_cta.title2}</em>
          </h2>
          <p className="mt-8 max-w-lg text-[1.1rem] leading-relaxed text-[var(--c-text-muted)] font-light">
            {results_cta.p1} <strong className="font-medium text-[var(--c-text-main)]">{results_cta.p_bold1}</strong> {results_cta.p2}{" "}
            <strong className="font-medium text-[var(--c-text-main)]">{results_cta.p_bold2}</strong> {results_cta.p3}{" "}
            <strong className="font-medium text-[var(--c-primary)]">{results_cta.p_bold3}</strong>.
          </p>
          
          <div className="mt-12">
            <a href="/resultados" onClick={goToResultados} className="btn-primary group inline-flex items-center gap-3 rounded-full px-8">
              {results_cta.btn}
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* IMAGEM PRINCIPAL LIMPA E ACOLHEDORA */}
        <div className="reveal-r relative w-full max-w-[500px] mx-auto pb-6 pl-6">
          {/* Fundo decorativo sutil */}
          <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[3rem] bg-[var(--c-primary)] opacity-5 translate-x-4 -translate-y-4"></div>
          
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src={results_cta.imgUrl}
              alt="Terapia"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,61,48,0.4)] to-transparent" />
          </div>
          
          {/* Badge flutuante de autoridade */}
          <div className="absolute bottom-12 -left-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-[0_15px_30px_rgba(44,61,48,0.1)] flex items-center gap-4 max-w-[240px]">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[var(--c-accent)]/10 text-[var(--c-accent)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-[0.75rem] leading-snug font-semibold text-[var(--c-text-main)]">
              Ambiente seguro e 100% sigiloso
            </span>
          </div>
        </div>

      </div>
    </Section>
  );
}