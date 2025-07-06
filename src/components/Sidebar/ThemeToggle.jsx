// ThemeToggle.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";
// import { v } from "../../styles/Variables";


const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 0.5rem;
  width: 100%;
  
  /* margin: 10px 10px; */

  .label {
    font-size: 14px;
    font-weight: 600;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.checkbox};
      transition: background-color 0.4s;
      border-radius: 34px;
      &::before{
      content: "";
      position: absolute;
      height: 22px;
      width: 22px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 50%;
      }
    }
    input:checked + .slider::before {
        transform: translateX(24px);
    }        
  }
`;


export const ThemeToggle = ({ isOpen }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToggleWrapper isOpen={isOpen}>
      {isOpen && <span className="label">Modo oscuro</span>}
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </ToggleWrapper>
  );
};

