export const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  clinica: {
    nome: "DR. NAYHAN ANDRADE",
    subtitulo: "Transplante Capilar & Tricologia",
    contato: {
      whatsappUrl: "https://wa.me/5575992410240", 
      whatsappLabel: "Agendar Avaliação Clínica",
      telefoneLabel: "(75) 99241-0240",
      emailLabel: "contato@drnayhanandrade.com.br",
      instagramLabel: "@drnayhanandrade",
    },
    endereco: {
      bairroCidade: "São João, Feira de Santana - BA",
      edificio: "Consultório Médico",
      detalhado: "R. Dr. Elpídio Nova, 178A\nSão João\nFeira de Santana - BA, 44051-730",
    },
  },

  nav: {
    links: ["O Médico", "A Técnica", "Metodologia", "Contato"],
    ids: ["/sobre-o-doutor", "tecnica", "protocolo", "contato"]
  },

  hero: {
    imgUrl: "/imagens/hero2.png", 
    eyebrow: "CRM 35840 - BA",
    title1: "Restauração",
    title2: "capilar",
    title3: "de excelência.",
    desc1: "A ciência moderna aplicada à sua imagem. ",
    descBold: "Técnica FUE de Alta Densidade",
    desc2: " com planejamento cirúrgico minucioso, focado em simetria e naturalidade indetectável.",
    btnPrimary: "Agendar Consulta",
    btnOutline: "Conhecer o Médico",
    badgeTitle: "Membro SBRCC",
    badgeDesc: "CRM 35840 - BA"
  },

  about_brief: {
    imgUrl: "/imagens/image.png", 
    eyebrow: "Direção Clínica",
    title1: "Dr. Nayhan",
    title2: "Andrade",
    p1: "Médico tricologista e membro da Sociedade Brasileira de Restauração Capilar (SBRCC). Sua atuação é restrita à restauração capilar e ao tratamento clínico avançado de disfunções do couro cabeludo na região de Feira de Santana.",
    p2: "O rigor cirúrgico e o refinamento estético andam lado a lado para entregar resultados que devolvem a confiança com máxima segurança.",
    btn: "Ver Perfil Completo"
  },

  about_page: {
    imgUrl1: "/imagens/hero.png", 
    imgUrl2: "/imagens/imagecopy.png", 
    eyebrow: "CRM-BA 35840 | Membro SBRCC",
    title1: "Ciência, Arte e",
    title2: "Ética Médica.",
    p1: "A excelência em um transplante capilar está na invisibilidade do procedimento. O melhor resultado é aquele que ninguém percebe que foi feito. Na luta contra a calvície, investir em soluções pautadas na ciência é o único caminho para resgatar a sua autoestima de forma segura.",
    p2: "O planejamento da linha frontal (hairline) e o mapeamento da área doadora determinam a viabilidade do procedimento. A angulação, o calibre do fio e a densidade de implantação são calculados individualmente para cada paciente com base em dermatoscopia de precisão.",
    quote: "Meu compromisso é com a sua segurança clínica e com a devolução da sua melhor versão, de forma indetectável e natural.",
    topics: [
      { title: "Diagnóstico Tricológico", desc: "Mapeamento microscópico do couro cabeludo para identificação clara da etiologia da alopecia antes de qualquer indicação cirúrgica." },
      { title: "Técnica FUE de Alta Densidade", desc: "Extração folicular automatizada e implantação com controle rigoroso de profundidade e angulação, preservando a área doadora." },
      { title: "Acompanhamento Integral", desc: "Monitoramento clínico de 12 a 15 meses pós-cirurgia para avaliação da taxa de sobrevivência folicular e maturação dos fios." }
    ]
  },

  services: {
    eyebrow: "Atuação Médica",
    title1: "Procedimentos",
    title2: "Clínicos",
    desc1: "Intervenções baseadas em ",
    descBold: "evidência científica",
    desc2: " para restauração e manutenção capilar a longo prazo.",
    list: [
      { iconName: "Microscope", title: "Transplante FUE", desc: "Remoção individual de folículos da área doadora e implantação em áreas de rarefação sem cicatriz linear." },
      { iconName: "FileText", title: "Tricologia Médica", desc: "Diagnóstico aprofundado e tratamento de condições patológicas do couro cabeludo e da haste capilar para estabilizar a queda." },
      { iconName: "Crosshair", title: "Restauração de Sobrancelhas", desc: "Reconstrução minuciosa de falhas utilizando folículos capilares de calibre e angulação perfeitamente compatíveis." },
      { iconName: "Shield", title: "Terapias Injetáveis", desc: "Protocolos médicos injetáveis (MMP/Mesoterapia) para otimização da área doadora e estímulo na área receptora." }
    ]
  },

  protocol: {
    eyebrow: "Metodologia",
    title1: "O Protocolo",
    title2: "Operatório",
    desc: "Nenhuma etapa é negligenciada. Adotamos uma estrutura de acompanhamento rigorosamente padronizada para assegurar a integridade dos enxertos e a saúde do paciente do início ao fim.",
    list: [
      { step: "01", title: "Avaliação e Dermatoscopia", content: "Análise da densidade da área doadora, aferição do calibre dos fios e demarcação cirúrgica preliminar alinhada com a anatomia e simetria facial do paciente." },
      { step: "02", title: "Intervenção Cirúrgica FUE", content: "Extração de unidades foliculares sob anestesia local com sedação leve (procedimento indolor) e implantação unitária na área receptora." },
      { step: "03", title: "Acompanhamento Clínico", content: "Nossa responsabilidade não acaba na alta cirúrgica. Realizamos o monitoramento clínico constante ao longo de 12 a 15 meses para potencializar a taxa de sobrevivência folicular." }
    ]
  },

  faq: {
    title: "Informações Técnicas",
    list: [
      { q: "A técnica FUE gera cicatriz linear (corte)?", a: "Não. A extração produz microcicatrizes puntiformes de diâmetro submilimétrico, dispersas na área doadora, que se tornam imperceptíveis mesmo com o cabelo raspado." },
      { q: "A cirurgia de transplante é dolorosa?", a: "O procedimento é executado sob anestesia local associada a protocolos de conforto. O paciente permanece tranquilo, sem sentir dor durante a extração ou implantação." },
      { q: "Qual o tempo médio de um procedimento?", a: "A duração varia entre 6 a 8 horas, dependendo do grau de calvície e do volume de unidades foliculares que precisam ser extraídas e transplantadas." },
      { q: "Quando verei o resultado final?", a: "Os fios transplantados costumam cair nas primeiras semanas (processo fisiológico normal) e voltam a crescer a partir do 3º mês. O resultado estético definitivo é avaliado entre 12 e 15 meses pós-cirurgia." }
    ]
  },

  contact: {
    eyebrow: "Agendamento",
    title1: "Atendimento",
    title2: "Especializado.",
    desc: "O diagnóstico correto e o planejamento cirúrgico minucioso são determinantes para a excelência do seu resultado. Dê o primeiro passo para a sua restauração.",
    box1_title: "Endereço",
    box2_title: "Contato",
    box3_title: "Acompanhe",
    box3_desc1: "Conteúdo Técnico",
    box3_desc2: "@drnayhanandrade",
    btn: "Solicitar Avaliação"
  },

  footer: {
    sobre: "Dr. Nayhan Andrade | CRM 35840-BA. Médico Tricologista e Membro SBRCC. Atuação exclusiva em Transplante Capilar FUE e Medicina Capilar na Bahia.",
    direitos: "© 2026 Dr. Nayhan Andrade. Todos os direitos reservados."
  }
};