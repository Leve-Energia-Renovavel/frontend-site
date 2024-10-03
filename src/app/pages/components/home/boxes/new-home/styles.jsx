import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const NewHomeBoxesContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};
    
    padding: 47px 85px;

    gap: 42px;
    
    .homeBoxesTitle{
        font-family: "Graphie";
        font-size: 34px;
        line-height: 23px;
        font-weight: 600;
        color: ${newBackground.green};
    }
    
    .homeBoxesDescription{
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        color: ${newBackground.greyMediumHigh};
    }
    
    @media (max-width: 600px) {
        display: none;
    }
    `
export const BoxesContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;
`
export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    padding: 27px 21px;
    background-color: ${newBackground.white};

    min-width: 250px;
    max-width: 100%;
    max-width: 265px;

    min-height: 200px;
    height: 100%;
    max-height: 218px;
    
    .boxTitle {
        font-family: "Graphie";
        font-size: 28px;
        line-height: 24px;
        font-weight: 600;
        color: ${newBackground.orange};

        max-width: 185px;
    }

    .boxSubtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 24px;
        font-weight: 800;
        color: ${newBackground.greyHigh};
        
        margin-top: 8px;
        max-width: 180px;
    }
`

export const CTAButton = styled(Button)`
  background-color: ${newBackground.green};
  color: ${newBackground.yellow};
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
      background-color: ${newBackground.orange};
      color: ${newBackground.white};
      cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
    text-align: left;

    width: 100%;
    max-width: 1366px;

    @media (max-width: 600px) {
      display: none;
  }
`