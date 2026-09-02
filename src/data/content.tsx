import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Nilton Dias",
    subtitulo: "Odontologia Estética",
    logoUrl: "/imagens/logo.png", // Salve a logo da onda azul com esse mesmo nome
    contato: {
      whatsappUrl: "https://wa.me/55...", // Coloque o número aqui
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "Agende sua consulta",
      emailLabel: "contato@niltondiasodontologia.com.br",
      instagramLabel: "@niltondiasodontologiaestetica",
    },
    endereco: {
      bairroCidade: "Santana do Araguaia, PA",
      edificio: "Av. José Mendonça, 185",
      detalhado: "Av. José Mendonça, 185\nSantana do Araguaia - PA",
      comodidades: ["Lentes de Contato", "Implantes Dentários", "Estética Avançada"],
      mapaGpsUrl: "https://maps.google.com/?q=Av.+José+Mendonça,+185+-+Santana+do+Araguaia",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.848526569112!2d-50.60334812386927!3d-10.43444458969476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d7732a394cf965%3A0xcabf1be2edb07d61!2sSantana%20do%20Araguaia%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1714440000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimentos sob agendamento",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Resultados", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Se for usar foto, pode colocar a da moça sorrindo tapando os olhos
    eyebrow: "Santana do Araguaia",
    title1: "Odontologia",
    title2: "estética,",
    title3: "resultados naturais.",
    desc1: "Mais do que transformar um sorriso,",
    descBold: "é transformar a forma como você se sente.",
    desc2: " Cada detalhe é pensado para alcançar um resultado harmônico que tenha a ver com a sua essência.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Destaque",
    badgeDesc: "Odontologia Estética",
    stats: [
      { target: 5, suffix: ".0", label: "nota de satisfação", thousands: false },
      { target: 800, suffix: "+", label: "acompanham nosso trabalho", thousands: false },
      { target: 100, suffix: "%", label: "foco em naturalidade", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "O Consultório",
    title1: "Confiança e",
    title2: "leveza ao sorrir.",
    p1: "Mais do que transformar um sorriso, é transformar a forma como alguém se sente ao sorrir. É resgatar a felicidade de se reconhecer novamente no próprio reflexo.",
    p2_1: "Sob a responsabilidade do ",
    p2_bold: "Dr. Nilton Dias",
    p2_2: ", nossa estrutura atua como referência em estética dental em Santana do Araguaia, oferecendo tratamentos precisos em lentes, próteses e implantes.",
    topics: [
      { title: "Lentes de Contato Dental", desc: "Transformação estética com preservação, corrigindo forma, cor e alinhamento." },
      { title: "Implantes Dentários", desc: "Procedimento seguro e preciso que devolve qualidade de vida e função." },
      { title: "Prótese e Reabilitação", desc: "Soluções sob medida para devolver a segurança ao mastigar e falar." },
      { title: "Clareamento e Estética", desc: "Técnicas avançadas para um sorriso iluminado, com extrema naturalidade." },
    ],
    btn: "Quero agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&fit=crop", title: "Tecnologia e Precisão" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Cuidado em cada detalhe" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Resultados Naturais" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Nossos",
    title2: "Tratamentos.",
    desc1: "Atuamos com foco absoluto em ",
    descBold: "estética e função",
    desc2: " para entregar a você o sorriso que sempre desejou, com técnicas modernas e previsíveis.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Contato e Facetas", desc: "Laminados cerâmicos ultrafinos planejados para corrigir cor e formato com total naturalidade." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "A solução ideal e segura para quem perdeu um ou mais dentes e quer voltar a sorrir com confiança." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Próteses Dentárias", desc: "Reabilitação estética e funcional utilizando materiais de alta resistência e beleza anatômica." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Protocolos seguros e altamente eficazes para remover manchas e entregar um sorriso iluminado." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Odontologia Geral", desc: "Diagnóstico e prevenção clínica focado em garantir a máxima longevidade para os seus tratamentos." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Planejamento Personalizado", desc: "Cada tratamento começa com uma análise do seu rosto, visando um resultado puramente exclusivo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Dr. Nilton Dias",
    members: [
      { name: "Dr. Nilton Dias", cro: "Odontologia Estética", specialty: "Lentes, Próteses e Implantes", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "O Consultório",
    title1: "Um espaço pensado",
    title2: "para a sua",
    title3: "confiança e conforto.",
    desc: "Em Santana do Araguaia, criamos um ambiente onde a tecnologia se encontra com um atendimento humano e acolhedor para a sua melhor experiência.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Odontologia Moderna", content: "Utilizamos as melhores técnicas e materiais para garantir procedimentos seguros e esteticamente perfeitos." },
      { title: "Foco na Essência do Paciente", content: "Acreditamos que o melhor sorriso não é o mais artificial, e sim aquele que harmoniza perfeitamente com você." },
      { title: "Atendimento Criterioso", content: "O Dr. Nilton conduz cada planejamento lado a lado com o paciente, esclarecendo todas as dúvidas do processo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Transformações Reais",
    quote: "A confiança, a leveza e a felicidade imensa de se reconhecer ainda mais no próprio sorriso.",
    supporting: "Casos como o da Andressa refletem a nossa missão: cada detalhe alcançado de forma natural, harmônica e que faz sentido para você.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Sorriso Natural" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Equipe em ação" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Cuidado Clínico" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Sorriso Transformado" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Consultório" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Resultados Estéticos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "Técnica que",
    title2: "transforma vidas.",
    p1: "A visão técnica do",
    p_bold1: "Dr. Nilton Dias",
    p2: "está impressa em cada tratamento finalizado. Explore a nossa",
    p_bold2: "galeria de casos",
    p3: "e comprove a qualidade de uma",
    p_bold3: "estética de alto nível",
    btn: "Ver Antes e Depois",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde o Dr. Nilton Dias atende?", a: "Nosso consultório está localizado na Av. José Mendonça, 185, em Santana do Araguaia - PA." },
      { q: "Quais são as principais especialidades do consultório?", a: "Nosso foco maior é na Odontologia Estética e Reabilitação, incluindo Lentes de Contato Dental, Implantes, Próteses e Clareamento." },
      { q: "Como saber se preciso de implante ou prótese?", a: "A melhor forma é agendando uma avaliação. O Dr. Nilton fará uma análise clínica rigorosa para determinar a solução mais segura para o seu caso específico." },
      { q: "As lentes de contato dental ficam com aspecto artificial?", a: "Não. Nosso planejamento é focado em entregar resultados absolutamente naturais e harmônicos, respeitando o formato do seu rosto e a sua essência." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Av. José Mendonça, 185", value2: "Santana do Araguaia - PA" },
    box2: { title: "Atendimento", value1: "Agendamento prévio", value2: "Entre em contato via WhatsApp" },
    box3: { title: "Especialidades", value1: "Lentes de Contato, Implantes", value2: "Prótese e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Volte a sorrir com",
    title2: "segurança.",
    desc: "Agende sua consulta com o Dr. Nilton Dias e descubra como uma técnica precisa pode devolver sua qualidade de vida.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos resultados",
    box3_desc2: "@niltondiasodontologiaestetica"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Odontologia estética em Santana do Araguaia. Lentes, próteses e implantes sob a responsabilidade e dedicação técnica do Dr. Nilton Dias.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Nilton Dias Odontologia. Todos os direitos reservados.",
    registro: "Santana do Araguaia, PA"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Antes e Depois",
    title1: "Resultados com",
    title2: "harmonia real.",
    p1: "Confira o reflexo do",
    p_bold1: "planejamento criterioso",
    p2: " da nossa equipe. Cada caso do ",
    p_bold2: "Dr. Nilton Dias",
    p3: "  é construído para entregar naturalidade, beleza e recuperação mastigatória total.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Lentes de Contato", duration: "Estética", complaint: "Desgaste dentário, espaçamentos e descontentamento com o formato natural do sorriso.", procedure: "Planejamento com lentes cerâmicas preservando a estrutura para um encaixe harmônico.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Reabilitação com Prótese", duration: "Função e Beleza", complaint: "Dificuldade mastigatória severa e baixa autoestima ao sorrir devido à perda de estrutura.", procedure: "Prótese sobre medida garantindo devolução integral da estética e qualidade de vida.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Implante Dentário", duration: "Segurança", complaint: "Perda dentária localizada que gerava insegurança ao falar e sorrir em público.", procedure: "Cirurgia precisa e segura com pino de titânio e coroa de porcelana idêntica ao dente natural.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" },
      { category: "Clareamento Avançado", duration: "Iluminação", complaint: "Dentes escurecidos e amarelados com o passar do tempo.", procedure: "Protocolo de clareamento estético para remoção de pigmentos mantendo a saúde do esmalte.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" }
    ]
  }
};