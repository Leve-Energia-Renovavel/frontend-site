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
`
export const FooterPrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: var(--font-graphie);
        font-size: 70px;
        font-weight: 600;

        color: ${newBackground.orange};
        text-align: center;
        
        max-width: 1022px;
        
        margin-top: 5rem; //change later...
        margin-bottom: 62px; //change later...
    }
    
    h3{ 
        font-family: var(--font-graphie);
        color: ${newBackground.green};
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px; //change later...
    }
    h4{
        font-family: var(--font-graphie);
        font-weight: 500;
        color: ${newBackground.green};
        
        font-size: 20px;
        margin-bottom: 50px; //change later...
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
    }
`
export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

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
    }
`

export const FooterButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.yellow};
  border-radius: 30px;
  font-size: 17px;
  text-transform: none;
  padding: 0.5rem 1.5rem;

  font-family: var(--font-graphie);
  font-size: 20px;
  font-weight: 500;

  
  &:hover {
      background-color: ${newBackground.green};
      color: ${newBackground.yellow};
        cursor: pointer;
  }
  
  `