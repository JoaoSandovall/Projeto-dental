import React, { ReactNode, CSSProperties } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export function Section({ children, id, className = "", style }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 md:py-32 px-6 md:px-10 lg:px-20 scroll-mt-24 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}