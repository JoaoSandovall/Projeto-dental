import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart, Star } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "OdontoMarcos",
    subtitulo: "Odontologia",
    logoUrl: "/imagens/logo.png", // Certifique-se de salvar sua logo azul com este nome
    contato: {
      whatsappUrl: "https://wa.me/556195900562?text=Ol%C3%A1%2C++gostaria+de+marcar+uma+avalia%C3%A7%C3%A3o%21", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(61) 3624-1355",
      emailLabel: "contato@odontomarcos.com.br",
      instagramLabel: "@odontomarcos1",
    },
    endereco: {
      bairroCidade: "Valparaíso de Goiás - GO",
      edificio: "Jardim Ceu Azul",
      detalhado: "R. 71, Quadra 114 - Lote 33\nJardim Ceu Azul\nValparaíso de Goiás - GO, 72871-071",
      comodidades: ["Implantes", "Ortodontia", "Estética Bucal"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clinica+Odontologica+OdontoMarcos+Valparaiso",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7668.68577958091!2d-48.029940515473946!3d-16.047686807244705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93598149dbf9ede9%3A0xe2e3a1d806091a4a!2sCl%C3%ADnica%20Odontol%C3%B3gica%20OdontoMarcos!5e0!3m2!1spt-BR!2sbr!4v1788444766705!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sábado\nFecha para almoço 12:00 - Reabre às 14:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "A Essência", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png",
    eyebrow: "Valparaíso de Goiás, GO",
    title1: "Seu sorriso,",
    title2: "nossa",
    title3: "especialidade.",
    desc1: "Cuidar do seu sorriso é o primeiro passo para",
    descBold: "transformar a sua vida.",
    desc2: " Na OdontoMarcos, oferecemos excelência em implantes, ortodontia e estética para você sorrir com confiança e saúde.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossas Especialidades",
    badgeTitle: "Excelência",
    badgeDesc: "Transformar Sorrisos!",
    stats: [
      { target: 4, suffix: ".7", label: "estrelas no google", thousands: false },
      { target: 17, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco em você", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A OdontoMarcos",
    title1: "Confiança e",
    title2: "qualidade",
    title3: "em cada detalhe.",
    p1: "Localizada no coração do Jardim Ceu Azul, em Valparaíso de Goiás, a OdontoMarcos é referência em tratamentos odontológicos completos e humanizados.",
    p2_1: "Nossa missão é devolver a sua autoestima através de especialidades como ",
    p2_bold: "Implantodontia, Ortodontia e Estética Bucal,",
    p2_2: " sempre utilizando materiais de alta qualidade, tecnologia moderna e o cuidado que você merece.",
    topics: [
      { title: "Implantodontia", desc: "Devolva sua segurança ao mastigar e sorrir com implantes fixos de alta durabilidade." },
      { title: "Ortodontia Especializada", desc: "Aparelhos estéticos e convencionais para o alinhamento perfeito dos seus dentes." },
      { title: "Odontologia Estética", desc: "Clareamentos e restaurações invisíveis que valorizam a harmonia do seu rosto." },
      { title: "Atendimento Humanizado", desc: "Acreditamos que o conforto e a clareza na comunicação fazem parte da cura." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80", title: "Saúde Bucal" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Confiança" },
      { url: "/imagens/hero.png", title: "Qualidade" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS (Ajustado exatamente com a sua lista)
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Tratamentos",
    title1: "Tudo o que seu",
    title2: "sorriso precisa.",
    desc1: "Oferecemos um escopo completo de tratamentos, da ",
    descBold: "prevenção à reabilitação total",
    desc2: " com foco em resultados estéticos e duradouros.",
    btn: "Ver todas as áreas",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantodontia", desc: "Solução definitiva e segura para a substituição de dentes perdidos, recuperando mastigação e estética." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Ortodontia", desc: "Alinhamento e correção da mordida através de aparelhos adequados para cada fase da vida." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Restauração", desc: "Remoção de cáries e recuperação do dente com resinas que simulam perfeitamente a cor natural." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Tratamento de Canal", desc: "Procedimento seguro e anestesiado para salvar dentes com inflamação ou infecção profunda na polpa." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Prótese Total e Parcial", desc: "Reabilitações sob medida que devolvem a qualidade de vida e a harmonia facial de quem perdeu múltiplos dentes." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontopediatria e Periodontia", desc: "Cuidado especial com o sorriso das crianças e tratamento profundo das gengivas (periodontia)." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Nossa Equipe",
    members: [
      { name: "Equipe OdontoMarcos", cro: "Especialistas", specialty: "Saúde e Reabilitação", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "A Essência OdontoMarcos",
    title1: "Seu sorriso",
    title2: "merece",
    title3: "atenção!",
    desc: "Acreditamos que cuidar da saúde bucal é um investimento direto na sua autoconfiança. Por isso, preparamos uma clínica acolhedora e focada em resolver o seu problema com excelência.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Confiança e Qualidade", content: "Utilizamos materiais de ponta para garantir que seu tratamento dure anos com máxima segurança." },
      { title: "Atendimento Humanizado", content: "Não deixe para depois. Aqui, ouvimos as suas dúvidas e montamos um plano de tratamento respeitando seu tempo e orçamento." },
      { title: "Localização Acessível", content: "Nossa clínica na Rua 71 do Jardim Ceu Azul é de fácil acesso para todo o Valparaíso." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Experiência",
    title1: "Atenção a",
    title2: "cada detalhe.",
    quote: "Cuidar do seu sorriso é o primeiro passo para transformar sua vida.",
    supporting: "Acompanhe um pouco da nossa rotina clínica e do ambiente onde realizamos transformações diárias.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica OdontoMarcos" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento Odontológico" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe OdontoMarcos" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossa Filosofia",
    title1: "Transformar",
    title2: "sorrisos!",
    p1: "O seu sorriso é a nossa",
    p_bold1: "maior conquista.",
    p2: "Veja o impacto de um tratamento executado com precisão e técnica ao explorar nossa",
    p_bold2: "galeria de resultados",
    p3: "e entenda por que nossos pacientes indicam a ",
    p_bold3: "OdontoMarcos.",
    btn: "Ver Casos Clínicos",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde a OdontoMarcos está localizada?", a: "Nossa clínica fica em Valparaíso de Goiás. O endereço exato é R. 71, Quadra 114 - Lote 33, no Jardim Ceu Azul." },
      { q: "O procedimento de implante dental dói?", a: "Não! Hoje a implantodontia conta com anestesias locais de altíssima eficiência. O procedimento é feito no consultório de forma muito tranquila e indolor." },
      { q: "Quando devo procurar um tratamento de canal?", a: "Se você sente dor aguda contínua, sensibilidade prolongada ao frio/quente, ou percebe inchaço na gengiva, é urgente agendar uma avaliação para analisar a necessidade de canal." },
      { q: "Com qual idade devo levar meu filho ao Odontopediatra?", a: "Recomendamos que a primeira visita ocorra logo quando nascem os primeiros dentinhos de leite, ou até o primeiro ano de vida, para focar em prevenção e orientação." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "R. 71, Q. 114 - Lote 33", value2: "Jardim Ceu Azul" },
    box2: { title: "Localização", value1: "Valparaíso de Goiás - GO", value2: "CEP: 72871-071" },
    box3: { title: "Especialidades", value1: "Ortodontia, Implantes,", value2: "Canal e Próteses" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Seu sorriso",
    title2: "merece atenção!",
    desc: "Não deixe para depois. Agende sua avaliação, descubra as melhores opções de tratamento e transforme seu sorriso hoje mesmo!",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Siga a Clínica",
    box3_desc2: "@odontomarcos1"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "OdontoMarcos | Clínica odontológica referência em Implantes, Ortodontia e Estética em Valparaíso de Goiás.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Clínica OdontoMarcos. Todos os direitos reservados.",
    registro: "Valparaíso de Goiás - GO"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados de",
    title2: "excelência.",
    p1: "Confira o impacto transformador da odontologia especializada na ",
    p_bold1: "OdontoMarcos",
    p2: ". Cada sorriso finalizado representa nossa dedicação à",
    p_bold2: "qualidade e à saúde.",
    p3: "",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Ortodontia Especializada", 
        duration: "Alinhamento Perfeito", 
        complaint: "Desalinhamento e apinhamento dental que gerava dificuldade de higienização e estética prejudicada.", 
        procedure: "Tratamento ortodôntico completo, corrigindo a mordida e devolvendo a harmonia natural do sorriso.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Implantodontia", 
        duration: "Segurança e Função", 
        complaint: "Perda de dentes que causava grande insegurança ao mastigar e ao falar em público.", 
        procedure: "Instalação cirúrgica de implantes de titânio e colocação de prótese fixa idêntica aos dentes naturais.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Odontologia Estética", 
        duration: "Clareamento e Resinas", 
        complaint: "Dentes amarelados com o tempo e presenças de manchas e pequenas quebras no esmalte.", 
        procedure: "Clareamento clínico seguro somado a discretas restaurações em resina de alta qualidade.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      },
      { 
        category: "Prótese Total / Parcial", 
        duration: "Reabilitação", 
        complaint: "Falta de estrutura dental afetando severamente a alimentação e suporte das bochechas.", 
        procedure: "Confecção de prótese sob medida, perfeitamente adaptada para o conforto e estética facial do paciente.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png" 
      }
    ]
  }
};