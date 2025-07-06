import { Link } from "react-router-dom";
import styled from "styled-components";


const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  /* background-color: #fefdf6; */
  border-radius: 12px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;
  text-align: center;
   color: ${({ theme }) => theme.text};

  &:hover {
    transform: scale(1.02);
  }
`;

const CardHeader = styled.h3`
  margin-bottom: 1rem;
  color: #b91f1f;
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
  background-color: #aacaa5;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #8fba87;
  }
`;
const PopMsg = styled.span`
  margin-top: 0.6rem;
  display: inline-block;
  background-color: #eaf9e9;
  color: #4caf50;
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
 color: ${({ theme }) => theme.text};
`;


function Proyectos({ proyecto }) {

    if(!proyecto) {
        return <p style={{ color: "#b91c1c", textAlign: "center"}}>Proyecto no disponible</p>
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
