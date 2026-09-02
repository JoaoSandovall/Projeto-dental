import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Thaynara Alcântara",
    subtitulo: "Odontologia Especializada",
    logoUrl: "/imagens/logo.png", // Salve a logo Rose Gold dela com esse nome na pasta imagens
    contato: {
      whatsappUrl: "https://wa.me/5561986130283", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(61) 98613-0283",
      emailLabel: "contato@thaynaraodontologia.com.br",
      instagramLabel: "@thayalcantara.odonto",
    },
    endereco: {
      bairroCidade: "Gama, Brasília - DF",
      edificio: "Ed. Alternativo Center - Sala 126",
      detalhado: "A/E 20/21 Lado Oeste, Sala 126\nEd. Alternativo Center Setor Central\nGama, Brasília - DF, 72405-922\n(Localizado na Ótica Center)",
      comodidades: ["Ortodontia", "Alinhadores Estéticos", "Clínica Geral"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Thaynara+Alcântara+Odontologia+Gama",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.10172036142!2d-48.082333970700525!3d-16.008219451780874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935981932bc8f8ed%3A0x29985b42f00fc091!2sThaynara%20Alc%C3%A2ntara%20%7C%20Odontologia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1788355215863!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimentos sob agendamento\nReabre às 13:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Resultados", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Sugestão: Uma foto bonita dela no consultório
    eyebrow: "Gama — Brasília, DF",
    title1: "O sorriso é o",
    title2: "cartão de visitas.",
    title3: "Vá com ele aonde for.",
    desc1: "Na clínica Thaynara Alcântara,",
    descBold: "cada detalhe da sua saúde bucal importa.",
    desc2: " Oferecemos uma odontologia especializada, moderna e focada em devolver a sua melhor versão.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Destaque",
    badgeDesc: "Ortodontia & Estética",
    stats: [
      { target: 4, suffix: ".8", label: "nota no google", thousands: false },
      { target: 20, suffix: "+", label: "avaliações 5 estrelas", thousands: false },
      { target: 100, suffix: "%", label: "foco no paciente", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Cuidado, estética e",
    title2: "saúde em um só lugar.",
    p1: "Acreditamos que um sorriso saudável e bem cuidado tem o poder de transformar a autoestima e abrir portas na vida pessoal e profissional.",
    p2_1: "Liderada pela ",
    p2_bold: "Dra. Thaynara Alcântara",
    p2_2: ", nossa clínica no Edifício Alternativo Center une técnicas ortodônticas modernas (como os alinhadores invisíveis) a um atendimento humanizado e transparente.",
    topics: [
      { title: "Ortodontia Especializada", desc: "Aparelhos estéticos e tradicionais para o alinhamento perfeito dos seus dentes." },
      { title: "Alinhadores Invisíveis", desc: "Tratamento discreto, confortável e previsível para quem busca discrição." },
      { title: "Prevenção e Profilaxia", desc: "Limpezas profundas e orientações completas para manter sua saúde bucal em dia." },
      { title: "Estética Dental", desc: "Clareamentos e procedimentos voltados para iluminar e harmonizar seu sorriso." },
    ],
    btn: "Quero agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&fit=crop", title: "Tecnologia e Conforto" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento Humanizado" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Seu melhor sorriso" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Nossos",
    title2: "Tratamentos.",
    desc1: "Do alinhamento ortodôntico à estética, entregamos ",
    descBold: "excelência técnica",
    desc2: " para garantir que seu sorriso seja sua melhor assinatura.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Alinhadores Estéticos (Invisíveis)", desc: "A revolução da ortodontia: aparelhos transparentes e removíveis que alinham seus dentes sem comprometer a estética." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Ortodontia Convencional", desc: "Aparelhos metálicos e de safira com planejamento rigoroso para correção de mordidas e alinhamento." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Técnicas seguras para devolver a luminosidade natural dos seus dentes, removendo manchas e amarelados." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Limpeza (Profilaxia)", desc: "A base da saúde bucal: remoção de tártaro, placa bacteriana e aplicação de flúor para evitar cáries." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Clínica Geral", desc: "Restaurações, avaliações de rotina e cuidados essenciais para manter a integridade dos seus dentes." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Personalizado", desc: "Uma consulta sem pressa, onde suas dúvidas são ouvidas e o tratamento é traçado junto com você." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Dra. Thaynara",
    members: [
      { name: "Dra. Thaynara Alcântara", cro: "Ortodontista", specialty: "Odontologia Especializada", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "O Consultório",
    title1: "Um espaço pensado",
    title2: "para o seu",
    title3: "conforto no Gama.",
    desc: "Localizada no Edifício Alternativo Center, nossa clínica oferece uma estrutura moderna, segura e de fácil acesso para que você tenha a melhor experiência odontológica.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Localização Privilegiada", content: "Estamos no Setor Central do Gama (dentro da Ótica Center), com fácil acesso para você." },
      { title: "Acompanhamento Direto", content: "Aqui você não é apenas um número. A Dra. Thaynara acompanha de perto a evolução de cada etapa do seu sorriso." },
      { title: "Ambiente Acolhedor", content: "Um espaço limpo, organizado e preparado para receber você e sua família com total segurança." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Nosso Dia a Dia",
    quote: "Você leva o seu sorriso para todos os lugares. Invista na sua saúde bucal com quem entende do assunto.",
    supporting: "Acompanhe um pouco do nosso trabalho clínico e veja como o cuidado diário reflete na confiança dos nossos pacientes.",
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
    title1: "Ortodontia que",
    title2: "transforma.",
    p1: "A técnica certa nas mãos da",
    p_bold1: "Dra. Thaynara Alcântara",
    p2: "traz resultados visíveis. Explore nossa",
    p_bold2: "galeria de evolução",
    p3: "e veja como o tratamento adequado pode alinhar estética e função.",
    btn: "Ver Casos Clínicos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ - INCORPORANDO A DICA DO INSTAGRAM DELA AQUI!
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Quais são os 5 itens obrigatórios na necessaire de quem usa aparelho?", a: "Dica de ortodontista! 1️⃣ Escova dental em V (limpa ao redor do bráquete). 2️⃣ Escova de tufo (para os cantinhos difíceis). 3️⃣ Passa fio (não ter como usar não é mais desculpa). 4️⃣ Enxaguante bucal com fluoreto. 5️⃣ Escova macia (força demais causa retração, não limpeza!)." },
      { q: "Onde fica o consultório?", a: "Atendemos na A/E 20/21 Lado Oeste, Sala 126, no Edifício Alternativo Center (dentro da Ótica Center), no Setor Central do Gama - DF." },
      { q: "Vocês trabalham com alinhadores estéticos (invisíveis)?", a: "Sim! Os alinhadores são uma excelente opção para quem busca um tratamento ortodôntico discreto, rápido e muito mais confortável." },
      { q: "Como faço para agendar uma avaliação?", a: "Basta clicar no botão do WhatsApp aqui no site! Você falará diretamente com nossa equipe para agendar o melhor horário para a sua rotina." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Ed. Alternativo Center, Sala 126", value2: "Setor Central, Gama - DF" },
    box2: { title: "Atendimento", value1: "Agendamento prévio", value2: "Entre em contato via WhatsApp" },
    box3: { title: "Especialidades", value1: "Ortodontia, Alinhadores", value2: "Clínica Geral e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Seu sorriso",
    title2: "pede atenção.",
    desc: "Não deixe para depois o cartão de visitas que te acompanha todos os dias. Agende sua avaliação com a Dra. Thaynara.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossas dicas diárias",
    box3_desc2: "@thayalcantara.odonto"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Odontologia Especializada no Gama, DF. Ortodontia, prevenção e estética sob a responsabilidade e dedicação técnica da Dra. Thaynara Alcântara.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Thaynara Alcântara Odontologia. Todos os direitos reservados.",
    registro: "Gama, Brasília - DF"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Antes e Depois",
    title1: "Resultados com",
    title2: "precisão clínica.",
    p1: "Confira a evolução promovida pelo",
    p_bold1: "tratamento ortodôntico e estético",
    p2: " na clínica da ",
    p_bold2: "Dra. Thaynara",
    p3: ". Cada sorriso é construído com dedicação e muito planejamento.",
    btnSaberMais: "Agendar avaliação ortodôntica",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Alinhadores Invisíveis", duration: "Ortodontia", complaint: "Desalinhamento e espaçamentos sem o desejo de usar aparelhos metálicos fixos.", procedure: "Tratamento previsível e confortável utilizando placas transparentes e removíveis.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Ortodontia Metálica", duration: "Alinhamento", complaint: "Mordida cruzada e dentes apinhados dificultando a mastigação e higienização.", procedure: "Uso de aparelho fixo tradicional associado às técnicas de higienização recomendadas (escova em V e passa fio).", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Clareamento Dental", duration: "Estética", complaint: "Dentes amarelados e sem brilho devido à alimentação e falta de manutenção.", procedure: "Protocolo seguro de clareamento aliado a uma profilaxia profunda, removendo manchas e tártaro.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" },
      { category: "Restauração Estética", duration: "Clínica Geral", complaint: "Dentes com cáries iniciais afetando a estética e a segurança ao sorrir.", procedure: "Remoção do tecido cariado e restauração imperceptível com resina da cor exata do dente natural.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" }
    ]
  }
};