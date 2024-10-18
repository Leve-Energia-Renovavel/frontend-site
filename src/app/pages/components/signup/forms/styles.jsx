import { background, notification } from "@/app/pages/styles";
import styled from "@emotion/styled";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Alert, Button, Checkbox, FormControlLabel, FormGroup, TextField, keyframes } from "@mui/material";
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SignupFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orange};
    
    border-radius: 20px;
    margin: 0 auto;

    width: 100%;
    max-width: 1196px;

    min-height: 900px;
    
    padding: 2rem 0 0 0;  //change later !!!!
    

    @media (max-width: 600px) {
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
        padding: 1rem 0 0 0;
    }
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
        color: ${background.white};
    }
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 10px;
        padding: 0 1rem;
        margin-bottom: 24px;  //margin for form header
    }
`
export const FormTitleButton = styled(Button)`
    color: ${background.orange};
    background-color: ${background.yellow};
    border-radius: 30px;
    text-transform: none;
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 700;
    
    &:hover {
        color: ${background.yellow};
        background-color: ${background.green};
    }
`

export const SignupFormContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    border-radius: 20px;

    gap: 10px;

    width: 100%;
    max-width: 1196px;

    padding: 1rem;  //change later !!!!

    .fillFormBelow { 
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${background.green};
    }

    @media (max-width: 600px) {
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
    }
`
export const SignupFormHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    .formHeaderTitle { 
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 700;
        color: ${background.orange};

        white-space: nowrap;
    }
    
    .formHeaderSubtitle {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        color: ${background.orange};

        white-space: nowrap;
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
                color: ${background.orange};
            }
            .helpIcon {
                color: ${background.orange};
            }
        }

    h6 {
        font-family: "Graphie";
        font-size: 12px;
        font-weight: 700;
        color: ${background.green};
    }
`

export const HelpIcon = styled(HelpOutlineIcon)`
    color: ${background.green};
    width: 20px;
    height: 20px;
`

export const SignupLinearProgress = styled(LinearProgress)`
    background-color: ${background.yellow};
    border-bottom-width: 5px;

    margin-bottom: 15px;
    
    & .MuiLinearProgress-bar {
        background-color: ${background.orange};
    }
`

export const Form = styled.form`
    padding: 8px 100px;
    background-color: ${background.white};

    @media (max-width: 600px) {
        padding: 8px 10px;
    }
`
export const FormRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column: span 3; 

    gap: 1rem;

    margin: 10px 0;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
        grid-gap: 1rem;
    }
`
export const FormContent = styled.div`
    display: grid;
    /* grid-template-columns: repeat(3, 1fr);  */
    grid-template-columns: 1.35fr 1fr 1fr;

    grid-column: span 3; 

    gap: 10px;

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

    gap: 10px;

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`
export const FormInput = styled(TextField)`
    border-radius: 14px;
    
    && {
        background-color: ${background.orangeTranslucent}; 
    }

    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 2.8em; 
      }

    .MuiOutlinedInput-input {
        border: 2px solid transparent;
        border-radius: 15px;  
        
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.orange};
        
        &:focus {
            color: ${background.orange};
            border: 2px solid ${background.orange};
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

        /* .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);
        } */

        .searchIcon { 
            color:${background.orange};
            &:hover{
                cursor: pointer;
            }
        }

        .formLoading {
            color: ${background.orange};
        }


`

export const FileUploadContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr); 
  grid-column: span 3; 
  flex-direction: row;
  flex-wrap: wrap;
`
export const FileUploadItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 25px;

  .documentUpload {
    font-family: "Graphie";
    font-size: 14px;
    font-weight: 600;
    color: ${background.orange};
    text-decoration: underline;
    text-transform: none;
  }
`

export const FormDivider = styled(Divider)`
`


export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px 100px;
    
    gap: 30px;
    
    @media (max-width: 600px) {
        padding: 10px;
    }

`
export const FormTermsContainer = styled(FormGroup)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    gap: 1rem;
    align-items: flex-start; /* Align items to the start */
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`
export const FormTermsControl = styled(FormControlLabel)`

    &.MuiFormControlLabel-root	 {
        color: ${background.green};
        max-width: 320px;
    }
    
    & .MuiFormControlLabel-label{
        font-family: "Graphie"; 
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        text-align: left;
    }
`

export const FormTermsCheckbox = styled(Checkbox)`
    color: ${background.green};
    
    &.Mui-checked {
        color: ${background.orange};
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
            color: ${background.orange};
    }

    .submitLoading {
        color: ${background.orange};
    }

`

export const FormSubmitButton = styled(Button)`
    color: ${background.yellow};
    background-color: ${background.orange};
    border-radius: 30px;
    text-transform: none;
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 700;
    
    &:hover {
        color: ${background.yellow};
        background-color: ${background.green};
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


export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.alert};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`

export const SnackbarMessageNotification = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.success};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`


export const fileInputStyles = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    padding: '0 5px',
    marginLeft: '.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
}



