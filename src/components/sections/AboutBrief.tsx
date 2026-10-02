import { Section } from "../ui/Section";
import { serif, globalData } from "../../data/content";

export function AboutBrief({ goTo }: { goTo: (id: string) => void }) {
  const data = globalData.about_brief;

  return (
    <Section id="o-medico" className="border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Imagem em destaque com moldura invisível */}
        <div className="lg:col-span-5 relative reveal-l">
          <div className="aspect-[3/4] overflow-hidden relative">
            <img src={data.imgUrl} alt="Dr. Nayhan" className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
          </div>
          {/* Elemento de design (quadrado deslocado) */}
          <div className="absolute -inset-4 border border-[var(--c-accent)] opacity-20 pointer-events-none hidden md:block"></div>
        </div>

        {/* Texto alinhado de forma elegante */}
        <div className="lg:col-span-7 reveal-r lg:pl-10">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 style={serif} className="text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-none">
            {data.title1} <em className="text-[var(--c-accent)] block mt-2">{data.title2}</em>
          </h2>
          <div className="w-12 h-[1px] bg-[var(--c-accent)] mb-8"></div>
          <p className="text-[var(--c-text-muted)] text-lg mb-6 font-light leading-relaxed">
            {data.p1}
          </p>
          <p className="text-[var(--c-text-muted)] text-lg mb-12 font-light leading-relaxed">
            {data.p2}
          </p>
          <button onClick={() => goTo("/sobre-o-doutor")} className="text-[var(--c-accent)] uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors border-b border-[var(--c-accent)] pb-1 hover:border-white">
            {data.btn}
          </button>
        </div>

      </div>
    </Section>
  );
}