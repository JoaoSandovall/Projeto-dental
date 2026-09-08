import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DO EVENTO / CURSO
  // ---------------------------------------------------
  clinica: {
    nome: "Imersão VIP",
    subtitulo: "Facetas em Resina Composta",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original
    contato: {
      whatsappUrl: "https://wa.me/5516991922304?text=Ol%C3%A1%2C+gostaria+de+garantir+minha+vaga+no+curso+de+Facetas%21", 
      whatsappLabel: "Falar com Bianca (Inscrições)",
      telefoneLabel: "(16) 99192-2304",
      emailLabel: "cursos@drgeysongalo.com.br",
      instagramLabel: "@drgeysongalo",
    },
    endereco: {
      bairroCidade: "Ribeirão Preto - SP",
      edificio: "Centro de Treinamento VIP",
      detalhado: "Turma Exclusiva\nRibeirão Preto - SP\nDias 17 e 18 de Setembro",
      comodidades: ["Prática Hands-on", "Apoio 3M e MilenioX", "Mentoria Exclusiva", "Certificado Oficial"],
      mapaGpsUrl: "#",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118357.21832104117!2d-47.900985550000004!3d-21.17387435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b041cf237bbad9%3A0xc3f58a36ef7f5c71!2sRibeir%C3%A3o%20Preto%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr"
    },
    horarios: "17 e 18 de Setembro\nCarga horária imersiva",
  },

  nav: {
    links: ["A Imersão", "Cronograma", "Professores", "Diferenciais", "Inscrição"],
    ids: ["sobre", "servicos", "equipe", "convenios", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o seu caminho original
    eyebrow: "17 e 18 de Setembro | Vagas Limitadas",
    title1: "Domine a arte das",
    title2: "facetas",
    title3: "em resina.",
    desc1: "Aprenda na prática a",
    descBold: "Técnica de Estratificação Direta",
    desc2: " e eleve o padrão dos seus atendimentos. Um curso VIP focado em transformar a sua entrega clínica com apoio oficial 3M e MilenioX.",
    btnPrimary: "Garantir minha vaga",
    btnOutline: "Ver cronograma",
    badgeTitle: "Dr. Geyson & Dra. Flávia",
    badgeDesc: "Curso VIP Hands-on",
    stats: [
      { target: 2, suffix: " Dias", label: "de imersão intensa", thousands: false },
      { target: 100, suffix: "%", label: "foco prático (hands-on)", thousands: false },
      { target: 10, suffix: "x", label: "mais rentabilidade no consultório", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS (Sobre o Curso)
  // ---------------------------------------------------
  about: {
    eyebrow: "A Imersão",
    title1: "O próximo",
    title2: "grande passo",
    title3: "da sua carreira.",
    p1: "A Estética Dental é o setor mais lucrativo e desejado da odontologia atual. Nossa missão é encurtar a sua curva de aprendizado com técnicas validadas e previsíveis.",
    p2_1: "Sob a mentoria do ",
    p2_bold: "Dr. Geyson Galo e da Dra. Flávia Sivaldi",
    p2_2: ", você terá acesso a um conteúdo desenhado para você sair do curso apto a executar reabilitações em resina composta no dia seguinte no seu consultório.",
    topics: [
      { title: "Prática Real", desc: "Laboratório hands-on focado na repetição correta para você dominar a escultura dental." },
      { title: "Técnica de Estratificação", desc: "Aprenda a reproduzir efeitos ópticos, translucidez e a textura exata de dentes naturais." },
      { title: "Previsibilidade Clínica", desc: "Como avaliar, planejar e executar casos complexos sem frustrações e refações." },
      { title: "Apoio Exclusivo", desc: "Suporte e uso de materiais de altíssima performance das parceiras 3M e MilenioX." },
    ],
    btn: "Quero reservar minha vaga",
    gallery: [
      { url: "/imagens/hero.png", title: "Prática em Foco" }, // Mantido o seu caminho original
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", title: "Técnica Validada" },
      { url: "/imagens/leve.png", title: "Excelência Clínica" } // Mantido o seu caminho original
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS (Conteúdo Programático)
  // ---------------------------------------------------
  services: {
    eyebrow: "Conteúdo Programático",
    title1: "O que você",
    title2: "vai aprender.",
    desc1: "Um cronograma denso, moderno e focado na ",
    descBold: "realidade do consultório",
    desc2: ". Nada de teoria que não se aplica; apenas o que funciona e gera valor.",
    btn: "Ver detalhes completos",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Análise Estética e Planejamento", desc: "Aprenda a realizar o planejamento reverso e a criar projetos estéticos que se integram à face do paciente." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Isolamento e Preparo", desc: "Dominando as indicações clínicas: quando preparar e quando trabalhar de forma minimamente invasiva." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Estratificação Direta", desc: "O coração do curso: seleção de cor, mascaramento de substrato e a técnica de estratificação passo a passo." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Texturização e Morfologia", desc: "Como reproduzir anatomias primárias, secundárias e terciárias para entregar o verdadeiro aspecto de dente natural." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Acabamento e Polimento", desc: "O segredo da longevidade. Protocolos exatos para garantir brilho permanente e saúde gengival." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Posicionamento e Vendas", desc: "Dicas essenciais de como precificar, apresentar e vender reabilitações em resina composta de alto valor." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO (Professores)
  // ---------------------------------------------------
  team: {
    title: "Seus Professores",
    members: [
      { name: "Dr. Geyson Galo", cro: "Especialista em Estética", specialty: "Referência em Estratificação", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop" },
      { name: "Dra. Flávia Sivaldi", cro: "Especialista em Dentística", specialty: "Reabilitação Estética", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA (Diferenciais do Curso)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Diferenciais do Curso",
    title1: "Turma VIP,",
    title2: "resultados",
    title3: "imediatos.",
    desc: "Ao optar pela nossa imersão, você não entra apenas em uma sala de aula. Você tem acesso a uma mentoria de profissionais que vivem a odontologia de alto padrão todos os dias.",
    btn: "Falar com suporte da Turma",
    list: [
      { title: "Vagas Limitadíssimas", content: "Atenção máxima dos professores durante todo o hands-on para correção imediata de falhas e evolução clínica na hora." },
      { title: "Parceria 3M e MilenioX", content: "Contato direto com os melhores materiais do mundo. Você usará durante a prática os compostos que realmente funcionam no consultório." },
      { title: "Networking de Alto Nível", content: "Troque experiências, faça contatos valiosos e eleve o seu padrão estando perto de profissionais que buscam o topo." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA (Experiência do Aluno)
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Estrutura",
    title1: "Imersão",
    title2: "completa.",
    quote: "Uma experiência divisora de águas. Saí do curso com segurança total para executar resinas de alto valor no meu consultório.",
    supporting: "Acompanhe um pouco da atmosfera e da estrutura que espera por você nos dias 17 e 18 de setembro.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Estrutura do Curso" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Hands-on Prático" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Laboratório" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Professores Ensinando" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Turma Focada" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Resinas 3M" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Sua Nova Realidade",
    title1: "Entregas",
    title2: "de alto valor.",
    p1: "Para lotar a sua agenda com os pacientes certos, você precisa entregar",
    p_bold1: "excelência clínica",
    p2: ". Veja o nível de estética, textura e polimento que você será capaz de reproduzir acessando nossa",
    p_bold2: "galeria de resultados clínicos.",
    p3: "",
    p_bold3: "",
    btn: "Ver Casos de Referência",
    imgUrl: "/imagens/dentes.png" // Mantido o seu caminho original
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Quais são as datas do curso?", a: "A imersão acontecerá exclusivamente nos dias 17 e 18 de Setembro." },
      { q: "Preciso levar materiais para o Hands-on?", a: "A lista exata de instrumentais necessários será enviada no ato da inscrição. Os materiais de consumo de alta performance serão disponibilizados no local (apoio 3M)." },
      { q: "Para quem é o curso?", a: "Destinado a cirurgiões-dentistas e acadêmicos dos últimos semestres que desejam aperfeiçoar a técnica de resina composta para faturar mais com estética no consultório." },
      { q: "Quais as formas de pagamento disponíveis?", a: "Você pode garantir sua vaga através de Pix, transferência ou parcelamento no cartão de crédito. Fale com a Bianca no WhatsApp para as condições." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Data &\nLocal",
    box1: { title: "Data do Evento", value1: "17 e 18 de Setembro", value2: "Carga Horária Intensiva" },
    box2: { title: "Localização", value1: "Ribeirão Preto - SP", value2: "Centro de Treinamento VIP" },
    box3: { title: "Dúvidas?", value1: "Fale direto com a coordenação", value2: "pelo botão de WhatsApp" },
    btn: "Falar com Atendimento"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Últimas Vagas",
    title1: "Eleve o padrão",
    title2: "do seu consultório.",
    desc: "Não perca a oportunidade de aprender as técnicas que estão revolucionando a estética dental com quem domina o assunto na prática. Restam poucas vagas.",
    box1_title: "Datas",
    box2_title: "Inscrições Abertas",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe os professores",
    box3_desc2: "@drgeysongalo | @dra.flaviasivaldi"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Curso de Facetas em Resina Composta | Técnica Estratificação Direta. Mentoria intensiva para dentistas que buscam o mais alto nível estético.",
    title_tratamentos: "Módulos",
    title_contato: "Coordenação",
    direitos: "© 2026 Curso de Facetas VIP. Todos os direitos reservados. Dr. Geyson Galo e Dra. Flávia Sivaldi.",
    registro: "Apoio Oficial: 3M e MilenioX"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS (Casos Clínicos dos Profs)
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Estudos de Caso Clínico",
    title1: "Estética que",
    title2: "você vai dominar.",
    p1: "Confira o nível de excelência e naturalidade em ",
    p_bold1: "Facetas de Resina",
    p2: " que ensinaremos você a executar no consultório. O segredo está no domínio da",
    p_bold2: "morfologia e do polimento.",
    p3: "",
    btnSaberMais: "Garantir minha vaga na turma",
    btnVoltar: "Voltar para o Cronograma",
    cases: [
      { 
        category: "Estratificação Avançada", 
        duration: "Anatomia Natural", 
        complaint: "Exemplo prático de fechamento de diastemas e devolução da guia anterior com resinas de alta performance.", 
        procedure: "Mascaramento perfeito de substrato e estratificação fiel criando profundidade e halos incisais.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Reabilitação Estética", 
        duration: "Textura e Polimento", 
        complaint: "Dentes escurecidos e com formatos conoides, afetando bruscamente a curva do sorriso.", 
        procedure: "Adequação de espaços, uso de resinas 3M e protocolo de acabamento que reflete a luz como esmalte verdadeiro.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Transformação do Sorriso", 
        duration: "Estratificação Direta", 
        complaint: "Restaurações antigas desadaptadas e com forte alteração de cor.", 
        procedure: "Substituição completa utilizando resinas opalescentes para trazer vida, jovialidade e naturalidade imediata.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      },
      { 
        category: "Detalhes de Excelência", 
        duration: "Hands-on", 
        complaint: "Desgaste acentuado da borda incisal, envelhecendo severamente os traços do paciente.", 
        procedure: "Reconstrução guiada restaurando a função protrusiva sem abrir mão de uma estética hiper-realista.", 
        beforeImg: "/imagens/branco.png", // Mantido o seu caminho original
        afterImg: "/imagens/preto.png"    // Mantido o seu caminho original
      }
    ]
  }
};