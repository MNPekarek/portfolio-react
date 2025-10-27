import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";
import emailjs from "emailjs-com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      "service_e4nv30g",
      "template_l979kqf",
      form,
      "86BgtOWkhPSu_ArAq"
    )
    .then(() => {
      alert("Mensaje enviado con éxito");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("hubo un problema...");
    });
  };

  return (
    <Container>
      <Title>¿Charlamos?</Title>
      <Text>Pódes escribirme directamente usando este formulario: </Text>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit">Enviar</button>
      </Form>
      <Social>
        <a href="mailto:matiaspekarek@gmail.com"> <IoMdMail/> Email</a>
        <a href="https://github.com/MNPekarek" target="_blank" rel="noreferrer">
           <FaGithubSquare/> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/matias-nicolas-pekarek-14597b281"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </Social>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.pageGradient};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 620px;
  color: ${({ theme }) => theme.textsecondary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 520px;

  input,
  textarea {
    padding: 1rem 1.1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 16px;
    background: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    resize: none;
    transition: border 0.3s ease, box-shadow 0.3s ease,
      transform 0.3s ease;

    &::placeholder {
      color: ${({ theme }) => theme.texttertiary};
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.accent};
      box-shadow: 0 12px 30px rgba(168, 85, 247, 0.35);
      transform: translateY(-2px);
    }
  }

  button {
    padding: 0.9rem;
    border: none;
    border-radius: 999px;
    background: ${({ theme }) => theme.accentGradient};
    color: #fff;
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 35px rgba(168, 85, 247, 0.45);
    }
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
      opacity: 0.85;
      transform: translateY(-1px);
    }
  }
`;
