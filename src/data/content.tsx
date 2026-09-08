import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "OdontoMed Prime",
    subtitulo: "Odontologia & Medicina",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/message/5CKVQUCTAYBJF1", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(91) 99124-3754",
      emailLabel: "contato@odontomedprime.com.br",
      instagramLabel: "@odonto.med.prime",
    },
    endereco: {
      bairroCidade: "Centro, Breves - PA",
      edificio: "OdontoMed Prime",
      detalhado: "R. Cel. Lourenço Borges, 1921\nCentro\nBreves - PA, 68800-000",
      comodidades: ["Odontologia Especializada", "Especialidades Médicas", "Radiologia Integrada", "Atendimento Multiprofissional"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/OdontoMed+Prime+Breves",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.093624170763!2d-50.48529752416566!3d-1.6847404982996388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x929839db4169df93%3A0xed0f51e705f78a18!2sOdontoMed%20Prime!5e0!3m2!1spt-BR!2sbr!4v1788891437222!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 19:30",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "A Missão", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o seu caminho original
    eyebrow: "Centro — Breves, PA",
    title1: "Saúde e",
    title2: "Sorrisos",
    title3: "de Excelência.",
    desc1: "Bem-vindo a um centro integrado de saúde de",
    descBold: "alta performance.",
    desc2: " Na OdontoMed Prime, unimos odontologia e especialidades médicas em um único espaço para cuidar de você com tecnologia, segurança e responsabilidade.",
    btnPrimary: "Cuide-se com exclusividade",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "OdontoMed Prime",
    badgeDesc: "Clínica Integrada",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 60, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco no paciente", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A OdontoMed Prime",
    title1: "Odontologia",
    title2: "e medicina",
    title3: "integradas.",
    p1: "Somos um centro completo dedicado ao seu bem-estar. Aqui você encontra o cuidado completo, da saúde bucal ao acompanhamento médico.",
    p2_1: "Sob a responsabilidade de profissionais experientes e dedicados, como a ",
    p2_bold: "Dra. Marina Carvalho",
    p2_2: ", nossa clínica foi projetada para entregar o mais alto padrão em saúde, com uma equipe multiprofissional em um ambiente acolhedor e moderno.",
    topics: [
      { title: "Odontologia de Ponta", desc: "Soluções completas, de limpezas preventivas a implantes, canal e odontopediatria." },
      { title: "Especialidades Médicas", desc: "Clínica Geral, Cardiologia, Ginecologia, Nutrição, Ortopedia e Psicologia." },
      { title: "Radiologia Completa", desc: "Tomografia Cone Beam 3D, Raio-x Panorâmico e exames por imagem na própria clínica." },
      { title: "Estética Facial", desc: "Harmonização com Botox e Preenchedores focados em naturalidade e rejuvenescimento." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/hero.png", title: "Saúde Integrada" }, // Mantido o seu caminho original
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Atendimento Médico" },
      { url: "/imagens/leve.png", title: "Odontologia Premium" } // Mantido o seu caminho original
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Tratamentos & Especialidades",
    title1: "Tudo para a",
    title2: "sua saúde",
    desc1: "Da prevenção ao tratamento avançado. Oferecemos ",
    descBold: "tecnologia e profissionais dedicados",
    desc2: " para cuidar da sua saúde integralmente.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes e Reabilitação", desc: "Substitua dentes perdidos com segurança. Devolvemos função, estética e estabilidade ao seu sorriso." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Endodontia e Cirurgias", desc: "Tratamentos de canal para eliminar a dor preservando o dente, além de extrações seguras de sisos." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Radiologia Integrada", desc: "Diagnósticos precisos com Tomografia Cone Beam 3D, Raio-x Panorâmico, Periapical e Carpal." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Corpo Médico Completo", desc: "Consultas e exames em Cardiologia, Ginecologia, Nutrição, Ortopedia, Psicologia e Ultrassonografia." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria & Ortodontia", desc: "Cuidado com o sorriso desde cedo com carinho e aparelhos para o alinhamento perfeito dos dentes." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Harmonização Facial", desc: "Aplicação de Botox e Preenchedores faciais para suavizar linhas de expressão com naturalidade." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Marina Carvalho", cro: "Odontologia", specialty: "Saúde & Sorrisos de Excelência", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" } // Mantido url original
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Missão OdontoMed Prime",
    title1: "Humanidade,",
    title2: "segurança e",
    title3: "excelência.",
    desc: "Cuidar de pessoas com excelência em todas as fases da vida. Essa missão reflete a nossa essência: cuidamos de pessoas, e não apenas de tratamentos.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Segurança nunca é negociável", content: "Nosso ambiente é equipado com as melhores tecnologias, como Raio-X digital e Tomografia 3D, garantindo diagnósticos precisos." },
      { title: "Humanidade em primeiro lugar", content: "Acreditamos que a humanidade vem antes de qualquer protocolo clínico. Nosso atendimento é focado no seu bem-estar absoluto." },
      { title: "Excelência como padrão", content: "Na OdontoMed Prime, a excelência não é um diferencial opcional, mas sim a nossa entrega padrão em cada consulta." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência Prime",
    title1: "Laços",
    title2: "verdadeiros.",
    quote: "Além de resultados técnicos, nós criamos laços e confiança com nossos pacientes.",
    supporting: "Esse tipo de feedback é o combustível para nossa equipe, que fica sempre feliz em servir bem. Conheça nossa estrutura em Breves.",
    // Mantidas todas as URLs do Unsplash
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica OdontoMed Prime" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento Odontológico" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe Médica" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "Sorrisos",
    title2: "reconstruídos.",
    p1: "Acreditamos no impacto de uma ",
    p_bold1: "odontologia de alta performance.",
    p2: "Nós devolvemos a sua saúde e a sua confiança. Acompanhe os resultados dos nossos procedimentos na",
    p_bold2: "galeria de casos clínicos",
    p3: "e entenda por que a OdontoMed Prime é referência.",
    p_bold3: "",
    btn: "Ver Casos Clínicos",
    imgUrl: "/imagens/dentes.png" // Mantido como solicitado
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Quais especialidades médicas a clínica oferece?", a: "Além de odontologia completa, oferecemos atendimento em Clínica Geral, Cardiologia (consultas e exames), Ginecologia, Nutrição, Ortopedia, Psicologia e Ultrassonografia." },
      { q: "O que é a Tomografia Cone Beam?", a: "É um exame 3D avançado feito aqui mesmo na clínica que oferece visão detalhada da região bucal e facial, permitindo maior segurança para cirurgias e implantes." },
      { q: "Como saber se preciso de tratamento de canal?", a: "O canal é indicado quando a polpa interna do dente está inflamada ou infeccionada, causando dor aguda. O tratamento elimina a dor e evita a extração do dente." },
      { q: "A clínica faz atendimento para crianças?", a: "Sim! Cuidar do sorriso desde cedo faz toda a diferença. Oferecemos odontopediatria com carinho, paciência e um ambiente acolhedor e seguro para os pequenos." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Cel. Lourenço Borges, 1921", value2: "Centro" },
    box2: { title: "Localização", value1: "Breves - PA", value2: "CEP: 68800-000" },
    box3: { title: "Especialidades", value1: "Odontologia Completa", value2: "Medicina, Imagem e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Cuide-se com",
    title2: "exclusividade!",
    desc: "Agende sua avaliação. Toda a estrutura de radiologia, atendimento médico e tratamentos odontológicos em um só lugar.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@odonto.med.prime"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "OdontoMed Prime | Centro integrado de saúde em Breves - PA. Odontologia e medicina de alta performance com humanidade e excelência.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 OdontoMed Prime. Todos os direitos reservados. Dra. Marina Carvalho.",
    registro: "Centro — Breves, PA"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "excelência.",
    p1: "Confira a transformação da saúde e do sorriso de nossos pacientes através da ",
    p_bold1: "Odontologia Integrada",
    p2: ". Valorizamos a",
    p_bold2: "segurança e a função",
    p3: "em cada detalhe dos nossos tratamentos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética e Harmonização", 
        duration: "Clareamento e Resinas", 
        complaint: "Dentes escurecidos e descontentamento com o formato natural do sorriso.", 
        procedure: "Tratamento de clareamento estético seguido de restaurações precisas para devolver a estética ideal.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Reabilitação Oral", 
        duration: "Implantes Dentários", 
        complaint: "Dificuldade mastigatória severa e insegurança após a perda de dentes vitais.", 
        procedure: "Planejamento com Tomografia 3D própria e instalação segura de implantes devolvendo estabilidade.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Ortodontia Integrada", 
        duration: "Alinhamento e Função", 
        complaint: "Dentes desalinhados prejudicando a mordida e gerando desgaste precoce na articulação.", 
        procedure: "Correção ortodôntica segura com apoio de radiologia digital, garantindo um resultado final alinhado.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Saúde e Prevenção", 
        duration: "Endodontia e Restauração", 
        complaint: "Dor aguda por infecção na polpa do dente associada à cárie profunda.", 
        procedure: "Tratamento de canal rápido para eliminar a dor e restauração conservadora para salvar a estrutura do dente.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      }
    ]
  }
};