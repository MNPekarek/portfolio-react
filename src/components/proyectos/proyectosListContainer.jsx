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
  background: ${({ disabled }) => (disabled ? "#d1d5db" : "#6d8b6c")};
  color: ${({ disabled }) => (disabled ? "#9ca3af" : "#fff")};
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#d1d5db" : "#5b7760")};
  }
`;


const PaginaTexto = styled.span`
  font-size: 1rem;
  color: #b91f1f;
`;

const Title = styled(motion.h2)`
  padding-left: 2rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
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
    background-color: #b91f1f;    
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const CatalogWrapper = styled.div`
  padding: 4rem 2rem;
  /* background: linear-gradient(to bottom, #fdfdfd, #f2f4f2); */
  min-height: 100vh;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-content: center;
  padding: 0 1rem;
`;
const Message = styled.p`
  text-align: center;
  color: #85928f;
  font-size: 1.1rem;
  margin-top: 3rem;
`;
