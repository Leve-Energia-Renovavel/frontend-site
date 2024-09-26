import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeSecondaryBoxesContainerMobile = styled.div`
    background-color: ${newBackground.grey};

    display: none;
    
    @media (max-width: 600px) {
        display: block;
    }
`
export const HomeSecondaryBannerContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 100vw;
    min-height: 210px;

    width: 100%;
    height: 100%;

    max-height: 211px;

    padding: 79px 19px;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 0% 25%;
    background-size: 120%; /* Zoom in the background image */
    z-index: 9; 
    
    .homeBoxesSecondarySectionTitle {
        font-family: "Graphie";
        font-size: 25px;
        line-height: 23px;
        font-weight: 600;
        color: ${newBackground.white};
        
        max-width: 240px;
        margin-top: 10px;
    }
    `
export const MobileBoxesContainer = styled.div`
    position: relative;
    z-index: 10; 

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    top: -36px;

    gap: 7px;
`
export const MobileBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 5px;

    gap: 9px;

    padding: 11px 12px;
    
    min-height: 120px;
    max-height: 130px;
    
    min-width: 185px;
    max-width: 190px;
    
    .title {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        color: ${newBackground.orange};

        max-width: 130px;
    }

    .subtitle {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 16px;
        font-weight: 500;
        color: ${newBackground.green};

        max-width: 130px;

        margin-top: auto;
        margin-bottom: 16px;
    }
    
    
    .highlighted {
        font-weight: 700;

    }

    @media (max-width: 400px) {
        padding: 11px 12px;

        min-height: 120px;
        max-height: 130px;

        min-width: 165px;
        max-width: 170px;

        .title {
            font-size: 16.5px;
            line-height: 18px;

            max-width: 120px;
        }

        .subtitle {
            font-size: 15.5px;
            line-height: 16px;

            max-width: 130px;

            margin-top: auto;
            margin-bottom: 16px;
        }
    }
`
export const ButtonContainer = styled.div`
    text-align: center;
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.green};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 48px;

  margin-bottom: 30px;

  padding: 15px 53px;

  max-width: 305px;
  
  span {
    font-family: "Graphie";
    font-size: 17px;
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