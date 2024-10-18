import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const InstallationFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
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
    grid-template-columns: 1fr 1fr 1fr;

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
    grid-template-columns: 2fr 1fr;
    grid-column: span 3; 

    gap: 10px;

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }
`

export const FormInput = styled(TextField)`
    border-radius: 10px;

    height: 100%;
    max-height: 50px;
    
    && {
        background-color: ${background.grey}; 
    }


    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 2.8em; 
    }

    .MuiOutlinedInput-input {
        border: 2px solid transparent;
        border-radius: 10px;  
        
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.green};

        height: 8px;
        
        &:focus {
            color: ${background.green};
            border: 2px solid ${background.green};
            background-color: ${background.greenLight}; 
            }
        }

        && fieldset {
            border: none;
        }     

        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${background.green};

            height: 100%;
            max-height: 50px;

            &:focus {
                color: ${background.green};
            }
        }

        /* .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);
        } */

        .searchIcon { 
            color:${background.green};
            &:hover{
                cursor: pointer;
            }
        }

        .formLoading {
            color: ${background.green};
        }
`

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    margin: 1rem 0;
    gap: 10px;

    .submitLoading {
        margin-top: .5rem;
        margin-right: 1rem;
        color: ${background.orange};
    }

`

export const FormSubmitButton = styled(Button)`
    color: ${background.white};
    background-color: ${background.orange};
    border-radius: 10px;
    text-transform: none;
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 600;
    
    &:hover {
        color: ${background.yellow};
        background-color: ${background.green};
    }
`
export const FormCancelButton = styled(Button)`
    color: ${background.orange};
    background-color: ${background.white};
    border-radius: 10px;
    text-transform: none;
    border: 1px solid ${background.orange};
    
    padding: 4px 14px;
    
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 600;
    
    &:hover {
        color: ${background.white};
        background-color: ${background.orange};

    }
`


export const InstallationInput = styled(TextField)`
    border-radius: 10px;
    
    && {
        background-color: ${background.greenLight}; 
    }
    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 3em; 
    }
    
    .MuiOutlinedInput-input {
        border: 2px solid ${background.green};
        border-radius: 14px;  

        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.green};

        
        &:focus {
            background-color: ${background.grey}; 
            }
        }

        && fieldset {
            border: none;
        }     
        
        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${background.green};
            
            &:focus {
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