import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { background, newBackground } from "../../styles";


export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
    to top,
    ${newBackground.orange}, 
    ${newBackground.orange} 20%,
    transparent 100%
  );

    gap: 10rem; //change later...
`
export const FooterPrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-top: 5rem; //change later...

        color: ${newBackground.orange};
        font-size: 70px;
        font-weight: 700;
        max-width: 1022px;
        text-align: center;
    }
    
    h3{ 
        color: ${newBackground.green};
        font-size: 42px;
        font-weight: 500;
    }
    h4{
        color: ${newBackground.green};
        font-size: 34px;
    }
    `
export const FooterSecondaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h6 {
        color: ${newBackground.white};
        font-size: 15px;
        margin-top: 43px;
        margin-bottom: 143px;
    }
`
export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    margin-bottom: 102px;

    .socialIcon {
        color: ${newBackground.orangeLight};
        background-color: ${newBackground.white};
        border-radius: 30px;
        font-size: 30px;
        padding: 8px;

        width: 60px;
        height: 60px;
    }
`