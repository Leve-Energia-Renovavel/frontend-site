import { fadeInRight } from "@/app/pages/globalAnimations";
import { background, notification } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Alert, Button, TextField, keyframes } from "@mui/material";
import Divider from '@mui/material/Divider';

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
    margin: 16px auto 0 auto;
    
    width: 100%;
    max-width: 1366px;
    
    @media (max-width: 600px) {
        margin: 4px auto 0 auto;
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
    }
`

export const SignupFormContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    border-radius: 20px;

    gap: 8px;

    width: 100%;
    max-width: 1366px;

    padding: 1rem;  //change later !!!!



    @media (max-width: 600px) {
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
    }

    @media (max-width: 600px) and (max-height: 950px) {
        padding: 1rem 0 350px 0;
    }
    @media (max-width: 600px) and (max-height: 750px) {
        padding: 1rem 0 200px 0;
    }
    @media (max-width: 600px) and (max-height: 670px) {
        padding: 1rem 0 150px 0;
    }
`

export const Form = styled.form`
    padding: 8px 100px;
    background-color: ${background.white};

    @media (max-width: 600px) {
        padding: 0px 10px;
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
    grid-template-columns: 1.5fr .8fr 1.5fr;
    

    grid-column: span 3; 

    gap: 10px;

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
        font-weight: 400;

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
            color:${background.greyMediumHigh};
            color: ${props => props.success && background.green}; 
            color: ${props => props.error && background.orange};
            
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


export const fileInputStyles = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    padding: '0 5px',
    marginLeft: '.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
}





