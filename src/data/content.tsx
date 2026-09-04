import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Instituto Áurea",
    subtitulo: "A Arte de Sorrir com Alma",
    logoUrl: "/imagens/logo.png", // Sua logo local
    contato: {
      whatsappUrl: "https://wa.me/5511988887777", 
      whatsappLabel: "Conversar com a Concierge",
      telefoneLabel: "(11) 98888-7777",
      emailLabel: "contato@institutoaurea.com.br",
      instagramLabel: "@instituto.aurea",
    },
    endereco: {
      bairroCidade: "Jardins, São Paulo - SP",
      edificio: "Boulevard Design, Cobertura 12",
      detalhado: "Avenida das Gardênias, 1200\nBoulevard Design\nJardins, São Paulo - SP, 01400-000",
      comodidades: ["Estética Natural", "Ambiente de Spa", "Odontologia Humanizada", "Reabilitação"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Jardins+Sao+Paulo",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975850290515!2d-46.66699318447573!3d-23.561332784682496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e54bba9%3A0xc0fb1f2c2ecf555c!2sRua%20Oscar%20Freire%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimentos Exclusivos\nSegunda a Sexta, das 09:00 às 19:00",
  },

  nav: {
    links: ["O Instituto", "Especialidades", "A Experiência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    eyebrow: "Jardins, São Paulo",
    title1: "A sua essência,",
    title2: "refletida em",
    title3: "cada detalhe.",
    desc1: "Acreditamos que o sorriso é a",
    descBold: "sua assinatura no mundo.",
    desc2: " No Instituto Áurea, unimos ciência, arte e muito acolhimento para revelar a sua melhor versão de forma natural.",
    btnPrimary: "Agendar minha experiência",
    btnOutline: "Nossa Filosofia",
    badgeTitle: "Dra. Helena Valença",
    badgeDesc: "Diretora Clínica",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas de satisfação", thousands: false },
      { target: 15, suffix: "+", label: "anos de maestria", thousands: false },
      { target: 100, suffix: "%", label: "foco em naturalidade", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Filosofia",
    title1: "Mais do que dentes,",
    title2: "nós cuidamos",
    title3: "de pessoas.",
    p1: "Criamos o Instituto Áurea para ser um refúgio. Um lugar onde a ansiedade de ir ao dentista dá lugar ao bem-estar e ao cuidado genuíno.",
    p2_1: "Liderado pela ",
    p2_bold: "Dra. Helena Valença",
    p2_2: ", nossa clínica foi desenhada para oferecer uma odontologia sem dor, sem pressa e pautada no respeito absoluto aos seus traços naturais e à sua história.",
    topics: [
      { title: "Estética com Alma", desc: "Procedimentos planejados digitalmente para devolver a harmonia ao rosto, sem exageros." },
      { title: "Ambiente de Spa", desc: "Aromaterapia, música ambiente e um chá quente esperando por você na recepção." },
      { title: "Medicina do Conforto", desc: "Técnicas de sedação moderna e controle rigoroso da dor em todas as etapas." },
      { title: "Tempo para Você", desc: "Consultas estendidas. Aqui nós sentamos, ouvimos e entendemos seus desejos antes de qualquer intervenção." },
    ],
    btn: "Conhecer a Diretora Clínica",
    gallery: [
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80", title: "Beleza Natural" },
      { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80", title: "Acolhimento" },
      { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80", title: "Precisão" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossa Expertise",
    title1: "Arte,",
    title2: "ciência e saúde.",
    desc1: "Cada tratamento é um projeto único, desenhado sob medida para ",
    descBold: "realçar a sua beleza natural",
    desc2: " e garantir saúde a longo prazo.",
    btn: "Ver portfólio completo",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Porcelana Ultra-realistas", desc: "Lâminas artesanais que corrigem imperfeições e recriam a textura exata de um dente jovem e saudável, sem o aspecto artificial." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Ortodontia Invisível", desc: "Alinhadores transparentes que oferecem um tratamento ortodôntico altamente previsível, discreto e livre de fios metálicos." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes & Reabilitação", desc: "Devolvemos não apenas dentes, mas a segurança de mastigar, falar e sorrir com implantes fixos de excelência suíça." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Spa Odontológico & Prevenção", desc: "Sessões de limpeza profunda com tecnologia suíça de jato e ultrassom guiado, totalmente indolores e focadas na longevidade da gengiva." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Odontologia Minimamente Invasiva", desc: "Intervenções que preservam ao máximo a estrutura original do dente, utilizando microscopia e resinas de alta performance." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Cuidado Materno-Infantil", desc: "Uma abordagem psicológica especial para que as crianças construam uma relação de afeto e sem traumas com a saúde bucal." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Helena Valença", cro: "Especialista", specialty: "Reabilitação Estética", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA (A Experiência)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Experiência Áurea",
    title1: "O fim do",
    title2: "medo",
    title3: "de ir ao dentista.",
    desc: "Nós reimaginamos completamente a ida ao consultório. Do momento em que você cruza a nossa porta, tudo é pensado para baixar a sua frequência e elevar o seu bem-estar.",
    btn: "Agendar um momento para mim",
    list: [
      { title: "Consultório Boutique", content: "Nossas salas são projetadas para reduzir a ansiedade. Esqueça as luzes brancas frias e os sons de motor; oferecemos fones com cancelamento de ruído e iluminação suave." },
      { title: "Diagnóstico Digital 3D", content: "Antes de qualquer tratamento, escaneamos o seu sorriso. Você vê na tela, em 3D, como ficará o resultado final antes mesmo de começarmos." },
      { title: "Concierge de Atendimento", content: "Você terá um canal direto com nossa equipe para dúvidas diárias, agendamentos flexíveis e acompanhamento pós-consulta." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Atmosfera",
    title1: "Beleza em",
    title2: "cada detalhe.",
    quote: "Acreditamos que a cura e o bem-estar começam no ambiente. Aqui, tudo inspira calma e renovação.",
    supporting: "Navegue pelo nosso espaço e sinta um pouco da atmosfera que criamos exclusivamente para os nossos pacientes.",
    photos: [
      { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=1000&fit=crop", alt: "Ambiente do Instituto" },
      { img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=1000&fit=crop", alt: "Atendimento Humanizado" },
      { img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop", alt: "Tecnologia 3D" },
      { img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=1000&fit=crop", alt: "Estética Facial" },
      { img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=1000&fit=crop", alt: "Precisão" },
      { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1000&fit=crop", alt: "Sorrisos Leves" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "Histórias",
    title2: "reveladas.",
    p1: "Nós não criamos sorrisos artificiais. Nós resgatamos a",
    p_bold1: "identidade",
    p2: "dos nossos pacientes. Veja as histórias de transformação na nossa",
    p_bold2: "galeria de resultados clínicos",
    p3: "e entenda por que o",
    p_bold3: "Instituto Áurea é diferente.",
    btn: "Ver Histórias Reais",
    imgUrl: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "O que você precisa saber",
    list: [
      { q: "Onde o Instituto Áurea está localizado?", a: "Nosso refúgio urbano fica na Avenida das Gardênias, 1200, na cobertura do Boulevard Design, no coração dos Jardins, São Paulo." },
      { q: "Eu tenho pavor de dentista. O Instituto é para mim?", a: "Absolutamente. Nossa clínica foi idealizada exatamente para pessoas como você. Usamos aromaterapia, fones de cancelamento de ruído, anestesias computadorizadas indolores e muito acolhimento." },
      { q: "Como funciona a Primeira Experiência (Avaliação)?", a: "Não chamamos de avaliação. É um momento de escuta ativa. Fazemos um escaneamento 3D da sua boca, tiramos fotografias profissionais do seu rosto e conversamos sobre as suas expectativas sem nenhuma pressa." },
      { q: "Lentes de porcelana desgastam os dentes originais?", a: "Trabalhamos com a odontologia minimamente invasiva. Nossas lentes são tão finas quanto uma lente de contato ocular, o que nos permite, na grande maioria dos casos, fazer zero ou mínimos desgastes na estrutura natural." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Localização &\nContato",
    box1: { title: "O Instituto", value1: "Boulevard Design, Cobertura 12", value2: "Avenida das Gardênias, 1200" },
    box2: { title: "Localização", value1: "Jardins, São Paulo - SP", value2: "CEP: 01400-000" },
    box3: { title: "Áreas de Atuação", value1: "Estética Natural, Implantes", value2: "Ortodontia Invisível e Prevenção" },
    btn: "Abrir rota no Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Inicie sua jornada",
    title1: "A sua melhor versão",
    title2: "está esperando.",
    desc: "Permita-se viver uma experiência onde o cuidado clínico encontra o bem-estar absoluto. Entre em contato com a nossa concierge e reserve o seu horário.",
    box1_title: "Endereço",
    box2_title: "Fale Conosco",
    box3_title: "Nossa Comunidade",
    box3_desc1: "Inspire-se conosco",
    box3_desc2: "@instituto.aurea"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Instituto Áurea | A arte de sorrir com alma. Odontologia estética e reabilitação de altíssimo padrão em um ambiente desenhado para o seu bem-estar.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Instituto Áurea. Todos os direitos reservados. Fictício para demonstração.",
    registro: "Jardins — São Paulo, SP"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Estudos de Caso",
    title1: "Arte e",
    title2: "Naturalidade.",
    p1: "Nossa premissa é clara: um procedimento estético só é perfeito quando é",
    p_bold1: "imperceptível",
    p2: ". Observe nos casos abaixo a recuperação da",
    p_bold2: "textura, cor e proporção",
    p3: "dos sorrisos, sempre respeitando a essência facial de cada paciente.",
    btnSaberMais: "Agendar minha avaliação",
    btnVoltar: "Voltar para o Início",
    cases: [
      { 
        category: "Estética Natural", 
        duration: "Lentes Ultra-finas", 
        complaint: "Dentes desgastados pelo bruxismo e levemente escurecidos, conferindo um aspecto envelhecido ao rosto.", 
        procedure: "Planejamento digital e cimentação de facetas cerâmicas artesanais, recuperando o comprimento jovem sem aspecto artificial.", 
        beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", 
        afterImg: "https://images.unsplash.com/photo-1506468160473-b6dcbc9c20a4?w=800&q=80" 
      },
      { 
        category: "Reabilitação Complexa", 
        duration: "Implantes Suíços", 
        complaint: "Ausências dentárias que impactavam a mastigação e traziam timidez profunda na hora de sorrir.", 
        procedure: "Instalação de implantes guiada por computador e fixação de dentes em porcelana idênticos aos naturais.", 
        beforeImg: "https://images.unsplash.com/photo-1554721299-e0b8a798ee5e?w=800&q=80", 
        afterImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" 
      },
      { 
        category: "Ortodontia Invisível", 
        duration: "Alinhadores", 
        complaint: "Apinhamento dos dentes inferiores e mordida profunda em paciente com aversão a aparelhos metálicos.", 
        procedure: "Tratamento de 10 meses utilizando alinhadores invisíveis, alinhando os arcos de forma totalmente confortável e discreta.", 
        beforeImg: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80", 
        afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" 
      },
      { 
        category: "Longevidade", 
        duration: "Adequação de Saúde", 
        complaint: "Inflamação gengival constante e restaurações antigas de amálgama que comprometiam a estética.", 
        procedure: "Sessões de Spa Odontológico para cura periodontal e substituição por resinas injetadas imperceptíveis.", 
        beforeImg: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", 
        afterImg: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=800&q=80" 
      }
    ]
  }
};