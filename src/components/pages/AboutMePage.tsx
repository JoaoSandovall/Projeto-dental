import { useEffect } from "react";
import { serif, globalData } from "../../data/content";
import { Footer } from "../sections/Footer";

export function AboutMePage({ goTo }: { goTo: (id: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const data = globalData.about_page;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="mb-16">
            <button onClick={() => goTo("/")} className="text-[var(--c-text-muted)] text-xs uppercase tracking-[0.2em] hover:text-[var(--c-accent)] transition-colors flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Voltar ao Início
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <div className="lg:col-span-7 order-2 lg:order-1 reveal">
              <span className="eyebrow">{data.eyebrow}</span>
              <h1 style={serif} className="text-5xl md:text-7xl text-white mb-10 leading-[1.05]">
                {data.title1}<br/>
                <em className="text-[var(--c-accent)]">{data.title2}</em>
              </h1>
              <div className="w-16 h-[1px] bg-[var(--c-accent)] mb-10"></div>
              <div className="text-[var(--c-text-muted)] text-lg space-y-6 font-light leading-relaxed max-w-2xl">
                <p>{data.p1}</p>
                <p>{data.p2}</p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-[3/4] grayscale reveal">
              <img src={data.imgUrl1} alt="Dr. Nayhan Andrade" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center bg-[var(--c-bg-alt)] p-6 md:p-16">
            <div className="lg:col-span-5 relative aspect-square grayscale reveal">
              <img src={data.imgUrl2} alt="Procedimento e Análise" className="w-full h-full object-cover object-center" />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-12 reveal">
              <div className="border-l border-[var(--c-accent)] pl-8 mb-4">
                <p style={serif} className="text-2xl md:text-4xl text-white italic leading-relaxed">
                  "{data.quote}"
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                {data.topics.map((topic, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-[var(--c-text-muted)] font-light leading-relaxed text-sm">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}