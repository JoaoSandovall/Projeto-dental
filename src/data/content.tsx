import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Espaço Sorriso",
    subtitulo: "Clínica Integrada",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/554230352080?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+no+Espa%C3%A7o+Sorriso.", 
      whatsappLabel: "Agendar Consulta",
      telefoneLabel: "(42) 3035-2080",
      emailLabel: "contato@clinicaespacosorriso.com.br",
      instagramLabel: "@espacosorriso.guarapuava",
    },
    endereco: {
      bairroCidade: "Centro, Guarapuava - PR",
      edificio: "Clínica Integrada",
      detalhado: "Rua Vicente Machado, 1539, 1º andar\nCentro\nGuarapuava - PR, 85010-260",
      comodidades: ["Odontologia Especializada", "Psicologia Clínica", "Saúde e Bem-estar", "Atendimento Humanizado"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clinica+Espaço+Sorriso+Guarapuava",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.328715886758!2d-51.46715!3d-25.393805099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef37f14738de35%3A0x1e2667719e4c4347!2sCl%C3%ADnica%20Espa%C3%A7o%20Sorriso!5e0!3m2!1spt-BR!2sbr!4v1789064823970!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 19:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Nossa Essência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o caminho original
    eyebrow: "Centro — Guarapuava, PR",
    title1: "Saúde e",
    title2: "bem-estar",
    title3: "integrados.",
    desc1: "Muito mais do que odontologia. Somos uma",
    descBold: "Clínica Integrada",
    desc2: " unindo excelência odontológica, psicologia e saúde em um ambiente acolhedor e moderno.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Espaço Sorriso",
    badgeDesc: "Cuidado Completo",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 20, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco no seu bem-estar", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Espaço Sorriso",
    title1: "Odontologia,",
    title2: "psicologia e",
    title3: "acolhimento.",
    p1: "Localizada no coração de Guarapuava, a Clínica Espaço Sorriso nasceu para transformar a forma como você cuida da sua saúde física e mental.",
    p2_1: "Em nosso novo espaço, unimos ",
    p2_bold: "profissionais qualificados em diversas áreas da saúde,",
    p2_2: " oferecendo desde tratamentos odontológicos estéticos e preventivos até o acompanhamento psicológico necessário para o seu bem-estar.",
    topics: [
      { title: "Odontologia Completa", desc: "Clínica geral, estética, ortodontia e reabilitação oral com máxima qualidade." },
      { title: "Psicologia Clínica", desc: "Apoio emocional e saúde mental integrados para cuidar de você por inteiro." },
      { title: "Ambiente Acolhedor", desc: "Um espaço moderno, recém-inaugurado, pensado para o seu conforto absoluto." },
      { title: "Cuidado Integrado", desc: "Acreditamos que um sorriso bonito e uma mente saudável caminham juntos." },
    ],
    btn: "Falar com o atendimento",
    gallery: [
      { url: "/imagens/hero.png", title: "Saúde Integrada" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80", title: "Cuidado Humanizado" },
      { url: "/imagens/leve.png", title: "Bem-estar" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossas Especialidades",
    title1: "Cuidando de você",
    title2: "por inteiro.",
    desc1: "Oferecemos soluções completas unindo ",
    descBold: "odontologia, psicologia e saúde",
    desc2: ", garantindo acolhimento e resultados em todas as áreas.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Transforme seu sorriso com segurança. Oferecemos tratamentos estéticos que devolvem a beleza e a naturalidade aos seus dentes." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Odontologia Clínica", desc: "Prevenção, profilaxia, restaurações e tratamentos essenciais para manter a saúde bucal da sua família sempre protegida." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Psicologia", desc: "Atendimento psicológico clínico para promover o autoconhecimento, a saúde mental e a inteligência emocional." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Ortodontia", desc: "Correção do posicionamento dos dentes e da mordida com aparelhos modernos para um sorriso funcional e harmônico." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Saúde Integrada", desc: "Uma visão completa do paciente, entendendo que a saúde física e a saúde emocional estão sempre conectadas." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Uma equipe dedicada a ouvir você e a criar um planejamento de tratamento focado nas suas reais necessidades." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Equipe Espaço Sorriso", cro: "Clínica Integrada", specialty: "Odontologia, Psicologia e Saúde", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA E CAMPANHAS
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Nossa Essência",
    title1: "Um novo espaço",
    title2: "para cuidar",
    title3: "de você.",
    desc: "A Clínica Espaço Sorriso foi projetada para oferecer uma nova experiência em saúde. Muito além de tratamentos, nós construímos confiança e relacionamentos com nossos pacientes.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Odontologia e Psicologia Juntas", content: "Entendemos que saúde é um conceito amplo. Ao unir cuidado odontológico e mental, entregamos resultados muito mais profundos." },
      { title: "Infraestrutura Moderna", content: "Nosso novo ambiente, localizado no 1º andar da Vicente Machado, foi cuidadosamente pensado para trazer paz e conforto durante suas visitas." },
      { title: "Atendimento Transparente", content: "Valorizamos a clareza. Você sempre saberá exatamente cada etapa do seu tratamento, seja na cadeira do dentista ou na terapia." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Conforto e",
    title2: "modernidade.",
    quote: "Cuidando da sua saúde com excelência em um ambiente pensado para o seu total bem-estar e tranquilidade.",
    supporting: "Acompanhe um pouco do nosso novo espaço no Centro de Guarapuava, PR.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Espaço Sorriso" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Integrado" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Saúde e Bem-estar" }
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
    p2: "que devolve a estética e a função. Acompanhe a transformação dos nossos pacientes na nossa",
    p_bold2: "galeria de resultados clínicos",
    p3: "e descubra o padrão Espaço Sorriso.",
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
      { q: "Onde a Clínica Espaço Sorriso está localizada?", a: "Nossa clínica fica na Rua Vicente Machado, 1539, 1º andar, no Centro de Guarapuava - PR." },
      { q: "Quais serviços a clínica oferece?", a: "Somos uma clínica integrada. Oferecemos atendimento odontológico completo (clínica geral, estética, ortodontia), além de consultas na área de Psicologia e saúde mental." },
      { q: "A clínica atende todas as idades?", a: "Sim! Nossa equipe está preparada para cuidar da saúde bucal e do bem-estar de toda a família, desde crianças até adultos e idosos." },
      { q: "Como faço para agendar minha consulta?", a: "Você pode agendar de forma rápida e prática enviando uma mensagem para o nosso WhatsApp no número (42) 3035-2080 ou ligando diretamente para nós." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Vicente Machado, 1539", value2: "1º andar - Centro" },
    box2: { title: "Localização", value1: "Guarapuava - PR", value2: "CEP: 85010-260" },
    box3: { title: "Especialidades", value1: "Odontologia, Psicologia", value2: "Saúde Integrada e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Cuidando de você",
    title2: "por inteiro.",
    desc: "Agende sua consulta. Venha viver a experiência da Clínica Espaço Sorriso e conte com profissionais dedicados à sua saúde física e mental.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@espacosorriso.guarapuava"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Espaço Sorriso | Clínica Integrada no Centro de Guarapuava. Unindo odontologia, psicologia e saúde para o seu bem-estar completo.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Clínica Espaço Sorriso. Todos os direitos reservados.",
    registro: "Centro — Guarapuava, PR"
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
        duration: "Odontologia Estética", 
        complaint: "Descontentamento com o formato, cor e pequenos desgastes nos dentes incisivos.", 
        procedure: "Tratamento estético conservador devolvendo o brilho e a simetria ao sorriso do paciente.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Ortodontia", 
        duration: "Alinhamento Perfeito", 
        complaint: "Dentes desalinhados prejudicando a mastigação e a confiança ao sorrir.", 
        procedure: "Tratamento ortodôntico contínuo, garantindo a correção da mordida e um sorriso harmônico.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Prevenção e Saúde", 
        duration: "Clínica Geral", 
        complaint: "Dores pontuais e necessidade de adequação de saúde bucal.", 
        procedure: "Profilaxia completa, remoção de cáries e restaurações seguras para prevenir problemas futuros.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Reabilitação", 
        duration: "Saúde e Função", 
        complaint: "Perda de estrutura dental afetando a função mastigatória.", 
        procedure: "Reabilitação funcional devolvendo o conforto e a segurança na mastigação do dia a dia.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};