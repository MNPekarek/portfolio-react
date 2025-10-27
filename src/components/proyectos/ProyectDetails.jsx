import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import { useAppContext } from "../context/Context";
import Loader from "../loader/Loader";
import Modal from "../modal/Modal";

const DetailLayout = styled.div`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.pageGradient};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const DetailCard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background: ${({ theme }) => theme.surfaceDeep};
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 3rem 2.5rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  backdrop-filter: blur(22px);
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.accent};
  font-size: 2.4rem;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.textsecondary};
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textsecondary};
  line-height: 1.7;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
`;

const ListItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.textsecondary};
  position: relative;
  padding-left: 1.4rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const ActionLink = styled.a`
  align-self: flex-start;
  margin-top: 0.5rem;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentGradient};
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 35px rgba(168, 85, 247, 0.45);
  }
`;

const ImageBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.surface};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const ProductImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;
  border-radius: 16px;
  cursor: zoom-in;
  display: block;
  margin: 0 auto;
`;

const BottomContent = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SectionBlock = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const EmptyState = styled.p`
  color: ${({ theme }) => theme.textsecondary};
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
`;

function ProyectDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [proyecto, setProyecto] = useState(null);
  const { proyectos } = useAppContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const handleImgClick = (src) => {
    setActiveImg(src);
    setModalOpen(true);
  };

  useEffect(() => {
    if (proyectos.length > 0) {
      const proyectosAMostrar = proyectos.find((el) => el.id === parseInt(id));
      setProyecto(proyectosAMostrar);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [proyectos, id]);

  if (loading) {
    return (
      <DetailLayout>
        <Loader />
      </DetailLayout>
    );
  }

  if (!proyecto) {
    return (
      <DetailLayout>
        <EmptyState>Proyecto no encontrado en el id {id}</EmptyState>
      </DetailLayout>
    );
  }

  const {
    name,
    imagenes,
    categoria,
    descripcion,
    tecnologia,
    url,
    objetivo,
    decisiones,
    especial,
  } = proyecto;

  return (
    <DetailLayout>
      <DetailCard>
        <TopSection>
          <TextContent>
            <Title>{name}</Title>
            <SubTitle>Categoria</SubTitle>
            <Paragraph>{categoria}</Paragraph>
            <Paragraph>{descripcion}</Paragraph>

            <SubTitle>Tecnologías</SubTitle>
            <List>
              {tecnologia.map((tech, index) => (
                <ListItem key={index}>{tech}</ListItem>
              ))}
            </List>

            {url && (
              <ActionLink href={url} target="_blank" rel="noopener noreferrer">
                Visitar proyecto
              </ActionLink>
            )}
          </TextContent>

          <ImageColumn>
            {imagenes && imagenes.length > 0 ? (
              <ImageBox>
                <Slider {...settings}>
                  {imagenes.map((src, i) => (
                    <ProductImg
                      key={i}
                      src={src}
                      alt={`Proyecto ${i}`}
                      onClick={() => handleImgClick(src)}
                    />
                  ))}
                </Slider>
              </ImageBox>
            ) : (
              <EmptyState>No hay imágenes para mostrar</EmptyState>
            )}

            {modalOpen && (
              <Modal onClose={() => setModalOpen(false)}>
                <img src={activeImg} alt="Zoom" style={{ width: "100%" }} />
              </Modal>
            )}
          </ImageColumn>
        </TopSection>

        <BottomContent>
          <SectionBlock>
            <SubTitle>Objetivo</SubTitle>
            <Paragraph>{objetivo}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <SubTitle>Decisiones técnicas</SubTitle>
            <List>
              {decisiones.map((dec, index) => (
                <ListItem key={index}>{dec}</ListItem>
              ))}
            </List>
          </SectionBlock>

          <SectionBlock style={{ gridColumn: "1 / -1" }}>
            <SubTitle>Detalles destacados</SubTitle>
            <List>
              {especial.map((detail, index) => (
                <ListItem key={index}>{detail}</ListItem>
              ))}
            </List>
          </SectionBlock>
        </BottomContent>
      </DetailCard>
    </DetailLayout>
  );
}

export default ProyectDetail;
