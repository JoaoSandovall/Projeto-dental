import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Dra. Júllia Rodrigues",
    subtitulo: "Odontologia Estética",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/5584988125810", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(84) 98812-5810",
      emailLabel: "contato@drajulliarodrigues.com.br",
      instagramLabel: "@drajulliarodrigues",
    },
    endereco: {
      bairroCidade: "Tirol, Natal - RN",
      edificio: "Praça Augusto Leite, 656",
      detalhado: "Praça Augusto Leite, 656 - Sala 12\nTirol\nNatal - RN, 59020-380",
      comodidades: ["Facetas em Resina", "Clareamento Dental", "Dentística Restauradora", "Ambiente Acolhedor"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Dra+Jullia+Rodrigues+Dentista+Natal",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.6975850852562!2d-35.2036375!3d-5.7997312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301f208fff727%3A0x9a488ad351f3f427!2sDra.%20J%C3%BAllia%20Rodrigues%20%7C%20Dentista%20em%20Natal%20%7C%20Clareamento%20Dental%20%7C%20Facetas%20em%20Resina!5e0!3m2!1spt-BR!2sbr!4v1788527145273!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 18:00",
  },

  nav: {
    links: ["A Profissional", "Especialidades", "A Experiência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o seu caminho original
    eyebrow: "Tirol — Natal, RN",
    title1: "A arte da",
    title2: "odontologia",
    title3: "estética.",
    desc1: "Com foco total em",
    descBold: "Odontologia Estética e Restauradora,",
    desc2: " realçamos a beleza natural do seu sorriso com precisão, muito cuidado e atenção a cada detalhe.",
    btnPrimary: "Agende sua consulta",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "Dra. Júllia",
    badgeDesc: "CRO-RN 7320",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 23, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "atenção e cuidado", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Profissional",
    title1: "Atendimento",
    title2: "agradável e",
    title3: "altamente qualificado.",
    p1: "Localizada no bairro Tirol, em Natal, nossa clínica oferece uma experiência única. Somos uma empresa de empreendedoras, e um espaço seguro que acolhe a comunidade LGBTQ+ com todo o respeito.",
    p2_1: "Sob os cuidados da ",
    p2_bold: "Dra. Júllia Rodrigues (CRO-RN 7320)",
    p2_2: ", pós-graduada em Dentística, você recebe um tratamento focado em detalhes precisos e muita dedicação para promover sempre o melhor para os pacientes.",
    topics: [
      { title: "Odontologia Estética", desc: "Procedimentos de alta precisão que devolvem a harmonia do seu rosto." },
      { title: "Dentística Restauradora", desc: "Pós-graduação e expertise para tratamentos seguros e duradouros." },
      { title: "Acolhimento Real", desc: "Um ambiente onde você é ouvido, respeitado e bem atendido." },
      { title: "Clareza e Objetividade", desc: "Comunicação transparente em todas as etapas do seu procedimento." },
    ],
    btn: "Quero agendar uma avaliação",
    gallery: [
      { url: "/imagens/hero.png", title: "Saúde Bucal" }, // Mantido o seu caminho original
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Cuidado Humanizado" },
      { url: "/imagens/leve.png", title: "Sorrisos Leves" } // Mantido o seu caminho original
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Beleza natural",
    title2: "e restauração.",
    desc1: "Oferecemos soluções voltadas para a ",
    descBold: "estética e saúde do seu sorriso",
    desc2: ", unindo as melhores técnicas da dentística moderna.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Facetas em Resina", desc: "Transformações estéticas de alta performance, corrigindo cor e formato dos dentes com resinas imperceptíveis." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Renove a luminosidade e o brilho do seu sorriso com técnicas modernas e seguras no consultório." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Dentística Restauradora", desc: "Restaurações estéticas que devolvem a função mastigatória preservando a naturalidade dental." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Prevenção e Profilaxia", desc: "Limpezas profundas e acompanhamento contínuo para garantir que a beleza do seu sorriso se mantenha saudável." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Tempo dedicado para escutar suas necessidades e construir o tratamento ideal com você." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Espaço Inclusivo", desc: "Um ambiente seguro, feito por empreendedoras, de respeito absoluto a todos e apoio à comunidade LGBTQ+." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Júllia Rodrigues", cro: "CRO-RN 7320", specialty: "Odontologia Estética e Restauradora", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Experiência",
    title1: "Cuidado em",
    title2: "cada",
    title3: "detalhe.",
    desc: "Nossos pacientes destacam constantemente a atenção, a rapidez e a objetividade em nossos atendimentos. Estamos aqui para oferecer o melhor de forma única.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Postura e Profissionalismo", content: "Nosso atendimento é focado em entregar resultados com agilidade e clareza, sempre respeitando o tempo do paciente." },
      { title: "Detalhes Precisos", content: "Acreditamos que na estética odontológica, a precisão milimétrica é o que diferencia um tratamento bom de um tratamento espetacular." },
      { title: "Dedicação ao Paciente", content: "Nos dedicamos integralmente a promover o melhor para quem senta em nossa cadeira, garantindo uma experiência agradável." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "O que dizem sobre nós",
    title1: "Uma experiência",
    title2: "única.",
    quote: "Uma qualidade a destacar é nos detalhes precisos em todos os procedimentos estéticos e postura profissional.",
    supporting: "Nossos pacientes no Google avaliam nosso trabalho com 5.0 estrelas. Acompanhe a atmosfera de cuidado da nossa clínica no Tirol.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Dra Jullia" },
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
    p1: "Acreditamos no poder da",
    p_bold1: "odontologia estética",
    p2: "feita com responsabilidade.",
    p_bold2: "Veja na prática",
    p3: "o impacto de tratamentos como clareamento e facetas em resina na nossa",
    p_bold3: "galeria de resultados clínicos.",
    btn: "Ver Casos Clínicos",
    imgUrl: "/imagens/dentes.png" // Mantido o seu caminho original
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde o consultório da Dra. Júllia está localizado?", a: "Nosso consultório fica na Praça Augusto Leite, 656 - Sala 12, no bairro Tirol, em Natal - RN." },
      { q: "O que são Facetas em Resina?", a: "São finas camadas de resina aplicadas sobre os dentes para corrigir imperfeições de cor, formato e alinhamento, de forma rápida e menos invasiva." },
      { q: "O clareamento dental deixa os dentes sensíveis?", a: "A sensibilidade pode ocorrer de forma leve, mas utilizamos técnicas e materiais que minimizam muito esse desconforto, garantindo um processo seguro." },
      { q: "Vocês atendem todos os públicos?", a: "Com certeza! Somos um espaço seguro, de empreendedoras, que acolhe a comunidade LGBTQ+ com todo carinho, respeito e profissionalismo." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Praça Augusto Leite, 656", value2: "Sala 12 - Tirol" },
    box2: { title: "Localização", value1: "Natal - RN", value2: "CEP: 59020-380" },
    box3: { title: "Especialidades", value1: "Dentística Restauradora", value2: "Facetas e Clareamento" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A beleza do seu",
    title2: "sorriso te espera.",
    desc: "Agende sua avaliação e descubra como a odontologia estética pode realçar o que você tem de melhor, com cuidado e precisão.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos casos",
    box3_desc2: "@drajulliarodrigues"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Dra. Júllia Rodrigues | Pós-graduada em Dentística. Odontologia Estética e Restauradora com atendimento acolhedor em Natal-RN.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Dra. Júllia Rodrigues. Todos os direitos reservados. CRO-RN 7320.",
    registro: "Tirol — Natal, RN"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "precisão.",
    p1: "Confira a transformação dos sorrisos através da nossa dedicação em ",
    p_bold1: "Odontologia Estética",
    p2: ". Valorizamos os",
    p_bold2: "detalhes precisos",
    p3: "para garantir a beleza natural e a saúde em cada procedimento.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética Avançada", 
        duration: "Facetas em Resina", 
        complaint: "Dentes com formato irregular e descontentamento com a cor do sorriso.", 
        procedure: "Aplicação de facetas em resina com modelagem detalhista, devolvendo simetria e brilho natural.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Clareamento e Harmonia", 
        duration: "Clareamento Dental", 
        complaint: "Sorriso com coloração amarelada e aspecto de cansaço devido a pigmentos.", 
        procedure: "Protocolo de clareamento seguro e monitorado, alcançando uma tonalidade limpa e iluminada.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Restauração de Alta Performance", 
        duration: "Dentística Restauradora", 
        complaint: "Restaurações antigas escurecidas que comprometiam a confiança ao sorrir.", 
        procedure: "Substituição por resinas de alta tecnologia, imperceptíveis e com excelente durabilidade e polimento.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Saúde e Prevenção", 
        duration: "Profilaxia Estética", 
        complaint: "Presença de tártaro e manchas superficiais que apagavam o brilho dos dentes.", 
        procedure: "Limpeza profunda e polimento coronário, devolvendo a saúde das gengivas e a textura lisa dos dentes.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      }
    ]
  }
};