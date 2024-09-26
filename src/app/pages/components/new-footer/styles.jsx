import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { newBackground } from "../../styles";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;

    max-width: 1920px;
    /* max-width: 1366px; */
    margin: 0 auto;

    background: linear-gradient(to top,${newBackground.orange}, ${newBackground.orange} 10%,transparent 100%);

    gap: 10rem; //change later...
    
    @media (max-width: 600px) {
        background: linear-gradient(
        to top,
        ${newBackground.orange}, 
        ${newBackground.white} 88%,
        transparent 100%);
        
        gap: 0; //change later...
    }


`
export const FooterPrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    .footerTitle {
        font-family: "Graphie";
        font-size: 70px;
        font-weight: 600;
        
        color: ${newBackground.orange};
        text-align: center;
        
        max-width: 1022px;
        
        margin-top: 5rem; //change later...
        margin-bottom: 62px; //change later...
    }
    
    .footerSubtitle { 
        font-family: "Graphie";
        color: ${newBackground.green};
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px; //change later...
    }

    .footerDescription {
        font-family: "Graphie";
        font-weight: 500;
        color: ${newBackground.green};
        
        font-size: 20px;
        margin-bottom: 50px; //change later...
    }

    @media (max-width: 600px) {
        display: none;

        .footerTitle {
            font-size: 27px;
            max-width: 330px;
            
            margin-top: 120px;
            margin-bottom: 20px; //change later...
        }

        .footerSubtitle {
            font-size: 14px;
            margin-bottom: 10px; //change later...
        }

        .footerDescription {
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

    overflow: hidden;

    .rights, .leveLegalData {
        color: ${newBackground.white};
        font-size: 15px;
    }
    
    .rights {
        margin-top: 43px;
        margin-bottom: 143px;
    }
    
    .leveLogoImage {
        width:250px; 
        height:auto;
    }
    
    @media (max-width: 600px) {
        height: 500px;

        background-image: url(${props => props.image.src});
        background-repeat: no-repeat;
        background-size: 420px;
        background-position: -26px 150px;

        .rights, .leveLegalData {
            font-size: 10px;
        }
        
        .rights {
            margin-top: 21px;
            margin-bottom: 0px;
        }

        .leveLogoImage {
            width: 97px; 
            height: 44px;
        }
    }
`
export const SunContainer = styled.div`
    position: fixed; /* Ensure the container remains fixed */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1200px; /* Adjust the height to fit the sun image */
    overflow: hidden; /* Hide the bottom half of the sun image */
    z-index: -1; /* Move the container behind other content */
    
    .sunImage { 
        position: absolute; /* Ensure the sun image remains absolutely positioned */
        bottom: -418px; /* Position the sun image at the bottom of its container */
        left: 50%; /* Position the sun image horizontally centered */
        transform: translateX(-50%) scaleY(-1); 
        width: 1200px; /* Adjust the width of the sun image */
        height: 1200px; /* Adjust the height of the sun image */
        border-radius: 50%; /* Make the sun image round */
        
        @media (max-width: 1400px) {
            width: 850px; 
            height: 850px; 
        }
        @media (max-width: 1100px) {
            width: 750px; 
            height: 750px; 
        }

        @media (max-width: 600px) {
            display: none;
        }
    }
`;
export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    max-width: 460px;

    /* margin-top: 150px; */
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
    
    @media (max-width: 600px) {
        gap: 2px;
        margin-bottom: 30px;
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