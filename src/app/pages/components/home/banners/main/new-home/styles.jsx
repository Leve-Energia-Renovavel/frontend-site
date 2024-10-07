import { fadeInUp, float } from "@/app/pages/animations";
import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const maxWidth = "1366px"
const halfWidth = "683px"

export const NewHomeMainBannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    background-color: ${newBackground.white};

    margin: 0 auto;

    padding: 75px 85px;

    gap: 43px;

    height: 100%;
    max-height: 567px;
    
    width: 100%;
    max-width: ${maxWidth};

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
    .homeMainDescription {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.green};

        animation: ${fadeInUp} 0.5s ease-out;
        
        margin-top: 48px;

        max-width: 475px;
    }
`

export const NewHomeMainDescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;
`
export const NewHomeMainBaloon = styled.div`
    position: absolute;
    border-radius: 0px 10px;
    border: 1px solid ${newBackground.orange};
    background-color: ${newBackground.white};

    animation: ${float} 4s ease-in-out infinite;

    padding: 14px 19px;
    
    right: 420px;
    top: 230px;

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
    /* background-position: 80% 30%; */

    /* min-width: 550px; */
    width: 100%;
    max-width: 618px;
    
    min-height: 360px;
    height: 453px;
    
    border-radius: 15px 15px 15px 15px;
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 50px;

  padding: 15px 53px;

  max-width: 330px;

  margin-top: 64px;
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