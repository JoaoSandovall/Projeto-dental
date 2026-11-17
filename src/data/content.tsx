import type { CSSProperties } from "react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Vivere Odontologia",
    subtitulo: "Estética & Reabilitação Oral",
    logoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23CFA968' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M10 21.35s-2.12-1.74-3.53-3.15A11 11 0 0 1 3.3 11.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5a11 11 0 0 1-3.17 6.7c-1.41 1.41-3.53 3.15-3.53 3.15' /><path d='M14 21.35s2.12-1.74 3.53-3.15A11 11 0 0 0 20.7 11.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5a11 11 0 0 0 3.17 6.7c1.41 1.41 3.53 3.15 3.53 3.15' /></svg>", 
    contato: {
      whatsappUrl: "https://wa.me/5500000000000?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+cl%C3%ADnica.", 
      whatsappLabel: "Agendar Atendimento",
      telefoneLabel: "(00) 90000-0000",
      emailLabel: "clinica@vivereodontologia.com.br",
      instagramLabel: "@vivere.odonto",
    },
    endereco: {
      bairroCidade: "Bairro Nobre, Sua Cidade - UF",
      edificio: "Vivere Odontologia",
      detalhado: "Avenida Principal, 1000 - Sala 101\nBairro Nobre\nSua Cidade - UF, 00000-000",
      comodidades: ["Lentes em Resina", "Reabilitação Oclusal", "Clareamento Clínico", "Estética Dental"],
      mapaGpsUrl: "#",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975850290515!2d-46.66699318447573!3d-23.561332784682496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e54bba9%3A0xc0fb1f2c2ecf555c!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimentos sob agendamento prévio.",
  },

  // ---------------------------------------------------
  // NAVEGAÇÃO SUPERIOR (HEADER / ASIDE)
  // ---------------------------------------------------
  nav: {
    links: ["A Clínica", "Metodologia", "Infraestrutura", "Casos Clínicos", "Contato"],
    ids: ["sobre", "metodologia", "infraestrutura", "/resultados", "contato"],
    btnDesktop: "O Especialista",
    btnMobile: "Conhecer o Especialista"
  },

  // ---------------------------------------------------
  // SEÇÃO 1: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.webp", 
    eyebrow: "Sua Cidade — UF",
    title1: "A precisão",
    title2: "da estética.",
    title3: "O resgate da função.",
    desc1: "Foco absoluto em ",
    descBold: "Reabilitação Oral e Lentes em Resina.",
    desc2: " Uma abordagem clínica onde o planejamento técnico encontra a proporção exata para o seu rosto.",
    btnPrimary: "Agendar Avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Dr. Responsável Técnico",
    badgeDesc: "CRO 00000",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 10, suffix: "+", label: "lentes esculpidas", thousands: false },
      { target: 100, suffix: "%", label: "foco em previsibilidade", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 2: O CARROSSEL (ABOUT)
  // ---------------------------------------------------
  about: {
    eyebrow: "A Vivere Odontologia",
    title1: "Design",
    title2: "autoral",
    title3: "em resina.",
    p1: "Localizada em um ponto nobre da cidade, a Vivere Odontologia foca em previsibilidade clínica e resultados de alto padrão.",
    p2_1: "Sob a liderança de um ",
    p2_bold: "Corpo Clínico Especializado,",
    p2_2: " nossa estrutura foi desenhada para resolver casos complexos com precisão técnica e rigor cirúrgico.",
    topics: [
      { title: "Odontologia Avançada", desc: "Estrutura moderna e protocolos validados para reduzir margens de erro." },
      { title: "Lentes em Resina", desc: "Correção de cor, textura e proporção com materiais de alta carga cerâmica." },
      { title: "Reabilitação Oral", desc: "Devolução da dimensão vertical e suporte labial perdidos pelo desgaste." },
      { title: "Fotografia Clínica", desc: "Registro estúdio-odontológico para guiar o diagnóstico e execução." },
    ],
    btn: "Conhecer a infraestrutura",
    gallery: [
      { url: "/imagens/sorriso1.webp", title: "Proporção" },
      { url: "/imagens/sorriso2.webp", title: "Simetria" },
      { url: "/imagens/sorriso3.webp", title: "Textura" },
      { url: "/imagens/sorriso5.webp", title: "Naturalidade" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 3: ESCOPO CLÍNICO (SERVICES)
  // ---------------------------------------------------
  services: {
    eyebrow: "Escopo Clínico",
    title1: "Excelência",
    title2: "técnica.",
    desc1: "Nossa clínica entrega soluções definitivas em ",
    descBold: "Reabilitação Oral e Estética",
    desc2: ", atuando sempre sob rígidos protocolos de qualidade.",
    btn: "Ver portfólio clínico",
    list: [
      // (ícones removidos: esta seção não é renderizada no site e importava a lib lucide-react inteira)
      { title: "Lentes em Resina", desc: "Correção de assimetrias, diastemas e cor com material de alta durabilidade e polimento contínuo." },
      { title: "Clareamento Clínico", desc: "Protocolos supervisionados com agentes químicos controlados para clarear sem sensibilidade agressiva." },
      { title: "Reabilitação Oral", desc: "Tratamento de bruxismo e perdas dentárias múltiplas para restabelecer a estabilidade oclusal." },
      { title: "Plástica Gengival", desc: "Intervenção cirúrgica milimétrica para alinhar zênites e corrigir o aspecto de sorriso gengival." },
      { title: "Controle de Manutenção", desc: "Acompanhamento periódico preventivo, garantindo a extensão da vida útil das restaurações estéticas." },
      { title: "Diagnóstico Digital", desc: "Documentação fotográfica especializada e moldagens precisas que guiam cada etapa do planejamento." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 4: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "O Especialista",
    members: [
      { name: "Dr. Nome do Especialista", cro: "CRO 00000", specialty: "Cirurgião Dentista", img: "/imagens/profissionalatuando.webp" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 5: METODOLOGIA (CONVENIOS)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Nossa Metodologia",
    title1: "Engenharia",
    title2: "do sorriso.",
    title3: "",
    desc: "Não utilizamos moldes padronizados. Todo planejamento leva em consideração a estrutura óssea, a proporção facial e a estabilidade mastigatória do paciente.",
    btn: "Agendar avaliação técnica",
    list: [
      { title: "Diagnóstico Profundo", content: "Mapeamento completo da saúde bucal, alinhamento facial e fotos em estúdio antes de qualquer intervenção." },
      { title: "Design Autoral", content: "As facetas de resina são esculpidas manualmente, dente por dente, evitando o aspecto opaco, plano e artificial." },
      { title: "Execução Milimétrica", content: "Utilização de magnificação óptica e instrumentos dedicados para garantir resistência mecânica e adaptação." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 6: INFRAESTRUTURA (TESTIMONIALS)
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Padrão",
    title2: "clínico.",
    quote: "Um espaço projetado para que o rigor técnico e o conforto do paciente coexistam perfeitamente.",
    supporting: "Nosso consultório dispõe de equipamentos avançados, centro de esterilização restrito e um estúdio fotográfico para documentação integral dos casos.",
    detailsLabel: "Detalhes do Espaço",
    footerLeft: "Vivere Odontologia",
    footerRight: "Sua Cidade, UF",
    photos: [
      { img: "/imagens/clinica1.webp", alt: "Estrutura Clínica" },
      { img: "/imagens/profissionalatuando.webp", alt: "Precisão Cirúrgica" },
      { img: "/imagens/clinica2.webp", alt: "Recepção" },
      { img: "/imagens/materiais1.webp", alt: "Instrumental Clínico" },
      { img: "/imagens/profissionaisatuando.webp", alt: "Equipe Especializada" },
      { img: "/imagens/materiais2.webp", alt: "Materiais Premium" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 7: CTA DE CASOS CLÍNICOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Casos Documentados",
    title1: "O resultado",
    title2: "da nossa técnica.",
    magneticBtn: "VER CASOS COMPLETOS  •  PORTFÓLIO CLÍNICO  •",
    labelBefore: "Condição Inicial",
    labelAfter: "Resultado Final",
    p1: "Não trabalhamos com expectativas irreais. A",
    p_bold1: "odontologia de excelência",
    p2: "se comprova de forma visual. Explore o",
    p_bold2: "portfólio de resultados",
    p3: "e entenda o nível de detalhe estético e anatômico que entregamos diariamente.",
    p_bold3: "",
    btn: "Acessar Portfólio",
    imgUrl: "/imagens/depois.webp" 
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
    p_bold1: "Reabilitação e Estética",
    p2: ". Imagens reais que atestam a nossa aplicação de",
    p_bold2: "anatomia, função e textura",
    p3: "em cada reconstrução de faceta e ajuste oclusal.",
    btnSaberMais: "Avaliar o meu caso clínico",
    btnVoltar: "Retornar ao início",
    cases: [
      { 
        category: "Estética Anterior", 
        duration: "Lentes em Resina", 
        complaint: "O paciente apresentava desnível nas margens, presença de diastemas e insatisfação com a saturação dos dentes.", 
        procedure: "Recontorno estético com a escultura de 10 facetas diretas em resina policromática, restabelecendo as guias de desoclusão.", 
        beforeImg: "/imagens/antes.webp", 
        afterImg: "/imagens/depois.webp"  
      },
      { 
        category: "Harmonização Dental", 
        duration: "Clareamento & Facetas", 
        complaint: "Dentes com pigmentação acentuada e bordas incisais fraturadas devido ao desgaste por atrição.", 
        procedure: "Sessões de clareamento supervisionado seguidas da reconstrução anatômica das bordas incisais em resina composta.", 
        beforeImg: "/imagens/antes.webp", 
        afterImg: "/imagens/depois.webp"  
      },
      { 
        category: "Reabilitação Oclusal", 
        duration: "Restabelecimento de DVO", 
        complaint: "Desgaste severo ocasionado por bruxismo ativo, comprometendo a dimensão vertical de oclusão e a estrutura dentária.", 
        procedure: "Reabilitação adesiva funcional estendendo-se de molares a incisivos, desenvolvendo nova altura e protegendo os remanescentes.", 
        beforeImg: "/imagens/antes.webp", 
        afterImg: "/imagens/depois.webp"  
      },
      { 
        category: "Adequação do Meio", 
        duration: "Preparo Prévio", 
        complaint: "Inflamação tecidual crônica marginal que impedia qualquer abordagem adesiva com segurança e longevidade.", 
        procedure: "Tratamento periodontal de adequação e refinamento de margem, criando o cenário biológico ideal para o procedimento estético.", 
        beforeImg: "/imagens/antes.webp", 
        afterImg: "/imagens/depois.webp"  
      }
    ]
  },

  // ---------------------------------------------------
  // PÁGINA 3: ESPECIALISTA (TIMELINE)
  // ---------------------------------------------------
  specialties_page: {
    hero: {
      title1: "DOMÍNIO",
      title2: "TÉCNICO",
      badge: "Cirurgião Dentista",
      imgUrl: "/imagens/dr.webp"
    },
    timeline: [
      {
        year: "2015",
        title: "Fundação Técnica",
        desc: "Formação em Odontologia, solidificando os pilares de precisão cirúrgica, estabilidade mecânica e biossegurança clínica.",
        img: "/imagens/materiais1.webp"
      },
      {
        year: "2019",
        title: "Foco Operatório",
        desc: "Imersão contínua em escultura dental adesiva, dedicando-se exclusivamente ao refinamento de reabilitações em resinas compostas.",
        img: "/imagens/profissionalatuando.webp"
      },
      {
        year: "2026",
        title: "Vivere Odontologia",
        desc: "Fundação da estrutura clínica dedicada, com protocolo de excelência projetado para casos de alto grau de exigência estética.",
        img: "/imagens/clinica2.webp" 
      }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO 8: ENDEREÇO (LOCATION)
  // ---------------------------------------------------
  location: {
    title1: "Onde nos",
    title2: "encontrar.",
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Avenida Principal, 1000", value2: "Sala 101 - Bairro Nobre" },
    box2: { title: "Localização", value1: "Sua Cidade - UF", value2: "CEP: 00000-000" },
    box3: { title: "Especialidades", value1: "Reabilitação Estética", value2: "Lentes em Resina Autoral" },
    btn: "Abrir rotas no Maps"
  },

  // ---------------------------------------------------
  // SEÇÃO 9: CONTATO E RODAPÉ (FOOTER)
  // ---------------------------------------------------
  contact: {
    eyebrow: "Agende sua Consulta",
    title1: "Previsibilidade no",
    title2: "tratamento.",
    desc: "Inicie o planejamento do seu caso. Conte com o suporte de uma infraestrutura desenhada para entregar técnica e resultado em cada etapa.",
    box1_title: "Endereço",
    box2_title: "Canal Direto",
    box3_title: "Mídias Clínicas",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@vivere.odonto"
  },
  
  footer: {
    sobre: "Vivere Odontologia | Especialistas em Reabilitação Oral, Lentes em Resina e Odontologia de Alta Performance.",
    title_tratamentos: "Escopo de Serviços",
    title_contato: "Atendimento",
    direitos: "© 2026 Vivere Odontologia. Todos os direitos reservados. RT Dr. Nome do Especialista CRO 00000.",
    registro: "Sua Cidade — UF"
  },

  // ---------------------------------------------------
  // SEÇÃO EXTRA: FAQ 
  // ---------------------------------------------------
  faq: {
    title: "Perguntas Comuns",
    list: [
      { q: "A clínica possui estacionamento próprio?", a: "Sim, estamos localizados em um edifício comercial que dispõe de estrutura completa de estacionamento rotativo para a sua segurança e comodidade." },
      { q: "Qual o foco principal de atuação da clínica?", a: "Nossa expertise técnica está baseada na Reabilitação Oral Funcional e na Estética Avançada, especialmente através de Lentes e Facetas em Resina Composta." },
      { q: "As lentes em resina mancham facilmente?", a: "Utilizamos resinas compostas com alta carga cerâmica e realizamos um polimento de excelência. Seguindo os protocolos de manutenção indicados na clínica, elas mantêm o brilho e a cor por muitos anos." },
      { q: "Como dou andamento no meu agendamento?", a: "Basta acessar qualquer link do WhatsApp na página. Nossa equipe de relacionamento alinhará os horários de acordo com a disponibilidade da agenda clínica." }
    ]
  }
};