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
      console-error("Error al enviar:", error);
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
  height: 100vh;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

`;

const Title = styled.h1`
font-size: 2.5rem;
color: #861e1e;
`;

const Text = styled.p`
font-size: 1.2rem;
text-align: center;
max-width: 600px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
max-width: 500px; 

input, textarea {
  padding: 1rem;
  border: 2px solid #861e1e;
  border-radius: 8px;
  background: gray;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: none; 
  cursor: pointer;

  &::placeholder {
    color: #e7b1b1;
  }

  &:focus {
  outline: none;
  border: 2px solid #d54747;
}
}

button {
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: #861e1e;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #a52828;
  }
}
`;

const Social = styled.div`
display: flex;
gap: 1rem;
margin-top: 2rem;
padding-bottom: 1rem;

a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}
`;
