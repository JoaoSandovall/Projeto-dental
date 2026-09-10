import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Clínica MAR",
    subtitulo: "Odontologia e Estética",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original (A logo Rose Gold da Clínica MAR)
    contato: {
      whatsappUrl: "https://wa.me/5531994319181?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+na+Cl%C3%ADnica+MAR.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(31) 3043-3795 / (31) 99431-9181",
      emailLabel: "contato@clinicamar.com.br",
      instagramLabel: "@clinicamarodontologia",
    },
    endereco: {
      bairroCidade: "Santa Inês, Belo Horizonte - MG",
      edificio: "Avenida Contagem, 1451",
      detalhado: "Avenida Contagem, 1451 - Loja 4\nBairro Santa Inês\nBelo Horizonte - MG, 31080-255",
      comodidades: ["Lentes de Resina", "Endodontia", "Odontopediatria", "Estética Facial"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clinica+MAR+Santa+Ines+BH",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.984794611574!2d-43.91152085730838!3d-19.882863957308114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ba57398fc07%3A0xc4ccdf666ebc82fa!2sCl%C3%ADnica%20MAR!5e0!3m2!1spt-BR!2sbr!4v1789050487011!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 19:00",
  },

  nav: {
    links: ["A Clínica", "Tratamentos", "Depoimentos", "Resultados", "Localização"],
    ids: ["sobre", "/especialidades", "depoimentos", "/resultados", "localizacao"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o caminho seguro
    eyebrow: "Santa Inês — Belo Horizonte, MG",
    title1: "Cuidando do",
    title2: "seu sorriso",
    title3: "com excelência.",
    desc1: "Somos especialistas em odontologia e",
    descBold: "estética facial.",
    desc2: " Na Clínica MAR, unimos tecnologia, tratamentos de alto padrão e um atendimento humano para devolver a sua autoestima.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Clínica MAR",
    badgeDesc: "Odontologia Avançada",
    stats: [
      { target: 4, suffix: ".3", label: "estrelas no google", thousands: false },
      { target: 37, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco no seu bem-estar", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica MAR",
    title1: "Odontologia,",
    title2: "estética e",
    title3: "acolhimento.",
    p1: "Localizada no bairro Santa Inês, em Belo Horizonte, a Clínica MAR nasceu com o propósito de transformar sorrisos e cuidar da sua saúde por completo.",
    p2_1: "Nossa equipe é formada por ",
    p2_bold: "Especialistas em Odontologia e Estética Facial,",
    p2_2: " oferecendo desde os cuidados essenciais de prevenção para crianças até lentes de resina de alta performance para adultos.",
    topics: [
      { title: "Estética do Sorriso", desc: "Especialistas em Lentes de Resina, devolvendo harmonia e beleza com muita naturalidade." },
      { title: "Saúde desde a infância", desc: "Atendimento de Odontopediatria focado em criar experiências positivas para os pequenos." },
      { title: "Fim da dor (Endodontia)", desc: "Tratamentos de canal seguros, indolores e realizados por especialistas." },
      { title: "Estética Facial", desc: "Procedimentos de harmonização para valorizar os traços do seu rosto de forma elegante." },
    ],
    btn: "Falar com a recepção",
    gallery: [
      { url: "/imagens/hero.png", title: "Cuidado e Excelência" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80", title: "Odontologia Moderna" },
      { url: "/imagens/leve.png", title: "Estética Facial" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Tudo o que o",
    title2: "seu sorriso precisa.",
    desc1: "Oferecemos soluções completas em ",
    descBold: "odontologia estética, preventiva e reabilitadora",
    desc2: ", garantindo conforto e segurança em cada detalhe.",
    btn: "Ver todos os tratamentos",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Resina", desc: "Transforme a cor, o formato e o tamanho dos seus dentes com a técnica de lentes de resina composta (estratificação direta)." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Endodontia (Tratamento de Canal)", desc: "Elimine a dor e preserve seu dente natural. Tratamentos de canal realizados por especialista com alto conforto e precisão." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Sorrisos saudáveis começam na infância! Cuidado especializado, paciente e acolhedor para as crianças." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Técnicas seguras e modernas para clarear os dentes sem enfraquecer o esmalte, devolvendo um sorriso iluminado." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Prevenção e Limpeza", desc: "Profilaxia completa para evitar cáries, doenças na gengiva e manter a saúde bucal da sua família sempre em dia." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Estética Facial", desc: "Procedimentos de harmonização para equilibrar os traços faciais, proporcionando rejuvenescimento e bem-estar." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Equipe Clínica MAR", cro: "Especialistas", specialty: "Odontologia e Estética Facial", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA E CAMPANHAS
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Experiência Clínica MAR",
    title1: "Informação,",
    title2: "dicas e",
    title3: "cuidado.",
    desc: "Estamos de cara nova! Mantendo a mesma excelência em nossos atendimentos, mas renovados para trazer informações transparentes e um cuidado cada vez mais próximo para você.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Atendimento Humanizado", content: "Nosso foco é proporcionar uma experiência tranquila, seja para um clareamento, um tratamento de canal ou na primeira consulta do seu filho." },
      { title: "Especialistas Qualificados", content: "Contamos com profissionais especialistas, como em Endodontia e Lentes de Resina, garantindo o mais alto nível técnico no seu tratamento." },
      { title: "Campanha Sorriso Premiado", content: "Na Clínica MAR, quem indica amigos sai ganhando! Participe das nossas campanhas de indicação e concorra a prêmios incríveis na recepção." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Conforto e",
    title2: "modernidade.",
    quote: "Cuidando do seu sorriso com excelência em um ambiente pensado para o seu total bem-estar.",
    supporting: "Acompanhe um pouco da nossa estrutura no bairro Santa Inês, em Belo Horizonte.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica MAR" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Odontológico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "A beleza de",
    title2: "um sorriso.",
    p1: "Acreditamos na",
    p_bold1: "odontologia de excelência",
    p2: "que devolve a estética e a função mastigatória. Acompanhe a transformação dos nossos pacientes na nossa",
    p_bold2: "galeria de resultados",
    p3: "e descubra o padrão da Clínica MAR.",
    p_bold3: "",
    btn: "Ver Resultados Reais",
    imgUrl: "/imagens/dentes.png" 
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde a Clínica MAR está localizada?", a: "Nossa clínica fica na Avenida Contagem, nº 1451, Loja 4, no bairro Santa Inês, em Belo Horizonte - MG." },
      { q: "O clareamento enfraquece os dentes?", a: "Não! Esse é um mito comum. Fazer clareamento com o acompanhamento de um dentista é totalmente seguro e não enfraquece nem desgasta o esmalte do dente." },
      { q: "Qual a diferença das lentes de resina para as de porcelana?", a: "As lentes de resina (feitas com técnica direta) normalmente exigem menos ou nenhum desgaste do dente natural, são feitas em menos sessões e possuem excelente estética e durabilidade." },
      { q: "A partir de que idade devo levar meu filho ao dentista?", a: "O ideal é que a primeira consulta ocorra logo que nascer o primeiro dentinho. Sorrisos saudáveis começam na infância, focando sempre na prevenção de cáries." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Avenida Contagem, 1451", value2: "Loja 4 - Santa Inês" },
    box2: { title: "Localização", value1: "Belo Horizonte - MG", value2: "CEP: 31080-255" },
    box3: { title: "Especialidades", value1: "Dentista Geral, Lentes", value2: "Odontopediatria e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Cuidando do",
    title2: "seu sorriso.",
    desc: "Agende sua consulta. Venha viver a experiência da Clínica MAR e conte com especialistas dedicados à sua saúde e estética facial.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe dicas de saúde",
    box3_desc2: "@clinicamarodontologia"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Clínica MAR Odontologia | Especialistas em odontologia e estética facial no bairro Santa Inês. Cuidando do seu sorriso com excelência.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 Clínica MAR Odontologia. Todos os direitos reservados.",
    registro: "Santa Inês — Belo Horizonte, MG"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos e Resultados",
    title1: "A beleza de",
    title2: "um sorriso.",
    p1: "Confira a transformação dos nossos pacientes através da ",
    p_bold1: "Odontologia de Excelência",
    p2: ". Valorizamos a",
    p_bold2: "naturalidade e a função",
    p3: "em cada detalhe dos nossos tratamentos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética do Sorriso", 
        duration: "Lentes de Resina", 
        complaint: "Descontentamento com o formato, cor e pequenos desgastes nos dentes incisivos.", 
        procedure: "Estratificação com lentes de resina de alta qualidade devolvendo o brilho e a simetria ao sorriso.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Estética Facial", 
        duration: "Harmonização", 
        complaint: "Perda de contorno facial e linhas de expressão visíveis.", 
        procedure: "Protocolos de harmonização facial seguros, valorizando os traços naturais da paciente.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Odontologia Clínica", 
        duration: "Endodontia", 
        complaint: "Dor severa e risco de perda dental devido a cárie profunda afetando o nervo do dente.", 
        procedure: "Tratamento de canal executado por especialista, eliminando a dor e salvando a estrutura dental.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Prevenção", 
        duration: "Clareamento e Limpeza", 
        complaint: "Dentes amarelados pelo tempo e acúmulo de placa bacteriana.", 
        procedure: "Profilaxia rigorosa seguida de protocolo de clareamento seguro sem desgaste do esmalte.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};