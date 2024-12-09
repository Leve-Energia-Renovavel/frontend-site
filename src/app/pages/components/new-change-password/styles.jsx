import styled from "@emotion/styled";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from "@mui/material";
import { background } from "../../globalStyles";


export const ChangePasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    gap: 1rem;

    padding: 1rem;

    border-radius: 20px;
  
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 6px;
    
    .title {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};
    }
    

`
export const LockIcon = styled(LockOutlinedIcon)`
    color: ${background.orange};

    width: 20px;
    height: auto;
`

export const ChangePasswordForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 10px;

    & > .inputForm {
        // flex: 4;  Equivalent to 80%
        flex: 1; 
        max-width: calc(80% - 10px); // Adjusting for the gap if needed
    }

    & > .button {
        flex: 1; // Equivalent to 20%
        max-width: 18%;
    }
    
    @media (max-width: 900px) {
        flex-direction: column;

        & > .button {
            flex: 1; // Equivalent to 20%
            width: 100%;
            max-width: 245px;
        }
    } 
`

export const FormInput = styled(TextField)`
    border-radius: 10px;

    && {
        background-color: ${background.greyTranslucent}; 
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
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        color: ${background.green};
        
        &:focus {
            color: ${background.green};
            border: 2px solid ${background.green};
            background-color: ${background.greyTranslucent}; 
            }
        }

        && fieldset {
            border: none;
        }     

        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${background.greenLight};

            &:focus {
                color: ${background.greenLight};
            }
        }

        .MuiSelect-icon {
            display: none; // This hides the select arrow
        }


        /* .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);
        } */


        /* input {
            height: 20px;
        }    */


`


export const ChangePasswordButton = styled(Button)`
        text-transform: none;
        border: 1px solid ${background.orange};
        background-color: ${background.white};
        padding: 11px 18px;

        border-radius: 10px;
        height: 3rem;

        width: 100%;
        max-width: 280px;
        
        span { 
            white-space: nowrap;
            font-family: "Graphie";
            font-size: 16px;
            line-height: 21px;
            font-weight: 600;
            color: ${background.orange};
        }

        &:hover {
            background-color: ${background.orange};
            border-color: ${background.orange};
            
            span {
                color: ${background.white};
            } 
        }

        @media (max-width: 900px) {

            span {
                white-space: normal;
                width: fit-content;
            } 
        } 
`;

export const VisibleIcon = styled(VisibilityIcon)`
`
export const InvisibleIcon = styled(VisibilityOffIcon)`
`