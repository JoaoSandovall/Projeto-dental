import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  as?: "button" | "a";
  href?: string;
  target?: string;
  colorTheme?: "light" | "dark";
  variant?: any; // Legado para não quebrar outros arquivos
  hoverText?: string; // Legado
}

export function Button({
  children,
  onClick,
  className = "",
  type = "button",
  as = "button",
  href,
  target,
  colorTheme = "light"
}: ButtonProps) {
  
  const getSafeText = (child: any): string => {
    if (typeof child === "string" || typeof child === "number") return String(child);
    if (Array.isArray(child)) return child.map(getSafeText).join("");
    if (child && typeof child === "object" && child.props && child.props.children) {
      return getSafeText(child.props.children);
    }
    return "";
  };
  const safeText = getSafeText(children).trim();

  // O motor lógico das cores
  const isDark = colorTheme === "dark";
  
  const textColor = isDark 
    ? "text-white group-hover:text-[var(--c-primary)]" 
    : "text-[var(--c-primary)] group-hover:text-white";
    
  const borderColor = isDark 
    ? "border-white/60 group-hover:border-transparent" 
    : "border-[var(--c-primary)] group-hover:border-transparent";
    
  const circleColor = isDark 
    ? "bg-white" 
    : "bg-[var(--c-primary)]";
    
  const arrowColor = isDark 
    ? "bg-white group-hover:bg-[var(--c-primary)]" 
    : "bg-[var(--c-primary)] group-hover:bg-white";

  const arrowBorder = isDark 
    ? "border-white group-hover:border-[var(--c-primary)]" 
    : "border-[var(--c-primary)] group-hover:border-white";

  // Whitespace-nowrap é crucial para o botão não quebrar em duas linhas e bugar o hover
  const baseClass = `group relative inline-flex items-center justify-center px-8 md:px-10 py-[18px] md:py-5 border-[2px] bg-transparent text-[0.7rem] md:text-[0.75rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap cursor-pointer overflow-hidden transition-all duration-300 ease-in-out select-none active:scale-[0.98] rounded-full z-10 ${textColor} ${borderColor} ${className}`;

  const content = (
    <>
      <div className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-in-out group-hover:scale-[8] z-[-1] ${circleColor}`} />
      
      <div className="relative z-10 flex items-center gap-3">
        <span>{safeText}</span>
        
        {/* A setinha (Arrow) desenhada com DIVs puras no Tailwind */}
        <div className={`relative w-[14px] h-[2px] transition-all duration-300 ease-in-out group-hover:translate-x-[6px] ${arrowColor}`}>
          <div className={`absolute right-[-2px] top-[-3px] w-[7px] h-[7px] border-r-[2px] border-t-[2px] rotate-45 transition-colors duration-300 ${arrowBorder}`} />
        </div>
      </div>
    </>
  );

  if (as === "a") {
    return (
      <a href={href} target={target} onClick={onClick as any} className={baseClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick as any} type={type} className={baseClass}>
      {content}
    </button>
  );
}