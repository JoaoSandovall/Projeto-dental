import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Instituto Áurea",
    subtitulo: "A arte de sorrir com alma",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/5511999998888", 
      whatsappLabel: "Falar com nossa Concierge",
      telefoneLabel: "(11) 99999-8888",
      emailLabel: "boasvindas@institutoaurea.com.br",
      instagramLabel: "@instituto.aurea",
    },
    endereco: {
      bairroCidade: "Jardins, São Paulo - SP",
      edificio: "Boulevard Design, Cobertura 12",
      detalhado: "Avenida das Gardênias, 1200\nBoulevard Design\nJardins, São Paulo - SP, 01400-000",
      comodidades: ["Ambiente de Spa", "Odontologia Humanizada", "Estética Natural", "Alinhadores"],
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
    imgUrl: "/imagens/hero.png", // Mantido o seu caminho original
    eyebrow: "Jardins, São Paulo",
    title1: "A sua essência,",
    title2: "refletida em",
    title3: "cada detalhe.",
    desc1: "Acreditamos que por trás de cada sorriso",
    descBold: "existe uma grande história.",
    desc2: " No Instituto Áurea, unimos ciência, arte e muito acolhimento para revelar a sua melhor versão de forma natural e sem dor.",
    btnPrimary: "Agendar minha experiência",
    btnOutline: "Nossa Filosofia",
    badgeTitle: "Instituto Áurea",
    badgeDesc: "Clínica Boutique",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas de satisfação", thousands: false },
      { target: 15, suffix: "+", label: "anos de dedicação", thousands: false },
      { target: 100, suffix: "%", label: "foco no seu conforto", thousands: false },
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
    p1: "Criamos o Instituto Áurea para ser um refúgio. Um lugar onde a ansiedade de ir ao dentista dá lugar ao bem-estar e ao cuidado genuíno com você.",
    p2_1: "Nossa clínica boutique foi inteiramente desenhada para oferecer uma ",
    p2_bold: "odontologia humanizada e sem pressa",
    p2_2: ", pautada no respeito absoluto aos seus traços naturais, aos seus medos e aos seus desejos estéticos.",
    topics: [
      { title: "Estética com Alma", desc: "Procedimentos planejados digitalmente para devolver a harmonia ao seu rosto, sem exageros ou artificialidade." },
      { title: "Medicina do Conforto", desc: "Ambiente calmo, com técnicas modernas e foco absoluto em tratamentos indolores." },
      { title: "Ortodontia Invisível", desc: "Alinhadores transparentes que corrigem seu sorriso com discrição e máxima eficiência." },
      { title: "Tempo para Você", desc: "Consultas estendidas. Aqui nós sentamos, ouvimos e entendemos suas vontades antes de tudo." },
    ],
    btn: "Conhecer nossa estrutura",
    gallery: [
      { url: "/imagens/hero.png", title: "Acolhimento" }, // Mantido o seu caminho original
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Cuidado Humanizado" },
      { url: "/imagens/leve.png", title: "Beleza Natural" } // Mantido o seu caminho original
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
    desc2: " e garantir conforto em todas as etapas.",
    btn: "Ver portfólio completo",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes e Facetas Naturais", desc: "Lâminas artesanais que corrigem imperfeições e recriam a textura exata de um dente jovem e saudável, sem o aspecto artificial." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Alinhadores Transparentes", desc: "Ortodontia invisível que oferece um tratamento altamente previsível, discreto e totalmente livre de fios metálicos." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes & Reabilitação", desc: "Devolvemos não apenas os dentes, mas a segurança vital de mastigar, falar e sorrir com liberdade." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Spa Odontológico & Profilaxia", desc: "Sessões de limpeza profunda e clareamento, pensadas como um momento relaxante de autocuidado e longevidade." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Odontologia Minimamente Invasiva", desc: "Intervenções delicadas que preservam ao máximo a estrutura original do seu dente." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Cuidado Materno-Infantil", desc: "Abordagem lúdica e afetuosa para que as crianças construam uma relação sem traumas com a saúde bucal desde cedo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Corpo Clínico Áurea", cro: "Especialistas", specialty: "Estética e Reabilitação Funcional", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA (A Experiência)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Experiência Áurea",
    title1: "O fim do medo",
    title2: "de ir ao",
    title3: "dentista.",
    desc: "Nós reimaginamos completamente a ida ao consultório. Do momento em que você cruza a nossa porta, tudo é pensado para baixar a sua ansiedade e elevar o seu bem-estar.",
    btn: "Agendar um momento para mim",
    list: [
      { title: "Consultório Boutique", content: "Nossas salas são projetadas para acalmar. Esqueça as luzes brancas frias; oferecemos um ambiente perfumado, música suave e tranquilidade." },
      { title: "Diagnóstico Sem Pressa", content: "Antes de qualquer procedimento, nós conversamos. Escutamos suas experiências passadas e planejamos juntos o caminho ideal." },
      { title: "Concierge de Atendimento", content: "Você terá um canal direto e próximo com nossa equipe para dúvidas, agendamentos flexíveis e acompanhamento humanizado pós-consulta." }
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
    supporting: "Sinta um pouco da atmosfera que criamos exclusivamente para receber você e sua família de braços abertos.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Ambiente do Instituto" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Humanizado" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Atenção Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Estética Facial" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe Cuidando" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos Leves" }
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
    imgUrl: "/imagens/dentes.png" // Mantido o seu caminho original
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "O que você precisa saber",
    list: [
      { q: "Eu tenho pavor de dentista. O Instituto é para mim?", a: "Absolutamente. Nossa clínica foi idealizada exatamente para pessoas como você. Contamos com um ambiente acolhedor, anestesias modernas indolores e muita paciência." },
      { q: "Como funciona a Primeira Experiência (Avaliação)?", a: "Não chamamos de avaliação clínica. É um momento de escuta ativa. Nós conversamos sobre as suas expectativas sem pressa para criar o plano perfeito." },
      { q: "Os alinhadores transparentes realmente funcionam?", a: "Sim! Os alinhadores são a tecnologia mais avançada da ortodontia moderna. Eles corrigem os dentes de forma mais rápida, confortável e imperceptível do que os aparelhos convencionais." },
      { q: "As lentes de contato dental desgastam muito os dentes?", a: "Trabalhamos com a odontologia minimamente invasiva. Nossas lentes são incrivelmente finas, o que nos permite atuar com desgastes zero ou mínimos na grande maioria dos casos." }
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
    desc: "Permita-se viver uma experiência onde o cuidado clínico encontra o bem-estar absoluto. Fale com a nossa equipe e reserve o seu momento.",
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
        category: "Ortodontia Invisível", 
        duration: "Alinhadores", 
        complaint: "Dentes desalinhados gerando timidez. O paciente tinha resistência ao uso de aparelhos metálicos que machucam.", 
        procedure: "Tratamento discreto com alinhadores removíveis, corrigindo o sorriso com alto conforto e liberdade.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Reabilitação Complexa", 
        duration: "Implantes Suíços", 
        complaint: "Ausências dentárias que impactavam a mastigação e traziam forte insegurança na hora de sorrir.", 
        procedure: "Instalação guiada de implantes e fixação de prótese em porcelana, com anatomia idêntica aos naturais.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Estética Natural", 
        duration: "Lentes Ultra-finas", 
        complaint: "Dentes desgastados e escurecidos com o tempo, conferindo um aspecto envelhecido e cansado ao rosto.", 
        procedure: "Planejamento digital e cimentação de facetas cerâmicas, recuperando o brilho jovem sem aspecto artificial.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Adequação de Saúde", 
        duration: "Spa Odontológico", 
        complaint: "Desconfortos gengivais constantes e restaurações antigas muito aparentes.", 
        procedure: "Sessões delicadas de profilaxia e substituição de restaurações por resinas imperceptíveis de alta performance.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      }
    ]
  }
};