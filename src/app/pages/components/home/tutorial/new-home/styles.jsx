import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeTutorialContainer = styled.section`
    background-color: ${newBackground.white};

    padding: 57px 79px;

    max-width: 1366px;
    margin: 0 auto;

    @media (max-width: 600px) {
      padding: 0px;
    }
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
      line-height: 30px;
      font-weight: 600;
      color: ${newBackground.white};
      
      text-align: center;
    }
    
    @media (max-width: 600px) {
      .leveTutorialTitle {
        font-size: 24px;
      }

      border-radius: 0px;
      padding: 50px 20px;
    }
    @media (max-width: 400px) {
      border-radius: 0px;
      padding: 30px 10px;
    }
`
export const HomeTutorialCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

    gap: 15px;

    min-height: 280px;
    height: 282px;
    max-height: 282px;
    
    min-width: 360px;
    width: 500px;
    max-width: 500px;

    margin-top: 7px;
    
    padding: 18px 32px;

    .cardTitle {
      font-family: "Graphie";
      font-size: 22px;
      line-height: 24px;
      font-weight: 600;
      color: ${newBackground.green};
    }
    
    .cardDescription {
      font-family: "Graphie";
      font-size: 22px;
      line-height: 28px;
      font-weight: 500;
      color: ${newBackground.greyHigh};
    }

    .cardIcon {
      width: 75px;
      height: 75px;
      color: ${newBackground.green};
    }

    @media (max-width: 600px) {
      min-height: 200px;
      height: fit-content;
      max-height: 260px;
      
      min-width: 300px;
      width: 380px;
      max-width: 380px;

      gap: 10px;
  
      margin-top: 7px;
      
      padding: 16px 10px;

      .cardNumber {
        font-size: 20px;
      }
    
      .cardDescription {
        font-size: 18px;
        line-height: 20px;
        max-width: 330px;
      }

      .cardIcon {
        width: 42px;
        height: 44px;
      }
    }

    @media (max-width: 400px) {
      min-height: 220px;
      height: fit-content;
      max-height: 230px;
      
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