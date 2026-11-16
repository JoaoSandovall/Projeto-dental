import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { serif, globalData } from "../../data/content";

export function About() {
  const { gallery } = globalData.about;
  
  // Base de 6 fotos (duplicando as 3 originais do content.tsx)
  const sixPhotos = [...gallery, ...gallery];
  
  // Criando um array massivo (120 itens) para simular um loop infinito sem sobressaltos
  const infiniteItems = Array(20).fill(sixPhotos).flat();
  
  // Iniciamos exatamente no meio do array massivo para permitir scroll infinito pros dois lados
  const [currentIndex, setCurrentIndex] = useState(60);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="sobre" 
      className="relative w-full bg-[var(--c-bg)] min-h-[80vh] py-24 overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Vitrine 2.5D Stacked */}
      <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden z-10">
        <motion.div 
          className="absolute flex items-center cursor-grab active:cursor-grabbing w-full h-full justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(e, info) => {
            const offset = info.offset.x;
            const velocity = info.velocity.x;
            
            // Combina a distância arrastada com a velocidade para um swipe natural
            if (offset < -40 || velocity < -500) {
              setCurrentIndex((prev) => prev + 1);
            } else if (offset > 40 || velocity > 500) {
              setCurrentIndex((prev) => prev - 1);
            }
          }}
        >
          {infiniteItems.map((img, index) => {
            const distance = index - currentIndex;
            const absDistance = Math.abs(distance);
            
            // Renderiza apenas os cards próximos para performance máxima (6 cards visíveis)
            if (absDistance > 3) return null;

            // Escala e Opacidade progressivas
            const scale = Math.max(1 - absDistance * 0.15, 0.65);
            
            // Z-Index: o central fica na frente de todos
            const zIndex = 50 - absDistance;
            
            // Matemática de sobreposição (Overlap) adaptável para Mobile/Desktop
            const baseOffset = isMobile ? 130 : 240;
            const secondaryOffset = isMobile ? 90 : 160;
            
            const translateX = distance === 0 
              ? 0 
              : Math.sign(distance) * (baseOffset + (absDistance > 1 ? (absDistance - 1) * secondaryOffset : 0));

            return (
              <motion.div
                key={index}
                onClick={() => handleCardClick(index)}
                className="absolute flex flex-col items-center cursor-pointer"
                animate={{
                  x: translateX,
                  scale: scale,
                  zIndex: zIndex,
                }}
                transition={{
                  // Física de mola otimizada: rápida, seca e fluida
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.8
                }}
              >
                {/* O Card */}
                <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[3/4.2] rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] group">
                  
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 group-hover:scale-105"
                    draggable="false"
                  />
                  
                  {/* Gradiente sutil para leitura do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none opacity-80" />

                  {/* Camada de esbranquecimento (White Wash) para cards inativos */}
                  <motion.div 
                    className="absolute inset-0 bg-white pointer-events-none"
                    animate={{ opacity: absDistance === 0 ? 0 : 0.65 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Borda dourada de foco no card central */}
                  {absDistance === 0 && (
                    <div className="absolute inset-0 border-[1.5px] border-[var(--c-accent)]/60 rounded-[2rem] pointer-events-none" />
                  )}

                  {/* Informações Textuais (Desaparecem suavemente nos cards do fundo) */}
                  <motion.div 
                    className="absolute bottom-8 left-0 right-0 px-6 flex flex-col items-center text-center pointer-events-none"
                    animate={{ 
                      opacity: absDistance === 0 ? 1 : 0.3,
                      y: absDistance === 0 ? 0 : 10
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide drop-shadow-md" style={serif}>
                      {img.title}
                    </h3>
                  </motion.div>
                  
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Controles Minimalistas - Apenas Setas */}
      <div className="flex items-center justify-center gap-4 mt-8 z-20">
        <button 
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="w-10 h-10 rounded-full border border-[rgba(var(--c-primary-rgb),0.1)] flex items-center justify-center text-[var(--c-primary)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 transition-all bg-white"
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        
        <button 
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className="w-10 h-10 rounded-full border border-[rgba(var(--c-primary-rgb),0.1)] flex items-center justify-center text-[var(--c-primary)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 transition-all bg-white"
          aria-label="Próximo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}