import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/matias-negrelli/",
  },
  {
    id: 5,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:matiasnegrelli2004@gmail.com",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Ingeniería en Sistemas de Información",
    subtitle: "UTN – Córdoba",
    description:
      "Cursando 4° año con excelente rendimiento académico. Formación integral en programación, bases de datos, arquitectura de software, y resolución de problemas complejos.",
    date: "2022–Act.",
  },
  {
    id: 2,
    title: "Curso Desarrollo Web",
    subtitle: "CoderHouse",
    description:
      "Formación intensiva en desarrollo frontend con HTML, CSS, JavaScript y herramientas modernas como Bootstrap y Git.",
    date: "Ene–May 23",
  },
  {
    id: 3,
    title: "Bachiller en Economía",
    subtitle: "Corazón de María",
    description:
      "Formación secundaria orientada en economía, administración y contabilidad, con base en herramientas informáticas.",
    date: "2015–21",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 4,
    text: "Año actual de la carrera ingenieria en sistemas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 20,
    text: "Proyectos académicos y personales",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 15,
    text: "Tecnologías dominadas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Materias aprobadas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades.",
  },
  {
    icon: <Rocket />,
    title: "Desarrollo de software",
    description:
      "Construcción de aplicaciones robustas y escalables, desde el análisis hasta la implementación.",
  },
  {
    icon: <Book />,
    title: "Análisis funcional",
    description:
      "Análisis de requerimientos para definir soluciones alineadas a los objetivos del negocio.",
  },
  {
    icon: <Crop />,
    title: "Arquitectura de software",
    description:
      "Diseño de estructuras lógicas y organizadas para proyectos, priorizando escalabilidad y modularidad.",
  },
  {
    icon: <Pencil />,
    title: "Testing y QA",
    description:
      "Ejecución de pruebas manuales y control de calidad para garantizar el correcto funcionamiento del software.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "TuUni",
    image: "/TuUni.png",
    urlGithub: "https://github.com/Teaaaa04/TuUniRW",
    urlDemo: "https://tuuni.netlify.app/",
  },
  {
    id: 2,
    title: "Portafolio de CM",
    image: "/PortafolioCM.png",
    urlGithub: "https://github.com/Teaaaa04/TuUniRW",
    urlDemo: "https://portafolio-sofia-trifoglio.vercel.app/",
  },
  {
    id: 3,
    title: "NailsRoxyy",
    image: "/NailsRoxyy.jpg",
    urlGithub: "https://github.com/MatiasNegrelli/NailsRoxyy#",
    urlDemo: "https://nails-roxyy.vercel.app/",
  },
];
