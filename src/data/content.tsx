import type { CSSProperties } from "react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Blanc Odontologia",
    subtitulo: "Estética Avançada & Reabilitação",
    logoUrl:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23CFA968' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M10 21.35s-2.12-1.74-3.53-3.15A11 11 0 0 1 3.3 11.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5a11 11 0 0 1-3.17 6.7c-1.41 1.41-3.53 3.15-3.53 3.15' /><path d='M14 21.35s2.12-1.74 3.53-3.15A11 11 0 0 0 20.7 11.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5a11 11 0 0 0 3.17 6.7c1.41 1.41 3.53 3.15 3.53 3.15' /></svg>",
    contato: {
      whatsappUrl:
        "https://wa.me/5561998224591?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+Blanc.",
      whatsappLabel: "Agendar Atendimento",
      telefoneLabel: "(61) 99822-4591",
      emailLabel: "contato@blancodontologia.com.br",
      instagramLabel: "@blanc.odonto",
    },
    endereco: {
      bairroCidade: "Sudoeste, Brasília - DF",
      edificio: "Centro Clínico Sudoeste",
      comodidades: ["Lentes em Resina", "Reabilitação Oclusal", "Clareamento Clínico", "Estética Dental"],
      mapaGpsUrl: "https://maps.google.com/?q=Centro+Clinico+Sudoeste+Brasilia",
      mapaEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.261901309506!2d-47.9255627!3d-15.7954316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a4c0bfec547%3A0x1d5423877914713!2sSetor%20Sudoeste%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr",
    },
  },

  // ---------------------------------------------------
  // SEÇÃO 1: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.webp",
    title1: "A arquitetura",
    title2: "do sorriso.",
    title3: "O rigor da função.",
    desc1: "Atuação exclusiva em ",
    descBold: "Reabilitação Oral e Estética Dental.",
    desc2:
      " Uma prática clínica baseada em evidências, onde o planejamento digital guia cada milímetro do seu novo sorriso.",
    btnPrimary: "Agendar Avaliação",
    badgeTitle: "Direção Clínica",
    badgeDesc: "CRO-DF 14.592",
    stats: [
      { target: 5, suffix: ".0", label: "avaliações no google", thousands: false },
      { target: 1200, suffix: "+", label: "lentes esculpidas", thousands: true },
      { target: 98, suffix: "%", label: "previsibilidade clínica", thousands: false },
    ],
  },

  // ---------------------------------------------------
  // SEÇÃO 2: O CARROSSEL (ABOUT)
  // ---------------------------------------------------
  about: {
    gallery: [
      { url: "/imagens/sorriso1.webp", title: "Proporção" },
      { url: "/imagens/sorriso2.webp", title: "Simetria" },
      { url: "/imagens/sorriso3.webp", title: "Textura" },
      { url: "/imagens/sorriso5.webp", title: "Naturalidade" },
    ],
  },

  // ---------------------------------------------------
  // CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    members: [{ name: "Dr. Felipe Albuquerque", cro: "CRO-DF 14.592" }],
  },

  // ---------------------------------------------------
  // SEÇÃO 3: METODOLOGIA
  // ---------------------------------------------------
  convenios: {
    title1: "Engenharia",
    title2: "do sorriso.",
    title3: "",
    desc: "Não utilizamos moldes padronizados ou 'sorrisos de prateleira'. Todo planejamento cirúrgico e estético leva em consideração a sua estrutura óssea, o alinhamento facial e a estabilidade mastigatória.",
    btn: "Agendar avaliação técnica",
    list: [
      {
        title: "Diagnóstico Profundo",
        content:
          "Mapeamento completo da saúde bucal, alinhamento facial, histórico de atrito e fotos em estúdio antes de qualquer intervenção clínica.",
      },
      {
        title: "Design Autoral",
        content:
          "As facetas de resina são esculpidas manualmente, dente por dente, evitando o aspecto opaco, plano e artificial das abordagens genéricas.",
      },
      {
        title: "Execução Milimétrica",
        content:
          "Utilização de magnificação óptica, iluminação hiperfocada e instrumentos dedicados para garantir resistência mecânica e longevidade estrutural.",
      },
    ],
  },

  // ---------------------------------------------------
  // SEÇÃO 4: INFRAESTRUTURA
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Padrão",
    title2: "clínico.",
    quote:
      "Desenhamos um ambiente clínico onde o rigor cirúrgico encontra o conforto sensorial, eliminando o peso e o estresse da odontologia tradicional.",
    supporting:
      "Nosso consultório dispõe de instrumentação avançada, centro de esterilização restrito e um estúdio fotográfico dedicado para documentação integral e planejamento digital dos casos.",
    detailsLabel: "Detalhes do Espaço",
    footerLeft: "Blanc Odontologia",
    footerRight: "Brasília, DF",
    photos: [
      { img: "/imagens/clinica1.webp", alt: "Estrutura Clínica" },
      { img: "/imagens/profissionalatuando.webp", alt: "Precisão Cirúrgica" },
      { img: "/imagens/clinica2.webp", alt: "Recepção Premium" },
      { img: "/imagens/materiais1.webp", alt: "Instrumental Estéril" },
      { img: "/imagens/profissionaisatuando.webp", alt: "Corpo Clínico" },
      { img: "/imagens/materiais2.webp", alt: "Materiais de Carga" },
    ],
  },

  // ---------------------------------------------------
  // SEÇÃO 5: CTA DE CASOS CLÍNICOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Casos Documentados",
    title1: "O resultado",
    title2: "da nossa técnica.",
    labelBefore: "Condição Inicial",
    labelAfter: "Resultado Final",
    p1: "Não trabalhamos com expectativas irreais. A",
    p_bold1: "odontologia de excelência",
    p2: "se comprova de forma puramente visual. Explore o nosso",
    p_bold2: "portfólio de reabilitações",
    p3: "e entenda o nível de detalhe estético, anatômico e funcional que entregamos diariamente.",
    btn: "Acessar Portfólio Completo",
  },

  // ---------------------------------------------------
  // PÁGINA 2: CASOS CLÍNICOS COMPLETA
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos Documentados",
    title1: "Previsibilidade e",
    title2: "resultado.",
    labelBefore: "Início",
    labelAfter: "Finalizado",
    labelChallenge: "Diagnóstico Clínico",
    labelSolution: "Plano de Tratamento",
    p1: "Acompanhe a documentação rigorosa dos nossos casos de ",
    p_bold1: "Reabilitação Oclusal e Estética",
    p2: ". Imagens reais que atestam a nossa aplicação de",
    p_bold2: "anatomia, função e textura",
    p3: "em cada reconstrução de faceta, plástica gengival e ajuste oclusal.",
    btnSaberMais: "Avaliar o meu caso clínico",
    btnVoltar: "Retornar à página inicial",
    cases: [
      {
        category: "Estética Anterior",
        duration: "Lentes em Resina",
        complaint:
          "O paciente apresentava desnível severo nas margens gengivais, presença de diastemas e profunda insatisfação com a saturação (cor) natural dos dentes.",
        procedure:
          "Recontorno estético global com a escultura de 10 facetas diretas em resina policromática de alta carga, restabelecendo as guias de desoclusão e a proporção áurea.",
        beforeImg: "/imagens/antes.webp",
        afterImg: "/imagens/depois.webp",
      },
      {
        category: "Harmonização Dental",
        duration: "Clareamento & Facetas",
        complaint:
          "Dentes com pigmentação acentuada por ação química e bordas incisais fraturadas devido ao desgaste excessivo por atrição noturna.",
        procedure:
          "Sessões combinadas de clareamento clínico supervisionado seguidas da reconstrução anatômica das bordas incisais em resina composta translúcida.",
        beforeImg: "/imagens/antes.webp",
        afterImg: "/imagens/depois.webp",
      },
      {
        category: "Reabilitação Oclusal",
        duration: "Restabelecimento de DVO",
        complaint:
          "Desgaste severo ocasionado por quadro de bruxismo ativo não tratado, comprometendo a dimensão vertical de oclusão e expondo a dentina da estrutura dentária.",
        procedure:
          "Reabilitação adesiva funcional estendendo-se de molares a incisivos, desenvolvendo uma nova altura oclusal e protegendo os remanescentes de desgastes futuros.",
        beforeImg: "/imagens/antes.webp",
        afterImg: "/imagens/depois.webp",
      },
      {
        category: "Adequação do Meio",
        duration: "Plástica Gengival",
        complaint:
          "Inflamação tecidual crônica marginal associada a um sorriso gengival assimétrico, que impedia qualquer abordagem adesiva com segurança e longevidade.",
        procedure:
          "Tratamento periodontal de adequação e refinamento de margem (aumento de coroa clínica), criando o cenário biológico estéril ideal para o procedimento estético.",
        beforeImg: "/imagens/antes.webp",
        afterImg: "/imagens/depois.webp",
      },
    ],
  },

  // ---------------------------------------------------
  // PÁGINA 3: ESPECIALISTA (TIMELINE)
  // ---------------------------------------------------
  specialties_page: {
    hero: {
      title1: "DOMÍNIO",
      title2: "TÉCNICO",
      badge: "Diretor Clínico",
      imgUrl: "/imagens/dr.webp",
    },
    timeline: [
      {
        year: "2016",
        title: "Base Cirúrgica",
        desc: "Formação integral em Odontologia, solidificando os pilares absolutos de precisão cirúrgica, estabilidade mecânica das resinas e biologia tecidual.",
        img: "/imagens/materiais1.webp",
      },
      {
        year: "2019",
        title: "Foco Operatório",
        desc: "Imersão contínua e dedicada em escultura dental adesiva, restringindo a atuação clínica exclusivamente ao refinamento de reabilitações em resinas compostas.",
        img: "/imagens/profissionalatuando.webp",
      },
      {
        year: "2024",
        title: "Blanc Odontologia",
        desc: "Fundação da estrutura clínica própria, projetando um protocolo de atendimento premium para solucionar casos de extremo grau de exigência estética.",
        img: "/imagens/clinica2.webp",
      },
    ],
  },

  // ---------------------------------------------------
  // SEÇÃO 6: ENDEREÇO (LOCATION)
  // ---------------------------------------------------
  location: {
    title1: "Onde nos",
    title2: "encontrar.",
    box1: { title: "Endereço Clínico", value1: "Centro Clínico Sudoeste, Sala 142", value2: "Setor Sudoeste - Brasília" },
    box2: { title: "Localização", value1: "Brasília - DF", value2: "CEP: 70673-416" },
    box3: { title: "Foco Clínico", value1: "Reabilitação Oclusal", value2: "Lentes em Resina Autoral" },
    btn: "Abrir rotas no GPS",
  },

  // ---------------------------------------------------
  // SEÇÃO 7: CONTATO E RODAPÉ (FOOTER)
  // ---------------------------------------------------
  contact: {
    eyebrow: "Agende sua Consulta",
    title1: "Previsibilidade no",
    title2: "tratamento.",
    desc: "Inicie o planejamento digital do seu caso. Conte com o suporte de uma infraestrutura projetada para entregar técnica e resultado fotográfico em cada etapa.",
    box1_title: "Localização",
    box2_title: "Canal Direto",
    box3_title: "Mídias Clínicas",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@blanc.odonto",
  },

  footer: {
    sobre:
      "Blanc Odontologia | Especialistas em Reabilitação Oral, Lentes em Resina Composta e Odontologia de Alta Performance em Brasília.",
    title_contato: "Atendimento",
    direitos: "© 2026 Blanc Odontologia. Todos os direitos reservados. RT Dr. Felipe Albuquerque CRO-DF 14.592.",
    registro: "Brasília — DF",
  },

  // ---------------------------------------------------
  // SEÇÃO 8: FAQ
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Comuns",
    list: [
      {
        q: "A clínica possui estacionamento próprio?",
        a: "Sim, estamos localizados em um complexo clínico no Sudoeste que dispõe de estrutura completa de estacionamento rotativo seguro para a sua comodidade e discrição.",
      },
      {
        q: "Qual o foco principal de atuação da clínica?",
        a: "Nossa expertise técnica e estrutural está baseada 100% na Reabilitação Oral Funcional e na Estética Dental Avançada, focando especificamente em Lentes e Facetas em Resina Composta.",
      },
      {
        q: "As lentes em resina mancham com o tempo?",
        a: "Utilizamos exclusivamente resinas compostas com alta carga cerâmica e finalizamos com um polimento de alta performance. Seguindo os protocolos de manutenção indicados por nós (evitando pastas abrasivas), as lentes mantêm o brilho e a estabilidade de cor por anos.",
      },
      {
        q: "Como dou andamento no meu agendamento?",
        a: "Basta acessar o botão de WhatsApp presente em nossa página. Nossa equipe de relacionamento ao paciente alinhará os horários da nossa agenda clínica com a sua disponibilidade.",
      },
    ],
  },
};
