import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Dra. Julia Sidaoui",
    subtitulo: "Reabilitação & Estética Dental",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original local
    contato: {
      whatsappUrl: "https://wa.me/5512991280597?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+com+a+Dra.+Julia.", 
      whatsappLabel: "Agendar Consulta",
      telefoneLabel: "(12) 99128-0597",
      emailLabel: "contato@drajuliasidaoui.com.br",
      instagramLabel: "@juliasidaoui",
    },
    endereco: {
      bairroCidade: "São José dos Campos - SP",
      edificio: "Altos do Esplanada",
      detalhado: "Rua Itajai, 80 - Sl 604 - Conj 02\nAltos do Esplanada\nSão José dos Campos - SP, 12246-856",
      comodidades: ["Lentes de Contato Dental", "Reabilitação Oral", "Estética Facial", "Atendimento Boutique"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Dra.+Julia+Sidaoui+Dentista+em+São+José+dos+Campos",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58670.20973195401!2d-45.9781471!3d-23.210748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4b7436ad8135%3A0xbdd17f32fe2407e9!2sDra.%20Julia%20Sidaoui%20Dentista%20em%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sbr!4v1789134316660!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento Exclusivo\nCom horário marcado",
  },

  nav: {
    links: ["A Doutora", "Procedimentos", "A Essência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o caminho original
    eyebrow: "S. José dos Campos, SP",
    title1: "Sorrisos",
    title2: "construídos",
    title3: "nos detalhes.",
    desc1: "Acreditamos que a verdadeira beleza mora na",
    descBold: "harmonia e na naturalidade.",
    desc2: " Uma odontologia de altíssimo padrão focada em reabilitação oral e estética dental para transformar a sua autoestima.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Dra. Julia Sidaoui",
    badgeDesc: "CRO-SP 149524",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 66, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "atenção aos detalhes", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Profissional",
    title1: "A arte da",
    title2: "reabilitação",
    title3: "estética.",
    p1: "Localizado no Altos do Esplanada, em São José dos Campos, nosso consultório boutique foi idealizado para oferecer uma experiência odontológica única, acolhedora e exclusiva.",
    p2_1: "Sob os cuidados da ",
    p2_bold: "Dra. Julia Sidaoui (CRO-SP 149524),",
    p2_2: " nossa missão é entregar resultados sofisticados. Cada tratamento é minuciosamente planejado para valorizar a sua essência.",
    topics: [
      { title: "Odontologia de Detalhes", desc: "Planejamento minucioso de cada sorriso para garantir simetria, cor ideal e naturalidade absoluta." },
      { title: "Facetas e Lentes", desc: "Transformações estéticas de alto padrão utilizando os materiais mais modernos da odontologia." },
      { title: "Estética Facial Integrada", desc: "Preenchimentos sutis para emoldurar o seu novo sorriso e harmonizar o seu rosto." },
      { title: "Ambiente Boutique", desc: "Um espaço elegante, luminoso e confortável para que você se sinta em casa durante o tratamento." },
    ],
    btn: "Conheça o consultório",
    gallery: [
      { url: "/imagens/hero.png", title: "Estética Dental" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80", title: "Cuidado Exclusivo" },
      { url: "/imagens/leve.png", title: "Design do Sorriso" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossa Expertise",
    title1: "Beleza em",
    title2: "cada milímetro.",
    desc1: "Oferecemos tratamentos avançados focados em ",
    descBold: "reabilitação e estética",
    desc2: ", unindo técnica precisa e materiais de excelência.",
    btn: "Ver todos os procedimentos",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Facetas e Lentes de Contato", desc: "Lâminas ultrafinas desenhadas artesanalmente para corrigir cor, formato e proporção, criando um sorriso perfeito e natural." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Devolvemos a função mastigatória e a estética completa para pacientes que sofreram desgastes ou perdas dentárias." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Estética Facial e Preenchimento", desc: "Procedimentos seguros com ácido hialurônico (como preenchimento labial) para complementar e valorizar seu sorriso." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Avançado", desc: "Técnicas seguras e eficazes para devolver a luminosidade natural dos seus dentes com conforto e sem dor." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Prevenção e Longevidade", desc: "Check-ups e limpezas profundas para garantir a saúde das gengivas e a durabilidade dos seus tratamentos estéticos." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Personalizado", desc: "Tempo dedicado exclusivamente a você, com consultas sem pressa, permitindo entender e realizar o seu desejo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Julia Sidaoui", cro: "CRO-SP 149524", specialty: "Reabilitação & Estética Dental", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Nossa Filosofia",
    title1: "A odontologia",
    title2: "feita sob",
    title3: "medida.",
    desc: "Acreditamos que não existem dois sorrisos iguais. Por isso, a nossa abordagem foge do padrão industrial. Cada paciente recebe um projeto único e exclusivo.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Resultados Naturais", content: "Nossas reabilitações e facetas são desenhadas para se integrar ao seu rosto, garantindo que as pessoas notem a sua beleza, e não apenas o procedimento." },
      { title: "Foco nos Detalhes", content: "Acreditamos que a perfeição mora nos pequenos detalhes. Desde o planejamento digital até a cimentação final, nada passa despercebido." },
      { title: "Conforto Incomparável", content: "Nosso consultório foi desenhado com mármore, tons claros e uma iluminação perfeita para que você se sinta em um spa de beleza e bem-estar." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência Boutique",
    title1: "Conforto e",
    title2: "exclusividade.",
    quote: "Nosso espaço reflete a qualidade da nossa entrega: moderno, acolhedor e focado no seu bem-estar absoluto.",
    supporting: "Acompanhe nossa estrutura no Altos do Esplanada. Nossos pacientes nos avaliam com 5.0 estrelas no Google.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Consultório Dra Julia" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura Elegante" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Estética Dental" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Dra Julia Sidaoui" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos Perfeitos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "Sorrisos",
    title2: "transformados.",
    p1: "Acreditamos na",
    p_bold1: "reabilitação de alto padrão",
    p2: "que devolve a estética e a função mastigatória. Acompanhe a transformação das nossas pacientes na nossa",
    p_bold2: "galeria de resultados",
    p3: "e comprove a qualidade do nosso trabalho.",
    p_bold3: "",
    btn: "Ver Resultados Reais",
    imgUrl: "/imagens/dentes.png" // Mantido o caminho original
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde o consultório da Dra. Julia está localizado?", a: "Nosso espaço fica na Rua Itajaí, 80, Sala 604 - Conjunto 02, no bairro Altos do Esplanada, em São José dos Campos - SP." },
      { q: "Qual a diferença entre Facetas e Lentes de Contato?", a: "Ambas são finas lâminas que recobrem os dentes. As Lentes são extremamente finas (como lentes oculares) e exigem zero ou mínimo desgaste, enquanto as Facetas são ligeiramente mais espessas, ideais para correções mais severas de cor ou formato." },
      { q: "As lentes de porcelana ficam artificiais?", a: "De forma alguma. O nosso grande diferencial é o planejamento cuidadoso. Estudamos seu rosto e sorriso para criar lentes que tenham textura, translucidez e cor idênticas a um dente natural perfeito." },
      { q: "A clínica faz harmonização ou preenchimento facial?", a: "Sim, realizamos procedimentos estéticos faciais, como o preenchimento labial, com o objetivo de emoldurar o seu novo sorriso e trazer um aspecto descansado e harmonioso ao rosto." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Itajaí, 80 - Sala 604", value2: "Altos do Esplanada" },
    box2: { title: "Localização", value1: "São José dos Campos - SP", value2: "CEP: 12246-856" },
    box3: { title: "Especialidades", value1: "Facetas e Reabilitação", value2: "Estética Dental e Facial" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "O seu novo sorriso",
    title2: "começa aqui.",
    desc: "Agende sua consulta. Venha viver a experiência de uma odontologia de detalhes em um ambiente pensado exclusivamente para o seu conforto.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos casos",
    box3_desc2: "@juliasidaoui"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Dra. Julia Sidaoui | Dentista em São José dos Campos. Reabilitação & Estética Dental. Sorrisos construídos nos mínimos detalhes.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 Dra. Julia Sidaoui. Todos os direitos reservados. CRO-SP 149524.",
    registro: "Altos do Esplanada — SJC, SP"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos e Resultados",
    title1: "A beleza nos",
    title2: "mínimos detalhes.",
    p1: "Confira a transformação das nossas pacientes através da ",
    p_bold1: "Odontologia de Alto Padrão",
    p2: ". Valorizamos a",
    p_bold2: "naturalidade e a proporção",
    p3: "em cada faceta e reabilitação que construímos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética do Sorriso", 
        duration: "Facetas de Porcelana", 
        complaint: "Dentes escurecidos, com restaurações antigas aparentes e formato irregular.", 
        procedure: "Estratificação com lentes de alta qualidade devolvendo textura, brilho e uma cor natural.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Reabilitação Oral", 
        duration: "Devolução de Função", 
        complaint: "Desgaste severo dos dentes anteriores (bruxismo), afetando a mordida e envelhecendo o sorriso.", 
        procedure: "Reabilitação completa restabelecendo o tamanho original dos dentes e a guia mastigatória com cerâmicas.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Estética Facial", 
        duration: "Preenchimento Labial", 
        complaint: "Lábios finos com perda de contorno, não acompanhando a harmonia do novo sorriso.", 
        procedure: "Preenchimento sutil com ácido hialurônico focando no contorno e em um volume elegante e muito natural.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Clareamento e Acabamento", 
        duration: "Estética Conservadora", 
        complaint: "Sorriso com tonalidade amarelada devido ao tempo e consumo de pigmentos.", 
        procedure: "Protocolo de clareamento de alta performance garantindo dentes iluminados sem dor ou sensibilidade.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};