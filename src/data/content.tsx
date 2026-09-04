import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Dualle",
    subtitulo: "Odontologia Especializada",
    logoUrl: "/imagens/logo.png", // Mantido como solicitado
    contato: {
      whatsappUrl: "https://wa.link/xngh9v", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(84) 98789-0488",
      emailLabel: "contato@dualleodonto.com.br",
      instagramLabel: "@dualle.odonto",
    },
    endereco: {
      bairroCidade: "Petrópolis, Natal - RN",
      edificio: "Harmony Medical Center, Sala 1601",
      detalhado: "Rua Coronel Joaquim Manoel, 615\n16º andar - Sala 1601\nPetrópolis, Natal - RN, 59012-530",
      comodidades: ["Odontopediatria", "Ortodontia", "Facetas e Clareamento", "Prótese"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Dualle+Odontologia+Natal",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.516558095891!2d-35.19895952412895!3d-5.782455057071209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b30167d2626cf3%3A0x4d7812b6d52e2835!2sDualle%20Odontologia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1788549453063!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sexta\nEncerra às 21:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "A Experiência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido como solicitado
    eyebrow: "Harmony Medical Center — Natal, RN",
    title1: "O cuidado que",
    title2: "vai além do",
    title3: "seu sorriso.",
    desc1: "Acolhimento, confiança e",
    descBold: "experiências leves desde cedo.",
    desc2: " Na Dualle, atendemos adultos e crianças em todas as especialidades, garantindo excelência e cuidado em cada detalhe.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "Dra. Sabrina Azevedo",
    badgeDesc: "CRO/RN 5132",
    stats: [
      { target: 4, suffix: ".9", label: "estrelas no google", thousands: false },
      { target: 35, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "cuidado e dedicação", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Dualle",
    title1: "Acolhimento e",
    title2: "confiança",
    title3: "para toda a família.",
    p1: "Localizada no Harmony Medical Center em Natal, a Dualle Odontologia Especializada nasceu para transformar a sua relação com o dentista.",
    p2_1: "Liderada pela ",
    p2_bold: "Dra. Sabrina Azevedo (CRO/RN 5132)",
    p2_2: ", nossa equipe é dedicada a criar experiências leves desde cedo, atendendo todas as especialidades para cuidar de crianças e adultos com o mesmo carinho.",
    topics: [
      { title: "Odontopediatria", desc: "Criamos experiências lúdicas para que as crianças amem cuidar do sorriso desde cedo." },
      { title: "Odontologia Estética", desc: "Facetas, clareamento e soluções modernas para adultos sorrirem com confiança." },
      { title: "Todas as Especialidades", desc: "Da ortodontia à prótese, centralizamos toda a sua saúde bucal em um só lugar." },
      { title: "Acolhimento Real", desc: "Entendemos seus desejos e respeitamos o tempo de cada paciente na cadeira." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/hero.png", title: "Saúde Bucal" }, // Mantido como solicitado
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Cuidado Humanizado" },
      { url: "/imagens/leve.png", title: "Sorrisos Leves" } // Mantido como solicitado
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Cuidado para",
    title2: "todas as idades.",
    desc1: "Oferecemos odontologia integrada para ",
    descBold: "crianças e adultos",
    desc2: ", garantindo conforto e resultados duradouros em todas as fases da vida.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria", desc: "Atendimento especializado, lúdico e paciente para criar memórias positivas e cuidar da saúde bucal infantil." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Facetas e Estética", desc: "Transformação do formato e cor dos dentes com naturalidade, elevando a harmonia do seu rosto." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Ortodontia", desc: "Correção da mordida e alinhamento dos dentes para adultos e crianças com aparelhos modernos." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Técnicas seguras para remover manchas e devolver o brilho e a cor clara natural ao seu sorriso." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Prótese e Reabilitação", desc: "Devolvemos a função mastigatória e a estética para quem sofreu desgaste ou perda estrutural dos dentes." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Clínica Geral", desc: "Prevenção, profilaxia (limpeza) e restaurações essenciais para manter a saúde diária da sua boca." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Sabrina Azevedo", cro: "CRO/RN 5132", specialty: "Dentista Especializada", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" } // Mantido url original
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Experiência Dualle",
    title1: "Experiências",
    title2: "leves",
    title3: "desde cedo.",
    desc: "Acreditamos que ir ao dentista não precisa ser motivo de medo. Venha viver esse cuidado de perto em um ambiente preparado para relaxar você e sua família.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Do infantil ao adulto", content: "Nosso espaço e atendimento são adaptáveis: lúdicos para os pequenos e extremamente sofisticados e objetivos para os adultos." },
      { title: "Segurança e Confiança", content: "Construímos relacionamentos duradouros com nossos pacientes através da transparência em cada diagnóstico." },
      { title: "Localização Privilegiada", content: "Estamos no 16º andar do Harmony Medical Center, em Petrópolis, oferecendo comodidade e fácil acesso em Natal." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "O que dizem sobre nós",
    title1: "Uma experiência",
    title2: "única.",
    quote: "Uma qualidade a destacar é a atenção aos detalhes e o profissionalismo. Experiência altamente recomendada.",
    supporting: "Nossos pacientes no Google avaliam nosso trabalho com 4.9 estrelas. Sinta um pouco do ambiente acolhedor da Dualle.",
    // Mantidas todas as URLs do Unsplash do content_8.tsx
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Dualle" },
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
    eyebrow: "O Portfólio",
    title1: "Sorrisos",
    title2: "transformados.",
    p1: "Acreditamos no poder de uma",
    p_bold1: "odontologia bem planejada.",
    p2: "Veja na prática como realçamos a estética e devolvemos a saúde aos nossos pacientes em nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e venha viver esse cuidado de perto.",
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
      { q: "Onde o consultório da Dualle está localizado?", a: "Nosso consultório fica no Harmony Medical Center, 16º andar - Sala 1601, na Rua Coronel Joaquim Manoel, 615, no bairro Petrópolis, em Natal - RN." },
      { q: "Com qual idade devo levar meu filho ao Odontopediatra?", a: "Recomendamos que a primeira visita ocorra logo quando nascem os primeiros dentinhos de leite, para que possamos criar uma experiência leve e focar na prevenção." },
      { q: "Quais especialidades vocês atendem?", a: "A Dualle atende todas as especialidades: odontopediatria para os pequenos, e estética, ortodontia, clareamento, facetas e prótese para os adultos." },
      { q: "O clareamento dental deixa os dentes sensíveis?", a: "A sensibilidade pode ocorrer, mas utilizamos técnicas modernas e individualizadas no consultório que minimizam o desconforto e garantem um processo seguro." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "R. Cel. Joaquim Manoel, 615", value2: "Harmony Medical Center - Sl 1601" },
    box2: { title: "Localização", value1: "Petrópolis, Natal - RN", value2: "CEP: 59012-530" },
    box3: { title: "Especialidades", value1: "Odontopediatria, Estética", value2: "Ortodontia e Prótese" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Venha viver esse",
    title2: "cuidado de perto!",
    desc: "Agende sua avaliação e descubra como a odontologia especializada pode cuidar do sorriso de toda a sua família.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos casos",
    box3_desc2: "@dualle.odonto"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Dualle | Dentistas para crianças e adultos em Natal/RN. O cuidado que vai além do seu sorriso.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Dualle Odontologia Especializada. Todos os direitos reservados. Dra. Sabrina Azevedo CRO/RN 5132.",
    registro: "Petrópolis — Natal, RN"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "precisão.",
    p1: "Confira a transformação dos sorrisos através da nossa dedicação em ",
    p_bold1: "Odontologia Especializada",
    p2: ". Valorizamos o",
    p_bold2: "cuidado e a saúde",
    p3: "em cada fase da vida, do infantil ao adulto.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética Avançada", 
        duration: "Facetas e Resinas", 
        complaint: "Descontentamento com o formato e cor do sorriso na fase adulta.", 
        procedure: "Aplicação de facetas com modelagem detalhista, devolvendo simetria e brilho natural.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Clareamento", 
        duration: "Estética do Sorriso", 
        complaint: "Sorriso com coloração amarelada e aspecto de cansaço.", 
        procedure: "Protocolo de clareamento seguro no consultório, alcançando uma tonalidade limpa e iluminada.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Ortodontia", 
        duration: "Alinhamento Perfeito", 
        complaint: "Dentes desalinhados prejudicando a mastigação e a confiança.", 
        procedure: "Tratamento ortodôntico contínuo, garantindo a correção da mordida e um sorriso harmônico.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      },
      { 
        category: "Odontopediatria", 
        duration: "Saúde Infantil", 
        complaint: "Necessidade de adaptação e prevenção em pacientes infantis/pré-adolescentes.", 
        procedure: "Atendimento acolhedor focado em profilaxia e desenvolvimento saudável da dentição.", 
        beforeImg: "/imagens/branco.png", // Mantido como solicitado
        afterImg: "/imagens/preto.png"    // Mantido como solicitado
      }
    ]
  }
};