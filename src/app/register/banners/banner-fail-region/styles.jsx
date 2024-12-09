import { background } from "@/app/pages/globalStyles"
import styled from "@emotion/styled"

export const BannerContainer = styled.div`
    background-color: ${background.orange};
    border-radius: 0px 0px 15px 15px;

    width: 100%;
    height: auto;
    max-width: 1366px;
    
    margin: 74px auto;

    padding: 3rem 3rem 1rem 3rem ;

    @media (max-width: 600px) {
        max-width: 100vw;

        padding: 2rem 1rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-family: "Graphie";
        color: ${background.yellow};
        font-weight: 700;
        font-style: bold;
        font-size: 48px;
        line-height: 48px;
        
        @media (max-width: 600px) {
            font-size: 32px;
            line-height: 32px;
        }
    }

    .firstParagraph {
        margin-top: 80px;
    }
    
    h6 {
        font-family:"Graphie";
        color: ${background.white};
        font-size: 24px;
        line-height: 27px;
        font-weight: 500;
        letter-spacing: 0em;
        text-align: left;
        
        margin-top: 2rem;
        
        @media (max-width: 600px) {
            font-size: 17px;
            line-height: 21px;
        }

    }

    @media (max-width: 600px) {
        .firstParagraph {
            margin-top: 40px;
        }
    }

`

export const ButtonContainer = styled.div`
    margin: 5rem 0 3rem 0;
    text-align: center;

    .backToMainPage { 
        font-family:"Graphie";

        text-transform: none;
        font-size: 18px;
        color: ${background.orange};
        background-color: ${background.yellow};
        height: 3rem;
        border-radius: 12px;
        cursor: pointer;
        padding: 1rem 4rem;
        
        &:hover {
            background-color: ${background.white};
            color:${background.orange};
        }
    }

    @media (max-width: 600px) {
        margin-top: 30px;

        .backToMainPage {
            white-space: nowrap;
            font-size: 17px;
            line-height: 17px;
            font-weight: 700;
            white-space: 0em;
        }

    }
`