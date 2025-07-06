import { FiHome } from "react-icons/fi";

import { FaFolderOpen, FaTools } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export const mainLinksNavbar = [
  { label: "Home", icon: <FiHome />, to: "/" }, 
  { label: "Proyectos", icon: <FaFolderOpen />, to: "/proyectos" },
  {label:"Service", icon: <FaTools/>, to:"/service"},
  {label:"Contact", icon: <MdMessage/>, to:"/contact"}
  // {label:"About", icon: <FaLinkedin />}
];