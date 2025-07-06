// src/modal/Modal.jsx
import styled from "styled-components";
import { IoCloseCircle } from "react-icons/io5"; // instalá react-icons si no lo tenés
import { useEffect } from "react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const Modal = ({ children, onClose }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "Escape") {
                onClose();
            }
        };
        
        document.addEventListener("Keydown", handleKeyDown);
        
        return () => {
            document.removeEventListener("Keydown", handleKeyDown);
        }
    }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoCloseCircle />
        </CloseBtn>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;