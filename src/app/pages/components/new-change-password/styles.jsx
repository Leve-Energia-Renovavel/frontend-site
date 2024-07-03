import styled from "@emotion/styled";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from "@mui/material";
import { newBackground } from "../../styles";


export const ChangePasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

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
        color: ${newBackground.green};
    }
`
export const LockIcon = styled(LockOutlinedIcon)`
    color: ${newBackground.orange};

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
        flex: 4; // Equivalent to 80%
        max-width: calc(80% - 10px); // Adjusting for the gap if needed
    }

    & > .button {
        flex: 1; // Equivalent to 20%
        max-width: 20%;
    }
`

export const FormInput = styled(TextField)`
    border-radius: 10px;
    
    && {
        background-color: ${newBackground.greyTranslucent}; 
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
        color: ${newBackground.green};
        
        &:focus {
            color: ${newBackground.green};
            border: 2px solid ${newBackground.green};
            background-color: ${newBackground.greyTranslucent}; 
            }
        }

        && fieldset {
            border: none;
        }     

        .MuiFormLabel-root {
            font-family: "Graphie";
            font-size: 14px;
            font-weight: 600;
            color: ${newBackground.greenLight};

            &:focus {
                color: ${newBackground.greenLight};
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
        border: 1px solid ${newBackground.orange};
        background-color: ${newBackground.white};
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
            color: ${newBackground.orange};
        }

        &:hover {
            background-color: ${newBackground.orange};
            border-color: ${newBackground.orange};
            
            span {
                color: ${newBackground.white};
            } 
        }
`;

export const VisibleIcon = styled(VisibilityIcon)`
`
export const InvisibleIcon = styled(VisibilityOffIcon)`
`