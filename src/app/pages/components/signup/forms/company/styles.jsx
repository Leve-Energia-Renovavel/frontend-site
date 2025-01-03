import { fadeInRight } from "@/app/pages/globalAnimations";
import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const Form = styled.form`
    padding: 8px 100px;
    background-color: ${background.white};

    border-radius: 0px 0px 10px 10px;

    @media (max-width: 600px) {
        padding: 0px 10px;
    }
`

export const FormContent = styled.div`
    display: grid;
    grid-template-columns: 1.35fr 1fr 1fr;

    grid-column: span 3; 

    gap: 10px;

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`

export const FormRow = styled.div`
    display: grid;
    grid-column: span 3; 

    margin: 10px 0;

    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);
    grid-gap: 1rem;
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

    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 4em; 
      }

    .MuiOutlinedInput-input {
        border: 2px solid transparent;
        border-radius: 5px;  
        
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;

        color: ${background.greyMediumHigh}; 
        color: ${props => props.success && background.green}; 
        color: ${props => props.error && background.orange};
        
        &:focus {
            color: ${background.greyMediumHigh}; 
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};

            border: 2px solid ${background.greyBorder};
            border: 2px solid ${props => props.success && background.green};
            border: 2px solid ${props => props.error && background.orange};

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
            font-size: 12px;
            font-weight: 400;
            
            color: ${background.greyMediumHigh}; 
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};
            
            &:focus {
                color: ${background.greyMediumHigh}; 
                color: ${props => props.success && background.green}; 
                color: ${props => props.error && background.orange};
            }
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

export const RepresentativeTitleContainer = styled.div`

    margin: 27px 0;

    .representativeTitle {
        font-family: "Graphie";
        font-size: 14px;
        font-weight: 400;
        line-height: 120%;
        color: ${background.green};
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
