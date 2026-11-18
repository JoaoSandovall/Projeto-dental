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
}

function getSafeText(child: React.ReactNode): string {
  if (typeof child === "string" || typeof child === "number") return String(child);
  if (Array.isArray(child)) return child.map(getSafeText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(child) && child.props.children) {
    return getSafeText(child.props.children);
  }
  return "";
}

export function Button({
  children,
  onClick,
  className = "",
  type = "button",
  as = "button",
  href,
  target,
  colorTheme = "light",
}: ButtonProps) {
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
      <a href={href} target={target} onClick={onClick} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClass}>
      {content}
    </button>
  );
}
