import styled from "styled-components";
export function Biografia() {
    return(
        <Container>
            <h1>Biografia</h1>
        </Container>
    );
}

const Container = styled.div`
height:100vh;
color: ${({ theme}) => theme.text}
`