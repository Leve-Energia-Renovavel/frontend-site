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
    
    max-width: 375px;
    
    padding: 24px;
    
    gap: 1rem;
    
    @media (max-width: 600px) {
        min-width: 340px;
        width: 375px;
        max-width: 375px;

        min-height: 360px;
        height: fit-content;
        max-height: fit-content;
    }
`

export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${background.green};
  color: ${background.white};
  border-radius: 30px;

  height: 48px;

  width: 100%;
  max-width: 388px;
  
  margin: 0 auto;
  
  padding: 8px 16px;
  
    span {
    font-family: "Graphie";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
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