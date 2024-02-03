import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"
import { keyframes } from "@emotion/react";

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


export const BannerContainer = styled.div`
    background-color: ${background.primary};
    height: 70vh;
    max-width: 100vw;
    padding: 8rem 15rem;

    @media (max-width: 600px) {
        height: 80vh;
        padding: 8rem 2rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    animation: ${fadeInUp} 0.5s ease-out;

    h1 {
        font-family: "Metropolis";
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;;
        color: ${background.yellowLeve};

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
    
    h6 { 
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem;

        margin-top: 1.2rem;
    }

    .bold {
        font-weight: bold;
    }

`

export const confettiStyles = { margin: '0 auto' }