import { CSSProperties } from "react";
import { Smile, Sparkles, Shield, Users, CheckCircle, Heart } from "lucide-react";

export const serif: CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const globalData = {
  // ---------------------------------------------------
  // DADOS GERAIS DA CLÍNICA
  // ---------------------------------------------------
  clinica: {
    nome: "Aldo & Erika Bezerra",
    subtitulo: "Sorriso para a vida",
    logoUrl: "/imagens/logo.png", // Salve a logo oficial deles com esse nome
    contato: {
      whatsappUrl: "https://wa.me/5581987868666", 
      whatsappLabel: "Agendar pelo WhatsApp",
      telefoneLabel: "(81) 98786-8666",
      emailLabel: "contato@clinicaaldobezerra.com.br",
      instagramLabel: "@clinicaaldoeerikabezerra",
    },
    endereco: {
      bairroCidade: "Boa Viagem, Recife - PE",
      edificio: "Empresarial Ítalo Brasil Renda",
      detalhado: "Av. Conselheiro Aguiar, 1748 - Sala 907\nEmpresarial Ítalo Brasil Renda\nBoa Viagem, Recife - PE, 51111-010",
      comodidades: ["Implantes Dentários (Carga Imediata)", "Pagamento em até 18x sem juros", "Scanner iTero e Raio-X Digital"],
      mapaGpsUrl: "https://maps.app.goo.gl/search/Clinica+Aldo+Erika+Bezerra+Recife",
      mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63209.83234381271!2d-34.97575425136714!3d-8.038618199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f0c3c2a8d75%3A0xd84ad8fe85ab50a3!2sCl%C3%ADnica%20Aldo%20%26%20Erika%20Bezerra!5e0!3m2!1spt-BR!2sbr!4v1788367625424!5m2!1spt-BR!2sbr"
    },
    horarios: "Aberto de Segunda a Sexta\nEncerra às 18:00",
  },

  nav: {
    links: ["A Clínica", "Especialidades", "Facilidades", "Estrutura", "Contato"],
    ids: ["sobre", "/especialidades", "convenios", "resultados", "contato"]
  },

  // ---------------------------------------------------
  // SEÇÃO: HERO
  // ---------------------------------------------------
  hero: {
    imgUrl: "/imagens/hero.png", // Sugestão: A foto do Dr. Aldo com o jaleco azul
    eyebrow: "Boa Viagem — Recife, PE",
    title1: "Tradição,",
    title2: "tecnologia e",
    title3: "excelência.",
    desc1: "Com mais de",
    descBold: "35 anos de experiência clínica,",
    desc2: " unimos atendimento humanizado e técnicas avançadas para transformar seu sorriso com segurança e previsibilidade.",
    btnPrimary: "Agendar minha consulta",
    btnOutline: "Conhecer tratamentos",
    badgeTitle: "Referência",
    badgeDesc: "Implantodontia e Reabilitação",
    stats: [
      { target: 50, suffix: "k+", label: "atendimentos realizados", thousands: false },
      { target: 35, suffix: "", label: "anos de experiência", thousands: false },
      { target: 5, suffix: ".0", label: "estrelas no google", thousands: false },
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SOBRE NÓS
  // ---------------------------------------------------
  about: {
    eyebrow: "A Clínica",
    title1: "Autoridade médica",
    title2: "para o seu sorriso.",
    p1: "Localizada em Boa Viagem, a Clínica Aldo & Erika Bezerra une tradição, tecnologia de ponta e um atendimento verdadeiramente humanizado para devolver a sua qualidade de vida.",
    p2_1: "Comandada pelo ",
    p2_bold: "Dr. Aldo Bezerra",
    p2_2: " (Mestre, Prof. da UPE e Cirurgião Buco Maxilo há 31 anos) e pela Dra. Erika Bezerra (Odontopediatra e Ortodontista), nossa equipe garante excelência desde implantes indolores até alinhadores modernos.",
    topics: [
      { title: "Implantes de Carga Imediata", desc: "Procedimentos indolores e rápidos para devolver estética e função mastigatória em tempo recorde." },
      { title: "Ortodontia Moderna", desc: "Alinhadores ortodônticos discretos, confortáveis e totalmente personalizados com scanner iTero." },
      { title: "Tecnologia Odontológica", desc: "Contamos com Radiografia Digital e Laser para Clareamento Dental na própria estrutura." },
      { title: "Cirurgia Oral Menor", desc: "Experiência de mais de 3 décadas em extração de dentes inclusos e procedimentos cirúrgicos." },
    ],
    btn: "Quero agendar uma avaliação",
    gallery: [
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&fit=crop", title: "Tecnologia de Ponta" },
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", title: "Atendimento Humanizado" },
      { url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80&fit=crop", title: "Segurança Cirúrgica" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: SERVIÇOS
  // ---------------------------------------------------
  services: {
    eyebrow: "Especialidades",
    title1: "Nossos",
    title2: "Procedimentos.",
    desc1: "Do diagnóstico à reabilitação total, entregamos ",
    descBold: "resultados indolores e rápidos",
    desc2: " com técnicas dominadas por professores universitários e especialistas.",
    btn: "Ver todas especialidades",
    list: [
      { icon: <Shield size={28} strokeWidth={1.2} />, title: "Implantes Dentários", desc: "O procedimento ideal, rápido e indolor para quem perdeu um ou mais dentes e quer voltar a sorrir e mastigar com segurança." },
      { icon: <Sparkles size={28} strokeWidth={1.2} />, title: "Lentes de Contato em Porcelana", desc: "Lâminas ultrafinas que renovam completamente a aparência, forma e cor do seu sorriso." },
      { icon: <CheckCircle size={28} strokeWidth={1.2} />, title: "Alinhadores Ortodônticos", desc: "Tratamentos modernos e confortáveis para o alinhamento dos dentes, conduzidos pela Dra. Erika Bezerra." },
      { icon: <Smile size={28} strokeWidth={1.2} />, title: "Limpeza e Clareamento a Laser", desc: "Remoção de manchas e conquista da coloração branco-leitoso de forma segura e com tecnologia a laser." },
      { icon: <Heart size={28} strokeWidth={1.2} />, title: "Cirurgias Buco Maxilo", desc: "Cirurgias de dentes inclusos e procedimentos avançados com um especialista atuante há mais de 31 anos em hospitais." },
      { icon: <Users size={28} strokeWidth={1.2} />, title: "Próteses e Periodontia", desc: "Tratamento de gengivas e confecção de próteses fixas e móveis para restabelecimento total da saúde bucal." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CORPO CLÍNICO
  // ---------------------------------------------------
  team: {
    title: "Direção Clínica",
    members: [
      { name: "Dr. Aldo Bezerra", cro: "Mestre em Implantodontia", specialty: "Cirurgião Buco Maxilo", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format" },
      { name: "Dra. Erika Bezerra", cro: "Mestre e Especialista", specialty: "Odontopediatria e Ortodontia", img: "https://images.unsplash.com/photo-1594824432258-2da8b78a0827?w=400&h=500&fit=crop&auto=format" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: FACILIDADES (Substituindo o texto antigo)
  // ---------------------------------------------------
  convenios: {
    eyebrow: "Facilidades Exclusivas",
    title1: "O seu implante",
    title2: "nunca foi",
    title3: "tão acessível.",
    desc: "Acreditamos que a saúde não pode esperar. Por isso, preparamos condições de pagamento exclusivas para que você realize o seu tratamento com as melhores formas do mercado.",
    btn: "Peça o orçamento do seu implante",
    list: [
      { title: "Parcelamento em até 18x", content: "Realize o pagamento do seu tratamento em até 18 vezes sem juros em todos os cartões de crédito." },
      { title: "Entrada Facilitada de 30%", content: "Pague apenas 30% de entrada e parcele o restante de forma flexível, combinada diretamente com a nossa equipe." },
      { title: "Transparência Total", content: "Sem letras miúdas. Você sabe exatamente quanto vai investir antes mesmo do procedimento começar." }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: DEPOIMENTOS / GALERIA DE FOTOS
  // ---------------------------------------------------
  testimonials: {
    eyebrow: "Estrutura",
    title1: "Tecnologia",
    title2: "de ponta a ponta.",
    quote: "Descubra a simplicidade e o conforto dos implantes com nossa abordagem moderna e indolor.",
    supporting: "Nossa tecnologia de ponta (Scanner iTero, Raio-X Digital, Laser) e equipe especializada garantem um processo tranquilo e sem longas esperas.",
    photos: [
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Tecnologia Odontológica" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Atendimento Clínico" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Estrutura da Clínica" },
      { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&auto=format", alt: "Tratamento Indolor" },
      { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&auto=format", alt: "Equipe Especializada" },
      { img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=1000&fit=crop&auto=format", alt: "Sorrisos Renovados" }
    ]
  },

  // ---------------------------------------------------
  // SEÇÃO: CTA PARA RESULTADOS
  // ---------------------------------------------------
  results_cta: {
    eyebrow: "Nossa Filosofia",
    title1: "Um sorriso para",
    title2: "a vida inteira.",
    p1: "Com",
    p_bold1: "mais de 50 mil atendimentos",
    p2: "ao longo de mais de 35 anos, nossa missão é garantir que a beleza e a funcionalidade do seu sorriso sejam",
    p_bold2: "restauradas de forma definitiva.",
    p3: "Dê o passo decisivo em direção a uma vida mais",
    p_bold3: "feliz e confiante.",
    btn: "Entre em contato conosco",
    imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
  },

  // ---------------------------------------------------
  // FAQ
  // ---------------------------------------------------
  faq: {
    title: "Dúvidas Frequentes",
    list: [
      { q: "O procedimento de implante dental dói?", a: "Não. A evolução da odontologia permite que nossos implantes sejam indolores. Nossa tecnologia de ponta e equipe especializada garantem um processo totalmente anestesiado e tranquilo." },
      { q: "O tratamento de implante é muito demorado?", a: "Nosso processo é otimizado para que você obtenha resultados em tempo recorde, minimizando interrupções no seu dia a dia. Inclusive, trabalhamos com protocolos de Carga Imediata quando indicado." },
      { q: "Como funcionam as formas de pagamento?", a: "Facilitamos ao máximo: oferecemos pagamento em até 18x sem juros em todos os cartões, ou 30% de entrada com o restante parcelado de forma combinada entre você e a clínica." },
      { q: "Qual a diferença entre Limpeza e Clareamento?", a: "A limpeza remove o tártaro e a placa bacteriana (foco na saúde). O clareamento, realizado com nosso Laser, retira manchas internas e dá uma coloração branco-leitoso aos dentes (foco na estética)." }
    ]
  },

  // ---------------------------------------------------
  // LOCALIZAÇÃO
  // ---------------------------------------------------
  location: {
    eyebrow: "Endereço &\nAcesso",
    box1: { title: "Endereço", value1: "Empresarial Ítalo Brasil Renda", value2: "Av. Conselheiro Aguiar, 1748 - Sala 907" },
    box2: { title: "Localização", value1: "Boa Viagem, Recife - PE", value2: "CEP: 51111-010" },
    box3: { title: "Especialidades", value1: "Implantes, Ortodontia,", value2: "Lentes e Buco Maxilo" },
    btn: "Abrir no Google Maps"
  },

  // ---------------------------------------------------
  // CONTATO FINAL
  // ---------------------------------------------------
  contact: {
    eyebrow: "Marque uma Avaliação",
    title1: "Precisando de um",
    title2: "implante?",
    desc: "Deixe o medo e as preocupações de lado. Agende sua avaliação com quem tem 35 anos de experiência formando dentistas e operando pacientes.",
    box1_title: "Endereço",
    box2_title: "Contato Rápido",
    box3_title: "Redes Sociais",
    box3_desc1: "Acompanhe a Clínica",
    box3_desc2: "@clinicaaldoeerikabezerra"
  },

  // ---------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------
  footer: {
    sobre: "Referência em Implantodontia, Buco Maxilo Facial e Ortodontia em Recife. Mais de 35 anos de dedicação técnica e científica aos nossos pacientes.",
    title_tratamentos: "Especialidades",
    title_contato: "Contato",
    direitos: "© 2026 Clínica Aldo & Erika Bezerra. Todos os direitos reservados. CNPJ: 21.512.300/0001-20. RT: Erika Bezerra, PE-CD-5080.",
    registro: "Boa Viagem — Recife, PE"
  },

  // ---------------------------------------------------
  // PÁGINA DE RESULTADOS
  // ---------------------------------------------------
  results_page: {
    eyebrow: "Casos Clínicos",
    title1: "Resultados com",
    title2: "excelência técnica.",
    p1: "Confira a evolução promovida pelo",
    p_bold1: "tratamento especializado",
    p2: " da Clínica Aldo & Erika. Unimos a experiência de um",
    p_bold2: "professor e mestre",
    p3: " para devolver sorrisos com previsibilidade e estética de alto nível.",
    btnSaberMais: "Agendar avaliação semelhante",
    btnVoltar: "Retornar à página inicial",
    cases: [
      { category: "Implante Dentário", duration: "Função e Estética", complaint: "Ausência dentária que dificultava a mastigação e causava grande desconforto social ao sorrir.", procedure: "Instalação de implante com pino de titânio de forma indolor e prótese sobre implante idêntica ao dente natural.", beforeImg: "/imagens/gengivo-antes.jpg", afterImg: "/imagens/gengivo-depois.jpg" },
      { category: "Protocolo de Carga Imediata", duration: "Reabilitação Total", complaint: "Uso de dentadura móvel, insegurança ao falar e restrições graves na alimentação.", procedure: "Tratamento com implantes e instalação de prótese fixa imediata, garantindo resultados rápidos e seguros.", beforeImg: "/imagens/alinhamento-antes.jpg", afterImg: "/imagens/alinhamento-depois.jpg" },
      { category: "Lentes de Contato em Porcelana", duration: "Estética Avançada", complaint: "Insatisfação severa com o formato, espaçamentos e cor dos dentes naturais.", procedure: "Planejamento digital e cimentação de lâminas ultrafinas de porcelana para uma renovação completa do sorriso.", beforeImg: "/imagens/lentes-antes.jpg", afterImg: "/imagens/lentes-depois.jpg" },
      { category: "Alinhadores Ortodônticos", duration: "Ortodontia Moderna", complaint: "Dentes apinhados em paciente adulto que recusava o uso de aparelhos metálicos tradicionais.", procedure: "Uso de alinhadores transparentes (invisíveis), garantindo total discrição, conforto e previsibilidade de tempo.", beforeImg: "/imagens/clareamento-antes.jpg", afterImg: "/imagens/clareamento-depois.jpg" }
    ]
  }
};