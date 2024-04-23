import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button, TextField, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';

export const SignupFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.orange};
    
    border-radius: 20px;
    margin: 0 auto;

    width: 1196px;

    padding: 2rem 0;  //change later !!!!
`
export const FormTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 30px;

    margin-bottom: 34px;  //margin for form header

    h2 {
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 500;
        color: ${newBackground.white};
    }
`
export const FormTitleButton = styled(Button)`
    color: ${newBackground.orange};
    background-color: ${newBackground.yellow};
    border-radius: 30px;
    text-transform: none;
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 700;
    
    &:hover {
        color: ${newBackground.yellow};
        background-color: ${newBackground.green};
    }
`

export const SignupFormContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    border-radius: 20px;

    gap: 10px;

    width: 1196px;

    padding: 1rem;  //change later !!!!

    .fillFormBelow { 
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${newBackground.green};
    }
`
export const SignupFormHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    h1 { 
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 700;
        color: ${newBackground.orange};
    }

    h6 {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
`
export const SignupFormHeaderHelpContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
`
export const SignupFormHeaderHelpContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 5px;

    &:hover {
        cursor: pointer;
            h6 {
                color: ${newBackground.orange};
            }
            .helpIcon {
                color: ${newBackground.orange};
            }
        }

    h6 {
        font-family: "Graphie";
        font-size: 12px;
        font-weight: 700;
        color: ${newBackground.green};
    }
`

export const HelpIcon = styled(HelpOutlineIcon)`
    color: ${newBackground.green};
    width: 20px;
    height: 20px;
`

export const SignupLinearProgress = styled(LinearProgress)`
    background-color: ${newBackground.yellow};
    border-bottom-width: 5px;

    margin-bottom: 15px;
    
    & .MuiLinearProgress-bar {
        background-color: ${newBackground.orange};
    }
`

export const Form = styled.form`
    padding: 8px 100px;
    background-color: ${newBackground.white};
    `
export const FormRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column: span 3; 

    gap: 1rem;
`
export const FormContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-column: span 3; 

    gap: 10px;

    margin-top: 7px;
`
export const FormInput = styled(TextField)`
    border-radius: 10px;
    
    && {
        background-color: ${newBackground.orangeTranslucent}; 
    }
    
    .MuiOutlinedInput-input {
        border: 2px solid transparent;
        border-radius: 10px;  

        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${newBackground.orange};

        
        &:focus {
            border: 2px solid ${newBackground.orange};
            background-color: ${newBackground.orangeFocused}; 
            }
        }

        && fieldset {
            border: none;
        }     
        
        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${newBackground.orange};
        }

        &:focus fieldset {
            border-color: ${newBackground.green}; /* Example: Change border color */
            box-shadow: 0 0 0 2px ${newBackground.orange}; /* Example: Add a box shadow */
        }

        
        /* .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);
        } */
`

export const FormDivider = styled(Divider)`
`


export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px 100px;

    gap: 30px;

`
export const FormTermsContainer = styled(FormGroup)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    gap: 1rem;
    align-items: flex-start; /* Align items to the start */
`
export const FormTermsControl = styled(FormControlLabel)`

    &.MuiFormControlLabel-root	 {
        color: ${newBackground.green};
        max-width: 320px;
    }
    
    & .MuiFormControlLabel-label{
        font-family: "Graphie"; 
        font-size: 12px;
        font-weight: 500;
        text-align: left;
    }
`

export const FormTermsCheckbox = styled(Checkbox)`
    color: ${newBackground.green};
    
    &.Mui-checked {
        color: ${newBackground.orange};
    }
`

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .requiredFields {
            font-family: "Graphie";
            font-size: 12px;
            font-weight: 500;
            color: ${newBackground.orange};
    }
`

export const FormSubmitButton = styled(Button)`
    color: ${newBackground.yellow};
    background-color: ${newBackground.orange};
    border-radius: 30px;
    text-transform: none;
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 700;
    
    &:hover {
        color: ${newBackground.yellow};
        background-color: ${newBackground.green};
    }
`



