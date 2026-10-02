import { serif, globalData } from "../../data/content";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[var(--c-bg)] py-16 px-6 text-center">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
        <span style={serif} className="text-2xl tracking-[0.2em] uppercase text-white font-medium">
          Dr. Nayhan
        </span>
        <p className="text-[var(--c-text-muted)] text-sm font-light max-w-md leading-relaxed">
          {globalData.footer.sobre}
        </p>
        <a href="https://instagram.com/drnayhanandrade" target="_blank" rel="noreferrer" className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition-colors p-2">
          <InstagramIcon />
        </a>
        <div className="text-[var(--c-text-muted)] text-[0.65rem] uppercase tracking-[0.2em] mt-8 opacity-60">
          {globalData.footer.direitos}
        </div>
      </div>
    </footer>
  );
}