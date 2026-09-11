import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "LH Odonto Clinic",
    subtitulo: "Odontologia Avançada",
    logoUrl: "/imagens/logo.png", // Mantenha a imagem da logo salva neste caminho
    contato: {
      whatsappUrl: "https://wa.me/5521999273465?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+LH+Odonto+Clinic.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(21) 99927-3465",
      emailLabel: "contato@lhodontoclinic.com.br",
      instagramLabel: "@lhodontoclinic",
    },
    endereco: {
      bairroCidade: "Barros Filho, Rio de Janeiro - RJ",
      edificio: "LH Odonto Clinic",
      detalhado: "Estr. João Paulo, 1128 - Sobrado\nBarros Filho\nRio de Janeiro - RJ, 21512-002",
      comodidades: ["Lentes em Resina", "Reabilitação Oral", "Clareamento", "Odontologia Estética"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/LH+Odonto+Clinic+Barros+Filho",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9929785351896!2d-43.3647721238913!3d-22.839749279302385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99632385c07613%3A0xcf9dcbef641c27e4!2sLH%20Odonto%20Clinic!5e0!3m2!1spt-BR!2sbr!4v1789158971514!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sábado\nSábados a partir das 09:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Nosso Cuidado", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Mantido o caminho original seguro
    eyebrow: "Barros Filho — Rio de Janeiro, RJ",
    title1: "Elevando a sua",
    title2: "autoestima",
    title3: "através do sorriso.",
    desc1: "Especialistas em ",
    descBold: "Reabilitação Oral e Estética.",
    desc2: " Transformamos sorrisos com a arte de esculpir dentes, unindo naturalidade, saúde e excelência em cada detalhe.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Dr. Leonardo Oliveira",
    badgeDesc: "CRO RJ 60324",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 10, suffix: "+", label: "lentes por sorriso", thousands: false },
      { target: 100, suffix: "%", label: "foco em naturalidade", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A LH Odonto Clinic",
    title1: "A arte de",
    title2: "esculpir",
    title3: "sorrisos.",
    p1: "Localizada em Barros Filho, Rio de Janeiro, a LH Odonto Clinic nasceu com o propósito de elevar a sua autoestima através de uma odontologia de resultados.",
    p2_1: "Sob a Responsabilidade Técnica do ",
    p2_bold: "Dr. Leonardo Oliveira (CRO RJ 60324),",
    p2_2: " nossa clínica é referência em Reabilitação Oral e Estética, oferecendo tratamentos modernos como lentes em resina e clareamento avançado.",
    topics: [
      { title: "Odontologia Avançada", desc: "Estrutura moderna e técnicas atualizadas para garantir precisão em cada tratamento." },
      { title: "Lentes em Resina", desc: "A arte de esculpir dentes com resinas de alta qualidade para um sorriso natural e harmônico." },
      { title: "Reabilitação Oral", desc: "Devolvemos a função mastigatória e a estética completa para a sua saúde e conforto." },
      { title: "Elevação da Autoestima", desc: "Cuidamos de cada detalhe para que você volte a sorrir com confiança todos os dias." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/hero.png", title: "Estética Dental" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80", title: "Odontologia Moderna" },
      { url: "/imagens/leve.png", title: "Sorrisos Naturais" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossas Especializações",
    title1: "Excelência em",
    title2: "cada detalhe.",
    desc1: "A LH Odonto Clinic oferece soluções completas em ",
    descBold: "Reabilitação Oral e Estética",
    desc2: ", garantindo que o seu tratamento seja sempre seguro e de alto nível.",
    btn: "Ver todas as especializações",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes em Resina", desc: "A arte de esculpir o seu sorriso. Corrigimos cor, formato e proporção dos dentes com resinas de alta durabilidade e polimento." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Clareamento Dental", desc: "Utilizamos tecnologias avançadas (como clareamento a laser/LED) para devolver a luminosidade natural e o brilho dos seus dentes." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Reabilitação Oral", desc: "Tratamentos completos para pacientes que sofreram perdas ou desgastes severos, recuperando totalmente a estética e a função." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Odontologia Estética", desc: "Focamos na harmonia facial e na naturalidade para que o seu novo sorriso se integre perfeitamente aos seus traços." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Odontologia Preventiva", desc: "Check-ups, profilaxia e orientações fundamentais para manter a saúde das suas gengivas e a longevidade das lentes." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Humanizado", desc: "Um ambiente onde a sua ansiedade é acolhida. Trabalhamos para tornar sua ida ao dentista uma experiência tranquila e positiva." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Corpo Clínico",
    members: [
      { name: "Dr. Leonardo Oliveira", cro: "CRO RJ 60324", specialty: "Responsável Técnico", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA
  // ---------------------------------------------------
  convenios: {
    eyebrow: "O Cuidado LH",
    title1: "Elevando a sua",
    title2: "autoestima",
    title3: "através do sorriso.",
    desc: "Acreditamos que um sorriso bonito e saudável tem o poder de transformar a maneira como você se vê e como o mundo te enxerga.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Foco na Naturalidade", content: "Nossos procedimentos de lentes em resina são desenhados um a um, artesanalmente, garantindo um resultado que não parece artificial." },
      { title: "Tecnologia e Conforto", content: "Contamos com equipamentos modernos para agilizar o seu tratamento, entregando resultados precisos com o máximo de conforto possível." },
      { title: "Planejamento Individualizado", content: "Avaliamos seu rosto, sua mordida e seus desejos antes de iniciar qualquer mudança, para que o resultado supere as suas expectativas." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Clínica",
    title1: "Odontologia",
    title2: "Avançada.",
    quote: "Nosso ambiente foi preparado para proporcionar um atendimento de alto padrão para você e sua família.",
    supporting: "Acompanhe um pouco do nosso espaço localizado na Estrada João Paulo, no Rio de Janeiro.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica LH Odonto" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento Odontológico" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos Perfeitos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "A arte de",
    title2: "esculpir sorrisos.",
    p1: "Acreditamos na",
    p_bold1: "odontologia estética",
    p2: "capaz de devolver a sua autoconfiança de forma imediata. Acompanhe a transformação real na nossa",
    p_bold2: "galeria de resultados",
    p3: "e descubra o padrão da LH Odonto Clinic.",
    p_bold3: "",
    btn: "Ver Resultados Reais",
    imgUrl: "/imagens/dentes.png" 
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde a LH Odonto Clinic está localizada?", a: "Nossa clínica fica na Estrada João Paulo, 1128 - Sobrado, no bairro Barros Filho, no Rio de Janeiro - RJ." },
      { q: "Quais são as especialidades da clínica?", a: "Nosso foco principal é a Reabilitação Oral e a Odontologia Estética, incluindo a confecção de Lentes em Resina e protocolos de Clareamento Dental." },
      { q: "Como funcionam as Lentes em Resina?", a: "É um procedimento de estética dental onde aplicamos uma resina de alta performance sobre os dentes para corrigir cor, tamanho e formato, feito de forma artesanal no consultório." },
      { q: "Como agendar uma avaliação?", a: "Basta clicar em qualquer botão de WhatsApp do site, ou nos adicionar diretamente pelo número (21) 99927-3465. Nossa equipe estará pronta para te atender." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Estrada João Paulo, 1128", value2: "Sobrado - Barros Filho" },
    box2: { title: "Localização", value1: "Rio de Janeiro - RJ", value2: "CEP: 21512-002" },
    box3: { title: "Especialidades", value1: "Reabilitação Oral", value2: "Lentes em Resina e Estética" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A sua saúde no",
    title2: "lugar certo.",
    desc: "Agende sua avaliação na LH Odonto Clinic. Conte com a segurança do Dr. Leonardo Oliveira e sua equipe para tratar do seu sorriso com excelência.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@lhodontoclinic"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "LH Odonto Clinic | Elevando autoestima através do sorriso. Especialistas em Reabilitação Oral e Estética no Rio de Janeiro.",
    title_tratamentos: "Especializações",
    title_contato: "Contato",
    direitos: "© 2026 LH Odonto Clinic. Todos os direitos reservados. RT Dr. Leonardo Oliveira CRO RJ 60324.",
    registro: "Barros Filho — Rio de Janeiro, RJ"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos e Resultados",
    title1: "A beleza de",
    title2: "um sorriso.",
    p1: "Confira a transformação dos nossos pacientes através da ",
    p_bold1: "Odontologia de Excelência",
    p2: ". Valorizamos a",
    p_bold2: "naturalidade e a função",
    p3: "em cada detalhe dos nossos tratamentos em resina e reabilitação.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Estética do Sorriso", 
        duration: "Lentes em Resina", 
        complaint: "Descontentamento com a cor e pequenas assimetrias no formato dos dentes anteriores.", 
        procedure: "Arte de esculpir 10 lentes em resina superior, devolvendo um sorriso harmônico e extremamente natural.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Odontologia Estética", 
        duration: "Clareamento Avançado", 
        complaint: "Dentes amarelados e com manchas devido à alimentação e ao tempo.", 
        procedure: "Protocolo de clareamento no consultório com luz aceleradora, garantindo dentes muito mais claros e iluminados.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Reabilitação Oral", 
        duration: "Devolução de Função", 
        complaint: "Desgaste severo dos dentes prejudicando a mordida e o suporte labial.", 
        procedure: "Reabilitação completa restabelecendo o tamanho original dos dentes e a força mastigatória.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Prevenção e Saúde", 
        duration: "Profilaxia", 
        complaint: "Acúmulo de tártaro causando inflamação na margem gengival.", 
        procedure: "Limpeza profunda (profilaxia) devolvendo a saúde das gengivas e preparando o sorriso para a estética.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};