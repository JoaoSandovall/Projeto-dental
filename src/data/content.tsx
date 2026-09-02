import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Clínica Refini",
    subtitulo: "Odontologia, Estética e Saúde",
    logoUrl: "/imagens/logo.png", // Salve a logo da Refini com este nome na pasta public/imagens
    contato: {
      whatsappUrl: "https://wa.me/5582981631241", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(82) 98163-1241",
      emailLabel: "contato@clinicarefini.com.br",
      instagramLabel: "@clinicarefini",
    },
    endereco: {
      bairroCidade: "Jatiúca, Maceió - AL",
      edificio: "Empresarial Le Monde",
      detalhado: "R. José Soares Sobrinho, 119 - Sl 316\nLe Monde Empresarial\nJatiúca, Maceió - AL, 57036-640",
      comodidades: ["Estética Odontológica", "Reabilitação Oral", "Atendimento Humanizado"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clinica+Refini+Maceio",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.400804019531!2d-35.7065481!3d-9.6467526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145ce5c3afd9b%3A0x3ab5eaf709bf314e!2sCl%C3%ADnica%20Refini%20%7C%20Dentista%20Est%C3%A9tica%20em%20Macei%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1788376026966!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sexta\nEncerra às 18:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "A Essência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Sugestão: Uma foto bonita da Dra. Raquel ou da fachada da clínica
    eyebrow: "Jatiúca — Maceió, AL",
    title1: "A beleza",
    title2: "do sorriso",
    title3: "começa na intenção.",
    desc1: "Por trás de cada resultado existe",
    descBold: "uma equipe que cuida com o coração.",
    desc2: " Na Refini, acreditamos que a excelência vai além da técnica: ela está em ouvir, acolher e entender cada paciente como único.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "Excelência",
    badgeDesc: "Estética & Saúde Bucal",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 25, suffix: "+", label: "avaliações perfeitas", thousands: false },
      { target: 100, suffix: "%", label: "cuidado e dedicação", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Refini",
    title1: "Onde o cuidado é",
    title2: "tão importante",
    title3: "quanto o resultado.",
    p1: "Aqui, você não é apenas mais um atendimento. Você é parte da nossa história, e o seu sorriso é a nossa melhor conquista.",
    p2_1: "Sob a responsabilidade técnica da ",
    p2_bold: "Dra. Raquel Ferreira (CRO 1816 AL)",
    p2_2: ", a Clínica Refini, localizada no Empresarial Le Monde em Maceió, é referência em Estética Odontológica e Reabilitação Oral de alto padrão.",
    topics: [
      { title: "Estética Odontológica", desc: "Transformações de sorriso focadas em naturalidade, harmonia e na essência de cada paciente." },
      { title: "Reabilitação Oral", desc: "Devolvemos a função mastigatória e a estética com técnicas avançadas e materiais de ponta." },
      { title: "Atendimento Único", desc: "Acreditamos que a excelência está em ouvir, acolher e entender as necessidades de cada um." },
      { title: "Estrutura Premium", desc: "Localizada na Jatiúca, nossa clínica oferece um ambiente pensado para o seu máximo conforto." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/image.png", title: "Tecnologia e Precisão" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Cuidado e Dedicação" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Atenção a Cada Detalhe" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Estética",
    title2: "e Reabilitação.",
    desc1: "Oferecemos uma odontologia moderna e detalhista, focada em ",
    descBold: "elevar a sua autoestima",
    desc2: " preservando a naturalidade do seu rosto.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Contato e Facetas", desc: "Lâminas cerâmicas ultrafinas que corrigem imperfeições de cor e formato, criando um sorriso esteticamente perfeito." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Tratamentos completos para restaurar a função mastigatória, a saúde gengival e a estrutura dos dentes perdidos ou desgastados." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental Avançado", desc: "Técnicas seguras e monitoradas para devolver a luminosidade e o brilho natural ao seu sorriso." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Pequenos ajustes e restaurações em resina de alta performance que fazem toda a diferença na harmonia do rosto." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Saúde e Prevenção", desc: "Profilaxia (limpeza) profunda e check-ups rigorosos para garantir que a beleza do seu sorriso se mantenha saudável." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Cada plano de tratamento é desenhado de forma individual, respeitando os seus desejos, o seu tempo e a sua intenção." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Direção Clínica",
    members: [
      { name: "Dra. Raquel Ferreira", cro: "CRO/AL 1816", specialty: "Estética Odontológica e Reabilitação Oral", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA REFINI (Substituindo Convênios)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Essência Refini",
    title1: "A beleza começa",
    title2: "na",
    title3: "intenção.",
    desc: "Acreditamos que a verdadeira estética bucal é aquela que respeita a sua essência. No Empresarial Le Monde, preparamos um ambiente focado no seu bem-estar absoluto.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Equipe que cuida com o coração", content: "Nosso corpo clínico é treinado para ir além da técnica, proporcionando um acolhimento verdadeiro e sem pressa." },
      { title: "Você como protagonista", content: "Aqui, você não é apenas mais um atendimento. Ouvimos atentamente seus desejos antes de propor qualquer intervenção estética." },
      { title: "Estrutura de Alto Padrão", content: "Do agendamento à finalização do tratamento, cada detalhe em nossa clínica na Jatiúca foi pensado para transmitir paz e sofisticação." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência",
    title1: "Atenção a",
    title2: "cada detalhe.",
    quote: "A excelência vai além da técnica. Ela está em ouvir, acolher e entender cada paciente como único.",
    supporting: "Acompanhe um pouco da nossa rotina clínica e do ambiente onde transformamos vidas através do sorriso.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Clínica Refini" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Tratamento Odontológico" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Equipe Refini" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Sorrisos Refini" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossa Filosofia",
    title1: "Transformações",
    title2: "que marcam a vida.",
    p1: "O seu sorriso é a nossa",
    p_bold1: "melhor conquista.",
    p2: "Veja o impacto de um tratamento executado com precisão técnica e",
    p_bold2: "atenção aos mínimos detalhes",
    p3: "explorando a nossa",
    p_bold3: "galeria de resultados clínicos.",
    btn: "Ver Casos Clínicos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde a Clínica Refini está localizada?", a: "Estamos no Empresarial Le Monde (Sala 316), localizado na Rua José Soares Sobrinho, 119, no bairro de Jatiúca, em Maceió - AL." },
      { q: "Quais são as especialidades da Dra. Raquel Ferreira?", a: "A Dra. Raquel atua com foco primordial em Estética Odontológica (como facetas e lentes de contato) e na Reabilitação Oral de alta complexidade." },
      { q: "O que significa 'Reabilitação Oral'?", a: "É um conjunto de procedimentos que visam restaurar a saúde bucal completa do paciente, devolvendo a mastigação perfeita, a saúde das gengivas e a estética do sorriso." },
      { q: "Como funciona a primeira avaliação na Refini?", a: "Nossa avaliação é o momento de ouvir você. Entendemos as suas intenções, necessidades e histórico, realizamos uma análise clínica rigorosa e, a partir daí, desenhamos um plano de tratamento exclusivo." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Empresarial Le Monde, Sala 316", value2: "R. José Soares Sobrinho, 119" },
    box2: { title: "Localização", value1: "Jatiúca, Maceió - AL", value2: "CEP: 57036-640" },
    box3: { title: "Especialidades", value1: "Estética Odontológica", value2: "Reabilitação Oral e Saúde" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "O seu sorriso",
    title2: "é a nossa prioridade.",
    desc: "Venha viver uma experiência odontológica onde o cuidado é tão importante quanto o resultado perfeito. Fale com nossa equipe.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos resultados",
    box3_desc2: "@clinicarefini"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Clínica Refini | Excelência em estética e saúde bucal em Maceió. Nossa missão é cuidar de você com técnica apurada e muito coração.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Clínica Refini. Todos os direitos reservados. RT: Dra. Raquel Ferreira, CRO-AL 1816.",
    registro: "Jatiúca — Maceió, AL"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "naturalidade.",
    p1: "Confira o impacto transformador da",
    p_bold1: "Estética Odontológica",
    p2: " aliada à reabilitação da saúde. Na ",
    p_bold2: "Clínica Refini",
    p3: ", cada sorriso construído pela Dra. Raquel respeita a simetria e a intenção individual do paciente.",
    btnSaberMais: "Agendar avaliação estética",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Estética Avançada", duration: "Facetas Cerâmicas", complaint: "Descontentamento com o formato, desgastes naturais e coloração irregular do sorriso.", procedure: "Planejamento estético rigoroso e aplicação de lentes/facetas garantindo uma renovação natural e iluminada.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Reabilitação Oral", duration: "Saúde e Função", complaint: "Desgaste acentuado da estrutura dental, afetando a mastigação e o suporte dos lábios.", procedure: "Recuperação da dimensão vertical e restauração completa da função e da beleza anatômica dos dentes.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Clareamento e Harmonia", duration: "Odontologia Estética", complaint: "Sorriso envelhecido devido à absorção de pigmentos ao longo dos anos.", procedure: "Clareamento associado à adequação estética, devolvendo a cor branco-leitoso e a vitalidade.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" },
      { category: "Restauração de Alta Performance", duration: "Clínica Integrada", complaint: "Restaurações antigas escurecidas e pequenas fraturas que tiravam a confiança ao sorrir.", procedure: "Substituição por resinas de alta tecnologia, imperceptíveis e com excelente durabilidade e polimento.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" }
    ]
  }
};