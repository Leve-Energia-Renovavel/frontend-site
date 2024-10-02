import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const HomeFourthSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${newBackground.white};
    
    gap: 2rem;
    
    padding: 2rem;
    margin-bottom: 64px; //80px - 16px from banner below
    
    @media (max-width: 600px) {
      background-color: ${newBackground.orange};
      margin: 0;
    }
    `
export const HomeFourthSectionTitleContainer = styled.div`
  text-align: center;

  .sectionTitle {
      font-family: "Graphie";
      font-size: 34px;
      font-weight: 600;
      color: ${newBackground.white};
  }

  @media (max-width: 600px) {
    .sectionTitle {
      font-size: 28px;
      font-weight: 600;
      max-width: 220px;
    }
  }
`

export const HomeFourthSectionCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${(props) => props.visible && fadeInUpAnimation};

    gap: 1rem;

    @media (max-width: 1150px) {
      flex-wrap: wrap;
    }
    @media (max-width: 600px) {
      display: none;
    }
`

export const HomeFourthSectionCardContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    display: none;
    
    @media (max-width: 600px) {
      display: block;
    }
`



export const HomeFourthSectionCard = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 1px solid #ccc;
    
    border-radius: 25px;
    width: 280px;
    max-width: 300px;
    
    padding: 2rem;

    .invisible { 
      @media (max-width: 600px) {
      flex-direction: row-reverse;
      }
    }
    
    @media (max-width: 600px) {
      flex-direction: row-reverse;
      width: 327px;
      height: auto;
      padding: 1rem;
    }
`

export const HomeFourthSectionCardMobile = styled.div`
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
export const HomeFourthSectionIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: start;
    }

    .titleIcon {
      width: 65px;
      height: auto;

      object-fit: contain;
      
      @media (max-width: 600px) {
        width: 50px;
        height: auto;
      }
    }
`
export const HomeFourthSectionTitle = styled.div`

  .cardTitle {
    font-family: "Graphie";
    font-size: 42px;
    font-weight: 600;
    color: ${newBackground.green};
  }
`
export const HomeFourthSectionDescription = styled.div`
  .cardDescription {
    font-family: "Graphie";
    font-size: 17px;
    font-weight: 500;
    color: ${newBackground.green};

    line-height: 17px;
  }
`
export const ButtonSimulateYourEconomy = styled(Button)`
 padding: .5rem 2rem;
  background-color: ${newBackground.orange};
  color: ${newBackground.yellow};
  border-radius: 30px;
  
  margin: 1rem 0 0 0;
  
  @media (max-width: 600px) {
    display: none;
    /* margin: 0; */
  }

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 500;
    text-transform: none;

    margin-left: auto;
  }
  
  &:hover {
    background-color: ${newBackground.yellow};
    color: ${newBackground.orange};
    cursor: pointer;
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