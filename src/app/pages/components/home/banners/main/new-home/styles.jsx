import { fadeInUp, float } from "@/app/pages/animations";
import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const maxWidth = "1366px"

export const NewHomeMainBannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;

    background-color: ${background.white};

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

    background-color: ${background.white};

    height: 453px;
    max-height: 453px;
    
    max-width: 485px;

    .homeMainTitle {
        font-family: "Graphie";
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
        text-align: left;
        color: ${background.green};
        
        max-width: 475px;

        animation: ${fadeInUp} 0.5s ease-out;
    }
    .highlighted {
        color: ${background.orange};
        font-weight: 600;
    }
    .homeMainSubtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 30px;
        font-weight: 400;
        color: ${background.greyHigh};

        animation: ${fadeInUp} 0.5s ease-out;

        text-align: normal;

        margin-top: 17px;
        
        /* max-width: 475px; */
        max-width: 440px;
    }
`

export const NewHomeMainDescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 12px;

    margin-top: 43px;

    .checkIcon {
        display: block;
        width: 36px;
        height: auto;
    }
    
    .homeMainDescription {
        display: block;

        font-family: "Graphie";
        font-size: 24px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.green};

        animation: ${fadeInUp} 0.5s ease-out;
        

        max-width: 475px;
    }
`
export const NewHomeMainBaloon = styled.div`
    position: absolute;
    border-radius: 0px 10px;
    border: 1px solid ${background.orange};
    background-color: ${background.white};

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
        color: ${background.green};
    }
    
    .hihglighted {
        font-weight: 600;
        color: ${background.orange};
    }
`
export const NewHomeBannerImageContainer = styled.div`
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 90% 10%;

    /* min-width: 550px; */
    width: 100%;
    /* max-width: 718px; */
    max-width: 765px;
    
    min-height: 360px;
    height: 453px;
    
    border-radius: 15px 15px 15px 15px;
`

export const CTAButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
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
      background-color: ${background.green};
      color: ${background.yellow};
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