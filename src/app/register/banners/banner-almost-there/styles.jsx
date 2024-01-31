import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const BannerContainer = styled.div`
    background-color: ${background.primary};
    height: 70vh;
    max-width: 100vw;
    padding: 8rem 13.5rem;
`

export const ContentContainer = styled.div`
    display: "flex";
    flex-direction: "column";

    h1 {
        font-family: "Metropolis";
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;;
        color: ${background.yellowLeve};
    }
    
    h6 {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem; 
        
        margin-top: 1rem;
    }
    .bold {
        font-weight: bold;
    }
    
    .highlightedVerificationInfo {
        color: ${background.blueLeve};
        background-color: ${background.white};
        font-family: "Inter";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.375rem;
        padding: .5rem;
        border-radius: 10px;
    }

`