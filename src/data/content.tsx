import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Instituto Felizardo",
    subtitulo: "Odontologia de Excelência",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/556198711826",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(61) 3383-4729",
      emailLabel: "contato@institutofelizardo.com.br",
      instagramLabel: "@institutofelizardo no Instagram",
    },
    endereco: {
      bairroCidade: "Guará I, Brasília - DF",
      edificio: "Guará Office Center",
      detalhado: "QE 11, Edifício Guará Office Center, Salas 219 e 220\nGuará I, Brasília - DF, 71020-721",
      comodidades: ["Reabilitação de alta complexidade", "Tecnologia avançada", "Conforto premium"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Instituto+Felizardo+-+ODONTOLOGIA",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.3054780961575!2d-47.97985044294515!3d-15.822254328410237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31bfe2215b7f%3A0xde5de31aaaa4c0d9!2sInstituto%20Felizardo%20-%20ODONTOLOGIA!5e0!3m2!1spt-BR!2sbr!4v1788271933322!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta\nAberto até as 18:00",
  },

  // ---------------------------------------------------
  // MENU E NAVEGAÇÃO
  // ---------------------------------------------------
  nav: {
    links: ["O Instituto", "Especialidades", "Resultados", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO (BANNER INICIAL)
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png",
    eyebrow: "Guará Office Center — Brasília",
    title1: "Reabilitações",
    title2: "projetadas",
    title3: "para durar décadas.",
    desc1: "Acreditamos que tratamentos de excelência não são definidos por preço, mas pela ",
    descBold: "capacidade e experiência do profissional.",
    desc2: " Foco absoluto nos detalhes e na longevidade do seu sorriso.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Conheça o Instituto",
    badgeTitle: "Excelência",
    badgeDesc: "Reabilitação Oral Avançada",
    stats: [
      { target: 20, suffix: "+", label: "anos de longevidade planejada", thousands: false },
      { target: 10, suffix: "+", label: "profissionais por reabilitação", thousands: false },
      { target: 4, suffix: ".7", label: "nota de excelência no google", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "O Instituto",
    title1: "Não existe almoço grátis.",
    title2: "Experiência dita a regra.",
    p1: "Tudo o que envolve um tratamento de excelência tem um custo: tecnologia de ponta e pessoas altamente especializadas para atender necessidades exclusivas. Não é sobre preço, é sobre o valor agregado ao seu resultado final.",
    p2_1: "Os casos mais complexos de reabilitação com implantes, lentes ou facetas exigem um profissional ",
    p2_bold: "habilidoso, cuidadoso com os detalhes e extremamente exigente",
    p2_2: " com a qualidade. Aqui, a experiência e a formação ditam a regra do jogo.",
    topics: [
      { title: "Longevidade Comprovada", desc: "Implantes planejados para durar 20, 30 anos." },
      { title: "Planejamento Estratégico", desc: "Escolha da técnica e dos materiais ideais para você." },
      { title: "Casos Complexos", desc: "Expertise em reabilitações que exigem alta habilidade." },
      { title: "Equipe Multidisciplinar", desc: "Até 10 profissionais envolvidos no seu tratamento." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Estrutura Premium" },
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Tecnologia e Precisão" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Excelência Clínica" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Implantes que",
    title2: "precisam durar.",
    desc1: "A longevidade das reabilitações protéticas ",
    descBold: "deve ser duradoura",
    desc2: ". Quando bem planejadas e bem executadas, nossas reabilitações transformam permanentemente a sua qualidade de vida.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "A reabilitação sobre implantes exige planejamento meticuloso. Projetamos raízes artificiais estruturadas para durar décadas com a máxima estabilidade." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Contato & Facetas", desc: "Casos complexos de estética exigem um olhar clínico apurado. Utilizamos materiais premium para garantir naturalidade e resistência excepcionais." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Reabilitação Oral Multidisciplinar", desc: "Tratamentos amplos onde a média de profissionais envolvidos chega a 10 ou mais, garantindo que cada detalhe seja executado por um especialista." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Protocolos avançados de clareamento para devolver a luminosidade do esmalte de forma segura, indolor e altamente duradoura." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Odontologia Clínica", desc: "A base de uma reabilitação de sucesso. Orientação rigorosa e cuidados contínuos para manter a saúde bucal ao longo dos anos." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Acompanhamento e Conscientização", desc: "Orientar é uma obrigação do dentista. O seu comprometimento com os cuidados necessários muda completamente a longevidade do resultado." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Corpo Clínico",
    members: [
      { name: "Dr. Luiz Eduardo Felizardo", cro: "Responsável Técnico", specialty: "Reabilitação & Implantes", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Especialista Felizardo", cro: "Especialista", specialty: "Lentes e Estética", img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" },
      { name: "Especialista Felizardo", cro: "Especialista", specialty: "Clínica Geral", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura Felizardo",
    title1: "Tecnologia aplicada",
    title2: "à sua",
    title3: "qualidade de vida.",
    desc: "Tudo o que está envolvido em um tratamento de excelência tem um custo invisível: a tecnologia de ponta e o ambiente projetado para suportar casos de alta complexidade.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Até 10 Profissionais por Caso", content: "Você sabia que em um tratamento reabilitador complexo a média de profissionais envolvidos chega a 10 ou mais? Nosso instituto centraliza e coordena essa equipe para você." },
      { title: "Foco na Longevidade", content: "Não trabalhamos com soluções paliativas. Nossa estrutura e escolha de materiais são guiadas pela meta de que o seu tratamento dure de 20 a 30 anos com a manutenção adequada." },
      { title: "Guará Office Center", content: "Localizados no Edifício Guará Office, oferecemos um ambiente discreto, sofisticado e totalmente equipado para conduzir reabilitações extensas com segurança." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "4.7",
    googleReviews: "15 Avaliações",
    list: [
      { name: "Paciente Instituto", role: "Reabilitação Oral", stars: 5, text: "O nível de detalhismo do Dr. Luiz e de toda a equipe é impressionante. Entendi que um implante é um investimento para a vida toda.", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente Instituto", role: "Lentes de Contato", stars: 5, text: "A clínica tem uma infraestrutura incrível no Guará. O tratamento foi extremamente bem planejado e o resultado estético ficou além do que eu imaginava.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente Instituto", role: "Implante", stars: 5, text: "A honestidade e a experiência deles me passaram muita segurança. Fui orientado sobre cada etapa e sobre como cuidar para que o trabalho dure décadas.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CHAMADA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "A experiência dita",
    title2: "o resultado.",
    p1: "A",
    p_bold1: "excelência técnica",
    p2: "é o que garante que reabilitações sejam duradouras e belas. Explore nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e entenda o valor do",
    p_bold3: "Instituto Felizardo",
    btn: "Ver Galeria de Casos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde o Instituto Felizardo está localizado?", a: "Estamos no Guará I, QE 11, Edifício Guará Office Center, Salas 219 e 220, em Brasília - DF." },
      { q: "O que é uma reabilitação oral multidisciplinar?", a: "É um tratamento amplo que devolve a estética e a função dos dentes perdidos ou desgastados. Em casos complexos, envolvemos até 10 especialistas de diferentes áreas para garantir o sucesso." },
      { q: "Quanto tempo dura um implante dentário?", a: "Quando bem planejado, bem executado e com a correta manutenção do paciente, os implantes são projetados para oferecer uma longevidade de 20 a 30 anos." },
      { q: "Vocês trabalham com lentes de contato dental?", a: "Sim. A execução de lentes de contato exige um profissional extremamente habilidoso e materiais de excelência para garantir naturalidade e segurança." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Edifício", value1: "Guará Office Center", value2: "Salas 219 e 220" },
    box2: { title: "Localização", value1: "Guará I, QE 11", value2: "Brasília - DF, 71020-721" },
    box3: { title: "Diferenciais", value1: "Estrutura de Alta Complexidade", value2: "Ambiente Premium" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Invista na sua",
    title2: "qualidade de vida.",
    desc: "Agende sua avaliação e descubra o valor de um tratamento planejado para durar. Nossa equipe multidisciplinar está pronta para conduzir a sua reabilitação.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe nosso conhecimento",
    box3_desc2: "@institutofelizardo no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Experiência que dita a regra do jogo. Reabilitações de alta complexidade planejadas para oferecer excelência e longevidade.",
    title_tratamentos: "Tratamentos",
    title_contato: "Contato",
    direitos: "© 2026 Instituto Felizardo. Todos os direitos reservados.",
    registro: "Guará I — Brasília, DF"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio Clínico",
    title1: "Resultados feitos",
    title2: "para durar décadas.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de reabilitações",
    p2: ". O planejamento cirúrgico e a",
    p_bold2: "experiência de nossos profissionais",
    p3: "garantem a execução de tratamentos altamente complexos com segurança.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Implantes Dentários", duration: "Longevidade Planejada", complaint: "Ausência dentária severa exigindo intervenção estrutural duradoura.", procedure: "Carga imediata e fixação de prótese sobre implantes com planejamento 3D.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Lentes e Facetas", duration: "Meticulosidade", complaint: "Desgaste excessivo do esmalte e perda da dimensão vertical do sorriso.", procedure: "Reabilitação estética envolvendo múltiplos profissionais para garantir a anatomia perfeita.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Reabilitação Oral", duration: "Multidisciplinar", complaint: "Caso complexo necessitando de intervenção na mordida, gengiva e dentes.", procedure: "Execução coordenada por uma equipe especializada focada na qualidade de vida do paciente.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" },
      { category: "Clareamento e Perio", duration: "Atenção aos Detalhes", complaint: "Lesões cervicais não cariosas e necessidade de uniformização de cor.", procedure: "Abordagem clínica focada na saúde periodontal prévia à harmonização estética.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" }
    ]
  }
};