import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const HeaderCard = styled.div`
  background: linear-gradient(135deg, #8b0000, #600000);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.2);
  max-width: 600px;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.1rem;
`;
const CTAButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(255, 0, 0, 0.3);
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;
`;
const GridItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  h2 {
    font-size: 1.4rem;
    color: #ff4d4d;
  }

  p {
    font-size: 1rem;
  }
`;

const Info = () => {
  return (
    <SectionContainer>
      <HeaderCard>
        <Title>Desarrollador Frontend | Interfaces con identidad propia</Title>
        <Description>
          Dominio de React, rutas, estado global, diseño pixel-perfect y
          animaciones con Framer Motion. Trabajo con APIs (Fetch, Axios),
          Firebase, Cloudinary y Vercel. En formación backend con Node.js,
          MongoDB y Express.
        </Description>
        <Link to="/proyectos">
          <CTAButton>Explorá mis proyectos</CTAButton>
        </Link>
      </HeaderCard>

      <GridContainer>
        <GridItem>
          <h2>🚀 Stack</h2>
          <p>HTML, CSS/SCSS, JavaScript, React, Firebase, GitHub</p>
        </GridItem>
        <GridItem>
          <h2>💡 Especialidad</h2>
          <p>
            UI/UX con diseño visual audaz, componentes reutilizables,
            animaciones envolventes
          </p>
        </GridItem>
        <GridItem>
          <h2>🎯 Objetivo</h2>
          <p>
            Crear experiencias fluidas, escalables y con impacto visual real
          </p>
        </GridItem>
      </GridContainer>
    </SectionContainer>
  );
};

export default Info;
