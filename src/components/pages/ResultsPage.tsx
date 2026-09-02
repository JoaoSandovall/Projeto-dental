import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { serif, globalData } from "../../data/content";

export function ResultsPage({ goTo }: { goTo: (id: string) => void }) {
  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col">
      <Header goTo={goTo} />
      <main className="flex-grow w-full relative">
        
        {/* Banner Superior da Página */}
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 w-full pt-[6rem]">
          <div className="bg-[var(--c-primary)] w-full rounded-[2rem] md:rounded-[3rem] pt-16 pb-32 md:pt-24 md:pb-44 px-6 md:px-10 text-center shadow-xl relative z-10 flex flex-col items-center">
            <div className="anim-fade-up">
              <span className="inline-block font-['DM_Sans',sans-serif] text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[var(--c-accent)] pb-1 border-b border-[rgba(var(--c-accent-rgb),0.4)] mb-6">
                {globalData.results_page.eyebrow}
              </span>
              <h1 style={{ ...serif }} className="text-4xl md:text-5xl lg:text-7xl text-[#FFFFFF] font-normal tracking-tight leading-tight max-w-4xl mx-auto">
                {globalData.results_page.title1} <em className="italic text-[var(--c-accent)]">{globalData.results_page.title2}</em>
              </h1>
              <p className="text-[#FFFFFF]/80 max-w-2xl mx-auto mt-6 font-light text-[1.05rem] leading-relaxed">
                {globalData.results_page.p1} <strong className="font-medium text-white">{globalData.results_page.p_bold1}</strong>{globalData.results_page.p2} <strong className="font-medium text-white">{globalData.results_page.p_bold2}</strong> {globalData.results_page.p3}
              </p>
            </div>
          </div>
        </div>

        {/* Grade de Áreas de Atuação (Foco na Empatia) */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-20 md:-mt-28 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {globalData.results_page.cases.map((item, index) => (
              
              <div key={index} className="flex flex-col anim-fade-up bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(44,61,48,0.06)] border border-[rgba(44,61,48,0.05)] overflow-hidden group" style={{ animationDelay: `${(index % 2) * 200 + 100}ms` }}>
                
                {/* Imagem Acolhedora Limpa */}
                <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white pr-6">
                     <h3 style={{ ...serif }} className="text-2xl md:text-[2rem] leading-tight mb-2">{item.category}</h3>
                     <span className="inline-block bg-[var(--c-accent)]/90 backdrop-blur-sm text-white text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full font-medium">
                       Foco: {item.duration}
                     </span>
                  </div>
                </div>

                {/* Textos: A Dor e a Solução */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-col gap-8 flex-grow">
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--c-text-muted)] font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--c-text-light)]"></span> A Dor
                      </h4>
                      <p className="text-[var(--c-text-main)] font-light text-[1rem] leading-relaxed pl-4 border-l border-[var(--c-text-light)]/30">"{item.complaint}"</p>
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--c-accent)] font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--c-accent)]"></span> Nossa Abordagem
                      </h4>
                      <p className="text-[var(--c-text-main)] font-light text-[1rem] leading-relaxed pl-4 border-l border-[var(--c-accent)]/30">{item.procedure}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[rgba(44,61,48,0.1)]">
                    <button onClick={() => goTo("contato")} className="group/btn flex items-center justify-between w-full text-left text-[var(--c-text-main)] hover:text-[var(--c-accent)] transition-colors duration-500 py-2">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">{globalData.results_page.btnSaberMais}</span>
                      <svg className="w-5 h-5 transform opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>

          <div className="mt-24 text-center anim-fade-in delay-500">
            <a href="/" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("navigate", { detail: "/" })); }} className="group inline-flex items-center gap-3 text-[var(--c-text-muted)] hover:text-[var(--c-text-main)] font-medium transition-colors">
              <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span className="border-b border-transparent group-hover:border-[var(--c-text-main)] pb-0.5 transition-colors duration-300">{globalData.results_page.btnVoltar}</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}