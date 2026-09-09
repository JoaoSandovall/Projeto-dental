import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "MF Beauty",
    subtitulo: "Estética Avançada",
    logoUrl: "/imagens/logo.png", 
    contato: {
      whatsappUrl: "https://wa.me/5561993448223?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+procedimentos+da+MF+Beauty.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(61) 99344-8223",
      emailLabel: "contato@mfbeauty.com.br",
      instagramLabel: "@mfbeauty.bsb",
    },
    endereco: {
      bairroCidade: "Sudoeste, Brasília - DF",
      edificio: "Edifício Belas Artes",
      detalhado: "CLSW 300 A, Edifício Belas Artes, Loja 10\nSudoeste\nBrasília - DF, 70673-006",
      comodidades: ["Harmonização Facial e Glútea", "Ultraformer MPT", "Botox e Preenchimentos", "Rejuvenescimento"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/MF+BEAUTY+-+Estetica+Avançada+e+Harmonização+Facial",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3079476641597!2d-47.91815092403457!3d-15.787708184851693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b5dea467675%3A0x9ed19e1d290ca4c!2sMF%20BEAUTY%20-%20Est%C3%A9tica%20Avan%C3%A7ada%20e%20Harmoniza%C3%A7%C3%A3o%20Facial!5e0!3m2!1spt-BR!2sbr!4v1788959591235!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento Exclusivo\nSegunda a Sábado, encerra às 20:00",
  },

  nav: {
    links: ["A Clínica", "Procedimentos", "Grupo VIP", "Resultados", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "/resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", 
    eyebrow: "Sudoeste — Brasília, DF",
    title1: "Realce a sua",
    title2: "beleza",
    title3: "natural.",
    desc1: "Um espaço exclusivo para quem ama se cuidar e busca a sua ",
    descBold: "melhor versão.",
    desc2: " Na MF Beauty, unimos ciência, tecnologia e arte para entregar resultados sofisticados em estética avançada e harmonização.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Conhecer procedimentos",
    badgeTitle: "MF Beauty",
    badgeDesc: "Estética Avançada",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 12, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco no seu bem-estar", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A MF Beauty",
    title1: "Sofisticação,",
    title2: "tecnologia e",
    title3: "autoestima.",
    p1: "Localizada no Edifício Belas Artes, no Sudoeste, a MF Beauty foi idealizada para ser um verdadeiro refúgio de beleza e autocuidado em Brasília.",
    p2_1: "Nossa clínica é especializada em ",
    p2_bold: "Estética Avançada e Harmonização Facial,",
    p2_2: " oferecendo desde os mais modernos protocolos de Ultraformer MPT até preenchimentos delicados que valorizam os seus traços únicos.",
    topics: [
      { title: "Harmonização de Alto Padrão", desc: "Resultados elegantes e naturais em Harmonização Facial e Glútea." },
      { title: "Tecnologia de Ponta", desc: "Protocolos inovadores de rejuvenescimento e qualidade da pele, como o Ultraformer MPT." },
      { title: "Atendimento Personalizado", desc: "Cada rosto e corpo contam uma história. Nossos tratamentos são inteiramente individualizados." },
      { title: "Conforto e Exclusividade", desc: "Um ambiente intimista, moderno e preparado para proporcionar a melhor experiência possível." },
    ],
    btn: "Falar com nossa equipe",
    gallery: [
      { url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80", title: "Harmonização" },
      { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80", title: "Cuidado e Beleza" },
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80", title: "Pele Iluminada" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossos Procedimentos",
    title1: "O melhor para",
    title2: "a sua pele e corpo.",
    desc1: "Oferecemos protocolos completos e avançados para ",
    descBold: "rejuvenescimento e estética",
    desc2: ", entregando confiança e segurança em cada detalhe.",
    btn: "Ver todos os tratamentos",
    list: [
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Botox e Preenchimentos", desc: "Suavização de rugas, linhas de expressão e reposição de volume facial (lábios, olheiras, malar) com máxima naturalidade." },
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Ultraformer MPT", desc: "A tecnologia mais avançada do mercado para lifting facial sem cortes, estímulo de colágeno e quebra de gordura localizada." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Harmonização Facial", desc: "Alinhamento e simetria do rosto, valorizando seus pontos fortes para um perfil marcante e rejuvenescido." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Harmonização Glútea", desc: "Protocolos corporais seguros para melhora do contorno, firmeza e volumização da região glútea." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Melasmas e Cicatrizes", desc: "Tratamentos profundos para uniformização do tom da pele, clareamento de manchas e melhora de texturas e cicatrizes." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Qualidade da Pele", desc: "Skinboosters, bioestimuladores de colágeno e peelings para um rosto iluminado, firme e hidratado de dentro para fora." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Quem cuida de você",
    members: [
      { name: "Equipe MF Beauty", cro: "Especialistas", specialty: "Estética Avançada e Harmonização", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA E GRUPO VIP
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Comunidade Exclusiva",
    title1: "Faça parte do nosso",
    title2: "Grupo VIP",
    title3: "MF Beauty.",
    desc: "Um espaço exclusivo para quem ama se cuidar. Participe da nossa comunidade e tenha acesso em primeira mão às melhores condições, novidades e oportunidades da clínica.",
    btn: "Entrar para o Grupo VIP",
    list: [
      { title: "Condições Especiais", content: "Receba ofertas exclusivas em tratamentos de Botox, Preenchimentos e protocolos corporais antes de todo mundo." },
      { title: "Novidades em Primeira Mão", content: "Fique sabendo sobre o lançamento de novas tecnologias como Ultraformer MPT e novas técnicas de harmonização." },
      { title: "Dicas de Beleza e Skincare", content: "Conteúdos elaborados pela nossa equipe para ajudar você a manter a qualidade e o rejuvenescimento da pele em casa." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "O Ambiente",
    title1: "Conforto e",
    title2: "exclusividade.",
    quote: "A excelência da estética avançada aliada a um ambiente pensado para o seu total relaxamento.",
    supporting: "Nossos pacientes avaliam nossa clínica com 5 estrelas no Google. Conheça um pouco do nosso espaço no Sudoeste.",
    photos: [
      { img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=1000&fit=crop", alt: "Procedimento Estético" },
      { img: "https://images.unsplash.com/photo-1560944527-a4a429848866?w=800&h=1000&fit=crop", alt: "Skincare" },
      { img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=1000&fit=crop", alt: "Beleza Facial" },
      { img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=1000&fit=crop", alt: "Clínica MF Beauty" },
      { img: "https://images.unsplash.com/photo-1629367142312-588ce35868bd?w=800&h=1000&fit=crop", alt: "Tratamento Facial" },
      { img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop", alt: "Relaxamento e Spa" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "Resultados",
    title2: "que inspiram.",
    p1: "Acreditamos na",
    p_bold1: "estética avançada",
    p2: "que realça a beleza individual sem perder a naturalidade. Acompanhe a transformação das nossas pacientes na nossa",
    p_bold2: "galeria de antes e depois",
    p3: "e descubra o padrão MF Beauty.",
    p_bold3: "",
    btn: "Ver Resultados Reais",
    imgUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80" 
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "Onde a MF Beauty está localizada?", a: "Nossa clínica fica no CLSW 300 A, Edifício Belas Artes, Loja 10, no bairro Sudoeste, em Brasília - DF." },
      { q: "O que é o Ultraformer MPT?", a: "É a tecnologia mais moderna de ultrassom micro e macrofocado. Ele atua na firmeza da pele, efeito lifting não cirúrgico e destruição de gordura localizada, tanto facial quanto corporal." },
      { q: "Os preenchimentos e harmonizações ficam artificiais?", a: "De forma alguma! Nossa filosofia de trabalho é baseada na naturalidade. O objetivo é sempre realçar seus pontos fortes e trazer jovialidade, mantendo os traços que fazem de você quem você é." },
      { q: "Como faço para entrar no Grupo VIP?", a: "Você pode clicar no link disponível na nossa bio do Instagram ou solicitar o acesso diretamente pelo nosso WhatsApp para receber todas as ofertas em primeira mão." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "CLSW 300 A, Ed. Belas Artes", value2: "Loja 10" },
    box2: { title: "Localização", value1: "Sudoeste, Brasília - DF", value2: "CEP: 70673-006" },
    box3: { title: "Especialidades", value1: "Harmonização, Botox", value2: "Ultraformer e Glúteo" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A sua melhor versão",
    title2: "espera por você.",
    desc: "Agende sua avaliação. Venha viver a experiência MF Beauty e descubra protocolos exclusivos de estética avançada para o seu rosto e corpo.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossos resultados",
    box3_desc2: "@mfbeauty.bsb"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "MF Beauty | Estética Avançada e Harmonização Facial no Sudoeste. Tecnologia e sofisticação para realçar a sua beleza natural.",
    title_tratamentos: "Procedimentos",
    title_contato: "Contato",
    direitos: "© 2026 MF Beauty. Todos os direitos reservados.",
    registro: "Sudoeste — Brasília, DF"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos e Resultados",
    title1: "Resultados com",
    title2: "sofisticação.",
    p1: "Confira a transformação das nossas pacientes através da ",
    p_bold1: "Estética Avançada",
    p2: ". Valorizamos a",
    p_bold2: "naturalidade e a simetria",
    p3: "em cada detalhe dos nossos procedimentos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Harmonização Facial", 
        duration: "Botox e Preenchimento", 
        complaint: "Perda de contorno facial e surgimento de linhas de expressão severas.", 
        procedure: "Aplicação estratégica de toxina botulínica e preenchedores de ácido hialurônico devolvendo a jovialidade.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Tecnologia", 
        duration: "Ultraformer MPT", 
        complaint: "Flacidez acentuada no terço inferior do rosto e papada.", 
        procedure: "Sessão de Ultraformer MPT promovendo ancoragem muscular, lifting sem cortes e firmeza na pele.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Estética Corporal", 
        duration: "Harmonização Glútea", 
        complaint: "Falta de projeção e flacidez na região glútea.", 
        procedure: "Protocolo com bioestimuladores de colágeno promovendo volumização, sustentação e melhora no contorno.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Qualidade da Pele", 
        duration: "Tratamento de Melasma", 
        complaint: "Manchas escuras resistentes e textura de pele irregular.", 
        procedure: "Protocolo clareador profundo aliado a microagulhamento, garantindo uma pele uniforme e iluminada.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};