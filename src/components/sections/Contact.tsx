import { motion } from "framer-motion";
import { serif, globalData } from "../../data/content";

export function Contact() {
  const { contact, clinica } = globalData;

  return (
    <section 
      id="contato" 
      className="relative w-full bg-[var(--c-dark-base)] py-24 md:py-32 flex flex-col justify-between overflow-hidden"
    >
      {/* Aura luminosa de fundo muito sutil */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[var(--c-accent)] blur-[200px] rounded-full opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-20 z-10 flex flex-col">
        
        {/* TOPO DA SEÇÃO: Tipografia e CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 md:mb-32">
          
          <motion.div 
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
          </motion.div>

          {/* Botão Premium (Pill Sweeping) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-auto pb-4"
          >
            <a 
              href={clinica.contato.whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-10 md:px-14 py-6 rounded-full bg-white text-[var(--c-primary)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(207,169,104,0.3)] w-full sm:w-auto text-center"
            >
              {/* Fundo que preenche (Sweep Up) */}
              <div className="absolute inset-0 bg-[var(--c-accent)] translate-y-[101%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              
              <svg className="relative z-10 w-6 h-6 transition-colors duration-500 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10 text-[0.75rem] md:text-[0.8rem] font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white">
                {clinica.contato.whatsappLabel}
              </span>
            </a>
          </motion.div>
        </div>

        {/* BASE DA SEÇÃO: Grid Brutalista Limpo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10"
        >
          {/* Célula 1 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box1_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {clinica.endereco.edificio} <br />
              {clinica.endereco.bairroCidade}
            </p>
          </div>

          {/* Célula 2 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box2_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {clinica.contato.telefoneLabel} <br />
              {clinica.contato.emailLabel}
            </p>
          </div>

          {/* Célula 3 */}
          <div className="p-8 md:p-12 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--c-accent)] uppercase mb-6 md:mb-12">
              {contact.box3_title}
            </span>
            <p className="text-white/80 text-[0.95rem] font-light leading-relaxed mt-auto">
              {contact.box3_desc1} <br />
              {contact.box3_desc2}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}