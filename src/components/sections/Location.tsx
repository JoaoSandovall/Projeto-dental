import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

// Ícone vetorial leve para as estrelas de avaliação
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export function Location() {
  return (
    <Section id="localizacao" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch border border-[rgba(var(--c-primary-rgb),0.1)] rounded-[2rem] overflow-hidden shadow-sm">
          
          <div className="w-full md:w-5/12 bg-[var(--c-bg)] p-10 md:p-16 flex flex-col justify-center relative z-10">
            <div className="absolute top-0 right-0 w-[1px] h-full bg-[rgba(var(--c-primary-rgb),0.1)] hidden md:block"></div>
            <h2 className="reveal mb-12" style={{ ...serif, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "var(--c-text-main)", lineHeight: 1.1 }}>
              {globalData.location.eyebrow}
            </h2>
            <div className="reveal flex flex-col gap-8 mb-14">
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box1.title}</div>
                <div className="text-[var(--c-text-main)] text-[1.1rem] font-medium">{globalData.location.box1.value1}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] mt-1">{globalData.location.box1.value2}</div>
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box2.title}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] leading-relaxed">
                  {globalData.location.box2.value1}<br />{globalData.location.box2.value2}
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-2">{globalData.location.box3.title}</div>
                <div className="text-[var(--c-text-muted)] font-light text-[0.95rem] leading-relaxed">
                  {globalData.clinica.endereco.comodidades.map(c => <span key={c}>• {c}<br /></span>)}
                </div>
              </div>
            </div>
            <div className="reveal mt-auto">
              <a href={globalData.clinica.endereco.mapaGpsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-[var(--c-text-main)] font-medium text-[0.85rem] uppercase tracking-widest hover:opacity-70 transition-opacity">
                {globalData.location.btn}
                <svg className="transform group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 h-[450px] md:h-auto relative bg-[#EAEAEA] overflow-hidden group">
            <iframe src={globalData.clinica.endereco.mapaEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"></iframe>
            
            {/* Card Flutuante de Avaliações (Badge Google) */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
              <div className="text-[2.2rem] font-bold text-[var(--c-primary)] leading-none font-sans tracking-tighter">
                {globalData.hero.stats[0].target}{globalData.hero.stats[0].suffix}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex text-[var(--c-accent)]">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--c-text-muted)]">
                  {globalData.hero.stats[1].target}{globalData.hero.stats[1].suffix} avaliações no google
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}