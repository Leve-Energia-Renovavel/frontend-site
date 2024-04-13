import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { newBackground } from "../../styles";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: linear-gradient(
    to top,
    ${newBackground.orange}, 
    ${newBackground.orange} 10%,
    transparent 100%
  );

    gap: 10rem; //change later...
    
    @media (max-width: 600px) {
        background: linear-gradient(
        to top,
        ${newBackground.orange}, 
        ${newBackground.white} 88%,
        transparent 100%);
        
        gap: 3rem; //change later...
    }
`
export const FooterPrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h2 {
        font-family: "Graphie";
        font-size: 70px;
        font-weight: 600;
        
        color: ${newBackground.orange};
        text-align: center;
        
        max-width: 1022px;
        
        margin-top: 5rem; //change later...
        margin-bottom: 62px; //change later...
        
        @media (max-width: 600px) {
            font-size: 27px;
            max-width: 330px;
            
            margin-top: 60px; //change later...
            margin-bottom: 20px; //change later...
        }
    }
    
    h3{ 
        font-family: "Graphie";
        color: ${newBackground.green};
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px; //change later...
        
        @media (max-width: 600px) {
            font-size: 14px;
            margin-bottom: 10px; //change later...
        }
    }
    h4{
        font-family: "Graphie";
        font-weight: 500;
        color: ${newBackground.green};
        
        font-size: 20px;
        margin-bottom: 50px; //change later...

        @media (max-width: 600px) {
            font-size: 14px;
            max-width: 330px;

            margin-bottom: 30px; //change later...
        }
    }
    `
export const FooterSecondaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 800px;

    h6 {
        color: ${newBackground.white};
        font-size: 15px;
        margin-top: 43px;
        margin-bottom: 143px;
        
        @media (max-width: 600px) {
            font-size: 10px;
            margin-top: 21px;
            margin-bottom: 21px;
        }
    }

    .leveLogoImage {
        width:253px; 
        height:115px;

        @media (max-width: 600px) {
            width:97px; 
            height:44px;
        }
    }

    @media (max-width: 600px) {
        background-size: 430px;
        background-position: end;
    }
`
export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    max-width: 460px;

    margin-top: 150px;
    margin-bottom: 102px;

    .socialIcon {
        color: ${newBackground.orangeLight};
        background-color: ${newBackground.white};
        border-radius: 30px;
        padding: 8px;
        
        width: 50px;
        height: 50px;
        
        &:hover {
            color: ${newBackground.green};
            cursor: pointer;
        }
        
        @media (max-width: 600px) {
            width: 41px;
            height: 41px;
            padding: 4px;
        }
    }

    @media (max-width: 600px) {
        gap: 2px;

        margin-top: 150px;
        margin-bottom: 33px;
    }
`

export const FooterButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.yellow};
  border-radius: 30px;
  font-size: 17px;
  text-transform: none;
  padding: 0.5rem 1.5rem;

  font-family: "Graphie";
  font-size: 20px;
  font-weight: 500;

  
  &:hover {
      background-color: ${newBackground.green};
      color: ${newBackground.yellow};
        cursor: pointer;
  }
`