import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

const CertiLayouts = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  padding: 5rem 2.5rem;
  background: ${({ theme }) => theme.pageGradient};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  padding-top: 1rem;
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

const SubTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textprimary};
`;

const CertiCard = styled.div`
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.cardShadow};
  backdrop-filter: blur(18px);
`;

const CertiImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 16px 35px rgba(5, 0, 20, 0.45);
  margin-top: 1rem;
`;

const CertiLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentGradient};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 35px rgba(168, 85, 247, 0.4);
  }
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
          <CertiLink to={url} target="_blank" rel="noopener noreferrer">
            Ver certificado
          </CertiLink>
        </CertiCard>
      ))}
    </CertiLayouts>
  );
}

// const Container = styled.div`
// height:100vh;
// color: ${({ theme}) => theme.text}`
