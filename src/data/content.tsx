import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Sorrivem Odontologia",
    subtitulo: "Seu Sorriso. Nossa Prioridade.",
    logoUrl: "/imagens/logo.png", // Mantido o seu caminho original local
    contato: {
      whatsappUrl: "https://wa.me/5511991000737?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+Sorrivem.", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(11) 2427-5957 / (11) 99100-0737",
      emailLabel: "contato@sorrivem.com.br",
      instagramLabel: "@sorrivem.odontologia",
    },
    endereco: {
      bairroCidade: "Alvinópolis, Atibaia - SP",
      edificio: "Clínica Sorrivem",
      detalhado: "Av. Dona Gertrudes, 552\nAlvinópolis\nAtibaia - SP, 12942-540",
      comodidades: ["Prótese e Implantes", "Ortodontia", "Endodontia", "Estética Facial"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Sorrivem+Odontologia+Atibaia",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7338.675012210004!2d-46.576571906420895!3d-23.1213356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec187f5878acd%3A0x7e7b3f9c391c19b0!2sSorrivem%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1789151066315!5m2!1spt-BR!2sbr"
    },
    horarios: "Atendimento de Segunda a Sexta\nEncerra às 19:00",
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
    eyebrow: "Alvinópolis — Atibaia, SP",
    title1: "O seu sorriso",
    title2: "merece o",
    title3: "melhor.",
    desc1: "Acreditamos que cuidar da sua saúde bucal é cuidar da sua qualidade de vida.",
    descBold: " Seu Sorriso. Nossa Prioridade.",
    desc2: " Somos uma clínica multidisciplinar pronta para atender todas as necessidades da sua família em um só lugar.",
    btnPrimary: "Agende sua avaliação",
    btnOutline: "Nossos Tratamentos",
    badgeTitle: "Sorrivem",
    badgeDesc: "Odontologia Integrada",
    stats: [
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
      { target: 57, suffix: "+", label: "avaliações reais", thousands: false },
      { target: 100, suffix: "%", label: "foco em você", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Sorrivem",
    title1: "Seu Sorriso.",
    title2: "Nossa",
    title3: "Prioridade.",
    p1: "Localizada em Atibaia-SP, a Sorrivem Odontologia foi construída com um único objetivo: oferecer uma odontologia completa, ética e de altíssima qualidade para você e sua família.",
    p2_1: "Comandada por especialistas, e com ",
    p2_bold: "Responsabilidade Técnica da Dra. Luciana R. L. Felicio (CRO/SP 57494),",
    p2_2: " nossa clínica dispõe de todas as áreas da odontologia. Da estética facial aos implantes, garantimos um tratamento integrado e seguro.",
    topics: [
      { title: "Odontologia Completa", desc: "Todas as especialidades em um só lugar: Prótese, Implantes, Ortodontia e Endodontia." },
      { title: "Estética e Harmonização", desc: "Além de cuidar dos seus dentes, oferecemos Estética Facial para harmonizar o seu sorriso." },
      { title: "Atendimento Humanizado", desc: "Acolhemos nossos pacientes de forma atenciosa, garantindo conforto e reduzindo a ansiedade." },
      { title: "Segurança Profissional", desc: "Equipe técnica altamente qualificada para diagnosticar e tratar casos de alta complexidade." },
    ],
    btn: "Quero conhecer a clínica",
    gallery: [
      { url: "/imagens/hero.png", title: "Cuidado Integrado" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80", title: "Odontologia Moderna" },
      { url: "/imagens/leve.png", title: "Sorrisos Perfeitos" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS E PROCEDIMENTOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Nossas Especializações",
    title1: "Excelência em",
    title2: "cada área.",
    desc1: "A Sorrivem oferece uma equipe focada em ",
    descBold: "múltiplas especialidades odontológicas",
    desc2: ", garantindo que o seu tratamento seja sempre conduzido pelo profissional mais qualificado.",
    btn: "Ver todas as especializações",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantodontia e Prótese", desc: "Devolvemos a segurança ao mastigar e a beleza do seu sorriso com implantes duradouros e próteses fixas e móveis." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Ortodontia", desc: "Alinhamento e correção da mordida através de aparelhos ortodônticos modernos, trazendo função e estética." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Dentística e Periodontia", desc: "Cuidamos da saúde da sua gengiva (Periodontia) e da estética restauradora dos dentes com resinas de alta performance." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Endodontia", desc: "Tratamento de canal seguro, confortável e indolor, focado em salvar o seu dente e eliminar infecções." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Estética Facial", desc: "Procedimentos estéticos voltados para o rejuvenescimento e harmonização, emoldurando perfeitamente o seu novo sorriso." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Atendimento Clínico Geral", desc: "Prevenção, profilaxia (limpeza profunda) e check-ups completos para toda a família." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO / ESPECIALISTAS
  // ---------------------------------------------------
  team: {
    title: "Corpo Clínico",
    members: [
      { name: "Dra. Luciana R. L. Felicio", cro: "CRO/SP 57494", specialty: "Responsável Técnica", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: A ESSÊNCIA E CAMPANHAS
  // ---------------------------------------------------
  convenios: {
    eyebrow: "O Cuidado Sorrivem",
    title1: "Tratamento",
    title2: "seguro e",
    title3: "integrado.",
    desc: "Acreditamos que a confiança é a base de um tratamento odontológico de sucesso. Nosso objetivo é fazer com que você tenha segurança em cada etapa do seu atendimento.",
    btn: "Agendar minha avaliação",
    list: [
      { title: "Diagnóstico Preciso", content: "Nossos profissionais avaliam a sua saúde bucal de forma global, identificando não apenas o problema, mas a causa raiz." },
      { title: "Múltiplas Especialidades", content: "Seja para colocar um implante, tratar um canal ou iniciar um tratamento ortodôntico, nós resolvemos tudo no mesmo lugar." },
      { title: "Estética e Função", content: "Um sorriso não precisa apenas ser bonito, ele precisa ser saudável. Nós unimos a Dentística e a Periodontia para resultados perfeitos." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "A Sorrivem Odontologia",
    title1: "Conforto e",
    title2: "tecnologia.",
    quote: "Nosso ambiente foi preparado para proporcionar o máximo de conforto para você e sua família.",
    supporting: "Nossos pacientes nos avaliam com 5.0 estrelas no Google. Conheça um pouco do nosso espaço no Alvinópolis, Atibaia.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Clínica Sorrivem" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop", alt: "Tratamento" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop", alt: "Equipe Odontológica" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop", alt: "Sorrisos Saudáveis" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "O Portfólio",
    title1: "O seu sorriso",
    title2: "merece o melhor.",
    p1: "Acreditamos na",
    p_bold1: "odontologia funcional e estética",
    p2: "capaz de devolver a sua autoestima e a sua qualidade de vida. Acompanhe a transformação clínica na nossa",
    p_bold2: "galeria de resultados",
    p3: "e descubra o padrão da Sorrivem Odontologia.",
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
      { q: "Onde a Sorrivem Odontologia está localizada?", a: "Nossa clínica fica na Avenida Dona Gertrudes, 552, no bairro Alvinópolis, em Atibaia - SP." },
      { q: "Quais especialidades a clínica atende?", a: "Oferecemos atendimento completo, cobrindo áreas como Prótese Dentária, Ortodontia, Periodontia, Implantodontia, Dentística, Endodontia e Estética Facial." },
      { q: "A clínica faz implantes dentários?", a: "Sim! Trabalhamos com a Implantodontia para substituir raízes e dentes perdidos, devolvendo a força para mastigar e a beleza do seu sorriso de forma definitiva." },
      { q: "Como agendar uma avaliação?", a: "É muito simples. Você pode nos chamar direto no WhatsApp pelo número (11) 99100-0737 ou ligar para o telefone fixo (11) 2427-5957." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Av. Dona Gertrudes, 552", value2: "Alvinópolis" },
    box2: { title: "Localização", value1: "Atibaia - SP", value2: "CEP: 12942-540" },
    box3: { title: "Especialidades", value1: "Implantes, Ortodontia", value2: "Estética Facial e Endodontia" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "A sua saúde no",
    title2: "lugar certo.",
    desc: "Agende sua avaliação na Sorrivem. Conte com a segurança de uma equipe completa para tratar do seu sorriso com todo o cuidado que ele merece.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe nossa rotina",
    box3_desc2: "@sorrivem.odontologia"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Sorrivem Odontologia | O seu sorriso merece o melhor! Clínica odontológica completa e multidisciplinar em Atibaia, SP.",
    title_tratamentos: "Especializações",
    title_contato: "Contato",
    direitos: "© 2026 Sorrivem Odontologia. Todos os direitos reservados. RT: Dra. Luciana R. L. Felicio CRO/SP 57494.",
    registro: "Alvinópolis — Atibaia, SP"
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
    p3: "em cada detalhe dos nossos tratamentos.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { 
        category: "Implantodontia", 
        duration: "Implantes Dentários", 
        complaint: "Ausência dentária causando dificuldade para mastigar alimentos e insegurança ao sorrir.", 
        procedure: "Instalação de implantes e prótese definitiva, recuperando totalmente a força mastigatória e o formato do sorriso.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Ortodontia", 
        duration: "Alinhamento Completo", 
        complaint: "Dentes desalinhados, dificuldade de higienização e encaixe incorreto da mordida.", 
        procedure: "Tratamento ortodôntico seguro, resultando no alinhamento ideal, facilitando a limpeza e melhorando a simetria facial.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Odontologia Clínica", 
        duration: "Endodontia", 
        complaint: "Dor severa e constante devido à cárie profunda afetando a estrutura interna (polpa) do dente.", 
        procedure: "Tratamento de canal executado por especialista, eliminando a dor e salvando a estrutura dental remanescente.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      },
      { 
        category: "Dentística e Prevenção", 
        duration: "Clareamento e Limpeza", 
        complaint: "Dentes amarelados pelo tempo e acúmulo de placa bacteriana ao longo da margem gengival.", 
        procedure: "Profilaxia rigorosa para promover a saúde da gengiva e protocolo de clareamento estético.", 
        beforeImg: "/imagens/branco.png", 
        afterImg: "/imagens/preto.png"    
      }
    ]
  }
};