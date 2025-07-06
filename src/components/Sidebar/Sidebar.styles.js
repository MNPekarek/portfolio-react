// Sidebar.styles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { v } from "../../styles/Variables";

export const Containerr = styled.div`
  width: ${({ className }) => (className === "open" ? "300px" : "90px")};
  min-height: 100vh;
  background: ${({ theme }) => theme.bgSidebarMaty};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-height: 600px) {
    overflow-y: auto;
  }
`;

export const Logo = styled.div`
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  margin-left: 1rem;
  padding-left: 0;

  img{
    width: 60px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  padding: 5px 10px;
`;

export const LinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 15px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: transparent;

  span {
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    transition: all 0.3s ease;
  }

  .icon {
    font-size: 18px;
  }

  &:hover {
    
    background: linear-gradient(45deg, #4f1919, #ff3333);
  }
`;
// background: ${({ theme }) => theme.bg3};

export const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  /* margin-bottom: 10px; */
  padding-left: 10px;
  color: red; 
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
  overflow: hidden;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.3s ease;
`;
// color: ${({ theme }) => theme.textsoft}

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.bg3};
  margin: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
  /* margin: 20px 0; */
  border-radius: 1px;
`;

// opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
// visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
// height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
// overflow: hidden;
// transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
// transition: all 0.3s ease;

// &:hover{
//   background: rgba(255, 255, 255, 0.01);
// }

// @media (max-width: 768px) {
//   font-size: 0.95rem;
//   padding: ${({ isOpen }) => (isOpen ? "0.8rem" : "0")};
// }
