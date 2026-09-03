import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Dra. Maraiza Horni",
    subtitulo: "Odontologia Especializada",
    logoUrl: "/imagens/logo.png", // Certifique-se de ter a logo salva na pasta public/imagens
    contato: {
      whatsappUrl: "https://wa.me/559293094920", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(92) 99309-4920",
      emailLabel: "contato@dramaraizahorni.com.br",
      instagramLabel: "@dra.maraiza_horni",
    },
    endereco: {
      bairroCidade: "São José, Manacapuru - AM",
      edificio: "Consultório Odontológico",
      detalhado: "Rua Waldemar Ventura, 397\nSão José\nManacapuru - AM, 69400-746",
      comodidades: ["Alinhadores Transparentes", "Implantes", "Clínica Geral", "Odontopediatria"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Dra+Maraiza+Horni+Dentista+Manacapuru",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2290203777898!2d-60.63067682416148!3d-3.2933697966815316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926e8771a90d0869%3A0x4f05e0bc7109982d!2sDra%20Maraiza%20Horni%20(Dentista)!5e0!3m2!1spt-BR!2sbr!4v1788473094589!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nA partir das 08:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Alinhadores", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png",
    eyebrow: "Manacapuru, AM",
    title1: "Seu sorriso",
    title2: "transformado",
    title3: "com leveza.",
    desc1: "Seu sorriso pode mudar sem precisar",
    descBold: "chamar atenção para o aparelho.",
    desc2: " Unimos discrição, conforto e planejamento para transformar o seu sorriso de um jeito muito mais leve.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Conhecer tratamentos",
    badgeTitle: "Dra. Maraiza",
    badgeDesc: "CRO AM 5488",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 40, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco em você", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Profissional",
    title1: "Cuidado e",
    title2: "precisão",
    title3: "em cada detalhe.",
    p1: "Localizado em Manacapuru, o consultório da Dra. Maraiza Horni é referência em tratamentos modernos, unindo tecnologia e acolhimento para toda a família.",
    p2_1: "Como ",
    p2_bold: "cirurgiã-dentista (CRO AM 5488)",
    p2_2: ", a Dra. Maraiza atua com excelência em Clínica Geral, Implantes e Ortodontia, garantindo um atendimento cuidadoso para adultos e crianças.",
    topics: [
      { title: "Ortodontia Invisível", desc: "Alinhadores transparentes que unem discrição e eficiência no tratamento." },
      { title: "Implantodontia", desc: "Devolva a função mastigatória e a estética do seu sorriso com total segurança." },
      { title: "Odontopediatria", desc: "Atendimento acolhedor e paciente focado na saúde bucal das crianças." },
      { title: "Clínica Geral", desc: "Prevenção, limpezas e cuidados essenciais para manter seu sorriso saudável." },
    ],
    btn: "Quero agendar uma consulta",
    gallery: [
      { url: "/imagens/hero.png", title: "Saúde Bucal" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Cuidado Humanizado" },
      { url: "/imagens/leve.png", title: "Sorrisos Leves" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Atendimento para",
    title2: "adultos e crianças.",
    desc1: "Oferecemos soluções completas para a sua saúde bucal, unindo ",
    descBold: "técnicas modernas e conforto",
    desc2: " em todas as etapas do seu tratamento.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Ortodontia & Alinhadores", desc: "Sorriso alinhado com discrição. Somos especialistas em transformar sorrisos sem chamar atenção para o aparelho." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "Recupere a confiança ao sorrir e a segurança ao mastigar com nossos tratamentos de implantodontia." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clínica Geral & Prevenção", desc: "A base de um sorriso bonito é a saúde. Realizamos limpezas, restaurações e check-ups completos." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Cuidamos dos sorrisos dos pequenos com muita paciência e técnicas voltadas para o conforto infantil." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Renove a cor e o brilho dos seus dentes de forma segura, rápida e eficiente no consultório." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Um ambiente preparado para que você e sua família se sintam confortáveis e acolhidos." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Nossa Equipe",
    members: [
      { name: "Dra. Maraiza Horni", cro: "CRO AM 5488", specialty: "Dentista e Ortodontista", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA (Foco nos Alinhadores)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Ortodontia Invisível",
    title1: "Sorria com",
    title2: "liberdade e",
    title3: "discrição.",
    desc: "Os alinhadores transparentes unem discrição, conforto e planejamento para transformar o sorriso de um jeito muito mais leve. Quer saber se eles são uma opção para você?",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Praticidade no dia a dia", content: "Sendo removíveis, os alinhadores facilitam a higienização e não impõem restrições alimentares." },
      { title: "Estética Incomparável", content: "Corrija seus dentes sem que ninguém perceba. O material é transparente e se adapta perfeitamente ao seu sorriso." },
      { title: "Mais Conforto e Previsibilidade", content: "Sem fios metálicos machucando a boca. O tratamento é planejado digitalmente para ser suave e exato." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência",
    title1: "Atenção a",
    title2: "cada detalhe.",
    quote: "Nosso objetivo é garantir que cada visita ao dentista seja uma experiência leve e positiva.",
    supporting: "Acompanhe nosso ambiente e estrutura, preparados com carinho para receber pacientes de todas as idades.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Dra Maraiza" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento Odontológico" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossa Filosofia",
    title1: "Sorrisos",
    title2: "transformados.",
    p1: "Acreditamos no poder de um sorriso saudável.",
    p_bold1: "Veja na prática",
    p2: "como nossos tratamentos de ortodontia, implantes e reabilitação estética trazem de volta a confiança dos nossos pacientes em nossa",
    p_bold2: "galeria de resultados.",
    p3: "",
    p_bold3: "",
    btn: "Ver Casos Clínicos",
    imgUrl: "/imagens/dentes.png"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde o consultório está localizado?", a: "Nosso consultório fica na Rua Waldemar Ventura, 397, no bairro São José, em Manacapuru - AM." },
      { q: "Os alinhadores transparentes servem para o meu caso?", a: "Os alinhadores são indicados para a maioria dos casos de desalinhamento dental. Para ter certeza, precisamos realizar uma avaliação clínica e um planejamento digital." },
      { q: "A partir de qual idade as crianças podem ser atendidas?", a: "O ideal é que a primeira consulta aconteça logo nos primeiros anos de vida, focado na prevenção e na correta higienização dos dentes de leite." },
      { q: "O implante dentário dói?", a: "Não. O procedimento de instalação de implantes é feito sob anestesia local, tornando a cirurgia completamente indolor e tranquila para o paciente." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Waldemar Ventura, 397", value2: "Bairro São José" },
    box2: { title: "Localização", value1: "Manacapuru - AM", value2: "CEP: 69400-746" },
    box3: { title: "Especialidades", value1: "Ortodontia, Implantes", value2: "Clínica Geral e Infantil" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Quer saber se os alinhadores",
    title2: "são para você?",
    desc: "Agende sua avaliação e descubra como a odontologia moderna pode transformar o seu sorriso de forma rápida, confortável e invisível.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe a Clínica",
    box3_desc2: "@dra.maraiza_horni"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Dra. Maraiza Horni | Clínica Geral, Implantes e Ortodontia. Atendimento especializado para adultos e crianças em Manacapuru-AM.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Dra. Maraiza Horni. Todos os direitos reservados. CRO AM 5488.",
    registro: "Manacapuru - AM"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "previsibilidade.",
    p1: "Confira o impacto transformador dos nossos tratamentos em ",
    p_bold1: "ortodontia e reabilitação",
    p2: ". Devolver a saúde e a estética do sorriso é o nosso",
    p_bold2: "maior compromisso.",
    p3: "",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Alinhadores Transparentes", 
        duration: "Ortodontia Invisível", 
        complaint: "Dentes desalinhados gerando desconforto estético e paciente com resistência ao uso de aparelhos metálicos.", 
        procedure: "Tratamento discreto com alinhadores removíveis, corrigindo o sorriso com alto conforto e estética.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Implantodontia", 
        duration: "Segurança e Função", 
        complaint: "Perda de dentes que causava insegurança ao mastigar e ao sorrir.", 
        procedure: "Instalação cirúrgica de implantes e colocação de prótese fixa, restaurando a saúde funcional da boca.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Odontologia Estética", 
        duration: "Clareamento e Resinas", 
        complaint: "Sorriso com coloração amarelada e desgastes no esmalte dental ao longo dos anos.", 
        procedure: "Clareamento clínico associado a leves adequações estéticas em resina, devolvendo a juventude ao sorriso.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Clínica Geral Integrada", 
        duration: "Saúde Bucal", 
        complaint: "Dores pontuais e necessidade de adequação de saúde bucal após longo período sem ir ao dentista.", 
        procedure: "Profilaxia completa, remoção de cáries e restaurações seguras para prevenir problemas futuros.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      }
    ]
  }
};