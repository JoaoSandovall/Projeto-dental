import { CSSProperties } from "react";
import { Smile, Sparkles, Activity, Shield, Users, Stethoscope } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Clinmais",
    subtitulo: "Odontologia, Saúde e Estética",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/5547984208734",
      whatsappLabel: "Falar no WhatsApp",
      telefoneLabel: "(47) 98420-8734",
      emailLabel: "contato@clinmais.com.br",
      instagramLabel: "@clinmaisodontologia no Instagram",
    },
    endereco: {
      bairroCidade: "Centro — Camboriú, SC",
      edificio: "Av. José Francisco Bernardes, 320",
      detalhado: "Av. José Francisco Bernardes, 320\nCentro, Camboriú - SC, 88340-233",
      comodidades: ["Clínica Multidisciplinar", "Atendimento humanizado", "Tecnologia e conforto"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clínica+Clinmais+Camboriú",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.1432640029293!2d-48.656608223783216!3d-27.02563857658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b5cc7808a00f%3A0x246444936495dcd8!2sCl%C3%ADnica%20Clinmais!5e0!3m2!1spt-BR!2sbr!4v1788288477624!5m2!1spt-BR!2sbr"
    },
    horarios: "Segunda a Sexta\nAberto até as 20:00",
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
    eyebrow: "Centro — Camboriú, SC",
    title1: "Odontologia,",
    title2: "saúde e estética",
    title3: "integradas.",
    desc1: "Na Clinmais, ",
    descBold: "você é nossa prioridade.",
    desc2: " Oferecemos cuidado por inteiro: odontologia especializada, nutrição integrativa, psicologia e estética facial em um só lugar.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Conheça a clínica",
    badgeTitle: "Destaque",
    badgeDesc: "Cuidado Multidisciplinar",
    stats: [
      { target: 5, suffix: ".0", label: "nota no google", thousands: false },
      { target: 4, suffix: "+", label: "áreas da saúde", thousands: false },
      { target: 100, suffix: "%", label: "foco em você", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Cuidando de você",
    title2: "por inteiro.",
    p1: "Acreditamos que a verdadeira saúde vai muito além de um belo sorriso. A Clinmais nasceu do propósito de oferecer um cuidado completo e integrado para a sua qualidade de vida em Camboriú.",
    p2_1: "Nossa clínica reúne profissionais de ponta nas áreas de ",
    p2_bold: "Odontologia, Estética Facial, Nutrição e Psicologia",
    p2_2: " para entender as suas necessidades e entregar resultados baseados em protocolos personalizados e atendimento próximo.",
    topics: [
      { title: "Odontologia Especializada", desc: "De implantes a facetas com máxima qualidade." },
      { title: "Nutrição Integrativa", desc: "Estratégias pensadas para a sua rotina e objetivos." },
      { title: "Estética Avançada", desc: "Toxina botulínica, preenchimentos e microvasos." },
      { title: "Psicologia e Saúde Mental", desc: "Apoio e cuidado para o seu bem-estar emocional." },
    ],
    btn: "Agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Cuidado Multidisciplinar" },
      { url: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1200&q=80&fit=crop", title: "Conforto e Tecnologia" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Você é Nossa Prioridade" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Nossos",
    title2: "Tratamentos.",
    desc1: "Atuamos com uma equipe ",
    descBold: "multidisciplinar",
    desc2: " preparada para oferecer os melhores protocolos e acompanhamento próximo em todas as áreas da sua saúde.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Odontologia Especializada", desc: "Tratamentos completos: Implantes, Facetas, Próteses, Canal, Aparelho Ortodôntico, Clareamento e Profilaxia para a sua saúde bucal." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Estética Facial Avançada", desc: "Realce sua beleza com procedimentos como Toxina Botulínica (Botox), Preenchimento com Ácido Hialurônico e PEIM (microvasos)." },
      { icon: <Activity size={28} strokeWidth={1.2} />, title: "Nutrição Integrativa", desc: "Alimentação não precisa ser igual para todos. Desenvolvemos estratégias estéticas e funcionais de acordo com a sua rotina." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Psicologia", desc: "Saúde mental importa. Oferecemos um espaço seguro de escuta para garantir o seu equilíbrio emocional e qualidade de vida." },
      { icon: <Stethoscope size={28} strokeWidth={1.2} />, title: "Cirurgia e Reabilitação", desc: "Procedimentos odontológicos complexos realizados com máxima segurança e foco no seu conforto e recuperação rápida." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Cuidado Integrado", desc: "Porque cuidar de você é entender suas necessidades por inteiro. Na Clinmais, conectamos as especialidades para o melhor resultado." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (EQUIPE)
  // ---------------------------------------------------
  team: {
    title: "Nossa Equipe",
    members: [
      { name: "Dr. Thiago Firmo", cro: "Responsável Clínico", specialty: "Odontologia Especializada", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Francini Seghessi", cro: "Especialista", specialty: "Estética Facial", img: "https://images.unsplash.com/photo-1594824432258-f9b1a50c3d9a?w=400&h=500&fit=crop&auto=format" },
      { name: "Nutri Caroline Firmo", cro: "Nutricionista", specialty: "Nutrição Integrativa", img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=500&fit=crop&auto=format" },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CONVÊNIOS E ESTRUTURA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Estrutura Clinmais",
    title1: "Um espaço dedicado",
    title2: "à sua",
    title3: "qualidade de vida.",
    desc: "Acreditamos que cada pessoa tem uma história e uma necessidade única. Desenvolvemos uma estrutura focada no seu acolhimento integral no Centro de Camboriú.",
    btn: "Agendar minha consulta",
    list: [
      { title: "Protocolos Personalizados", content: "Nosso atendimento é baseado em estratégias exclusivas, seja na cadeira do dentista, na nutrição funcional ou na estética avançada." },
      { title: "Acompanhamento Próximo", content: "Acompanhamos de perto a sua evolução. Da primeira avaliação até o resultado final, nossa equipe está sempre presente para garantir seu sucesso." },
      { title: "Atendimento Multidisciplinar", content: "Em vez de procurar profissionais espalhados, oferecemos especialistas de diversas áreas trabalhando juntos em prol da sua saúde e bem-estar." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que nossos pacientes dizem",
    googleScore: "5.0",
    googleReviews: "20 Avaliações",
    list: [
      { name: "Paciente Clinmais", role: "Odontologia", stars: 5, text: "O Dr. Thiago é um excelente profissional. O tratamento com facetas ficou incrível e me devolveu a vontade de sorrir com segurança.", img: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente Clinmais", role: "Nutrição", stars: 5, text: "A nutrição na Clinmais mudou minha vida! A Nutri Caroline entendeu a minha rotina e montou um planejamento super realista e fácil de seguir.", img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=80&h=80&fit=crop&auto=format" },
      { name: "Paciente Clinmais", role: "Estética Avançada", stars: 5, text: "Fiz meu preenchimento labial e botox com a Francini. O resultado ficou extremamente natural e o atendimento é impecável.", img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CHAMADA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossos Resultados",
    title1: "Conhecimento que",
    title2: "transforma o cuidado.",
    p1: "A",
    p_bold1: "excelência dos nossos profissionais",
    p2: "é refletida na mudança de vida de cada paciente. Explore a nossa",
    p_bold2: "galeria de resultados",
    p3: "e entenda o diferencial da",
    p_bold3: "Clinmais",
    btn: "Ver Galeria de Resultados",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // SEÇÃO: FAQ (PERGUNTAS FREQUENTES)
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Frequentes",
    list: [
      { q: "Onde a Clinmais está localizada?", a: "Estamos na Avenida José Francisco Bernardes, 320 - Centro, Camboriú - SC. Fácil acesso e excelente estrutura para te atender." },
      { q: "Quais são as especialidades da clínica?", a: "Temos uma equipe multidisciplinar abrangendo Odontologia Especializada, Estética Facial, Nutrição Integrativa e Psicologia." },
      { q: "Vocês realizam preenchimento e botox?", a: "Sim! A nossa área de Estética Avançada oferece Toxina Botulínica, Preenchimentos (lábios, olheiras, mandíbula) e tratamento para microvasos (PEIM)." },
      { q: "Como funciona a Nutrição na Clinmais?", a: "Nossa nutrição é integrativa, estética e funcional. Criamos protocolos personalizados e estratégias pensadas exclusivamente de acordo com a sua rotina e objetivos." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Av. José Francisco Bernardes, 320", value2: "Camboriú - SC" },
    box2: { title: "Localização", value1: "Centro, Camboriú", value2: "CEP: 88340-233" },
    box3: { title: "Clínica Integrada", value1: "Odontologia, Estética,", value2: "Nutrição e Psicologia" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO: CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Você é nossa",
    title2: "prioridade.",
    desc: "Agende sua avaliação e comece o seu acompanhamento. Nossa equipe está pronta para cuidar da sua saúde, sorriso e bem-estar de forma personalizada.",
    box1_title: "Endereço",
    box2_title: "Contato Direto",
    box3_title: "Mídias",
    box3_desc1: "Acompanhe nossas novidades",
    box3_desc2: "@clinmaisodontologia no Instagram"
  },

  // ---------------------------------------------------
  // SEÇÃO: RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Odontologia, Estética Facial, Nutrição e Psicologia. Porque cuidar da saúde é entender você por inteiro em Camboriú.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Clínica Clinmais. Todos os direitos reservados.",
    registro: "Centro — Camboriú, SC"
  },

  // ---------------------------------------------------
  // PÁGINA: RESULTADOS (PORTFÓLIO)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Portfólio e Resultados",
    title1: "Cuidado planejado",
    title2: "para transformar.",
    p1: "Navegue pela nossa",
    p_bold1: "galeria de resultados",
    p2: ". A integração das nossas especialidades e a",
    p_bold2: "escuta e olhar individualizado",
    p3: "em Camboriú nos permite entregar as melhores mudanças na sua vida.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Odontologia Estética", duration: "Facetas e Clareamento", complaint: "Desgaste dentário e insatisfação com a coloração do sorriso.", procedure: "Tratamento de excelência com facetas garantindo harmonia, função e beleza natural.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Estética Facial", duration: "Preenchimento Labial", complaint: "Falta de volume nos lábios e assimetria leve.", procedure: "Preenchimento com ácido hialurônico focado em devolver a proporção e naturalidade facial.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Nutrição Integrativa", duration: "Acompanhamento Funcional", complaint: "Dificuldade em manter rotinas saudáveis e atingir objetivos estéticos.", procedure: "Protocolo nutricional personalizado focado na rotina e necessidades exclusivas do paciente.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" },
      { category: "Implantes Dentários", duration: "Reabilitação", complaint: "Perda dentária afetando a mastigação e autoconfiança.", procedure: "Planejamento cirúrgico de implante seguro e focado na durabilidade e saúde do paciente.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" }
    ]
  }
};