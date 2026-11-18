import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";

export function Location() {
  const { location, clinica } = globalData;

  return (
    <section 
      id="localizacao" 
      className="w-full bg-[var(--c-bg)] py-16 sm:py-24 md:py-32 border-t border-[rgba(var(--c-primary-rgb),0.05)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 
              className="text-[clamp(2.5rem,8vw,5.5rem)] md:text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.95] font-light text-[var(--c-text-main)] tracking-tight mb-10 md:mb-14"
              style={serif}
            >
              {location.title1} <br />
              <em className="italic text-[var(--c-accent)]">{location.title2}</em>
            </h2>

            <div className="flex flex-col">
              <div className="py-5 sm:py-6 border-t border-[rgba(var(--c-primary-rgb),0.1)] flex flex-col sm:flex-row gap-1.5 sm:gap-8 justify-between group">
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-text-muted)] uppercase w-32 shrink-0 group-hover:text-[var(--c-accent)] transition-colors">
                  {location.box1.title}
                </span>
                <div className="text-[var(--c-text-main)] text-[0.95rem] font-light leading-relaxed flex-1">
                  {location.box1.value1} <br />
                  {location.box1.value2}
                </div>
              </div>
              <div className="py-5 sm:py-6 border-t border-[rgba(var(--c-primary-rgb),0.1)] flex flex-col sm:flex-row gap-1.5 sm:gap-8 justify-between group">
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-text-muted)] uppercase w-32 shrink-0 group-hover:text-[var(--c-accent)] transition-colors">
                  {location.box2.title}
                </span>
                <div className="text-[var(--c-text-main)] text-[0.95rem] font-light leading-relaxed flex-1">
                  {location.box2.value1} <br />
                  {location.box2.value2}
                </div>
              </div>
              <div className="py-5 sm:py-6 border-y border-[rgba(var(--c-primary-rgb),0.1)] flex flex-col sm:flex-row gap-1.5 sm:gap-8 justify-between group">
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-text-muted)] uppercase w-32 shrink-0 group-hover:text-[var(--c-accent)] transition-colors">
                  {location.box3.title}
                </span>
                <div className="text-[var(--c-text-main)] text-[0.95rem] font-light leading-relaxed flex-1">
                  {location.box3.value1} <br />
                  {location.box3.value2}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-0 pt-2 sm:pt-4">
            <Button as="a" href={clinica.endereco.mapaGpsUrl} target="_blank" variant="outline" className="mt-2 sm:mt-6 w-full sm:w-auto border-black/30">
              {location.btn}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 w-full h-[320px] sm:h-[420px] lg:h-auto min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[var(--c-light-surface)] group shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <iframe 
            title={`Mapa de localização — ${clinica.nome}`}
            src={clinica.endereco.mapaEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="absolute inset-0 grayscale-[35%] md:grayscale-[100%] contrast-[1.05] md:contrast-[1.1] opacity-90 md:opacity-70 transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
          />
          <div className="absolute inset-0 border border-[rgba(var(--c-primary-rgb),0.1)] rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
