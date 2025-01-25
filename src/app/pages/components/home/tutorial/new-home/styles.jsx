import { background, containerPadding } from "@/app/pages/globalStyles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeTutorialContainer = styled.section`
    background-color: ${background.white};
    
    padding: 42px 0px;
    
    width: 100%;
    max-width: 1366px;
    
    @media (max-width: 600px) {
      background-color: ${background.grey};
      max-width: 100vw;
    }
`

export const HomeTutorialTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 

    .leveTutorialTitle {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 100%;
      font-weight: 600;
      color: ${background.green};
    }
    
    .leveTutorialSubtitle {
      font-family: "Graphie";
      font-size: 20px;
      line-height: 120%;
      font-weight: 500;
      color: ${background.greyDarker};

      margin-left: 6px;
    }

    @media (max-width: 600px) {

      padding: 12px;
      padding-bottom: 0;

      .leveTutorialTitle {
        font-size: 24px;
        text-align: left;
        max-width: 350px;
      }
      .leveTutorialSubtitle {
        display: none;
      }
    }
`
export const HomeTutorialCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    
    margin-top: 32px;
    
    gap: 1rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 7px;
    }
`

export const HomeTutorialCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 10px;
    background-color: ${background.white};

    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    gap: 15px;

    min-height: 300px;
    height: 343px;
    max-height: 343px;
    
    min-width: 350px;
    width: 100%;
    max-width: 355px;

    margin-top: 7px;
    
    padding: 23px 32px;

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
      color: ${background.greyDarker};

      max-width: 300px;
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


export const Divider = styled.div`
  border-top: 2px solid ${background.grey};
`
export const HomeTutorialAneelCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${background.white};

    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    margin: 90px auto 60px auto;

    gap: 87px;

    width: 100%;
    max-width: 1006px;

    height: 100%;
    max-height: 220px;

    padding: 36px 35px;

    .aneelIcon {
      width: 134px;
      height: 66px;
    }
    
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      gap: 14px;
      margin: 0 auto;
      
      max-height: fit-content;

      border: 0;
      
      padding: 36px 35px 16px 35px;
      
      min-width: 300px;
      width: 380px;
      max-width: 380px;

      .aneelIcon {
        width: 79px;
        height: 39px;

        margin: 0 auto;
        margin-bottom: 28px;
      }
    }
    @media (max-width: 400px) {
      padding: 36px 35px;

      min-width: 300px;
      width: 380px;
      max-width: 350px;
    }

`

export const HomeTutorialAneelCardContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 649px;

  gap: 12px;

  .title {
      font-family: "Graphie";
      font-size: 25px;
      line-height: 120%;
      font-weight: 600;
      color: ${background.green};
    }
    .description {
      font-family: "Graphie";
      font-size: 22px;
      line-height: 120%;
      font-weight: 500;
      color: ${background.greyDarker};

      max-width: 620px;
    }
    
    @media (max-width: 600px) {
      .title {
        margin: 0 auto;
      }
      .description {
        font-size: 18px;
        margin: 0 auto;
        max-width: 318px;

        text-align: center;
      }
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

    width: fit-content;
    margin-left: auto;
    margin-top: 40px;
    margin-right: 20px;
    
    @media (max-width: 600px) {
      width: 100%;
      display: block;
      margin: 0 auto;
    }
    @media (max-width: 400px) {
      display: block;
      margin: 0 auto;
    }
`