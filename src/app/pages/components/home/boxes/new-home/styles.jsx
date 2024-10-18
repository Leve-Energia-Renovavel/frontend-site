import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const NewHomeBoxesContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${background.grey};

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    
    padding: 47px 25px;

    gap: 42px;
    
    .homeBoxesTitle{
        font-family: "Graphie";
        font-size: 34px;
        line-height: 23px;
        font-weight: 600;
        color: ${background.green};
    }
    
    .homeBoxesDescription{
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        color: ${background.greyMediumHigh};
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
    padding: 27px 21px 52px 21px;
    background-color: ${background.white};

    min-width: 250px;
    width: 100%;
    /* max-width: 297px; */

    min-height: 200px;
    max-height: 218px;
    
    .boxTitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 24px;
        font-weight: 600;
        color: ${background.orange};

        white-space: nowrap;

        /* max-width: 90px; */
    }

    .boxSubtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 24px;
        font-weight: 800;
        color: ${background.greyHigh};
        
        margin-top: 20px;
        max-width: 260px;
        margin-bottom: 50px;
    }

    @media (max-width: 600px) {
    }
`

export const CTAButton = styled(Button)`
  background-color: ${background.green};
  color: ${background.yellow};
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
      background-color: ${background.orange};
      color: ${background.white};
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