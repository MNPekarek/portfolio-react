import { useParams } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import Proyectos from "./Proyectos.jsx";

function ProyectosListContainer() {
  const { categoria } = useParams();
  const { proyectos } = useAppContext();

  const [loading, setLoading] = useState(true);
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
  const [paginaActual, setPAginaActual] = useState(1);
  const proyectosPorPagina = 10;

  useEffect(() => {
    if (proyectos.length > 0) {
      const filtrados = categoria
        ? proyectos.filter((el) => el.categoria === categoria)
        : proyectos;
      setProyectosFiltrados(filtrados);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [proyectos, categoria]);

  const indiceInicial = (paginaActual - 1) * proyectosPorPagina;
  const indiceFinal = indiceInicial + proyectosPorPagina;
  const proyectosEnPagina = proyectosFiltrados.slice(
    indiceInicial,
    indiceFinal
  );

  const paginaSiguiente = () => {
    if (
      paginaActual < Math.ceil(proyectosFiltrados.length / proyectosPorPagina)
    ) {
      setPAginaActual(paginaActual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPAginaActual(paginaActual - 1);
    }
  };
  if (loading) {
    return (
      <CatalogWrapper>
        <Loader />
      </CatalogWrapper>
    );
  }

  return (
    <CatalogWrapper>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mis proyectos
      </Title>

      {proyectosEnPagina.length > 0 ? (
        <GridContainer>
          {proyectosEnPagina.map((el) => (
            <Proyectos key={el.id} proyecto={el} />
          ))}
        </GridContainer>
      ) : (
        <Message>No hay productos en esta categoría 🧺</Message>
      )}

      <Paginacion>
        <Boton onClick={paginaAnterior} disabled={paginaActual === 1}>
          Anterior
        </Boton>
        <PaginaTexto>
          Página {paginaActual} de{" "}
          {Math.ceil(proyectosFiltrados.length / proyectosPorPagina)}
        </PaginaTexto>
        <Boton
          onClick={paginaSiguiente}
          disabled={
            paginaActual ===
            Math.ceil(proyectosFiltrados.length / proyectosPorPagina)
          }
        >
          Siguiente
        </Boton>
      </Paginacion>
    </CatalogWrapper>
  );
}

export default ProyectosListContainer;

const Paginacion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Boton = styled.button`
  background: ${({ disabled, theme }) =>
    disabled ? theme.surface : theme.accentGradient};
  color: ${({ disabled, theme }) => (disabled ? theme.textsoft : "#fff")};
  padding: 0.65rem 1.6rem;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 16px 35px rgba(168, 85, 247, 0.35)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    filter: ${({ disabled }) => (disabled ? "none" : "brightness(1.05)")};
  }
`;


const PaginaTexto = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const Title = styled(motion.h2)`
  padding-left: 2rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textprimary};
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05rem;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: ${({ theme }) => theme.accentGradient};
    border-radius: 999px;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const CatalogWrapper = styled.div`
  padding: 5rem 2.5rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.pageGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.2rem;
  justify-content: center;
  width: 100%;
`;
const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textsoft};
  font-size: 1.1rem;
  margin-top: 3rem;
`;
