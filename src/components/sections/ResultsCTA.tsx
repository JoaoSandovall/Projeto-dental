import { useRef, useState, MouseEvent as ReactMouseEvent } from "react";
import { motion } from "framer-motion";
import { serif, globalData } from "../../data/content";

function goToResultados(e: React.MouseEvent | React.TouchEvent) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("navigate", { detail: "/resultados" }));
}

function MagneticButton({ text, onClick }: { text: string, onClick: any }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative flex items-center justify-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full bg-transparent border border-white/20 hover:border-[var(--c-accent)] transition-colors duration-500 group z-20 cursor-pointer"
    >
      <div className="absolute w-16 h-16 bg-white group-hover:bg-[var(--c-accent)] rounded-full flex items-center justify-center transition-colors duration-500">
        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      <motion.div 
        className="absolute w-full h-full p-2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <path
            id="textPath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            fill="transparent"
          />
          <text className="text-[0.7rem] uppercase tracking-[0.3em] fill-white/80 group-hover:fill-white font-bold transition-colors">
            <textPath href="#textPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>
    </motion.button>
  );
}

function Scanner({ beforeImg, afterImg, labelBefore, labelAfter }: { beforeImg: string, afterImg: string, labelBefore: string, labelAfter: string }) {
  const [position, setPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[50vh] md:h-[75vh] bg-[var(--c-dark-deep)] overflow-hidden select-none rounded-[2rem] border border-white/10 group cursor-ew-resize" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={afterImg} 
        alt="Resultado Depois" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable={false} 
      />
      
      <img 
        src={beforeImg} 
        alt="Situação Antes" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[90%] sepia-[20%] contrast-110" 
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }} 
        draggable={false} 
      />
      
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 pointer-events-none transition-transform duration-75 z-20" 
        style={{ 
          left: `calc(${position}% - 1px)`,
          boxShadow: "0 0 30px 4px rgba(207,169,104,0.6)"
        }}
      >
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 bg-white/20' : 'bg-transparent'}`}>
          <div className="w-1.5 h-1.5 bg-[var(--c-accent)] rounded-full shadow-[0_0_10px_var(--c-accent)]" />
        </div>
      </div>
      
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={position} 
        onChange={(e) => setPosition(Number(e.target.value))} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0" 
        aria-label="Scanner de Antes e Depois" 
      />
      
      <div className={`absolute top-8 left-8 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white/80 text-[0.65rem] font-bold tracking-[0.3em] uppercase mix-blend-difference">{labelBefore}</span>
      </div>
      <div className={`absolute top-8 right-8 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white/80 text-[0.65rem] font-bold tracking-[0.3em] uppercase mix-blend-difference">{labelAfter}</span>
      </div>
    </div>
  );
}

export function ResultsCTA() {
  const { results_cta, results_page } = globalData;
  const highlightCase = results_page.cases[0];

  return (
    <section id="resultados" className="relative bg-[var(--c-dark-base)] py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
        
        <div className="w-full mb-12 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h2 
            className="text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] text-white font-light tracking-tight"
            style={serif}
          >
            {results_cta.title1} <br className="hidden md:block" />
            <em className="italic text-[var(--c-accent)]">{results_cta.title2}</em>
          </h2>
          
          <div className="hidden lg:block pb-4">
            <MagneticButton text={results_cta.magneticBtn} onClick={goToResultados} />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <Scanner 
            beforeImg={highlightCase.beforeImg} 
            afterImg={highlightCase.afterImg} 
            labelBefore={results_cta.labelBefore}
            labelAfter={results_cta.labelAfter}
          />
        </motion.div>

        <div className="lg:hidden mt-16 flex justify-center w-full">
          <button 
            onClick={goToResultados} 
            className="bg-white text-black px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] w-full max-w-sm hover:bg-[var(--c-accent)] hover:text-white transition-colors duration-300"
          >
            {results_cta.btn}
          </button>
        </div>

      </div>
    </section>
  );
}