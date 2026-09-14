import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA (GENÉRICO)
  // ---------------------------------------------------
  clinica: {
    nome: "Vivere Odontologia",
    subtitulo: "Estética & Reabilitação Oral",
    // Logo SVG genérica embutida (Dente minimalista dourado) para o template
    logoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23CFA968' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M10 21.35s-2.12-1.74-3.53-3.15A11 11 0 0 1 3.3 11.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5a11 11 0 0 1-3.17 6.7c-1.41 1.41-3.53 3.15-3.53 3.15' /><path d='M14 21.35s2.12-1.74 3.53-3.15A11 11 0 0 0 20.7 11.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5a11 11 0 0 0 3.17 6.7c1.41 1.41 3.53 3.15 3.53 3.15' /></svg>", 
    contato: {
      whatsappUrl: "https://wa.me/5500000000000?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+cl%C3%ADnica.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(00) 90000-0000",
      emailLabel: "contato@vivereodontologia.com.br",
      instagramLabel: "@vivere.odonto",
    },
    endereco: {
      bairroCidade: "Bairro Nobre, Sua Cidade - UF",
      edificio: "Vivere Odontologia",
      detalhado: "Avenida Principal, 1000 - Sala 101\nBairro Nobre\nSua Cidade - UF, 00000-000",
      comodidades: ["Lentes em Resina", "Reabilitação Oral", "Clareamento", "Odontologia Estética"],
      mapaGpsUrl: "#",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975850290515!2d-46.66699318447573!3d-23.561332784682496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e54bba9%3A0xc0fb1f2c2ecf555c!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sábado\nSábados a partir das 09:00",
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
    eyebrow: "Sua Cidade — UF",
    title1: "Elevando a sua",
    title2: "autoestima",
    title3: "através do sorriso.",
    desc1: "Especialistas em ",
    descBold: "Reabilitação Oral e Estética.",
    desc2: " Transformamos sorrisos com a arte de esculpir dentes, unindo naturalidade, saúde e excelência em cada detalhe.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Dr. Responsável Técnico",
    badgeDesc: "CRO 00000",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 10, suffix: "+", label: "lentes por sorriso", thousands: false },
      { target: 100, suffix: "%", label: "foco em naturalidade", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Vivere Odontologia",
    title1: "A arte de",
    title2: "esculpir",
    title3: "sorrisos.",
    p1: "Localizada em um ponto nobre da cidade, a Vivere Odontologia nasceu com o propósito de elevar a sua autoestima através de uma odontologia de resultados.",
    p2_1: "Sob a liderança de um ",
    p2_bold: "Corpo Clínico Especializado,",
    p2_2: " nossa clínica é referência em Reabilitação Oral e Estética, oferecendo tratamentos modernos como lentes em resina e clareamento avançado.",
    topics: [
      { title: "Odontologia Avançada", desc: "Estrutura moderna e técnicas atualizadas para garantir precisão em cada tratamento." },
      { title: "Lentes em Resina", desc: "A arte de esculpir dentes com resinas de alta qualidade para um sorriso natural e harmônico." },
      { title: "Reabilitação Oral", desc: "Devolvemos a função mastigatória e a estética completa para a sua saúde e conforto." },
      { title: "Elevação da Autoestima", desc: "Cuidamos de cada detalhe para que você volte a sorrir com confiança todos os dias." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/profissionalatuando.png", title: "Estética Dental" },
      { url: "/imagens/clinica1.png", title: "Estrutura Moderna" },
      { url: "/imagens/materiais1.png", title: "Alta Tecnologia" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossas Especializações",
    title1: "Excelência em",
    title2: "cada detalhe.",
    desc1: "A nossa clínica oferece soluções completas em ",
    descBold: "Reabilitação Oral e Estética",
    desc2: ", garantindo que o seu tratamento seja sempre seguro e de alto nível.",
    btn: "Ver todas as especializações",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes em Resina", desc: "A arte de esculpir o seu sorriso. Corrigimos cor, formato e proporção dos dentes com resinas de alta durabilidade e polimento." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Utilizamos tecnologias avançadas (como clareamento a laser/LED) para devolver a luminosidade natural e o brilho dos seus dentes." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Tratamentos completos para pacientes que sofreram perdas ou desgastes severos, recuperando totalmente a estética e a função." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Focamos na harmonia facial e na naturalidade para que o seu novo sorriso se integre perfeitamente aos seus traços." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Odontologia Preventiva", desc: "Check-ups, profilaxia e orientações fundamentais para manter a saúde das suas gengivas e a longevidade das lentes." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Um ambiente onde a sua ansiedade é acolhida. Trabalhamos para tornar sua ida ao dentista uma experiência tranquila e positiva." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Corpo Clínico",
    members: [
      { name: "Dr. Nome do Especialista", cro: "CRO 00000", specialty: "Responsável Técnico", img: "/imagens/profissionalatuando.png" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "O Nosso Cuidado",
    title1: "Elevando a sua",
    title2: "autoestima",
    title3: "através do sorriso.",
    desc: "Acreditamos que um sorriso bonito e saudável tem o poder de transformar a maneira como você se vê e como o mundo te enxerga.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Foco na Naturalidade", content: "Nossos procedimentos de lentes em resina são desenhados um a um, artesanalmente, garantindo um resultado que não parece artificial." },
      { title: "Tecnologia e Conforto", content: "Contamos com equipamentos modernos para agilizar o seu tratamento, entregando resultados precisos com o máximo de conforto possível." },
      { title: "Planejamento Individualizado", content: "Avaliamos seu rosto, sua mordida e seus desejos antes de iniciar qualquer mudança, para que o resultado supere as suas expectativas." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Odontologia",
    title2: "Avançada.",
    quote: "Nosso ambiente foi preparado para proporcionar um atendimento de alto padrão para você e sua família.",
    supporting: "Acompanhe um pouco do nosso espaço. Uma clínica planejada em cada detalhe para o seu bem-estar.",
    photos: [
      { img: "/imagens/clinica1.png", alt: "Estrutura da Clínica" },
      { img: "/imagens/profissionalatuando.png", alt: "Atendimento Clínico" },
      { img: "/imagens/clinica2.png", alt: "Recepção e Conforto" },
      { img: "/imagens/materiais1.png", alt: "Materiais de Alta Qualidade" },
      { img: "/imagens/profissionaisatuando.png", alt: "Equipe em Ação" },
      { img: "/imagens/materiais2.png", alt: "Tecnologia Odontológica" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "A arte de",
    title2: "esculpir sorrisos.",
    p1: "Acreditamos na",
    p_bold1: "odontologia estética",
    p2: "capaz de devolver a sua autoconfiança de forma imediata. Acompanhe a transformação real na nossa",
    p_bold2: "galeria de resultados",
    p3: "e descubra o nosso padrão de excelência.",
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
      { q: "Onde a clínica está localizada?", a: "Nossa clínica fica localizada na Avenida Principal, 1000 - Sala 101, em um bairro nobre com fácil acesso e estacionamento." },
      { q: "Quais são as especialidades da clínica?", a: "Nosso foco principal é a Reabilitação Oral e a Odontologia Estética, incluindo a confecção de Lentes em Resina e protocolos de Clareamento Dental." },
      { q: "Como funcionam as Lentes em Resina?", a: "É um procedimento de estética dental onde aplicamos uma resina de alta performance sobre os dentes para corrigir cor, tamanho e formato, feito de forma artesanal no consultório." },
      { q: "Como agendar uma avaliação?", a: "Basta clicar em qualquer botão de WhatsApp do site, ou nos adicionar diretamente pelo nosso número de contato. Nossa equipe estará pronta para te atender." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Avenida Principal, 1000", value2: "Sala 101 - Bairro Nobre" },
    box2: { title: "Localização", value1: "Sua Cidade - UF", value2: "CEP: 00000-000" },
    box3: { title: "Especialidades", value1: "Reabilitação Oral", value2: "Lentes em Resina e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A sua saúde no",
    title2: "lugar certo.",
    desc: "Agende sua avaliação. Conte com a segurança de uma equipe especializada para tratar do seu sorriso com excelência.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@vivere.odonto"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Vivere Odontologia | Elevando autoestima através do sorriso. Especialistas em Reabilitação Oral e Estética.",
    title_tratamentos: "Especializações",
    title_contato: "Contato",
    direitos: "© 2026 Vivere Odontologia. Todos os direitos reservados. RT Dr. Nome do Especialista CRO 00000.",
    registro: "Sua Cidade — UF"
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
    p3: "em cada detalhe dos nossos tratamentos em resina e reabilitação.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética do Sorriso", 
        duration: "Lentes em Resina", 
        complaint: "Descontentamento com a cor e pequenas assimetrias no formato dos dentes anteriores.", 
        procedure: "Arte de esculpir 10 lentes em resina superior, devolvendo um sorriso harmônico e extremamente natural.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Odontologia Estética", 
        duration: "Clareamento Avançado", 
        complaint: "Dentes amarelados e com manchas devido à alimentação e ao tempo.", 
        procedure: "Protocolo de clareamento no consultório com luz aceleradora, garantindo dentes muito mais claros e iluminados.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Reabilitação Oral", 
        duration: "Devolução de Função", 
        complaint: "Desgaste severo dos dentes prejudicando a mordida e o suporte labial.", 
        procedure: "Reabilitação completa restabelecendo o tamanho original dos dentes e a força mastigatória.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Prevenção e Saúde", 
        duration: "Profilaxia", 
        complaint: "Acúmulo de tártaro causando inflamação na margem gengival.", 
        procedure: "Limpeza profunda (profilaxia) devolvendo a saúde das gengivas e preparando o sorriso para a estética.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      }
    ]
  }
};