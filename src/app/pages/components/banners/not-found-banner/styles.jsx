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
    background-color: ${background.blueLeve};
    height: 28rem;
    max-width: 100vw;
    padding: 10rem 15rem;

    @media (max-width: 2400px) {
        height: 38rem;
        max-width: 100vw;
        padding: 10rem 10rem;
    }
    @media (max-width: 2150px) {
        height: 38rem;
        max-width: 100vw;
        padding: 10rem 10rem;
    }
    @media (max-width: 1800px) {
        height: 32rem;
        max-width: 100vw;
        padding: 10rem 10rem;
    }
    @media (max-width: 1200px) {
        height: 32rem;
        max-width: 100vw;
        padding: 10rem 10rem;
    }
    @media (max-width: 900px) {
        height: 35rem;
        max-width: 100vw;
        padding: 10rem 8rem;
    }
    @media (max-width: 600px) {
        height: 100vh;
        max-width: 100vw;
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
        line-height: 2.625rem;
        color: ${background.yellowLeve};

    }

    .subtitle {
        color: ${background.white};
        max-width: 50vw;
        margin-top: 1.2rem;
    }
    .boldSubtitle {
        color: ${background.white};
        font-weight: bold;
        margin-top: 2rem;
    }

`

export const ButtonContainer = styled.div`
    margin: 3rem 0;
    text-align: center;

    .backToMainPage { 
        text-transform: none;
        font-size: 18px;
        color: ${background.blueLeve};
        background-color: ${background.yellowLeve};
        height: 3rem;
        border-radius: 12px;
        cursor: pointer;
        padding: 1rem 4rem;

        white-space: nowrap;
        
        &:hover {
            background-color: ${background.white};
            color:${background.blueLeve};
        }
    }
`