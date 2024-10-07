import { fadeInUp, float } from "@/app/pages/animations";
import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const maxWidth = "1366px"

export const NewHomeMainBannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;

    background-color: ${newBackground.white};

    margin: 10px auto 0px auto;

    padding: 75px 0px;

    gap: 43px;

    height: 100%;
    max-height: 567px;
    
    width: 100%;
    max-width: ${maxWidth};

    position: relative;  // Added this line to make the balloon relative to the container

    @media (max-width: 600px) {
        display: none;
    }
`

export const NewHomeMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    background-color: ${newBackground.white};

    height: 453px;
    max-height: 453px;
    
    max-width: 485px;

    .homeMainTitle {
        font-family: "Graphie";
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
        text-align: left;
        color: ${newBackground.green};
        
        max-width: 475px;

        animation: ${fadeInUp} 0.5s ease-out;
        
    }
    .highlighted {
        color: ${newBackground.orange};
        font-weight: 600;
    }
    .homeMainSubtitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        color: ${newBackground.greyHigh};

        animation: ${fadeInUp} 0.5s ease-out;

        text-align: justify;

        margin-top: 17px;
        
        max-width: 475px;
    }
`

export const NewHomeMainDescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;

    margin-top: 48px;


    .checkIcon {
        display: block;
        width: 36px;
        height: auto;
    }
    
    .homeMainDescription {
        display: block;

        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.green};

        animation: ${fadeInUp} 0.5s ease-out;
        

        max-width: 475px;
    }
`
export const NewHomeMainBaloon = styled.div`
    position: absolute;
    border-radius: 0px 10px;
    border: 1px solid ${newBackground.orange};
    background-color: ${newBackground.white};

    animation: ${float} 4s ease-in-out infinite;

    padding: 14px 19px;
    
    right: 25%; 
    top: 48%;   

    min-width: 300px;
    width: 100%;
    max-width: 320px;
    

    p, span {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
        color: ${newBackground.green};
    }
    
    .hihglighted {
        font-weight: 600;
        color: ${newBackground.orange};
    }
`
export const NewHomeBannerImageContainer = styled.div`
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 90% 10%;

    /* min-width: 550px; */
    width: 100%;
    max-width: 718px;
    
    min-height: 360px;
    height: 453px;
    
    border-radius: 15px 15px 15px 15px;
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 57px;

  padding: 15px 53px;

  width: 100%;
  max-width: 340px;

  margin-top: 54px;
  /* margin-bottom: 40px; */
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${newBackground.green};
      color: ${newBackground.yellow};
      cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
    text-align: left;
    padding: 0px 85px; //same as NewHomeMainBannerContainer padding

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    @media (max-width: 600px) {
      display: none;
  }
`