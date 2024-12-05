import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeTutorialContainer = styled.section`
    background-color: ${background.white};

    padding: 57px 79px;

    max-width: 1366px;
    margin: 0 auto;

    @media (max-width: 600px) {
      max-width: 100vw;
      padding: 0px;
    }
`

export const HomeTutorialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${background.grey};

    gap: 30px;

    border-radius: 20px;

    padding: 50px 37px;
    
    @media (max-width: 600px) {
      border-radius: 0px;
      padding: 20px 20px;
    }
    @media (max-width: 400px) {
      border-radius: 0px;
      padding: 30px 10px;
    }
`

export const HomeTutorialTitleContainer = styled.div`

    .leveTutorialTitle {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 100%;
      font-weight: 600;
      color: ${background.green};
    }

    @media (max-width: 600px) {
      .leveTutorialTitle {
        font-size: 24px;
      }
    }
`
export const HomeTutorialCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 1rem;

    @media (max-width: 600px) {
      justify-content: center;
    }
`

export const HomeTutorialCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 5px;
    background-color: ${background.white};

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
      color: ${background.green};
    }
    
    .cardDescription {
      font-family: "Graphie";
      font-size: 22px;
      line-height: 120%;
      font-weight: 400;
      color: ${background.greyHigh};
    }

    .cardIcon {
      width: 75px;
      height: 75px;
      color: ${background.green};
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
      
      padding: 16px 20px;

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
      
      padding: 13px 20px;

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

export const HomeTutorialAneelCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    background-color: ${background.white};

    gap: 14px;

    width: 100%;
    max-width: 550px;

    padding: 36px 35px;

    .aneelIcon {
      width: 79px;
      height: 39px;

      margin: 0 auto;
      margin-bottom: 28px;
    }

    .title {
      margin: 0 auto;
      font-family: "Graphie";
      font-size: 25px;
      line-height: 120%;
      font-weight: 600;
      color: ${background.green};
    }
    .description {
      margin: 0 auto;
      font-family: "Graphie";
      font-size: 18px;
      line-height: 120%;
      font-weight: 400;
      color: ${background.greyHigh};
      text-align: center;

      max-width: 318px;
    }
    
    @media (max-width: 600px) {
      padding: 36px 35px 16px 35px;

      min-width: 300px;
      width: 380px;
      max-width: 380px;
    }
    @media (max-width: 400px) {
      padding: 36px 35px;

      min-width: 300px;
      width: 380px;
      max-width: 350px;
    }

`

export const CTAButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;
  margin: 0 auto;

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
      background-color: ${background.yellow};
      color: ${background.green};
      cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
    text-align: center;
    
    @media (max-width: 600px) {
      margin: 0 auto;
      margin-left: -10px;
    }
    @media (max-width: 400px) {
      margin: 0 auto;
      margin-left: -25px;
    }
`