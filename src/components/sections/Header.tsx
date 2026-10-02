import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { serif, globalData } from "../../data/content";

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => { setMenuOpen(false); goTo(id); };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[99] transition-all duration-700 ${scrolled ? "bg-[var(--c-bg)]/90 backdrop-blur-lg border-b border-white/5 py-5" : "bg-transparent py-8"}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <div className="cursor-pointer flex flex-col" onClick={() => handleNav("/")}>
            <span style={serif} className="text-xl md:text-2xl tracking-[0.15em] uppercase text-white font-medium leading-none">
              DR. NAYHAN
            </span>
            <span className="text-[0.55rem] tracking-[0.4em] uppercase text-[var(--c-accent)] mt-1.5 opacity-80 pl-1">
              Transplante Capilar
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {globalData.nav.links.map((label, i) => (
              <button key={label} onClick={() => handleNav(globalData.nav.ids[i])} className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--c-text-muted)] hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </nav>

          <div className="lg:hidden relative z-[101]">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="white" size={22} />
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[98] lg:hidden transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)} />

      <aside className={`fixed top-0 right-0 w-[85vw] max-w-[340px] h-[100dvh] bg-[var(--c-bg-alt)] border-l border-white/5 z-[100] shadow-2xl flex flex-col pt-32 px-10 pb-8 lg:hidden transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-8">
          {globalData.nav.links.map((label, i) => (
            <button key={label} onClick={() => handleNav(globalData.nav.ids[i])} className="text-left text-[0.8rem] uppercase tracking-[0.2em] text-white border-b border-white/5 pb-4">
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}