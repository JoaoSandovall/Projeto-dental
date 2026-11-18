import { serif, globalData } from "../../data/content";

export function Footer() {
  const { clinica, footer } = globalData;

  return (
    <footer className="pt-16 sm:pt-20 md:pt-24 pb-[max(2.5rem,env(safe-area-inset-bottom,2.5rem))] px-6 md:px-10 lg:px-20 bg-[var(--c-primary)]">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-8 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src={clinica.logoUrl} 
                alt={`Logo ${clinica.nome}`} 
                className="h-10 md:h-12 w-auto object-contain shrink-0" 
              />
              <span style={serif} className="font-normal text-[1.2rem] tracking-[0.02em] text-white">
                {clinica.nome}
              </span>
            </div>
            
            <p className="text-white/60 text-[0.9rem] leading-relaxed max-w-[280px] font-light">
              {footer.sobre}
            </p>

            <div className="mt-7">
              <ul className="footer-social-list">
                <li className="icon-content">
                  <a href={clinica.contato.instagramLabel !== "" ? "#" : "#"} aria-label="Instagram" data-social="instagram">
                    <div className="filled" />
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
                <li className="icon-content">
                  <a href={clinica.contato.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" data-social="whatsapp">
                    <div className="filled" />
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <div className="tooltip">WhatsApp</div>
                </li>
                <li className="icon-content">
                  <a href="#" aria-label="Facebook" data-social="facebook">
                    <div className="filled" />
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <div className="tooltip">Facebook</div>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUNA ESPECIALIDADES (Agora puxa de clinica.endereco.comodidades) */}
          <div>
            <div className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white mb-6">
              Especialidades
            </div>
            <ul className="flex flex-col gap-[0.85rem]">
              {clinica.endereco.comodidades.map((item) => (
                <li key={item} className="text-white/60 text-[0.9rem] font-light transition-colors duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA CONTATO */}
          <div>
            <div className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white mb-6">
              {footer.title_contato}
            </div>
            <ul className="flex flex-col gap-[0.85rem] text-white/60 text-[0.9rem] font-light">
              <li>{clinica.endereco.edificio}</li>
              <li>{clinica.endereco.bairroCidade}</li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[var(--c-accent)]">
                {clinica.contato.telefoneLabel}
              </li>
              <li className="cursor-pointer transition-colors duration-300 hover:text-[var(--c-accent)]">
                {clinica.contato.emailLabel}
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex justify-between items-center flex-wrap gap-2 text-white/40 text-[0.75rem] font-light">
          <p>{footer.direitos}</p>
          <p>{footer.registro}</p>
        </div>
      </div>
    </footer>
  );
}