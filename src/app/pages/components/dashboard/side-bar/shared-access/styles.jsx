import { fadeInUp } from '@/app/pages/globalAnimations';
import { background } from '@/app/pages/globalStyles';
import styled from '@emotion/styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, IconButton } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CircularProgress from '@mui/material/CircularProgress';


const DashboardAccordionContainerBase = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== "hasSyncDistributorData" && prop !== "isMobileContent",
})``;

export const DashboardAccordionContainer = styled(DashboardAccordionContainerBase)`
    border-radius: 8px;
    background-color: ${background.white};
    box-shadow: none;
    max-width: 342px;
    margin: 0 auto;

    ${({ $hasSyncDistributorData }) => $hasSyncDistributorData ? `border: 1px solid ${background.green};` : `border:none;`};

    /* border: ${(props) => props.hasSyncDistributorData && props.isMobileContent ? `1px solid ${background.green};` : `none;`}; */

    ${(props) => props.isMobileContent && "display:none;"}

    .MuiAccordionSummary-root  {
      ${(props) => props.defaultExpanded && "pointer-events: none;"}
    }

    @media (max-width: 900px) {
        ${(props) => props.isMobileContent && "display:block;"}
    }
`
export const ExpandIcon = styled(ExpandMoreIcon)`

`
export const CheckIcon = styled(CheckCircleOutlineOutlinedIcon)`
    width: 16px;
    height: 16px;
`
//solution to transient errors
//https://stackoverflow.com/questions/71128841/mui-system-how-to-pass-transient-props-to-styled
export const DashboardAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== "hasSyncDistributorData" && prop !== "isMobileContent",
})`
    display: flex;
    flex-direction: row;
    align-items: center;  
    
     position: relative;
    
    color: ${(props) => props.hasSyncDistributorData ? background.green : background.orange};
    
    .sharedAccessTitle {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 21.6px */
        
        animation: ${fadeInUp} 0.5s ease-out;

    }
    
    .expandIcon, .checkIcon {
        margin-top: 2px;
        margin-left: 4px;
        color: ${(props) => props.hasSyncDistributorData ? background.green : background.orange};
    }
`
export const CloseButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isMobileContent",
})`
  position: absolute;
  right: 0%;
  top: 0%;

  .closeIcon {
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
        ${(props) => props.isMobileContent && "display:none;"}
    }
`
export const DashboardAccordionDetails = styled(AccordionDetails)`
    display: flex;
    flex-direction: column;

    gap: 16px;

    color: ${background.greyMediumHigh};

    .sharedAccessSubtitle {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 16.8px */

        max-width: 310px;

        animation: ${fadeInUp} 0.3s ease-out;

    }
`
export const SharedAccessForm = styled.form`
    display: flex;
    flex-direction: column;

    gap: 8px;

    .formInputField {
      background-color: ${background.white};
      border-radius: 5px;
      height: 40px;

    & .MuiInputLabel-shrink {
        /* Styles for the focused label */
        /* line-height: 2.4375em;  */
        font-size: 12px;
        margin-top: 10px;
    }
    
    .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 14px;
        height: 0px;
        font-weight: 400;
        color: ${background.black};
    }

        & label {
          font-family: "Graphie";
          font-size: 14px;
          font-weight: 500;
          line-height: 120%;
          color:  ${background.green};

          margin-top: -5px;
        }
        
        & .MuiFormLabel-root-MuiInputLabel-root {
            line-height: 2.4375em;
        }
        
        & .MuiOutlinedInput-root {
          & fieldset {
            height: 40px;
            border-radius: 5px;
            border-color:  ${props => props.isEdition ? background.orange : background.green}; /* Ensure border is green or orange depending if user has sync data */
          }
        } 

        & .MuiInputLabel-root {
          right: 0;
        }
        
        input {
          all: inset;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: all 1000s ease-in-out 0s;
        }

        .MuiInputLabel-root {
            color: ${background.orange};

        }

        &:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orange};

        }

        &.MuiOutlinedInput-notchedOutline {
            border-color: ${background.orange}; //to avoid changing the color of the input when the hover is removed

        }
        & .MuiSelect-select:focus {
            background-color: ${background.orange};

        }

        .emailIcon, .passwordIcon {
            width: 14px;
            height: 14px;
        }
        .visibilityIcon {
            width: 16px;
            height: 16px;
        }
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
export const EditFormButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${background.white};
  color: ${background.green};
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
    color: ${background.green};

    white-space: nowrap;
  }

  &:hover {
    cursor: pointer;
    background-color: ${background.greenTranslucent};

    span {
      text-decoration: underline;
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

export const LoadingIcon = styled(CircularProgress)`
`

