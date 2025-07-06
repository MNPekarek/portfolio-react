import styled from "styled-components";
import Info from "../components/info/info";
import ProyectosListContainer from "../components/proyectos/proyectosListContainer";

export function Home() {
    return(
        <Container>
            <Info/>
            <ProyectosListContainer />
        </Container>
    );
}

const Container = styled.div`
min-height: 100vh;
margin-top: 3.8rem;
margin-left: 1rem;
color: ${({ theme}) => theme.text};
overflow-x: hidden;
width: 100%;
`