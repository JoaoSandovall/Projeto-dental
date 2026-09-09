import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Lumina Integrada",
    subtitulo: "Odontologia & Medicina",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/5500000000000", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(00) 90000-0000",
      emailLabel: "contato@clinicamodelo.com.br",
      instagramLabel: "@lumina.integrada",
    },
    endereco: {
      bairroCidade: "Bairro Nobre, Sua Cidade - UF",
      edificio: "Edifício Saúde & Bem-estar",
      detalhado: "Avenida Principal, 1000\nBairro Nobre\nSua Cidade - UF, 00000-000",
      comodidades: ["Odontologia Especializada", "Especialidades Médicas", "Radiologia Digital", "Atendimento Multiprofissional"],
      mapaGpsUrl: "#",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975850290515!2d-46.66699318447573!3d-23.561332784682496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e54bba9%3A0xc0fb1f2c2ecf555c!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 19:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Nossa Filosofia", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o seu caminho original
    eyebrow: "Sua Cidade — UF",
    title1: "A arte de",
    title2: "transformar",
    title3: "vidas.",
    desc1: "Bem-vindo a um centro integrado de saúde de",
    descBold: "alta performance.",
    desc2: " Unimos as mais avançadas técnicas da odontologia e da medicina em um único espaço para cuidar da sua saúde com segurança absoluta.",
    btnPrimary: "Agendar minha avaliação",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "Lumina Integrada",
    badgeDesc: "Cuidado Completo",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas de satisfação", thousands: false },
      { target: 10, suffix: "+", label: "especialidades integradas", thousands: false },
      { target: 100, suffix: "%", label: "foco no paciente", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica Lumina",
    title1: "Saúde e",
    title2: "medicina",
    title3: "integradas.",
    p1: "Acreditamos que o corpo humano é um sistema interligado. Por isso, criamos um espaço completo onde a sua saúde oral e sistêmica são tratadas de forma unificada.",
    p2_1: "Liderada por um ",
    p2_bold: "corpo clínico altamente experiente",
    p2_2: ", nossa estrutura foi projetada para oferecer diagnósticos precisos e tratamentos definitivos em um ambiente onde você se sinta verdadeiramente acolhido.",
    topics: [
      { title: "Odontologia de Excelência", desc: "Do cuidado preventivo e odontopediatria até reabilitações completas com implantes de alto padrão." },
      { title: "Especialidades Médicas", desc: "Corpo clínico preparado para realizar consultas, exames e acompanhamento contínuo da sua saúde." },
      { title: "Centro de Radiologia", desc: "Equipamentos de Tomografia 3D e Raio-X Panorâmico disponíveis na própria clínica, sem precisar se deslocar." },
      { title: "Estética e Harmonização", desc: "Procedimentos voltados para o rejuvenescimento facial, sempre preservando a naturalidade dos seus traços." },
    ],
    btn: "Quero conhecer a estrutura",
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
    title2: "sua saúde.",
    desc1: "Da prevenção primária ao tratamento de alta complexidade. Oferecemos ",
    descBold: "tecnologia e profissionais dedicados",
    desc2: " para cuidar da sua família.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes e Reabilitação Oral", desc: "Substitua dentes perdidos com segurança cirúrgica. Devolvemos a estabilidade, a função mastigatória e a estética do seu sorriso." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Endodontia e Microcirurgias", desc: "Tratamentos de canal utilizando microscopia para eliminar dores agudas preservando a estrutura original do dente." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Centro de Radiologia Integrado", desc: "Diagnósticos milimétricos no mesmo dia com Tomografia Cone Beam 3D e documentação radiográfica digital." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Acompanhamento Médico", desc: "Consultas médicas especializadas e realização de exames complementares para cuidar do seu corpo por completo." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria e Prevenção", desc: "Acolhimento especial para crianças, criando uma relação de confiança com o dentista e prevenindo problemas futuros." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Estética Facial Avançada", desc: "Aplicação de botox e preenchedores focados em suavizar marcas de expressão e devolver o contorno jovem ao rosto." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Nossa Liderança Clínica",
    members: [
      { name: "Nome do Profissional", cro: "Diretor(a) Clínico(a)", specialty: "Responsável Técnico", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Nossa Filosofia",
    title1: "Humanidade,",
    title2: "segurança e",
    title3: "excelência.",
    desc: "Nossa missão reflete a nossa essência mais profunda: nós cuidamos de pessoas, e não apenas de protocolos de tratamento. A sua segurança é a nossa prioridade.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Segurança clínica não é negociável", content: "Nosso ambiente é rigorosamente equipado com tecnologias de esterilização e equipamentos de diagnóstico por imagem de última geração." },
      { title: "Humanidade em primeiro lugar", content: "Acreditamos que o conforto e a empatia vêm antes de qualquer intervenção. Nosso atendimento é humanizado, respeitando seus medos e seu tempo." },
      { title: "A excelência é o nosso padrão", content: "Na Lumina, entregar um resultado estético e funcional impecável não é um diferencial, é a base da nossa conduta diária." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência do Paciente",
    title1: "Laços",
    title2: "verdadeiros.",
    quote: "Além de entregarmos resultados técnicos impressionantes, nós construímos confiança e relacionamentos duradouros.",
    supporting: "A satisfação e o sorriso dos nossos pacientes são o combustível da nossa equipe. Conheça um pouco do nosso espaço.",
    // Mantidas todas as URLs do Unsplash
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Integrada" },
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
    p2: "Nós devolvemos a sua saúde e a sua confiança ao sorrir. Acompanhe os resultados dos nossos procedimentos na",
    p_bold2: "galeria de casos clínicos",
    p3: "e entenda o nível da nossa entrega.",
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
      { q: "Quais serviços médicos a clínica oferece?", a: "Dispomos de atendimento integrado abrangendo diversas frentes de cuidado com a saúde, incluindo realização de exames laboratoriais e consultas especializadas no mesmo local." },
      { q: "O que é e para que serve a Tomografia 3D?", a: "É um exame de imagem moderno feito na nossa própria clínica. Ele gera um modelo tridimensional da sua boca, essencial para o planejamento cirúrgico seguro de implantes dentários." },
      { q: "Como saber se eu preciso de um tratamento de canal?", a: "Normalmente o canal é indicado quando há dor intensa, sensibilidade aguda prolongada ou infecções visíveis. Apenas uma avaliação clínica e radiográfica pode confirmar o diagnóstico." },
      { q: "A clínica é preparada para receber crianças?", a: "Sim. O ambiente foi pensado para promover uma experiência sem traumas, com profissionais treinados para garantir a saúde bucal infantil com muita paciência e ludicidade." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Avenida Principal, 1000", value2: "Bairro Nobre" },
    box2: { title: "Localização", value1: "Sua Cidade - UF", value2: "CEP: 00000-000" },
    box3: { title: "Especialidades", value1: "Odontologia de Ponta", value2: "Medicina, Imagem e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Inicie seu acompanhamento",
    title1: "A sua saúde no",
    title2: "lugar certo.",
    desc: "Agende sua avaliação. Tenha acesso a uma estrutura completa de radiologia, acompanhamento médico e excelência odontológica em um só lugar.",
    box1_title: "Endereço",
    box2_title: "Fale Conosco",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@lumina.integrada"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Lumina Integrada | Um centro dedicado à sua saúde. Odontologia e medicina de alta performance aliadas ao cuidado humanizado.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Lumina Saúde Integrada. Todos os direitos reservados. Fictício para demonstração.",
    registro: "Sua Cidade — UF"
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