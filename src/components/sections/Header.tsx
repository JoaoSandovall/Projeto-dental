import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { serif, globalData } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    goTo(id); // Agora apenas desliza para a seção alvo
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_28px_rgba(var(--c-primary-rgb),0.06)] border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-[76px] md:h-[92px] flex items-center justify-between relative z-[10000]">
          
          <div className="flex items-center gap-3 cursor-pointer select-none group" onClick={() => handleNav("inicio")}>
            <img src={globalData.clinica.logoUrl} alt="Logo" className="h-9 md:h-11 w-auto object-contain" />
            <div className="hidden sm:flex items-center gap-3">
              <span style={{ ...serif }} className="text-[1.3rem] text-[var(--c-text-main)] leading-none font-bold">
                {globalData.clinica.nome}
              </span>
              <span className="w-[1px] h-4 bg-[var(--c-primary)] opacity-20" />
              <span className="text-[0.72rem] tracking-wider text-[var(--c-accent)] font-semibold uppercase">
                {globalData.clinica.subtitulo}
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-9">
            {globalData.nav.links.map((label, i) => (
              <button
                key={label}
                onClick={() => handleNav(globalData.nav.ids[i])}
                className="relative text-[0.85rem] font-bold tracking-wide uppercase text-[var(--c-text-muted)] hover:text-[var(--c-text-main)] transition-colors duration-300 group/link py-1"
              >
                {label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[var(--c-accent)] transition-all duration-300 group-hover/link:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNav("contato")}
              className="bg-[var(--c-primary)] text-white text-[0.85rem] font-bold tracking-wide uppercase px-7 py-3.5 rounded hover:bg-[var(--c-accent)] hover:-translate-y-[2px] transition-all duration-300 shadow-md"
            >
              Garantir Vaga
            </button>
          </nav>

          <div className="lg:hidden relative z-[10001] -mr-2">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="var(--c-primary)" size={24} rounded />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[rgba(var(--c-primary-rgb),0.35)] backdrop-blur-sm z-[9997] lg:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 w-[85vw] max-w-[340px] h-[100dvh] bg-white z-[9998] shadow-2xl flex flex-col pt-[96px] px-7 pb-8 lg:hidden transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col mt-4 overflow-y-auto flex-1">
          {globalData.nav.links.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNav(globalData.nav.ids[i])}
              style={{ ...serif }}
              className="flex items-baseline gap-4 text-left py-4 border-b border-gray-100"
            >
              <span className="text-[0.7rem] font-['DM_Sans',sans-serif] text-[var(--c-accent)] tabular-nums font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.4rem] font-medium text-[var(--c-text-main)]">{label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100">
          <button
            onClick={() => handleNav("contato")}
            className="w-full bg-[var(--c-primary)] text-white text-center py-4 rounded text-[0.85rem] font-bold tracking-widest uppercase shadow-md active:scale-[0.98] transition-transform"
          >
            Garantir Vaga
          </button>
        </div>
      </aside>
    </>
  );
}