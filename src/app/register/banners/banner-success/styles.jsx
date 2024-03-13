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
    height: 60rem;
    max-width: 100vw;
    padding: 9rem 13.5rem;
    
    @media (min-width: 2000px) and (max-width: 2150px) {
        top: 60rem;
    }
      
    @media (min-width: 1200px) and (max-width: 1500px) {
        top: 80rem;
    }
    
    @media (max-width: 1200px) {
        height: 20rem;
        padding: 8rem 2rem;
    }
    @media (max-width: 600px) {
        height: 20rem;
        padding: 8rem 2rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    animation: ${fadeInUp} 0.5s ease-out;


    h1 {
        font-family: "Metropolis", sans-serif, system-ui, -apple-system;
        font-weight: 700;
        color: ${background.yellowLeve};
        font-size: 2.625rem;
        line-height: 2rem;
        
        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
    
    .subtitle {
        color: ${background.light};
        font-size: 1.125rem;
        max-width: 50vw;
        margin-top: 1rem;
        
        @media (max-width: 600px) {
            max-width: 100vw;
            font-size: 1rem;
        }
    }
    .boldSubtitle {
        color: ${background.light};
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 1rem;

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }

`