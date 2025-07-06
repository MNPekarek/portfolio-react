import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Loader from "../loader/Loader";

import styled from "styled-components";
import Slider from "react-slick";
import Modal from "../modal/Modal";

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
margin: 3rem 1rem 0;
padding: 2rem;
width: 100%;
max-width: 1200px;
box-sizing: border-box;
font-family: "Poppins", sans-serif;

@media (min-width: 768px) {
    flex-direction: row;
}
`;

const DetailLayout = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem;
max-width: 1100px;
margin: 4rem;

@media (min-width: 768px) {
  flex-direction: column;
}
`;

const TopSection = styled.div`
display: flex;
gap: 1rem;

@media (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start;
}

@media (max-width: 768px) {
  flex-direction: column;
}
`;

const TextContent = styled.div`
flex: 1;
`;

const ImageColumn = styled.div`
width: 100%;
max-width: 480px;
margin: auto;

`;

const BottomContent = styled.div`
margin-top: 2rem;
`;

const ImageBox = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: #111;
padding: 1rem;
border-radius: 12px;
min-height: 400px;
`;
const ProductImg = styled.img`
width: 100%;
height: auto;
max-height: 400px;
object-fit: contain;
border-radius: 10px;
cursor: zoom-in;
display: block;
margin: 0 auto;
`;
const InfoBox = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 1rem;
`;
const Title = styled.h3`
 color: #a71c1c;
 margin-bottom: 1rem;

`;

const SubTitle = styled.h4`
color: #a71c1cb3;
margin-bottom: 0.5rem;
`;

const Parrafo = styled.p`
 color: ${({ theme }) => theme.text};
 margin: 1rem 0 1rem 0;
`;

function ProyectDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [proyecto, setProyecto] = useState(null);
  const { proyectos } = useAppContext();


  const [modalOpen, setModalOpen] =useState(false);
  const [activeImg, setActiveImg] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true   
  };
  const handleImgClick = (src) => {
    setActiveImg(src);
    setModalOpen(true);
  }


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
      <div>
        <Loader />
      </div>
    );
  }

  if (!proyecto) {
    return <p>Proyecto no encontrado en el id {id} </p>;
  }

  const { name, imagenes, categoria, descripcion, tecnologia, url, objetivo, decisiones, especial   } = proyecto;

  return (
    <DetailLayout>
      <TopSection>
        <TextContent>
          <Title> {name} </Title>        
        <SubTitle>Categoria: {categoria} </SubTitle>        
        <Parrafo>{descripcion} </Parrafo>

        <SubTitle>Tecnologías:</SubTitle>
        <ul style={{color: "white", marginLeft: "1rem"}}>
          {tecnologia.map((tech, index) => (
            <li key={index} > {tech} </li>
          ))}          
        </ul>
        
        <Parrafo>Link: <a href={url} target="_blank">{url} </a> </Parrafo>          
        </TextContent>
      
      <ImageColumn>
        {imagenes && imagenes.length > 0 ? (
      <div style={{ width: "100%", maxWidth: "600px"}}>

          <Slider {...settings}>
          {imagenes.map((src, i) => (
            <ProductImg 
            key={i}
            src={src}
            alt={`Proyecto ${i} `}
            onClick={() => handleImgClick(src)}
            style={{ cursor: "zoom-in", objectFit: "contain", maxHeight: "400px"}}
            />
          ))}
        </Slider>
          </div>
        ) : (
          <p>No hay imágenes para mostrar</p>
        )}
        {/* <ProductImg src={img} alt={name} /> */}
        {modalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <img src={activeImg} alt="Zoom" style={{ width: "100%"}} />
          </Modal>
        )}
      </ImageColumn>
      </TopSection>

      <BottomContent>
        <SubTitle>Objetivo:</SubTitle>
        <Parrafo>{objetivo} </Parrafo>

        <SubTitle>Decisiones técnicas:</SubTitle>
        <ul style={{color: "white"}} >
          {decisiones.map((dec, index) => (
            <li key={index}>{dec} </li>
          ))}
        </ul>

        <SubTitle>Detalles destacados</SubTitle>
        <ul style={{color: "white"}} >
          {especial.map((dec, index) => (
            <li key={index}>{dec} </li>
          ))}
        </ul>
      </BottomContent>     
      
    </DetailLayout>
  );
}

export default ProyectDetail;
