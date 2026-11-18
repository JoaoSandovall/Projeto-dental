import { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { m, AnimatePresence } from "framer-motion";
import { serif, globalData } from "../../data/content";
import { preloadRoute } from "../../lib/routes";

// Animação de Entrada (Cascata dos links ao carregar o site)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.32, ease: [0.32, 0, 0.67, 0] }
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.055,
      delayChildren: 0.06
    }
  }
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
  }
};

// Links fixos: definidos fora do componente para não serem recriados a cada render (scroll)
const navLinks = [
  { label: "A Clínica", href: "sobre", isPage: false, position: "left" },
  { label: "O Especialista", href: "/especialista", isPage: true, position: "left" },
  { label: "Metodologia", href: "metodologia", isPage: false, position: "left" },
  { label: "Infraestrutura", href: "infraestrutura", isPage: false, position: "right" },
  { label: "Casos Clínicos", href: "/resultados", isPage: true, position: "right" },
  { label: "Contato", href: "contato", isPage: false, position: "right" },
];
const leftLinks = navLinks.filter((link) => link.position === "left");
const rightLinks = navLinks.filter((link) => link.position === "right");

export function Header({ goTo }: { goTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { clinica } = globalData;

  useEffect(() => {
    let lastScrolled = window.scrollY > 10;
    setScrolled(lastScrolled);
    const handleScroll = () => {
      const next = window.scrollY > 10;
      if (next !== lastScrolled) {
        lastScrolled = next;
        setScrolled(next);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string, isPage: boolean) => {
    setMenuOpen(false);
    if (isPage) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: href }));
    } else {
      goTo(href);
    }
  };

  const goHome = () => handleNav("inicio", false);

  // A MÁGICA DO IPA: O ease-in-out deixa a ida e a volta exatamente no mesmo ritmo!
  const transitionClass = "transition-all duration-700 ease-in-out";
  const spacerTransition = "transition-[max-width] duration-700 ease-in-out";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9999] pt-[env(safe-area-inset-top,0px)] will-change-transform transition-[background-color,border-color,box-shadow,backdrop-filter] duration-700 ease-in-out ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_28px_rgba(0,0,0,0.04)] border-b border-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Contêiner alargado para empurrar aos extremos absolutos */}
        <div className="flex h-[72px] sm:h-[76px] xl:h-[92px] w-full max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-8 relative z-20">
          
          {/* LADO ESQUERDO DO HEADER */}
          <m.div 
            variants={containerVariants as any} 
            initial="hidden" 
            animate="visible" 
            className={`hidden lg:flex items-center justify-end w-1/2 ${transitionClass}`}
          >
            <m.button variants={itemVariants as any} onClick={goHome} className="flex items-center gap-3 active:scale-95 shrink-0 cursor-pointer transition-transform duration-300">
              <img
                src={clinica.logoUrl}
                alt="Logo"
                className="h-10 xl:h-12 w-auto object-contain"
              />
              <div className="hidden xl:flex flex-col text-[var(--c-text-main)] tracking-tight text-left" style={serif}>
                <span className="text-[1.25rem] leading-[1.1]">Vivere</span>
                <span className="text-[1.25rem] leading-[1.1]">Odontologia</span>
              </div>
            </m.button>
            
            {/* O Espaçador Dinâmico */}
            <div 
              className={`flex-1 w-full ${spacerTransition}`} 
              style={{ maxWidth: scrolled ? "36px" : "1200px" }} 
            />

            <div className="flex items-center gap-7 xl:gap-10 shrink-0 pr-4 xl:pr-5">
              {leftLinks.map((link) => (
                <m.button 
                  variants={itemVariants as any}
                  key={link.href} 
                  onMouseEnter={link.isPage ? () => preloadRoute(link.href) : undefined}
                  onTouchStart={link.isPage ? () => preloadRoute(link.href) : undefined}
                  onClick={() => handleNav(link.href, link.isPage)} 
                  className="text-[0.68rem] xl:text-[0.72rem] tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer text-[var(--c-text-muted)] hover:text-[var(--c-text-main)]"
                >
                  {link.label}
                </m.button>
              ))}
            </div>
          </m.div>

          {/* LADO DIREITO DO HEADER */}
          <m.div 
            variants={containerVariants as any} 
            initial="hidden" 
            animate="visible" 
            className={`hidden lg:flex items-center justify-start w-1/2 ${transitionClass}`}
          >
            <div className="flex items-center gap-7 xl:gap-10 shrink-0 pl-4 xl:pl-5">
              {rightLinks.map((link) => (
                <m.button 
                  variants={itemVariants as any}
                  key={link.href} 
                  onMouseEnter={link.isPage ? () => preloadRoute(link.href) : undefined}
                  onTouchStart={link.isPage ? () => preloadRoute(link.href) : undefined}
                  onClick={() => handleNav(link.href, link.isPage)} 
                  className="text-[0.68rem] xl:text-[0.72rem] tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer text-[var(--c-text-muted)] hover:text-[var(--c-text-main)]"
                >
                  {link.label}
                </m.button>
              ))}
            </div>

            {/* O Espaçador Dinâmico */}
            <div 
              className={`flex-1 w-full ${spacerTransition}`} 
              style={{ maxWidth: scrolled ? "36px" : "1200px" }} 
            />

            <m.button
              variants={itemVariants as any}
              onClick={() => handleNav("contato", false)}
              className="px-6 xl:px-8 py-2.5 xl:py-3 text-[0.65rem] xl:text-[0.7rem] font-bold rounded-full uppercase tracking-[0.15em] whitespace-nowrap shrink-0 cursor-pointer border bg-[var(--c-primary)] text-white hover:bg-[var(--c-primary-hover)] border-[var(--c-primary)] transition-colors duration-300 shadow-sm"
            >
              Agendar Consulta
            </m.button>
          </m.div>

          {/* MOBILE HEADER */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <button onClick={goHome} className="flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left active:scale-95 transition-transform">
              <img
                src={clinica.logoUrl}
                alt="Logo"
                className="h-9 md:h-10 w-auto object-contain"
              />
              <div className="flex flex-col text-[var(--c-text-main)] tracking-tight" style={serif}>
                <span className="text-[1.15rem] sm:text-[1.2rem] leading-[1.05]">Vivere</span>
                <span className="text-[1.15rem] sm:text-[1.2rem] leading-[1.05]">Odontologia</span>
              </div>
            </button>
            <div className="relative z-20 -mr-2 flex items-center justify-center min-w-[44px] min-h-[44px]">
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={22}
                duration={0.4}
                color="var(--c-primary)"
                label={menuOpen ? "Fechar menu" : "Abrir menu"}
              />
            </div>
          </div>
        </div>

        {/* MENU DESDOBRÁVEL DO MOBILE (Animado com Framer Motion + Safe Area) */}
        <AnimatePresence>
          {menuOpen && (
            <m.nav
              aria-label="Menu Mobile"
              variants={mobileMenuVariants as any}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden w-full bg-[#FFFFFF] shadow-2xl border-t border-[rgba(var(--c-primary-rgb),0.06)] overflow-hidden"
            >
              <div className="py-4 px-6 pb-[max(2rem,env(safe-area-inset-bottom,2rem))] flex flex-col max-h-[calc(100dvh-72px)] overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <m.button 
                    variants={mobileLinkVariants as any}
                    key={link.href} 
                    onTouchStart={link.isPage ? () => preloadRoute(link.href) : undefined}
                    onClick={() => handleNav(link.href, link.isPage)} 
                    style={serif}
                    className="group w-full flex items-center justify-between text-left text-[1.45rem] text-[var(--c-text-main)] py-3.5 border-b border-[rgba(var(--c-primary-rgb),0.08)] tracking-wide cursor-pointer active:text-[var(--c-accent)] transition-colors"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="font-mono text-[0.65rem] text-[var(--c-accent)] tracking-widest">
                        0{idx + 1}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <span className="text-[var(--c-accent)] opacity-60 text-base font-sans">→</span>
                  </m.button>
                ))}
                <m.button 
                  variants={mobileLinkVariants as any}
                  onClick={() => handleNav("contato", false)} 
                  className="mt-6 px-5 py-4 text-[0.7rem] font-bold text-center rounded-full uppercase tracking-[0.2em] transition-all bg-[var(--c-primary)] text-white active:scale-[0.98] hover:bg-black cursor-pointer block shadow-md"
                >
                  Agendar Consulta
                </m.button>
              </div>
            </m.nav>
          )}
        </AnimatePresence>
      </header>
      
      {/* Overlay do menu mobile: quando fechado fica "invisible" (após o fade), para o navegador
          não manter um backdrop-blur de tela cheia sendo calculado o tempo todo */}
      <div
        className={`fixed inset-0 bg-[rgba(var(--c-primary-rgb),0.35)] backdrop-blur-sm z-[9997] lg:hidden transition-[opacity,visibility] duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
