import styled from "@emotion/styled"
import { background } from "../../../globalStyles"
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${background.blueLeve};
    height: 93dvh;
    max-width: 100dvw;
    overflow: hidden;

    padding: 0 13.5rem;      //padding top for header

    @media (max-width: 600px) {
        height: 125dvh;
        max-width: 100dvw;
        padding: 15dvh 2rem;  //padding top for header
        flex-wrap: wrap;

    }
    .divider { 
        border-left: 2px solid ${background.white};
        height: 16.5625rem;
        margin: auto 1.7rem;

        @media (max-width: 600px) {
            display: none;
        }
    }

    
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    
    animation: ${fadeInUp} 0.5s ease-out;
    
    @media (max-width: 600px) {
        width: 100%;
    }
    
    h1 {
        font-family: "Graphie", sans-serif, system-ui, -apple-system;
        color: ${background.yellowLeve};
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;
        
        @media (max-width: 600px) {
            font-size: 1.8rem;
            line-height: 1.8rem;
        }
    }
    
    .mainInfo {
        color: ${background.light};
        max-width: 50vw;
        margin-top: 1.2rem;

        @media (max-width: 600px) {
            max-width: 100vw;
        }
        
    }
    h6 {
        color: ${background.light};
        max-width: 50vw;

        @media (max-width: 600px) {
            max-width: 100vw;
        }
    }
    .bold  { 
        font-weight: bold;
        
    }
    .boldSubtitle {
        color: ${background.light};
        font-weight: bold;
        margin-top: 1rem;
    }
    
    .yellowSubtitle {
        font-family: "Inter";
        color: ${background.yellowLeve};
        margin-top: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.375rem;
    }
    
    `
export const RightContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 1rem;
    }

`
export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const StepContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.37rem;
    
    animation: ${fadeInUp} 0.5s ease-out;

    img {
        width: 3.125rem;
        height: 3.125rem;
        flex-shrink: 0;

        margin-right: 2.7rem;
        
        @media (max-width: 600px) {
            margin-right: 2rem;
        }
    }

    .stepTitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem; 
        
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    .yellowSubtitle {
        color: ${background.yellowLeve};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        
        @media (max-width: 600px) {
            font-weight: 500;
            margin-right: 2rem;
        }
    }
    
    .whiteSubtitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.375rem;

        max-width: 25rem;

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
`
export const StepTitle = styled.div`
    display: flex;
    flex-direction: column;
`