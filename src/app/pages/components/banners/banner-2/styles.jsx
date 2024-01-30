import styled from "@emotion/styled"
import { background } from "../../../styles"
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
    background-color: ${background.blueLeve};
    height: 93dvh;
    max-width: 100dvw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    padding: 0 13.5rem;

    .divider { 
        border-left: 2px solid ${background.white};
        height: 16.5625rem;
        margin: auto 1.7rem;
    }
    
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    animation: ${fadeInUp} 0.5s ease-out;

    
    h1 {
        font-family: "Metropolis", sans-serif, system-ui, -apple-system;
        color: ${background.yellowLeve};
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;
    }
    
    .mainInfo {
        color: ${background.light};
        max-width: 50vw;
        margin-top: 1.2rem;
    }
    h6 {
        color: ${background.light};
        max-width: 50vw;
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
    }

    .stepTitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem; 
    }
    .yellowSubtitle {
        color: ${background.yellowLeve};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
    }
    
    .whiteSubtitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.375rem;

        max-width: 25rem;
    }
`
export const StepTitle = styled.div`
    display: flex;
    flex-direction: column;
`