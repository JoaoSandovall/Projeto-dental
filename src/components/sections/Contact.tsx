import { m } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { Button } from "../ui/Button";

export function Contact() {
  const { contact, clinica } = globalData;

  return (
    <section 
      id="contato" 
      className="relative w-full bg-[var(--c-dark-base)] py-24 md:py-32 flex flex-col justify-between overflow-hidden"
    >
      {/* Brilho dourado de fundo. Antes: círculo com filter: blur(200px) (muito caro para a GPU, repintado no scroll).
          Agora: gradiente radial com o mesmo desenho do círculo desfocado — visual equivalente, custo quase zero. */}
      <div
        className="absolute rounded-full opacity-[0.03] pointer-events-none"
        style={{
          width: "calc(50vw + 800px)",
          height: "calc(50vw + 800px)",
          right: "-400px",
          bottom: "-400px",
          background:
            "radial-gradient(circle closest-side, rgba(var(--c-accent-rgb),0.8) 0%, rgba(var(--c-accent-rgb),0.62) calc(25vw * 0.55), rgba(var(--c-accent-rgb),0.35) calc(25vw + 100px), rgba(var(--c-accent-rgb),0.1) calc(25vw + 260px), transparent 100%)",
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-20 z-10 flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 md:mb-32">
          
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-[var(--c-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
              {contact.eyebrow}
            </span>
            
            <h2 
              className="text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.95] text-white font-light tracking-tight mb-8" 
              style={serif}
            >
              {contact.title1} <br/>
              <em className="italic text-[var(--c-accent)]">{contact.title2}</em>
            </h2>
            
            <p className="text-white/60 text-[1.1rem] md:text-[1.25rem] font-light leading-relaxed max-w-lg">
              {contact.desc}
            </p>
          </m.div>

          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-auto pb-4"
          >
            {/* NOVO BOTÃO: Passando colorTheme="dark" */}
            <Button as="a" href={clinica.contato.whatsappUrl} target="_blank" colorTheme="dark" className="w-full sm:w-auto">
              {clinica.contato.whatsappLabel}
            </Button>
          </m.div>
        </div>

        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10"
        >
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box1_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {clinica.endereco.edificio} <br />
              {clinica.endereco.bairroCidade}
            </p>
          </div>

          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box2_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {clinica.contato.telefoneLabel} <br />
              {clinica.contato.emailLabel}
            </p>
          </div>

          <div className="p-8 md:p-12 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box3_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {contact.box3_desc1} <br />
              {contact.box3_desc2}
            </p>
          </div>
        </m.div>

      </div>
    </section>
  );
}