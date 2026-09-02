import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { serif, globalData } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Radar de rolagem
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava a rolagem do fundo quando o menu imersivo de celular estiver aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    if (id === "/resultados") window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
    else goTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* HEADER DESKTOP / ESTRUTURA BASE */}
      <header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "py-4" : "py-6 md:py-8"}`}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          
          {/* O efeito "Pílula Flutuante" (Floating Pill) */}
          <div className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "bg-white/85 backdrop-blur-xl border border-[rgba(44,61,48,0.08)] shadow-[0_15px_40px_rgba(44,61,48,0.06)] rounded-full px-6 py-3 md:py-2.5" : "bg-transparent border-transparent px-2 md:px-0 py-0"}`}>
            
            {/* LOGO */}
            <div className="flex items-center gap-3 cursor-pointer select-none relative z-[10000]" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}>
              <img src={globalData.clinica.logoUrl} alt="Logo" className="h-8 md:h-11 w-auto object-contain transition-all duration-300" />
              <div className="flex flex-col justify-center mt-1">
                <span style={{ ...serif, fontWeight: 500, letterSpacing: "0.02em", color: "var(--c-text-main)" }} className="text-[1.1rem] md:text-[1.4rem] leading-none mb-0.5">
                  {globalData.clinica.nome}
                </span>
                <span className="text-[0.5rem] md:text-[0.55rem] tracking-[0.18em] uppercase text-[var(--c-text-muted)] font-semibold leading-none">
                  {globalData.clinica.subtitulo}
                </span>
              </div>
            </div>

            {/* LINKS DESKTOP (Minimalistas e Refinados) */}
            <nav className="hidden md:flex items-center gap-8">
              {globalData.nav.links.map((label, i) => (
                <button 
                  key={label} 
                  onClick={() => handleNav(globalData.nav.ids[i])} 
                  className="relative text-[0.8rem] font-medium tracking-[0.05em] text-[var(--c-text-muted)] hover:text-[var(--c-text-main)] transition-colors duration-300 py-2 group"
                >
                  {label}
                  {/* Linha animada de Hover muito sutil */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--c-accent)] transition-all duration-500 ease-out group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* BOTÃO DESKTOP (Compacto e Elegante) */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleNav("contato")} 
                className="bg-[var(--c-primary)] text-white text-[0.75rem] font-semibold tracking-widest uppercase px-7 py-3 rounded-full hover:bg-[var(--c-primary-hover)] hover:-translate-y-[2px] transition-all duration-300 shadow-[0_5px_15px_rgba(44,61,48,0.2)] hover:shadow-[0_10px_25px_rgba(44,61,48,0.3)]"
              >
                Agendar
              </button>
            </div>

            {/* ÍCONE HAMBÚRGUER MOBILE */}
            <div className="md:hidden relative z-[10000] -mr-2">
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="var(--c-primary)" size={24} rounded label="Mostrar menu" />
            </div>

          </div>
        </div>
      </header>

      {/* TELA IMERSIVA MOBILE (Editorial Takeover) */}
      <div className={`fixed inset-0 bg-[var(--c-bg)] z-[9998] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center px-8 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        
        {/* Blob Orgânico no Fundo do Menu para dar textura */}
        <div className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[var(--c-accent)] opacity-[0.08] blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-[var(--c-primary)] opacity-[0.05] blur-3xl pointer-events-none"></div>

        {/* Links Gigantes em Cascata */}
        <nav className="flex flex-col gap-5 relative z-10">
          {globalData.nav.links.map((label, i) => (
            <div key={label} className="overflow-hidden">
              <button
                onClick={() => handleNav(globalData.nav.ids[i])}
                className="text-left text-[2.8rem] text-[var(--c-text-main)] hover:text-[var(--c-accent)] focus:outline-none"
                style={{ 
                  ...serif, 
                  lineHeight: 1.1,
                  transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                  opacity: menuOpen ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${100 + i * 60}ms`
                }}
              >
                {label}
              </button>
            </div>
          ))}
        </nav>

        {/* Rodapé do Menu Mobile (Botão e Info) */}
        <div 
          className="mt-14 pt-8 border-t border-[var(--c-primary)]/10 flex flex-col gap-5 relative z-10"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            opacity: menuOpen ? 1 : 0,
            transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${100 + globalData.nav.links.length * 60}ms`
          }}
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[var(--c-accent)]">Pronto para iniciar?</span>
          <button 
            onClick={() => handleNav("contato")} 
            className="w-full bg-[var(--c-primary)] text-white text-center py-4 rounded-2xl text-[0.8rem] font-bold tracking-[0.15em] uppercase shadow-[0_10px_30px_rgba(44,61,48,0.2)]"
          >
            Agendar Primeira Sessão
          </button>
        </div>
      </div>
    </>
  );
}