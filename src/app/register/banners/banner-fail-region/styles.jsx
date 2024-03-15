import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

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

    h1 {
        font-family: "Metropolis", sans-serif, system-ui, -apple-system;
        color: ${background.yellowLeve};
        font-weight: 700;
        font-style: bold;
        font-size: 2.625rem;
        line-height: 2.625rem;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
    
    h6 {
        font-family:"Inter";
        color: ${background.white};
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2rem;
        letter-spacing: 0em;
        text-align: left;

        margin-top: 2rem;

        @media (max-width: 600px) {
            font-size: 1rem;
        }

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
        
        &:hover {
            background-color: ${background.white};
            color:${background.blueLeve};
        }
    }
`