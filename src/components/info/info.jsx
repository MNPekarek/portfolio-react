import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedGridItem from "./AnimatedGridItem";

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

const MotionHeaderCard = motion.create(HeaderCard);

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
`;
const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.5;
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
  li {
    list-style: none;
    line-height: 1.3;
  }
`;

const MotionGridItem = motion.create(GridItem);

const Info = () => {

  const sections = [
  {
    title: "🚀 Stack",
    items: [
      "🧠 Frontend: HTML, CSS/SCSS, JavaScript, React, Framer Motion",
      "🛠️ Backend: Node.js, Express, MongoDB, WebSockets, REST APIs",
      "📦 Extras: Firebase, Cloudinary, GitHub, Vercel, localStorage",
    ],
  },
  {
    title: "💡 Especialidad",
    items: [
      "Diseño de interfaces dinámicas, escalables y con personalidad.",
      "Componentes reutilizables, animaciones fluidas y experiencia de usuario pensada al detalle.",
      "Integración full-stack con actualizaciones en tiempo real y estructura modular.",
    ],
  },
  {
    title: "🎯 Objetivo",
    items: [
      "Crear soluciones que combinen precisión técnica con diseño visual potente.",
      "Desarrollar e-commerce, dashboards y productos que se sientan vivos.",
      "Buscar oportunidades freelance o full-time para seguir creciendo como desarrollador.",
    ],
  },
]; 

  return (
    <SectionContainer>
      <MotionHeaderCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Title>
          Desarrollador Full-Stack | Interfaces con identidad propia
        </Title>
        <Description>
          React, MongoDB, WebSockets y diseño visual que impacta. Certificado en
          Backend Avanzado. Cursando Backend 2 y becas de Google en Cloud, Data
          e IA.
        </Description>
        <Link to="/proyectos">
          <CTAButton>Explorá mis proyectos</CTAButton>
        </Link>
      </MotionHeaderCard>

      <GridContainer>
        {sections.map((section, i) => (
          <AnimatedGridItem
          key={section.title}
          title={section.title}
          items={section.items}
          delay={i * 0.4}
          />
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default Info;
