import { background } from "@/app/pages/styles";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
    background-color: ${background.orange};
    height: 28rem;
    max-width: 1366px;
    margin: 74px auto;

    min-height: 600px;
    padding: 3rem;

    @media (max-width: 600px) {
        height: 100vh;
        max-width: 100vw;
        padding: 2rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    animation: ${fadeInUp} 0.5s ease-out;

    h1 {
        font-family: "Graphie";
        color: ${background.yellow};
        font-weight: 700;
        font-style: bold;
        font-size: 48px;
        line-height: 48px;
    }

    .subtitle {
        font-family:"Graphie";
        color: ${background.white};
        font-size: 24px;
        line-height: 27px;
        font-weight: 500;
        letter-spacing: 0em;
        text-align: left;
        
        margin-top: 2rem;
        

    }
    .boldSubtitle {
        font-family: "Graphie";
        color: ${background.white};
        font-weight: bold;
        font-size: 24px;
        line-height: 27px;
        font-weight: 500;
        letter-spacing: 0em;
        text-align: left;

        margin-top: 2rem;

    }

    @media (max-width: 600px) {
            .subtitle,.boldSubtitle {
                font-size: 17px;
                line-height: 21px;

            } 
        }
`

export const ButtonContainer = styled.div`
    margin: 3rem 0;
    text-align: center;

    .backToMainPage { 
        text-transform: none;
        font-size: 18px;
        color: ${background.orange};
        background-color: ${background.yellow};
        height: 3rem;
        border-radius: 12px;
        cursor: pointer;
        padding: 1rem 4rem;

        white-space: nowrap;
        
        &:hover {
            background-color: ${background.white};
            color:${background.orange};
        }
    }
`