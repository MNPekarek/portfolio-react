// Sidebar.jsx
import React from "react";
import {
  Containerr,
  Logo,
  LinksContainer,
  LinkItem,
  Title,
  Divider,
} from "./Sidebar.styles";
import { mainLinks } from "./SidebarLinks.jsx";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../../assets/Logo22.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";



export const SidebarDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textsoft};
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ $isOpen }) => ($isOpen ? "1rem 1.2rem" : "0")};
  border-left: ${({ $isOpen }) => ($isOpen ? "3px solid #ff0000 " : "none")};
  border-radius: 8px;
  margin-top: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
  overflow: hidden;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.01);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: ${({ $isOpen }) => ($isOpen ? "0.8rem" : "0")};
  }
`;

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const handleClick = () => setSidebarOpen(!sidebarOpen);

  return (
    <Containerr className={sidebarOpen ? "open" : ""}>
      <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
        <Logo onClick={handleClick}>
          <img src={logo} alt="" />
        </Logo>

        <Title $isOpen={sidebarOpen}>Matías Nicolas Pekarek</Title>
      </div>

      <SidebarDescription $isOpen={sidebarOpen}>
        Frontend Developer creativo Experto en diseño responsivo, animaciones
        con Framer Motion y componentes escalables con styled-components. Uso
        React, Context, rutas, SCSS, APIs, Firebase, Cloudinary y más.
        Aprendiendo backend con MongoDB, REST, Express. Explorando soluciones
        que conecten código con experiencia.
      </SidebarDescription>

      <Divider $isOpen={sidebarOpen} />

      <LinksContainer>
        {/* <Title isOpen={sidebarOpen}>Menú</Title> */}
        {mainLinks.map(({ label, icon, to, external }) => (
          <LinkItem key={label} to={to} $isOpen={sidebarOpen}
           as={external ? 'a' : Link}
           href={external ? to : undefined}
           target={external ? '_blank' : undefined}
           rel={external ? 'noopener noreferrer' : undefined}
           >
            <div className="icon">{icon}</div>
            <span>{label}</span>
          </LinkItem>
        ))}

        <ThemeToggle $isOpen={sidebarOpen} />

        {/* {secondaryLinks.map(({ label, icon, to }) => (
          <LinkItem key={label} to={to} isOpen={sidebarOpen}>
            <div className="icon">{icon}</div>
            <span>{label}</span>
          </LinkItem>
        ))} */}
      </LinksContainer>
    </Containerr>
  );
};

export default Sidebar;
