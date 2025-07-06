import styled from "styled-components"

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  width: 52.5%;
  height: 60px;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transform: translateX(-50%);
  transition: transform 0.4s ease-in-out;

  &.nav-visible {
    transform: translateY(0) translateX(-50%);
  }

  &.nav-hidden {
    transform: translateY(-100%) translateX(-50%);
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
  padding: 5px 15px;
  border-radius: 10px;

  /* &:hover {
     background: linear-gradient(45deg, #4f1919, #ff3333);
     border-radius: 10px;
  } */

  /* &:active {
    background: linear-gradient(45deg, #4f1919, #ff3333);
     border-radius: 10px;    
  } */

`

export const Anchor = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  padding: 15px 23px;
  transition: 0.3s ease all;

  &.active {
    background: linear-gradient(45deg, #4f1919, #ff3333);
    border-radius: 10px;    
  }

  @media (max-width: 768px) {
    span {display: none;}
    padding: 15px 0.5rem;    
  }
`

export const Highlight = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 100%;
  background: linear-gradient(45deg, #4f1919, #ff3333);
  border-radius: 8px;
  transition: 0.5s ease-in-out;

  /* Agregá lógicas condicionales con props si después querés hacer dinámica su posición */
`