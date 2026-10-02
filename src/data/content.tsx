import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  clinica: {
    nome: "Dra. Joselene Leal",
    subtitulo: "Consultório Odontológico",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/557598475224?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+com+a+Dra.+Joselene.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(75) 3623-1818 / (75) 9847-5224",
      emailLabel: "contato@drajoseleneleal.com.br",
      instagramLabel: "@dra.joseleneleal",
    },
    endereco: {
      bairroCidade: "Centro, Feira de Santana - BA",
      edificio: "Consultório Dra. Joselene Leal",
      detalhado: "Rua Prof. Geminiano Costa, 222\nCentro\nFeira de Santana - BA, 44001-120",
      comodidades: ["Lentes e Facetas", "Prótese sobre Implante", "Estética Dental", "Atendimento Humanizado"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Consultorio+Odontologico+Dra+Joselene+Leal",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.960667887411!2d-38.9617876!3d-12.250941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714378c290ae699%3A0x71b8d0b9532d62e8!2sConsult%C3%B3rio%20Odontol%C3%B3gico%20Dra%20Joselene%20Leal!5e0!3m2!1spt-BR!2sbr!4v1790966333684!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sexta\nEncerra às 18:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Nosso Cuidado", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  hero: {
    imgUrl: "/imagens/hero.png", 
    eyebrow: "Centro — Feira de Santana, BA",
    title1: "Autoestima",
    title2: "saúde e",
    title3: "beleza.",
    desc1: "Especialista em lentes, facetas e prótese sobre implante.",
    descBold: " Resultados naturais.",
    desc2: " Tratamentos executados com técnica e planejamento para valorizar a simetria do seu rosto.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Dra. Joselene Leal",
    badgeDesc: "CRO BA",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 26, suffix: "", label: "anos de atuação", thousands: false },
      { target: 100, suffix: "%", label: "foco em naturalidade", thousands: false },
    ]
  },

  about: {
    eyebrow: "Dra. Joselene Leal",
    title1: "Precisão e",
    title2: "experiência",
    title3: "clínica.",
    p1: "Localizado no Centro de Feira de Santana, o consultório oferece infraestrutura para reabilitação oral e estética dental.",
    p2_1: "A ",
    p2_bold: "Dra. Joselene Leal possui 26 anos de formação,",
    p2_2: " direcionando o atendimento para a execução de lentes de contato, facetas e próteses sobre implante.",
    topics: [
      { title: "Odontologia Estética", desc: "Correção de formato e cor através de lentes e facetas." },
      { title: "Prótese sobre Implante", desc: "Reabilitação mastigatória com estabilidade e materiais de alta resistência." },
      { title: "Empreendedorismo Feminino", desc: "Clínica estruturada com foco em gestão de processos e excelência no atendimento." },
      { title: "Protocolo Clínico", desc: "Avaliação estruturada para mapeamento das necessidades de cada paciente." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/profissionalatuando.png", title: "Atendimento Clínico" },
      { url: "/imagens/clinica1.png", title: "Infraestrutura" },
      { url: "/imagens/materiais1.png", title: "Tecnologia" }
    ]
  },

  services: {
    eyebrow: "Nossas Especializações",
    title1: "Odontologia",
    title2: "direcionada.",
    desc1: "Soluções estruturadas para ",
    descBold: "Reabilitação Oral e Estética",
    desc2: ", executadas com materiais de alta performance.",
    btn: "Ver todas as especializações",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes e Facetas", desc: "Modificação estrutural e estética dos dentes anteriores utilizando cerâmica ou resina." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Prótese sobre Implante", desc: "Substituição de elementos dentários perdidos utilizando bases de titânio e coroas definitivas." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Estética Dental", desc: "Procedimentos direcionados à harmonia visual do sorriso em relação às proporções faciais." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento", desc: "Remoção de pigmentação do esmalte dentário utilizando agentes clareadores supervisionados." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Odontologia Preventiva", desc: "Manutenção da saúde gengival e avaliação periódica da integridade das próteses e facetas." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Condução do tratamento com foco na redução da ansiedade e comunicação clara dos procedimentos." }
    ]
  },

  team: {
    title: "Corpo Clínico",
    members: [
      { name: "Dra. Joselene Leal", cro: "Cirurgiã-Dentista", specialty: "Especialista em Lentes e Próteses", img: "/imagens/profissionalatuando.png" }
    ]
  },

  convenios: {
    eyebrow: "Protocolo de Atendimento",
    title1: "Resultados",
    title2: "baseados em",
    title3: "diagnóstico.",
    desc: "A execução de tratamentos estéticos e reabilitadores requer mapeamento prévio das condições orais e estruturais do paciente.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Planejamento Protético", content: "Análise da oclusão e dimensões faciais para a confecção de próteses sobre implante e facetas." },
      { title: "Seleção de Materiais", content: "Utilização de componentes e resinas certificados para assegurar resistência e estabilidade de cor." },
      { title: "Execução Técnica", content: "Aplicação de métodos minimamente invasivos durante o preparo dentário para preservação da estrutura sadia." }
    ]
  },

  testimonials: {
    eyebrow: "A Clínica",
    title1: "Infraestrutura e",
    title2: "posicionamento.",
    quote: "A autoestima desempenha papel fundamental para a saúde e bem-estar do indivíduo.",
    supporting: "A clínica opera no Centro de Feira de Santana, possuindo infraestrutura adequada para procedimentos de reabilitação oral.",
    photos: [
      { img: "/imagens/clinica1.png", alt: "Estrutura da Clínica" },
      { img: "/imagens/profissionalatuando.png", alt: "Atendimento Clínico" },
      { img: "/imagens/clinica2.png", alt: "Recepção" },
      { img: "/imagens/materiais1.png", alt: "Materiais Odontológicos" },
      { img: "/imagens/profissionaisatuando.png", alt: "Equipe" },
      { img: "/imagens/materiais2.png", alt: "Instrumental" }
    ]
  },

  results_cta: {
    eyebrow: "O Portfólio",
    title1: "Evidência",
    title2: "clínica.",
    p1: "Registros documentais de",
    p_bold1: "casos reabilitados",
    p2: ". O mapeamento fotográfico evidencia a precisão técnica na confecção de lentes e próteses apresentadas na",
    p_bold2: "galeria de resultados",
    p3: ".",
    p_bold3: "",
    btn: "Acessar Resultados",
    imgUrl: "/imagens/dentes.png" 
  },

  faq: {
    title: "Informações Frequentes",
    list: [
      { q: "Onde o consultório está localizado?", a: "O consultório está situado na Rua Prof. Geminiano Costa, 222, Centro, em Feira de Santana - BA." },
      { q: "Quais são as áreas de atuação principais?", a: "O foco clínico abrange a confecção de lentes, facetas, próteses sobre implante e estética dental." },
      { q: "O procedimento de facetas exige desgaste dental?", a: "O nível de preparo depende da indicação clínica. Utilizam-se protocolos minimamente invasivos para preservar o tecido dentário." },
      { q: "Como é realizado o agendamento?", a: "O agendamento é feito via contato telefônico ou WhatsApp pelo número (75) 9847-5224." }
    ]
  },

  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Rua Prof. Geminiano Costa, 222", value2: "Centro" },
    box2: { title: "Localização", value1: "Feira de Santana - BA", value2: "CEP: 44001-120" },
    box3: { title: "Especialidades", value1: "Lentes, Facetas", value2: "Prótese sobre Implante" },
    btn: "Abrir no Google Maps"
  },

  contact: {
    eyebrow: "Agendamento",
    title1: "Contato",
    title2: "direto.",
    desc: "Solicite a marcação de horário para avaliação clínica. O atendimento é estruturado para fornecer diagnósticos precisos.",
    box1_title: "Endereço",
    box2_title: "Contato",
    box3_title: "Mídia Social",
    box3_desc1: "Acompanhe atualizações",
    box3_desc2: "@dra.joseleneleal"
  },

  footer: {
    sobre: "Consultório Odontológico Dra Joselene Leal. Atuação clínica com foco em lentes, facetas e prótese sobre implante.",
    title_tratamentos: "Especializações",
    title_contato: "Contato",
    direitos: "© 2026 Dra Joselene Leal. Todos os direitos reservados.",
    registro: "Feira de Santana — BA"
  },

  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados",
    title2: "documentados.",
    p1: "Registros fotográficos evidenciando as alterações morfológicas e estéticas obtidas por meio de ",
    p_bold1: "intervenções clínicas",
    p2: ". O foco recai sobre a",
    p_bold2: "função e adaptação",
    p3: "dos materiais restauradores.",
    btnSaberMais: "Solicitar avaliação",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética Dental", 
        duration: "Facetas e Lentes", 
        complaint: "Alterações de forma e pigmentação no grupo dos dentes anteriores.", 
        procedure: "Instalação de lâminas estéticas para reconfiguração anatômica e adequação de cor.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Odontologia Estética", 
        duration: "Clareamento", 
        complaint: "Saturação da coloração do esmalte dentário.", 
        procedure: "Aplicação de protocolo de clareamento monitorado para redução da pigmentação intrínseca.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Reabilitação", 
        duration: "Prótese sobre Implante", 
        complaint: "Edentulismo parcial comprometendo a eficiência mastigatória.", 
        procedure: "Fixação de coroas sobre implantes osseointegrados para restabelecimento da oclusão.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      },
      { 
        category: "Adequação do Meio", 
        duration: "Profilaxia", 
        complaint: "Presença de cálculo dental e inflamação dos tecidos periodontais.", 
        procedure: "Remoção mecânica do biofilme e cálculo para manutenção da saúde gengival.", 
        beforeImg: "/imagens/antes.jpg", 
        afterImg: "/imagens/depois.jpg"    
      }
    ]
  }
};