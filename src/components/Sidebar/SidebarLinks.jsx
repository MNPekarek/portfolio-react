// SidebarLinks.js
import { FiHome } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { FaLinkedin, FaMedal, FaCog, FaGithubSquare, FaFolderOpen } from "react-icons/fa";


export const mainLinks = [
  // { label: "Home", icon: <FiHome />, to: "/" },
  { label: "Certificados", icon: <FaMedal />, to: "/certificados" },
  { label: "Proyectos", icon: <FaFolderOpen />, to: "/proyectos" },
  {label:"GitHub", icon: <FaGithubSquare />, to:"https://github.com/MNPekarek", external: true},
  {label:"Linkedin", icon: <FaLinkedin />, to:"https://www.linkedin.com/in/matias-nicolas-pekarek-14597b281", external: true}

];

export const secondaryLinks = [
  { label: "Configuración", icon: <FaCog />, to: "/null" },
  { label: "Salir", icon: <ImExit />, to: "/null" },
];
