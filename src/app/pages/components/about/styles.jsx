import styled from "@emotion/styled"
import { background } from "../../styles"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${background.light};
    max-width: 100vw;

    margin-top: 8vh;    //margin for economy form
    padding: 2rem;
    
    @media (max-width: 900px) {
        margin-top: 0;
        padding: 1rem;
    }

`
export const AboutTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${background.light};

    h1, span{
        font-family: "Metropolis";
        font-style: bold;
        font-weight: 700;
        line-height: 2.625rem;
        font-size: 2rem;
        
        @media (max-width: 900px) {
            line-height: 2rem;
        }
    }
    
    h6 {
        font-family: "Metropolis";
        color: ${background.blueLeve};
        font-size: 1rem;
        
        @media (max-width: 900px) {
            font-size: 1rem;
            font-weight: 300;
            margin-bottom: .5rem;
        }

    }

    .highlighted {
        color: ${background.blueLeve};
    }

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 900px) {
        justify-content: center;
    }

    img {
        @media (max-width: 900px) {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            width: 80%;
            height: 80%;
        }
    }

`
export const AboutDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    max-width: 25vw;
    
    @media (max-width: 900px) {
        max-width: 100vw;
        padding: .5rem 1rem;
    }
    
    h6 {
        font-family: "Inter";
        display: block;
        margin-bottom: 1.5rem;
        line-height: 1.2rem;
    }

    .bold {
        font-weight: bold;
    }

`
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    max-width: 25vw;
    
    @media (max-width: 900px) {
        max-width: 100vw;
    }


`