import styled from "styled-components";
export function Service() {
    return(
        <Container>
            <h1>Service</h1>
        </Container>
    );
}

const Container = styled.div`
height:100vh;
color: ${({ theme}) => theme.text}`