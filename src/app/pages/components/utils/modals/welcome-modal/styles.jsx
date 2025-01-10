import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { Box, Button } from "@mui/material";
import { Switch } from '@mui/material';

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

export const LampIcon = styled(EmojiObjectsOutlinedIcon)`
  color: ${background.green};
  background-color: ${background.yellow};

  border-radius: 30px;
  width: 32px;
  height: 32px;
`
export const SwitchButton = styled(Switch)`
  width: 75px;
  height: 38px;
  padding: 0;

  margin: 0 auto;

  & .MuiSwitch-switchBase {
    padding: 0;
    margin: 3px;
    transition-duration: 300ms;

    &.Mui-checked {
      transform: translateX(38px);
      color: ${background.orange};

      & + .MuiSwitch-track {
        background-color: ${background.green};
        opacity: 1;
        border: 0;
      }

      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }

    &.Mui-focusVisible .MuiSwitch-thumb {
      color: #33cf4d;
      border: 30px solid #fff;
    }

    &.Mui-disabled .MuiSwitch-thumb {
    }

    &.Mui-disabled + .MuiSwitch-track {
      opacity: 0.7;
    }
  }

  & .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
  }

  & .MuiSwitch-track {
    border-radius: 30px;
    background-color: ${background.orange};
    opacity: 1;
  }
`;