import { CSSProperties } from "react";
import { Heart, Sun, Compass, Users, Brain, MessageCircle } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  clinica: {
    nome: "Instituto Aurora",
    subtitulo: "Psicologia e Bem-estar",
    logoUrl: "/imagens/logo.png",
    contato: {
      whatsappUrl: "https://wa.me/5511999999999", 
      whatsappLabel: "Agendar primeira sessão",
      telefoneLabel: "Fale com nossa equipe",
      emailLabel: "contato@institutoaurora.com.br",
      instagramLabel: "@institutoaurorapsi",
    },
    endereco: {
      bairroCidade: "Bela Vista, São Paulo",
      edificio: "Av. Paulista, 1000 - Sala 42",
      detalhado: "Av. Paulista, 1000 - Sala 42\nBela Vista, São Paulo - SP",
      comodidades: ["Ambiente sigiloso e acolhedor", "Isolamento acústico", "Terapia Presencial e Online"],
      mapaGpsUrl: "https://maps.google.com/...",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975765955146!2d-46.65451968502213!3d-23.561338867471966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da7bf317%3A0x6a05e463a56dc815!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689257613589!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimentos sob agendamento",
  },

  nav: {
    links: ["O Instituto", "Abordagens", "Áreas de Atuação", "O Espaço", "Contato"],
    ids: ["sobre", "/especialidades", "/resultados", "convenios", "contato"]
  },

  hero: {
    imgUrl: "https://images.unsplash.com/photo-1544027993-37db48d5f644?w=800&q=80",
    eyebrow: "Psicologia Clínica",
    title1: "Um espaço seguro",
    title2: "para você,",
    title3: "no seu tempo.",
    desc1: "Mais do que ouvir,",
    descBold: "é ajudar você a se reencontrar.",
    desc2: " Oferecemos um ambiente livre de julgamentos, focado em clareza mental e desenvolvimento emocional.",
    btnPrimary: "Agende sua sessão",
    btnOutline: "Nossas Abordagens",
    badgeTitle: "Destaque",
    badgeDesc: "Saúde Mental",
    stats: [
      { target: 10, suffix: "+", label: "anos de experiência", thousands: false },
      { target: 100, suffix: "%", label: "sigilo e acolhimento", thousands: false },
      { target: 5000, suffix: "+", label: "sessões realizadas", thousands: true },
    ]
  },

  about: {
    eyebrow: "O Instituto",
    title1: "Sua jornada rumo",
    title2: "à clareza emocional.",
    p1: "O processo terapêutico não precisa ser solitário. Aqui, construímos juntos os caminhos para você lidar com suas emoções, medos e angústias de forma mais leve e consciente.",
    p2_1: "Sob a responsabilidade clínica da ",
    p2_bold: "Dra. Helena Martins",
    p2_2: ", nossa equipe é formada por especialistas dedicados a oferecer uma escuta ativa e acolhedora, baseada em práticas terapêuticas com evidência científica.",
    topics: [
      { title: "Escuta Ativa", desc: "Um olhar atento e humano para a sua história, sem filtros ou julgamentos." },
      { title: "Terapia Baseada em Evidências", desc: "Abordagens modernas para tratamento eficaz de ansiedade e depressão." },
      { title: "Autoconhecimento", desc: "Ferramentas para você entender seus padrões e quebrar ciclos negativos." },
      { title: "Sigilo Absoluto", desc: "Um ambiente protegido para que você se sinta completamente à vontade." },
    ],
    btn: "Quero iniciar minha terapia",
    gallery: [
      { url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80", title: "Profissionais Especializados" },
      { url: "https://images.unsplash.com/photo-1499914485622-a88fac53ebfd?w=1200&q=80", title: "Ambiente Acolhedor" },
      { url: "https://images.unsplash.com/photo-1520607162513-322433924e5c?w=1200&q=80", title: "Segurança e Conforto" }
    ]
  },

  services: {
    eyebrow: "Nossos Serviços",
    title1: "Apoio para",
    title2: "todas as fases.",
    desc1: "Atuamos com foco absoluto em proporcionar ",
    descBold: "qualidade de vida e saúde mental",
    desc2: " através de formatos de terapia adaptados à sua rotina.",
    btn: "Ver todas as modalidades",
    list: [
      { icon: <Brain size={28} strokeWidth={1.2} />, title: "Terapia Individual", desc: "Espaço dedicado ao tratamento de ansiedade, depressão e desenvolvimento do autoconhecimento." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Terapia de Casal", desc: "Mediação de conflitos, melhora na comunicação e fortalecimento do vínculo afetivo entre os parceiros." },
      { icon: <Compass size={28} strokeWidth={1.2} />, title: "Orientação de Carreira", desc: "Apoio psicológico para transições profissionais e tratamento da Síndrome de Burnout." },
      { icon: <Sun size={28} strokeWidth={1.2} />, title: "Terapia para Adolescentes", desc: "Acolhimento focado nas transformações, conflitos de identidade e pressões dessa fase." },
      { icon: <MessageCircle size={28} strokeWidth={1.2} />, title: "Psicoterapia Online", desc: "A mesma excelência e sigilo do atendimento presencial, no conforto da sua casa." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Apoio ao Luto", desc: "Acompanhamento sensível para ajudar a ressignificar perdas e lidar com momentos de dor profunda." }
    ]
  },

  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Dra. Helena Martins", cro: "CRP 06/123456", specialty: "Psicologia Clínica e TCC", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" },
    ]
  },

  convenios: {
    eyebrow: "O Espaço",
    title1: "Planejado para",
    title2: "o seu",
    title3: "bem-estar.",
    desc: "Acreditamos que o ambiente físico impacta diretamente no processo terapêutico. Criamos um refúgio calmo no meio da cidade para que você possa desacelerar.",
    btn: "Conhecer a clínica",
    list: [
      { title: "Isolamento Acústico", content: "Salas preparadas com tecnologia de isolamento para garantir que tudo o que for dito permaneça em absoluto sigilo." },
      { title: "Cores e Iluminação", content: "Tons terrosos, iluminação quente e indireta, pensados neuro-arquitetonicamente para reduzir o estresse." },
      { title: "Acessibilidade e Conforto", content: "Poltronas ergonômicas, chás, cafés e um ambiente perfumado com aromaterapia suave para o seu acolhimento." }
    ]
  },

  testimonials: {
    eyebrow: "A Jornada Terapêutica",
    quote: "A terapia não é sobre consertar quem você é, mas sobre descobrir quem você sempre foi por baixo da dor.",
    supporting: "A vida cotidiana frequentemente nos afasta da nossa essência. Nosso papel é guiar você no retorno a si mesmo, com paciência e técnica.",
    photos: [
      { img: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=800&h=1000&fit=crop", alt: "Sessão de terapia" },
      { img: "https://images.unsplash.com/photo-1520607162513-322433924e5c?w=800&h=1000&fit=crop", alt: "Ambiente calmo" },
      { img: "https://images.unsplash.com/photo-1499914485622-a88fac53ebfd?w=800&h=1000&fit=crop", alt: "Anotações e escuta" },
      { img: "https://images.unsplash.com/photo-1573497491208-6f16fa811b23?w=800&h=1000&fit=crop", alt: "Psicóloga sorrindo" },
      { img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&h=1000&fit=crop", alt: "Livros e estudos" },
      { img: "https://images.unsplash.com/photo-1544027993-37db48d5f644?w=800&h=1000&fit=crop", alt: "Sala de espera" }
    ]
  },

  results_cta: {
    eyebrow: "Por que buscar terapia?",
    title1: "O primeiro passo",
    title2: "muda tudo.",
    p1: "Reconhecer que se precisa de ajuda é o",
    p_bold1: "ato de maior coragem",
    p2: "que alguém pode ter. Explore nossas principais",
    p_bold2: "áreas de atuação",
    p3: "e veja como podemos ajudar você a recuperar sua",
    p_bold3: "qualidade de vida.",
    btn: "Ver Áreas de Atuação",
    imgUrl: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80"
  },

  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Como funciona a primeira sessão?", a: "A primeira sessão é um momento de acolhimento e escuta. Você poderá falar sobre o que te trouxe à clínica, e o psicólogo explicará como a terapia pode te ajudar, sem qualquer pressão." },
      { q: "Qual a duração e frequência das sessões?", a: "As sessões duram em média 50 minutos. A frequência geralmente é semanal, mas isso é combinado entre você e o profissional de acordo com a sua necessidade." },
      { q: "A terapia online tem o mesmo efeito da presencial?", a: "Sim. Estudos comprovam que a eficácia da psicoterapia online é equivalente à presencial. A única exigência é que você esteja em um local com privacidade e boa conexão de internet." },
      { q: "Tudo o que eu falar ficará em sigilo?", a: "Absolutamente. O sigilo terapêutico é um pilar ético inviolável da psicologia. Tudo o que for discutido em sessão permanece estritamente entre você e seu terapeuta." }
    ]
  },

  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Av. Paulista, 1000", value2: "Bela Vista - SP" },
    box2: { title: "Atendimento", value1: "Presencial e Online", value2: "Agendamento via WhatsApp" },
    box3: { title: "Especialidades", value1: "Terapia Individual, Casal", value2: "Burnout e Ansiedade" },
    btn: "Abrir no Google Maps"
  },

  contact: {
    eyebrow: "Agende sua Sessão",
    title1: "Sua saúde mental",
    title2: "é prioridade.",
    desc: "Dê o primeiro passo para uma vida mais leve e equilibrada. Entre em contato com a nossa equipe e agende o seu horário.",
    box1_title: "Endereço",
    box2_title: "Contato",
    box3_title: "Redes Sociais",
    box3_desc1: "Conteúdos sobre bem-estar",
    box3_desc2: "@institutoaurorapsi"
  },

  footer: {
    sobre: "Espaço dedicado à saúde mental e acolhimento emocional. Psicoterapia baseada em evidências para jovens, adultos e casais.",
    title_tratamentos: "Modalidades",
    title_contato: "Contato",
    direitos: "© 2026 Instituto Aurora Psicologia. Todos os direitos reservados.",
    registro: "Bela Vista, São Paulo - SP"
  },

  results_page: {
    eyebrow: "Áreas de Atuação",
    title1: "Especialidades",
    title2: "clínicas.",
    p1: "Cada sofrimento é único. Nossa equipe possui",
    p_bold1: "formação especializada",
    p2: " para lidar com as principais dores, focando na",
    p_bold2: "resolução de conflitos",
    p3: "e no seu fortalecimento emocional.",
    btnSaberMais: "Agendar sessão para este tema",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Transtornos de Ansiedade", duration: "Acolhimento", complaint: "Pensamentos acelerados, insônia, medo constante do futuro, ataques de pânico e sensação de sufocamento.", procedure: "Uso de técnicas cognitivo-comportamentais para identificar gatilhos, regular o sistema nervoso e retomar o controle da própria vida.", afterImg: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80" },
      { category: "Depressão e Melancolia", duration: "Apoio Profundo", complaint: "Falta de energia, perda de interesse em atividades que antes davam prazer, isolamento social e tristeza profunda.", procedure: "Trabalho terapêutico focado na reativação comportamental e na reestruturação de pensamentos limitantes de forma gradual e respeitosa.", afterImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
      { category: "Síndrome de Burnout", duration: "Reequilíbrio", complaint: "Esgotamento físico e mental extremo ligado ao trabalho, irritabilidade, baixa produtividade e desmotivação crônica.", procedure: "Criação de limites saudáveis, redefinição de prioridades de carreira e estratégias práticas de enfrentamento do estresse.", afterImg: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=800&q=80" },
      { category: "Conflitos de Relacionamento", duration: "Comunicação", complaint: "Dificuldade de diálogo no casamento, ciúmes excessivos, distanciamento afetivo ou dor profunda por términos recentes.", procedure: "Espaço neutro para mediar conversas difíceis, promover a responsabilidade afetiva e curar feridas emocionais passadas.", afterImg: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" }
    ]
  }
};