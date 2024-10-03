import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeTutorialContainer = styled.div`
    background-color: ${newBackground.white};

    padding: 57px 79px;
`
export const HomeTutorialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${newBackground.orange};

    gap: 36px;

    border-radius: 20px;

    padding: 50px 37px;

    .leveTutorialTitle {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 23px;
      font-weight: 600;
      color: ${newBackground.white};
    }
`
export const HomeTutorialCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;

    flex-wrap: wrap;
`

export const HomeTutorialCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 5px;
    background-color: ${newBackground.white};

    gap: 8px;

    min-height: 200px;
    max-height: 203px;
    
    min-width: 360px;
    width: 375px;
    max-width: 380px;

    margin-top: 7px;
    
    padding: 20px;
    padding-bottom: 26px;

    .cardTitle {
      font-family: "Graphie";
      font-size: 21px;
      line-height: 24px;
      font-weight: 600;
      color: ${newBackground.green};
    }
    
    .cardDescription {
      font-family: "Graphie";
      font-size: 18px;
      line-height: 20px;
      font-weight: 500;
      color: ${newBackground.greyHigh};
    }

    .cardIcon {
      width: 49px;
      height: 49px;
      color: ${newBackground.green};
    }

    @media (max-width: 400px) {
      min-height: 200px;
      max-height: 203px;
      
      min-width: 300px;
      width: 338px;
      max-width: 338px;
  
      margin-top: 7px;
      
      padding: 13px 10px;

      .cardNumber {
        font-size: 20px;
      }
    
      .cardDescription {
        font-size: 17px;
        max-width: 320px;
      }

      .cardIcon {
        width: 42px;
        height: 44px;
      }
    }
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.green};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;

  max-width: 330px;

  margin-top: 19px;
  margin-bottom: 40px;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
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

export const ButtonContainer = styled.div`
    text-align: center;
`