import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedGridItem from "./AnimatedGridItem";

const SectionContainer = styled.section`
  position: relative;
  background: ${({ theme }) => theme.pageGradient};
  color: ${({ theme }) => theme.text};
  padding: 4rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
`;
const HeaderCard = styled.div`
  background: ${({ theme }) => theme.accentGradient};
  padding: 2.8rem;
  border-radius: 24px;
  box-shadow: 0 30px 70px rgba(168, 85, 247, 0.35);
  max-width: 680px;
  width: 100%;
  backdrop-filter: blur(18px);
`;

const MotionHeaderCard = motion.create(HeaderCard);

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
`;
const Description = styled.p`
  margin: 1rem 0 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textsecondary};
`;
const CTAButton = styled.button`
  background: ${({ theme }) => theme.accentGradient};
  color: #fff;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 16px 35px rgba(168, 85, 247, 0.45);
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.8rem;
  width: 100%;
  max-width: 1200px;
`;
const GridItem = styled.div`
  background: ${({ theme }) => theme.surface};
  padding: 1.8rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background 0.3s ease;
  backdrop-filter: blur(18px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(5, 0, 20, 0.4);
    background: ${({ theme }) => theme.surfaceHover};
  }

  h2 {
    font-size: 1.35rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 0.75rem;
  }

  p,
  li {
    font-size: 1rem;
    list-style: none;
    line-height: 1.6;
    color: ${({ theme }) => theme.textsecondary};
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
