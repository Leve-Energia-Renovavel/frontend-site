import { float } from "@/app/pages/animations"
import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeSecondaryBoxesContainerMobile = styled.div`
    display: none;
    position: relative;

    background-color: ${background.grey};
    
    @media (max-width: 600px) {
        display: block;
    }
`

export const HomeBoxesBaloon = styled.div`
    position: absolute;
    border-radius: 0px 10px;
    border: 1px solid ${background.orange};
    background-color: ${background.white};

    animation: ${float} 4s ease-in-out infinite;

    padding: 10px;
    
    right: 155px; 
    top: 630px;

    right: 36%;
    top: 12%;

    min-width: 240px;
    width: 100%;
    max-width: 245px;

    height: fit-content;
    
    p, span {
        font-family: "Graphie";
        font-size: 13px;
        line-height: 120%;
        font-weight: 500;
        color: ${background.green};
    }
    
    .hihglighted {
        font-weight: 600;
        color: ${background.orange};
    }
    .hihglighted-final {
        display: block;
        font-weight: 600;
        color: ${background.orange};
    }

   @media (max-width: 768px) {
        right: 50%; /* Align more centrally for smaller devices */
        top: 10%; /* Lower to fit smaller viewports */
    }

    @media (max-width: 480px) {
        right: 38%;
        top: 7%;
    }

    @media (max-width: 412px) {
        right: 37%;
        top: 7%;
    }
    @media (max-width: 400px) {
        right: 30%;
        top: 7%;
    }
    @media (max-width: 380px) {
        right: 30%;
        top: 7%;
    }
    @media (max-width: 362px) {
        right: 29%;
        top: 7%;
    }
`
export const HomeSecondaryBannerContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    min-width: 100vw;
    
    height: 100%;
    width: 100%;
    
    min-height: 360px;
    max-height: 360px;

    padding: 35px 16px 0px 16px;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 100% 30%;
    background-size: 110%; /* Zoom in the background image */
    z-index: 9; 
    
    .homeBoxesSecondarySectionTitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.green};
        
        max-width: 180px;

        margin-bottom: 80px;
    }
    `
export const MobileBoxesContainer = styled.div`
    position: relative;
    z-index: 10; 

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    top: -70px;

    gap: 7px;
`
export const MobileBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 5px;

    gap: 12px;

    padding: 14px;
    
    min-height: 120px;
    max-height: 150px;
    
    min-width: 185px;
    max-width: 190px;
    
    .title {
        font-family: "Graphie";
        font-size: 20px;
        line-height: 18px;
        font-weight: 600;
        color: ${background.orange};
    }

    .subtitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 100%;
        font-weight: 400;
        color: ${background.greyHigh};

        max-width: 160px;

        margin-top: auto;
        margin-bottom: 10px;
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

            max-width: 130px;
        }

        .subtitle {
            font-size: 15.5px;
            line-height: 16px;

            max-width: 142px;

            margin-top: auto;
            margin-bottom: 16px;
        }
    }
`

export const HomeBoxesMobileBenefitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0 12px;
    margin-bottom: 18px;

    gap: 10px;

    .homeBoxesBenefitsTitle {
        display: block;
        margin: 0 auto 16px 0;

        font-family: "Graphie";
        font-size: 34px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.orange};
    }

    @media (max-width: 600px) {
      .homeBoxesBenefitsTitle {
        font-size: 24px;
      }
    }
`
export const HomeBenefitBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 5px;
    
    gap: 10px;

    padding: 22px 10px;
    margin: 0 auto;

    width: 100%;


    .title{
        font-family: "Graphie";
        font-size: 18px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.green};
    }
    .subtitle{
        font-family: "Graphie";
        font-size: 16px;
        line-height: 100%;
        font-weight: 500;
        color: ${background.greyHigh};
    }
`
export const ButtonContainer = styled.div`
    text-align: center;
`

export const CTAButton = styled(Button)`
  background-color: ${background.green};
  color: ${background.yellow};
  border-radius: 30px;

  height: 52px;

  margin-bottom: 30px;

  padding: 15px 53px;

  max-width: 330px;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${background.yellow};
      color: ${background.green};
      cursor: pointer;
  }
`