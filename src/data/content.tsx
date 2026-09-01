import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Sant'Anna",
    subtitulo: "Odontologia de Alto Padrão",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/5551989921001",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(51) 98992-1001",
      emailLabel: "contato@santannaodontologia.com.br",
      instagramLabel: "@leonardo_santanna_dentista no Instagram",
    },
    endereco: {
      bairroCidade: "Petrópolis — Porto Alegre, RS",
      edificio: "Rua Maranguapé, 72 - Sl 203",
      detalhado: "Rua Maranguapé, 72 - Sl 203\nPetrópolis, Porto Alegre - RS, 90690-380",
      comodidades: ["Atendimento de alto padrão", "Ambiente sofisticado e reservado", "Odontologia digital 3D"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Sant'Anna+Odontologia+Porto+Alegre",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7758223323876!2d-51.18238242369472!3d-30.043288674924238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979b3f97387d9%3A0x8b6d71ee9adc0007!2sSant'Anna%20Odontologia%20-%20Porto%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1788304780888!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sábado\nHorários sob agendamento",
  },

  // ---------------------------------------------------
  // MENU E NAVEGAÇÃO
  // ---------------------------------------------------
  nav: {
    links: ["A Clínica", "Especialidades", "Resultados", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO (BANNER INICIAL)
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png",
    eyebrow: "Petrópolis — Porto Alegre, RS",
    title1: "Odontologia",
    title2: "de alto padrão,",
    title3: "sorrisos únicos.",
    desc1: "Na Sant'Anna Odontologia, ",
    descBold: "cada detalhe importa.",
    desc2: " Unimos técnica apurada, tecnologia digital de ponta e um atendimento verdadeiramente próximo para o seu sorriso.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Conheça a clínica",
    badgeTitle: "Destaque",
    badgeDesc: "Odontologia de Alto Padrão",
    stats: [
      { target: 5, suffix: ".0", label: "nota no google", thousands: false },
      { target: 23, suffix: "+", label: "avaliações 5 estrelas", thousands: false },
      { target: 100, suffix: "%", label: "foco em você", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Excelência que",
    title2: "se vê no sorriso.",
    p1: "A Sant'Anna Odontologia nasceu para oferecer tratamentos de alto padrão em Porto Alegre, unindo técnica refinada, tecnologia de ponta e um atendimento verdadeiramente próximo do paciente.",
    p2_1: "Sob a responsabilidade técnica do ",
    p2_bold: "Dr. Leonardo Sant'Anna",
    p2_2: ", a clínica reúne planejamento digital, procedimentos estéticos e cirúrgicos para entregar resultados naturais e duradouros.",
    topics: [
      { title: "Harmonização Orofacial", desc: "Procedimentos estéticos que valorizam a naturalidade do seu rosto." },
      { title: "Clareamento Dental", desc: "Técnicas seguras para um sorriso mais branco e uniforme." },
      { title: "Cirurgias e Implantes", desc: "Planejamento cirúrgico preciso com foco em segurança e conforto." },
      { title: "Prótese e Odontologia Digital", desc: "Tecnologia 3D para próteses e facetas com encaixe perfeito." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento de Alto Padrão" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&fit=crop", title: "Tecnologia e Precisão" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Cada Detalhe Importa" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Nossos",
    title2: "Tratamentos.",
    desc1: "Atuamos com ",
    descBold: "excelência técnica",
    desc2: " em cada etapa, do planejamento digital ao resultado final, para entregar odontologia de alto padrão.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Harmonização Orofacial", desc: "Toxina botulínica e preenchimentos para equilíbrio e naturalidade no seu rosto." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Protocolos seguros e eficazes para um sorriso mais luminoso e uniforme." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Cirurgias Odontológicas", desc: "Extrações, implantes e procedimentos cirúrgicos com máxima segurança." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Prótese Dentária", desc: "Coroas, facetas e próteses planejadas digitalmente para o encaixe perfeito." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Odontologia Digital 3D", desc: "Planejamento digital de ponta a ponta para resultados previsíveis e naturais." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Personalizado", desc: "Cada plano de tratamento é pensado nas necessidades exclusivas do paciente." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossa Equipe",
    members: [
      { name: "Dr. Leonardo Sant'Anna", cro: "Responsável Clínico", specialty: "Odontologia de Alto Padrão", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura Sant'Anna",
    title1: "Um espaço pensado",
    title2: "para o seu",
    title3: "conforto e sofisticação.",
    desc: "Cada detalhe da nossa estrutura em Petrópolis, Porto Alegre, foi planejado para o seu bem-estar — do primeiro atendimento ao resultado final.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Planejamento Digital 3D", content: "Utilizamos tecnologia de ponta para simular e planejar cada tratamento com precisão." },
      { title: "Acompanhamento Próximo", content: "O Dr. Leonardo acompanha de perto cada etapa do seu tratamento, do diagnóstico ao resultado." },
      { title: "Ambiente Sofisticado", content: "Um espaço reservado e confortável, pensado para o seu bem-estar durante toda a consulta." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: GALERIA DE FOTOS DA CLÍNICA
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Nosso Dia a Dia",
    quote: "Cuidamos de cada paciente como gostaríamos de ser cuidados: com atenção, técnica e respeito ao seu tempo.",
    supporting: "Alguns registros do dia a dia na Sant'Anna Odontologia — consultas, parcerias e a confiança de quem já faz parte da nossa história.",
    photos: [
      { img: "/imagens/gallery-familia.jpg", alt: "Paciente e família na Sant'Anna Odontologia" },
      { img: "/imagens/gallery-parceiro1.jpg", alt: "Dr. Leonardo Sant'Anna com paciente na clínica" },
      { img: "/imagens/gallery-parceiro2.jpg", alt: "Dr. Leonardo Sant'Anna com paciente na clínica" },
      { img: "/imagens/gallery-casal.jpg", alt: "Dr. Leonardo Sant'Anna com paciente na clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Ambiente da Sant'Anna Odontologia" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Atendimento na Sant'Anna Odontologia" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CHAMADA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "Técnica que",
    title2: "transforma sorrisos.",
    p1: "A",
    p_bold1: "excelência técnica do Dr. Leonardo",
    p2: "é refletida em cada resultado. Explore a nossa",
    p_bold2: "galeria de casos clínicos",
    p3: "e conheça o padrão da",
    p_bold3: "Sant'Anna Odontologia",
    btn: "Ver Galeria de Resultados",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a Sant'Anna Odontologia está localizada?", a: "Estamos na Rua Maranguapé, 72 - Sl 203, no bairro Petrópolis, em Porto Alegre - RS. Ambiente reservado e de fácil acesso." },
      { q: "Quais tratamentos a clínica oferece?", a: "Atuamos com Harmonização Orofacial, Clareamento Dental, Cirurgias e Implantes, Prótese e Odontologia Digital 3D, sempre sob a responsabilidade técnica do Dr. Leonardo Sant'Anna." },
      { q: "Vocês realizam harmonização facial?", a: "Sim! Oferecemos procedimentos de Harmonização Orofacial, incluindo toxina botulínica e preenchimentos, sempre com foco na naturalidade do resultado." },
      { q: "Como funciona o planejamento digital 3D?", a: "Utilizamos tecnologia digital de ponta para simular o resultado do tratamento antes mesmo de começar, garantindo mais previsibilidade e segurança para o paciente." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Maranguapé, 72 - Sl 203", value2: "Porto Alegre - RS" },
    box2: { title: "Localização", value1: "Petrópolis, Porto Alegre", value2: "CEP: 90690-380" },
    box3: { title: "Odontologia de Alto Padrão", value1: "Harmonização, Cirurgias,", value2: "Prótese e Digital 3D" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Seu sorriso merece",
    title2: "alto padrão.",
    desc: "Agende sua avaliação com o Dr. Leonardo Sant'Anna e conheça de perto o cuidado, a técnica e a tecnologia que fazem a diferença no seu tratamento.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe nossas novidades",
    box3_desc2: "@leonardo_santanna_dentista no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Odontologia de alto padrão em Porto Alegre. Harmonização, cirurgias, prótese e odontologia digital 3D sob a responsabilidade do Dr. Leonardo Sant'Anna.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Sant'Anna Odontologia. Todos os direitos reservados.",
    registro: "Petrópolis — Porto Alegre, RS"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio e Resultados",
    title1: "Técnica planejada",
    title2: "para transformar.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de resultados",
    p2: ". O planejamento digital e o",
    p_bold2: "olhar técnico e individualizado",
    p3: "do Dr. Leonardo nos permitem entregar as melhores transformações para o seu sorriso.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Odontologia Estética", duration: "Facetas e Clareamento", complaint: "Desgaste dentário e insatisfação com a coloração do sorriso.", procedure: "Tratamento com facetas de porcelana garantindo harmonia, função e beleza natural.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Harmonização Orofacial", duration: "Preenchimento Labial", complaint: "Falta de volume nos lábios e assimetria leve.", procedure: "Preenchimento com ácido hialurônico focado em devolver a proporção e naturalidade facial.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Implantes Dentários", duration: "Reabilitação", complaint: "Perda dentária afetando a mastigação e autoconfiança.", procedure: "Planejamento cirúrgico digital de implante, seguro e focado na durabilidade e saúde do paciente.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" },
      { category: "Ortodontia", duration: "Alinhamento Dental", complaint: "Dentes desalinhados afetando a estética do sorriso.", procedure: "Planejamento ortodôntico digital para um alinhamento previsível e resultado natural.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" }
    ]
  }
};