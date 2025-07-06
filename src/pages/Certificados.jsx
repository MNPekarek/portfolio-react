import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

const CertiLayouts = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.text};
  margin: 3.5rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  padding-top: 1rem;
  color: #a71c1c;
`;

const SubTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const CertiCard = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #a71c1c;
  padding: 1rem;
  border-radius: 8px;
`;

const CertiImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

export function Certificados() {
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    const certificadosCollection = collection(db, "certificados");

    getDocs(certificadosCollection)
      .then((snapshot) => {
        let arrayDeCertificados = snapshot.docs.map((el) => ({
          id: el.id,
          ...el.data(),
        }));
        setCertificados(arrayDeCertificados);
      })
      .catch((err) => console.error("Error al obtener los certificados:", err));
  }, []);

  return (
    <CertiLayouts>
      <Title>Certificados</Title>
      {certificados.map(({ id, name, url, img }) => (
        <CertiCard key={id}>
          <SubTitle>{name} </SubTitle>          
          <CertiImg src={img} alt={`Certificado de ${name}`} />
          <Link style={{textDecoration: "none"}} to={url} target="_blank" rel="noopener noreferrer">
            Ver certificado
          </Link>
        </CertiCard>
      ))}
    </CertiLayouts>
  );
}

// const Container = styled.div`
// height:100vh;
// color: ${({ theme}) => theme.text}`
