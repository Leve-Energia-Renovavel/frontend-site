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
        ${newBackground.orange}, 
        ${newBackground.white} 88%,
        transparent 100%);

        background-color: ${newBackground.grey};
        
        gap: 0px //change later...
    }


`
export const FooterMainContent = styled.div`
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

export const FooterSecondaryContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    
    .leveLogoImage {
        width:250px; 
        height:auto;
    }
    
    @media (max-width: 600px) {
        background-image: url(${props => props.image.src});
        background-repeat: no-repeat;
        background-size: 420px;

        height: 500px;
        background-position: -26px 150px;



        .leveLogoImage {
            width: 130px; 
            height: auto;

            margin-top: 16px;
        }
    }

    @media (max-height: 1100px) {
        height: 900px;
        background-size: 600px;
        background-position: -100px 250px;
    }
    @media (max-height: 900px) {
        height: 800px;
        background-size: 600px;
        background-position: -100px 200px;
    }
    
    `
export const LegalContainer = styled.div`
    text-align: center;

    .rights, .leveLegalData {
        color: ${newBackground.white};
        font-size: 15px;
    }
    .rights {
        margin-top: 43px;
    }
    @media (max-width: 600px) {
        .rights, .leveLegalData {
            font-family: "Graphie";
            font-size: 10px;
            line-height: 12px;
            font-weight: 400;
        }
                    
        .rights {
            margin-top: 42px;
            margin-bottom: 0px;
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
    align-items: center;
    justify-content: center;

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
        gap: 30px;
        margin-bottom: 30px;

        .iconButton {
            width: 32px;
            height: 32px;
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

  font-family: "Graphie";
  font-size: 20px;
  font-weight: 500;

  
  &:hover {
      background-color: ${newBackground.green};
      color: ${newBackground.yellow};
        cursor: pointer;
  }
`

export const FooterMobile = styled.div`
    display: none;

    .title {
        font-family: "Graphie";
        font-size: 24px;  
        font-weight: 600;
        color: ${newBackground.green};
    }
    .subtitle {
        font-family: "Graphie";
        font-size: 18px;  
        font-weight: 500;
        color: ${newBackground.greyHigh};

        white-space: nowrap;

        margin-top: 6px;
    }
    
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    //adapting by device height...
    @media (max-height: 1000px) {
        margin-bottom: -260px;
    }

    @media (max-height: 900px) {
        margin-bottom: -240px;
    }
`

export const VideoContainer = styled.div`
    margin: 0 auto;
    padding: 2rem;

    border-radius: 10px;

    margin-top: 30px;

    .embededVideo {
        width: 1000px;
        height: 581px;
        border-radius: 15px;
    }

    @media (max-width: 600px) {
    padding: 0;
    
    .embededVideo {
        width: 336px;
        height: 220px;
    }
}
`

export const ButtonContainer = styled.div`
    text-align: center;
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 52px;

  margin: 12px 0 0 0;

  padding: 15px 27px;

  max-width: 330px;
  
  margin-top: 20px;
  
  span {
    font-family: "Graphie";
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;

  }

  &:hover {
      background-color: ${newBackground.yellow};
      color: ${newBackground.green};
      cursor: pointer;
  }
`