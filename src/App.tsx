import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services"; 
import { Team } from "./components/sections/Team"; 
import { Convenios } from "./components/sections/Convenios";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Location } from "./components/sections/Location";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  // Ativa as animações de surgimento dos elementos
  useScrollReveal();

  // Função simplificada: agora ela apenas rola a página suavemente até a seção desejada
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header goTo={goTo} />
      
      {/* Estrutura de Landing Page (Funil de Vendas) - Sem quebras ou abas externas */}
      <div style={{ position: "relative" }}>
        <Hero goTo={goTo} />
        <About goTo={goTo} />
        <Services goTo={goTo} /> 
        <Team />
        <Convenios />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
        <Footer />
      </div>
    </>
  );
}