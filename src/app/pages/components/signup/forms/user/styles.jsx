import { fadeInRight } from "@/app/pages/globalAnimations";
import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

const formGap = "8px"
const inputHeight = "48px"

export const Form = styled.form`
    padding: 8px 100px;
    background-color: ${background.white};

    border-radius: 0px 0px 10px 10px;

    @media (max-width: 600px) {
        padding: 0px 10px;
    }
`
export const FormRow = styled.div`
    display: grid;
    grid-column: span 3; 

    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);

    grid-gap: ${formGap};
`
export const FormContentLarge = styled.div`
    display: grid;
    grid-template-columns: 2.7fr 1fr;

    grid-column: span 3; 

    gap: ${formGap};

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`
export const FormContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-column: span 3; 

    gap: ${formGap};

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`
export const FormLastRow = styled.div`
    display: grid;
    grid-template-columns: 1.35fr 1fr 1fr;
    grid-column: span 3; 

    gap: ${formGap};

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`

const FormInputBase = styled(TextField, {
    shouldForwardProp: (prop) => prop !== "success" && prop !== "error",
})``;

export const FormInput = styled(FormInputBase)`
    border-radius: 5px;

    animation: ${fadeInRight} 0.5s ease-out;
    
    && {
        background-color: ${background.greyTranslucent}; 
        background-color: ${props => props.success && background.greenTranslucent}; 
        background-color: ${props => props.error && background.orangeTranslucent}; 
    }
    .MuiOutlinedInput-root {
        height: ${inputHeight}; 
        max-height: ${inputHeight};
        width: 100%;
        box-sizing: border-box; 
    }

    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 45px; 
      }

    .MuiOutlinedInput-input {
        padding: 12px 14px; /* Adjusted for proper alignment */

        border: 2px solid transparent;
        border-radius: 5px;  

        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;

        color: ${background.greyMediumHigh} !important; 
        color: ${props => props.success && background.green} !important; 
        color: ${props => props.error && background.orange} !important;
        
        &:focus {
            color: ${background.greyMediumHigh} !important; 
            color: ${props => props.success && background.green} !important; 
            color: ${props => props.error && background.orange} !important;

            border: 2px solid ${background.greyBorder}; 
            border-color: ${props => props.success && background.green};
            border-color: ${props => props.error && background.orange};

            background-color: ${background.white}; 
            background-color: ${props => props.success && background.greenTranslucent}; 
            background-color: ${props => props.error && background.orangeTranslucent};
            }
        }

        && fieldset {
            border: none;
        }     

        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 16px;
            font-weight: 400;
            
            color: ${background.greyMediumHigh}; 
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};
        }
        
        .Mui-focused {
            color: ${background.greyMediumHigh} !important; 
            color: ${props => props.success && background.green} !important; 
            color: ${props => props.error && background.orange} !important;
        }

        /* .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);
        } */

        .searchIcon { 
            color: ${background.greyMediumHigh}; 
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};

            &:hover{
                cursor: pointer;
            }
        }

        .formLoading {
             color: ${background.greyMediumHigh}; 
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};
        }

`

export const FormFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    padding: 1rem 0;

    gap: 1rem;

    .requiredFields {
            font-family: "Graphie";
            font-size: 12px;
            font-weight: 500;
            color: ${background.orange};
    }

    .submitLoading {
        color: ${background.orange};
    }

    @media (max-width: 600px) {
        justify-content: center;
    }

`

export const FormSubmitButton = styled(Button)`
    display: flex;
    align-items: center;
  background-color: ${background.green};
  color: ${background.white};
  border-radius: 30px;

  height: 54px;

  width: 100%;
  max-width: 250px;
  max-width: 342px;

  padding: 8px 16px;
  
  span {
    font-family: "Graphie";
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    text-transform: none;
    color: ${background.white};

    white-space: nowrap;
  }

  .icon {
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
`
export const BackButton = styled(Button)`
    display: flex;
    align-items: center;
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 54px;

  width: 100%;
  max-width: fit-content;
  
  .icon {
        width: 26px;
        height: auto;
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
`


export const InstallationInput = styled(TextField)`
    border-radius: 10px;
    
    && {
        background-color: ${background.orangeTranslucent}; 
    }
    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 3em; 
    }
    
    .MuiOutlinedInput-input {
        border: 2px solid ${background.orange};
        border-radius: 14px;  

        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.orange};

        
        &:focus {
            background-color: ${background.orangeFocused}; 
            }
        }

        && fieldset {
            border: none;
        }     
        
        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${background.orange};
            
            &:focus {
                color: ${background.orange};
            }
            
        }
`
export const InstallationNumberDisclaimer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${background.yellow};
    border-radius: 15px;
    
    gap: 8px;
    
    padding: 7px;
    
    .installationNumberDisclaimer {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        color: ${background.green};
    }
    
    .underlined {
        font-family: "Graphie";
        font-size: 12px;
        font-weight: 600;
        color: ${background.green};
        text-decoration: underline;
    }
    .infoIcon {
        color: ${background.green};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${background.green};
        .installationNumberDisclaimer {
            color: ${background.yellow};
        }
        .underlined {
            color: ${background.yellow};
        }
        .infoIcon {
            color: ${background.yellow};
        }
    }

`