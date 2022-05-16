import { ProfileProps } from "../../types/profile";

export const profileMock: ProfileProps = {
  name: "Alan Lima",
  email: "alanronison.lima@gmail.com",
  phone: "(61) 99835-3009",
  github: "",
  linkedin: "",
  certificates: [],
  personalProjects: [],
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
    { title: "App Banco do Brasil", description: "Aplicativo oficial do BB" },
    {
      title: "App Sebrae DF",
      description: "Aplicativo para pequenas e médias empresas",
    },
    {
      title: "Navega Consultoria",
      description: "Aplicativo para Cooperativas de Crédito",
    },
    {
      title: "CoopSenha",
      description: "Aplicativo para emissão de senhas de atendimento",
    },
    {
      title: "Spring Global",
      description: "Aplicativo para lojística de grandes empresas",
    },
  ],
  address: {
    city: "Goiânia",
    state: "GO",
  },
  about:
    "Sou um grande entusiasta do mundo da programação e estou sempre em busca de agregar conhecimentos e experiências que sejam relevantes para minha carreira. Dedicação se enquadra como um dos meus principais adjetivos. Sempre ativo, atento aos detalhes e criativo no ambiente de trabalho, me esforço para dar o melhor de mim nos projetos em que participo. O que me move é a possibilidade constante de adquirir mais conhecimentos e compartilhá-los em equipe. Tenho como Hobby o estudo de UI/UX e acho magnífico como layouts bem desenhados e interações bem definidas podem influenciar e engajar os usuários e alavancar as aplicações de software.",
};
