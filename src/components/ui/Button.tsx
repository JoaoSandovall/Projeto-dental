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
  variant?: any;
  hoverText?: string;
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
  
  // Limpeza de texto para evitar quebras do React Nodes
  const getSafeText = (child: any): string => {
    if (typeof child === "string" || typeof child === "number") return String(child);
    if (Array.isArray(child)) return child.map(getSafeText).join("");
    if (child && typeof child === "object" && child.props && child.props.children) {
      return getSafeText(child.props.children);
    }
    return "";
  };
  
  const safeText = getSafeText(children).trim();
  const themeClass = colorTheme === "dark" ? "custom-btn-dark" : "custom-btn-light";
  const combinedClass = `custom-learn-more-btn ${themeClass} ${className}`;

  const content = (
    <>
      <span className="button-text">
        {safeText}
        <div className="arrow" />
      </span>
      <div className="circle" />
    </>
  );

  if (as === "a") {
    return (
      <a href={href} target={target} onClick={onClick as any} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick as any} type={type} className={combinedClass}>
      {content}
    </button>
  );
}