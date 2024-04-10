import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { newBackground } from "../../styles";
import { Typography } from "@mui/material"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 100vw;
    background-color: ${newBackground.white};
    `
export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1500px;
    height: 100vh;

    padding: 2rem;
`
export const HomeMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 

    border-radius: 35px;

    padding: 2rem;
    
    width: 65vw;
    height: 100vh;

`

export const HomeMainTitle = styled(Typography)`
    font-family: "Metropolis", sans-serif;
    color: ${newBackground.yellow};
    font-size: 5rem;
    font-weight: bold;
    max-width: 400px;
    word-wrap: break-word;
    `