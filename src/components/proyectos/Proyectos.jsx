import { Link } from "react-router-dom";
import styled from "styled-components";


const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  border-radius: 20px;
  padding: 1.8rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background 0.3s ease;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(18px);
  box-shadow: ${({ theme }) => theme.cardShadow};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 55px rgba(5, 0, 20, 0.45);
    background: ${({ theme }) => theme.surfaceHover};
  }
`;

const CardHeader = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
  font-size: 1.4rem;
`;

const CardImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;


const AddButton = styled.button`
  margin-top: 1rem;
  background: ${({ theme }) => theme.accentGradient};
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(168, 85, 247, 0.35);
  }
`;
const PopMsg = styled.span`
  margin-top: 0.6rem;
  display: inline-block;
  background-color: rgba(192, 132, 252, 0.15);
  color: ${({ theme }) => theme.accent};
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  animation: fadePop 1.5s ease-out;

  @keyframes fadePop {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    10% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const Parrafo = styled.p`
  color: ${({ theme }) => theme.textsecondary};
  line-height: 1.6;
`;


function Proyectos({ proyecto }) {

    if(!proyecto) {
        return <p style={{ color: "#c084fc", textAlign: "center"}}>Proyecto no disponible</p>
    }
  const { id, name, img, descripcion } = proyecto;

  
  return (
    <Card>
      <CardLink to={`/proyectos/${id}`}>
        <CardHeader>{name}</CardHeader>
        <CardImage src={img} alt={name} />        
        <Parrafo>{descripcion} </Parrafo>
      </CardLink>    
    </Card>
  );
}

export default Proyectos;
