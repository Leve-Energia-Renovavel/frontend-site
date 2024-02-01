import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const BannerContainer = styled.div`
    background-color: ${background.blueLeve};
    height: 140vh;
    max-width: 100vw;
    padding: 9rem 13.5rem;
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