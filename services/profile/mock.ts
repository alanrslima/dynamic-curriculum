import { ProfileProps } from "../../types/profile";

export const profileMock: ProfileProps = {
  name: "Alan Lima",
  email: "alanronison.lima@gmail.com",
  phone: "(61) 99835-3009",
  github: "",
  linkedin: "",
  certificates: [
    {
      image: "/images/certificado-colaboracao-cooper.png",
      title: "Profissional que mais colaborou",
      file: "/files/certificado-colaboracao-cooper.pdf",
    },
    {
      image: "/images/certificado-django-rest.jpeg",
      title: "Certificado Django REST",
      file: "/images/certificado-django-rest.jpeg",
    },
    {
      image: "/images/certificado-node.jpeg",
      title: "Certificado NodeJS",
      file: "/images/certificado-node.jpeg",
    },
    {
      image: "/images/certificado-react.jpeg",
      title: "Certificado ReactJS",
      file: "/images/certificado-react.jpeg",
    },
  ],
  personalProjects: [
    {
      title: "Animations",
      description: "Animações para React Native",
      link: "https://github.com/alanrslima/animations",
      flags: ["React Native", "Typescript"],
    },
    {
      title: "FAC",
      description: "Fundamentos de arquitetura de computadores",
      link: "https://github.com/alanrslima/2019.1-FAC",
      flags: ["Assembly"],
    },
    {
      title: "EDA",
      description: "Estrutura de Dados",
      link: "https://github.com/alanrslima/2018.2-EDA",
      flags: ["C"],
    },
    {
      title: "Twitter Clone",
      description:
        "Tela estática mobile first que simula a tela principal do Twitter",
      link: "https://github.com/alanrslima/2018.2-EDA",
      flags: ["React JS", "HTML", "CSS"],
    },
    {
      title: "Facebook Clone",
      description: "Tela feed do facebook Native IOS",
      link: "https://github.com/alanrslima/facebook-clone-swifty",
      flags: ["Swift"],
    },
    {
      title: "Todos os projetos",
      image: "/images/github.png",
      description:
        "Clique aqui para acessar todos meus projetos públicos no GitHub",
      link: "https://github.com/alanrslima?tab=repositories",
    },
  ],
  profession: "Software Developer",
  skills: [
    { name: "React Native", pontuation: 5 },
    { name: "React JS", pontuation: 5 },
    { name: "Node JS", pontuation: 4 },
    { name: "Orientação a objetos", pontuation: 4 },
    { name: "Python", pontuation: 3 },
    { name: "Git", pontuation: 4 },
    { name: "Java Script", pontuation: 4 },
    { name: "CSS", pontuation: 4 },
    { name: "Html", pontuation: 5 },
    { name: "Docker", pontuation: 3 },
    { name: "Database", pontuation: 4 },
    { name: "Figma", pontuation: 4 },
  ],
  professionalProjects: [
    {
      title: "App Banco do Brasil",
      description: "Aplicativo oficial do BB",
      image: "/images/bb.png",
      link: "https://play.google.com/store/apps/details?id=br.com.bb.android&hl=pt",
    },
    {
      title: "App Sebrae DF",
      description: "Aplicativo para pequenas e médias empresas",
      image: "/images/sebrae.jpeg",
      link: "https://play.google.com/store/apps/details?id=br.com.sebrae.napalmadamao&hl=pt",
    },
    {
      title: "Navega Consultoria",
      description: "Aplicativo para Cooperativas de Crédito",
      image: "/images/navega.png",
      link: "https://play.google.com/store/apps/details?id=com.navega10&hl=pt",
    },
    {
      title: "CoopSenha",
      description: "Aplicativo para emissão de senhas de atendimento",
      image: "/images/coopsenha.png",
      link: "https://play.google.com/store/apps/details?id=com.coopsenha&hl=pt",
    },
    {
      title: "Spring Global",
      description: "Aplicativo para lojística de grandes empresas",
      image: "/images/spring.jpeg",
      link: "https://www.springglobal.com/",
    },
    {
      title: "Feed BBB",
      description: "Aplicação de Feed Do Big Brother Brasil",
      image: "/images/rede-bbb.jpeg",
      flags: ["Privado"],
    },
  ],
  address: {
    city: "Goiânia",
    state: "GO",
  },
  experiences: [
    {
      position: "Developer II",
      company: "Rede Globo",
      activities: [
        "Participação no time de desenvolvimento responsável pela tecnologia da casa do Big Brother Brasil",
        "Desenvolvimento da aplicação Feed BBB, utilizada pelos brothers para atividades cotidianas no reality, como gravações de storys, selfies, gravação de podcasts",
        "Desenvolvimento de soluções de tecnologia para programas / eventos / realitys da Rede Globo",
        "Atuação no desenvolvimento da plataforma de automatização de merchandise DPP.",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Spring Global",
      activities: [
        "Participação na equipe de desenvolvimento do Spring Pay (Plataforma de pagamentos Spring)",
        "Participação no desenvolvimento de novas feature e correções de bugs em módulos Surveys e Command Center (Painéis de controle dinâmicos e customizáveis para cada cliente)",
        "Experiência com times internacionais",
      ],
    },
    {
      position: "Analista de desenvolvimento Mobile",
      company: "CooperSystem",
      activities: [
        "Atuação no desenvolvimento no aplicativo do Banco do Brasil",
        "Desenvolvimento do módulo de Seguros Residenciais da BrasilSeg dentro do aplicativo do BB",
        "Implementação de testes automatizados",
        "Mapeamento e implementação de serviços GRAFENO (Back-end JAVA)",
      ],
    },
    {
      position: "Desenvolvedor Mobile",
      company: "Sebrae - DF",
      activities: [
        "Desenvolvimento do aplicativo oficial do Sebrae-DF direcionada para pequenos e médios empresários.",
        "Desenvolvimento do aplicativo oficial Sebrae Agro, com foco no agronegócio",
      ],
    },
    {
      position: "Full-Stack Developer",
      company: "Navega Consultoria",
      activities: [
        "Desenvolvimento do aplicativo Navega Consultoria, utilizado para gerenciamento de cooperativas de crédito",
        "Desenvolvimento do aplicativo CoopSenha que tem como finalidade a emissão de senhas de atendimento de forma online",
        "Desenvolvimento de módulos desktop da aplicação principal de gerenciamento da Navega Consultoria",
        "Protipação de aplicações utilizado o Figma",
        "Desenvolvimento de BackEnd e criação de projetos de banco de dados",
      ],
    },
  ],
  educations: [
    {
      position: "Graduação Engenharia de Software",
      company: "Universidade de Brasília (UnB)",
      activities: ["2/3 da graduação completados."],
    },
    {
      position: "Ensino Médio",
      company: "Colégio Franciscano Regina Pacis",
      activities: ["Ensino médio completo, cursado em Minas Gerais."],
    },
    {
      position: "Curso de inglês",
      company: "Wizard Idiomas",
      activities: ["Conhecimento intermediário em inglês."],
    },
  ],
  about:
    "Sou um grande entusiasta do mundo da programação e estou sempre em busca de agregar conhecimentos e experiências que sejam relevantes para minha carreira. Dedicação se enquadra como um dos meus principais adjetivos. Sempre ativo, atento aos detalhes e criativo no ambiente de trabalho, me esforço para dar o melhor de mim nos projetos em que participo. O que me move é a possibilidade constante de adquirir mais conhecimentos e compartilhá-los em equipe. Tenho como Hobby o estudo de UI/UX e acho magnífico como layouts bem desenhados e interações bem definidas podem influenciar e engajar os usuários e alavancar as aplicações de software.",
};
