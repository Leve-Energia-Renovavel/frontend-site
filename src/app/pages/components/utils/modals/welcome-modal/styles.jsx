import { fadeInUp } from "@/app/pages/globalAnimations";
import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from "@mui/material";

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    
    border-radius: 8px;

    width: 100%;
    height: auto;

    max-width: fit-content;
    max-height: fit-content;
    
    box-shadow: 24px;
    
    padding: 1rem;

    outline: none;
    
    @media (max-width: 600px) {
        padding: 0rem;
        transform: translate(-48%, -50%);
    }
    `

export const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 342px;
    
    padding: 1rem;
    
    gap: 1rem;
    
    .title{
        font-family: "Graphie";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 26.4px */
        color: ${background.orange};
        
        animation: ${fadeInUp} 0.5s ease-out;
    }
    .subtitle{
        font-family: "Graphie";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 21.6px */
        color: ${background.green};
        
        animation: ${fadeInUp} 0.4s ease-out;
    }
    .descriptionPrimary, .descriptionSecondary{
        font-family: "Graphie";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        color: ${background.greyMediumHigh};
        
        animation: ${fadeInUp} 0.2s ease-out;
        
    }
    
    .highlighted {
        font-weight: 600;
        color: ${background.greyMediumHigh};
    }
    
    @media (max-width: 600px) {
        min-width: 340px;
        width: 342px;
        max-width: 342px;

        min-height: 360px;
        height: 369px;
        max-height: 369px;
    }
`

export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${background.green};
  color: ${background.white};
  border-radius: 30px;

  height: 40px;

  width: 100%;
  max-width: 388px;
  
  margin: 0 auto;
  
  padding: 8px 16px;
  
    span {
    font-family: "Graphie";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    text-transform: none;
    color: ${background.white};

    white-space: nowrap;
  }

  .loading {
    color: ${background.yellow};
  }

  &:hover {
    cursor: pointer;
    background-color: ${background.yellow};

    span {
      color: ${background.green};
    }
    
    .icon {
        color: ${background.green};
    }
  }

    @media (max-width: 600px) {
        max-width: 342px;
    }
`

export const SimpleArrowForward = styled(ArrowForwardIcon)`
    width: 21px;
    height: 21px;
    color: ${background.yellow};
`