import styled from "styled-components"

export const Nav = styled.nav`
  position: fixed;
  top: 1rem;
  left: 50%;
  width: 52.5%;
  height: 60px;
  background: ${({ theme }) => theme.navGlass};
  backdrop-filter: blur(22px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transform: translateX(-50%);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease;

  &.nav-visible {
    transform: translateY(0) translateX(-50%);
  }

  &.nav-hidden {
    transform: translateY(-100%) translateX(-50%);
  }

  @media (max-width: 768px) {
    width: 88%;
    top: 0.75rem;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;

  @media (max-width: 768px) {
    padding-left: 4rem;
  }
`

export const Li = styled.li`
  position: relative;
  z-index: 1;
  padding: 5px 12px;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Anchor = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 10px;
  transition: 0.3s ease all;

  &.active {
    background: ${({ theme }) => theme.accentGradient};
    box-shadow: 0 12px 30px rgba(168, 85, 247, 0.35);
    color: #fff;
  }

  &:hover {
    background: ${({ theme }) => theme.accentSoft};
    color: #fff;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
    padding: 12px 0.5rem;
  }
`

export const Highlight = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 100%;
  background: ${({ theme }) => theme.accentGradient};
  border-radius: 12px;
  transition: 0.5s ease-in-out;

  /* Agregá lógicas condicionales con props si después querés hacer dinámica su posición */
`