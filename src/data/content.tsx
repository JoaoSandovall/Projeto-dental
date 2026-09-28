import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Inova Sorrisos",
    subtitulo: "Consultório Odontológico",
    logoUrl: "/imagens/logo.png", // Mantenha a imagem da logo azul
    contato: {
      whatsappUrl: "https://wa.me/5522992885631?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+Inova+Sorrisos.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(22) 99288-5631",
      emailLabel: "contato@inovasorrisos.com.br",
      instagramLabel: "@inovasorrisos",
    },
    endereco: {
      bairroCidade: "Bacaxá, Saquarema - RJ",
      edificio: "Consultório Inova Sorrisos",
      detalhado: "Rua Beatriz Amaral Pereira, 79\nBacaxá\nSaquarema - RJ, 28994-702",
      comodidades: ["Clínica Geral", "Ortodontia", "Implantes", "Estética Dental"],
      mapaGpsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4875016793208!2d-42.4705235!3d-22.895383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x975db3fbf8f8bf%3A0x7317197e2911bce4!2sInova%20Sorrisos%20-%20Consult%C3%B3rio%20Odontol%C3%B3gico!5e0!3m2!1spt-BR!2sbr!4v1790598482207!5m2!1spt-BR!2sbr",
      // Link genérico de mapa para a rua em Bacaxá
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.966952865963!2d-42.46328328448822!3d-22.880521885025736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9768f5b8cb46b3%3A0xc3c9b77eb8a2e0a!2sR.%20Beatriz%20Amaral%20Pereira%2C%2079%20-%20Bacax%C3%A1%2C%20Saquarema%20-%20RJ%2C%2028994-702!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta: 08:00 às 21:30\nSábado: 08:00 às 15:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Nosso Cuidado", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", 
    eyebrow: "Bacaxá — Saquarema, RJ",
    title1: "Inovação",
    title2: "e cuidado",
    title3: "com seu sorriso.",
    desc1: "Acreditamos em uma odontologia que une ",
    descBold: "tecnologia e atendimento humano.",
    desc2: " Na Inova Sorrisos, oferecemos tratamentos completos com horários flexíveis para cuidar da saúde da sua família.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Inova Sorrisos",
    badgeDesc: "Odontologia de Excelência",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 34, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco no paciente", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Inova Sorrisos",
    title1: "Conforto e",
    title2: "inovação",
    title3: "para você.",
    p1: "Localizada em Bacaxá, Saquarema, a Inova Sorrisos nasceu com a missão de tornar a odontologia de excelência acessível e acolhedora para todos.",
    p2_1: "Nossa clínica possui uma ",
    p2_bold: "estrutura moderna e climatizada,",
    p2_2: " projetada para proporcionar tranquilidade desde a recepção até a cadeira do dentista, com profissionais altamente capacitados.",
    topics: [
      { title: "Horário Estendido", desc: "Pensando na sua rotina, atendemos de segunda a sexta até às 21:30 e aos sábados até às 15:00." },
      { title: "Atendimento Humanizado", desc: "Ouvimos as suas necessidades para criar um plano de tratamento confortável e sem traumas." },
      { title: "Tecnologia Odontológica", desc: "Equipamentos de ponta para diagnósticos precisos e tratamentos mais rápidos e seguros." },
      { title: "Odontologia Integrada", desc: "Todas as especialidades em um só lugar, da prevenção ao implante dentário." },
    ],
    btn: "Conheça nossa estrutura",
    gallery: [
      { url: "/imagens/clinica1.png", title: "Ambiente Acolhedor" },
      { url: "/imagens/profissionalatuando.png", title: "Atendimento Especializado" },
      { url: "/imagens/materiais1.png", title: "Tecnologia e Segurança" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossas Especializações",
    title1: "Tudo o que o",
    title2: "seu sorriso precisa.",
    desc1: "A Inova Sorrisos oferece soluções completas em ",
    descBold: "saúde e estética bucal",
    desc2: ", garantindo que o seu tratamento seja sempre eficiente e de alto padrão.",
    btn: "Ver todas as especializações",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "Substitua dentes perdidos de forma definitiva e segura. Recuperamos a sua força mastigatória e a estética do seu sorriso." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Ortodontia", desc: "Aparelhos modernos (tradicionais e estéticos) para corrigir a posição dos dentes e garantir uma mordida perfeita." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Facetas, lentes em resina e restaurações estéticas para harmonizar a cor e o formato dos seus dentes." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Técnicas seguras de clareamento (laser ou caseiro supervisionado) para devolver o brilho natural ao seu sorriso." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Endodontia (Canal)", desc: "Tratamento de canal realizado com precisão e conforto, focado em eliminar a dor e salvar a estrutura do dente." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Clínica Geral e Prevenção", desc: "Limpezas profundas, remoção de tártaro e check-ups regulares para manter a saúde bucal de toda a família em dia." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Equipe Inova Sorrisos", cro: "Especialistas", specialty: "Consultório Odontológico", img: "/imagens/profissionalatuando.png" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Nosso Propósito",
    title1: "Inovação",
    title2: "voltada para o",
    title3: "seu bem-estar.",
    desc: "A Inova Sorrisos alia as melhores técnicas odontológicas a um atendimento próximo, respeitoso e transparente, para que você sorria com confiança.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Biossegurança Rigorosa", content: "Todos os nossos instrumentais e materiais passam por rígidos processos de esterilização para garantir 100% de segurança em cada procedimento." },
      { title: "Conforto na Recepção", content: "Nossa clínica foi desenhada com um ambiente aconchegante, detalhes em madeira e iluminação pensada para relaxar você antes mesmo de entrar no consultório." },
      { title: "Flexibilidade para Você", content: "Sabemos que a sua rotina é corrida. Por isso, somos uma das únicas clínicas da região de Saquarema com atendimento estendido até as 21h30." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Acolhimento e",
    title2: "modernidade.",
    quote: "Nosso ambiente foi preparado para proporcionar um atendimento seguro, limpo e extremamente confortável.",
    supporting: "Nossos pacientes avaliam a Inova Sorrisos com 5 estrelas no Google. Conheça um pouco da nossa estrutura em Bacaxá.",
    photos: [
      { img: "/imagens/clinica1.png", alt: "Recepção Inova Sorrisos" },
      { img: "/imagens/profissionalatuando.png", alt: "Atendimento Odontológico" },
      { img: "/imagens/clinica2.png", alt: "Estrutura Moderna" },
      { img: "/imagens/materiais1.png", alt: "Materiais de Alta Qualidade" },
      { img: "/imagens/profissionaisatuando.png", alt: "Equipe em Ação" },
      { img: "/imagens/materiais2.png", alt: "Biossegurança e Tecnologia" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "A beleza da",
    title2: "transformação.",
    p1: "Acreditamos na",
    p_bold1: "odontologia de qualidade",
    p2: "que resolve dores e devolve a vontade de sorrir. Acompanhe a transformação real na nossa",
    p_bold2: "galeria de resultados clínicos",
    p3: "e comprove a diferença da Inova Sorrisos.",
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
      { q: "Onde a Inova Sorrisos está localizada?", a: "Nossa clínica fica na Rua Beatriz Amaral Pereira, 79, no bairro Bacaxá, em Saquarema - RJ." },
      { q: "Até que horas a clínica funciona?", a: "Temos um horário muito flexível para facilitar a sua vida! Funcionamos de Segunda a Sexta, das 08:00 às 21:30, e aos Sábados das 08:00 às 15:00." },
      { q: "A clínica faz tratamento de canal e implantes?", a: "Sim, oferecemos um atendimento odontológico completo. Desde a limpeza preventiva até tratamentos de canal (Endodontia) e instalação de Implantes dentários." },
      { q: "Como faço para agendar uma consulta?", a: "Você pode nos ligar ou enviar uma mensagem pelo WhatsApp através do número (22) 99288-5631. Nossa equipe vai encontrar o melhor horário para você." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Beatriz Amaral Pereira, 79", value2: "Bacaxá" },
    box2: { title: "Localização", value1: "Saquarema - RJ", value2: "CEP: 28994-702" },
    box3: { title: "Especialidades", value1: "Implantes, Ortodontia", value2: "Clínica Geral e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A sua saúde no",
    title2: "lugar certo.",
    desc: "Agende sua avaliação na Inova Sorrisos. Conte com a segurança de uma equipe dedicada e um horário de atendimento pensado para a sua comodidade.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@inovasorrisos"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Inova Sorrisos | Consultório Odontológico em Bacaxá, Saquarema. Odontologia de excelência com atendimento humano e inovador.",
    title_tratamentos: "Especializações",
    title_contato: "Contato",
    direitos: "© 2026 Inova Sorrisos. Todos os direitos reservados.",
    registro: "Bacaxá — Saquarema, RJ"
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
    p_bold2: "saúde e a estética",
    p3: "em cada detalhe dos nossos tratamentos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética do Sorriso", 
        duration: "Clareamento e Resinas", 
        complaint: "Descontentamento com a cor e o formato irregular dos dentes anteriores.", 
        procedure: "Protocolo de clareamento estético seguido de restaurações em resina para harmonizar o sorriso.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Reabilitação", 
        duration: "Implantes Dentários", 
        complaint: "Ausência de dentes causando dificuldade mastigatória e insegurança ao sorrir.", 
        procedure: "Instalação segura de implantes dentários, recuperando de forma definitiva a estética e a força da mordida.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Ortodontia", 
        duration: "Alinhamento Dental", 
        complaint: "Dentes desalinhados prejudicando a mordida e dificultando a higienização.", 
        procedure: "Tratamento com aparelho ortodôntico, resultando no alinhamento ideal e em um sorriso perfeitamente funcional.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Prevenção e Saúde", 
        duration: "Limpeza e Endodontia", 
        complaint: "Dores agudas e acúmulo de tártaro causando desconforto na gengiva.", 
        procedure: "Tratamento de canal indolor seguido de profilaxia completa, garantindo o fim da dor e a saúde da boca.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      }
    ]
  }
};