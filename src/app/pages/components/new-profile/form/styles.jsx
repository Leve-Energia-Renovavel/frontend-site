import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Button, TextField } from "@mui/material";
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > .inputForm {
        flex: 3; // Equivalent to 80%
        max-width: calc(50% - 10px); // Adjusting for the gap if needed
    }

    gap: 10px;

    margin-top: 7px;

    @media (max-width: 600px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,1fr);
    }

    @media (max-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;

        & > .inputForm {
            max-width: 100%;
        }
    }
`

export const ChangeOwnershipButton = styled(Button)`
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 4px;

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
            
            .changeOwnershipIcon {
                color: ${background.white};
            }
        }
`;

export const EditionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 900px) {
    }
`

export const SaveEditionButton = styled(Button)`
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 4px;

        text-transform: none;
        background-color: ${background.orange};
        padding: 20px 30px;

        border-radius: 10px;
        height: 3rem;

        width: 100%;
        max-width: 200px;

        span { 
            white-space: nowrap;
            font-family: "Graphie";
            font-size: 16px;
            line-height: 21px;
            font-weight: 600;
            color: ${background.white};
        }

        &:hover {
            background-color: ${background.green};
            
            span {
                color: ${background.white};
            } 
        }
`;

export const CancelEditionButton = styled(Button)`
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 4px;

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
`;

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

export const EditIcon = styled(BorderColorOutlinedIcon)`
    color: ${background.orange};
    width: 18px;
    height: auto;
    
    &:hover {
        cursor: pointer;
    }
    `
export const ChangeOwnershipIcon = styled(AutorenewOutlinedIcon)`
    color: ${background.orange};
    width: 20px;
    height: auto;
`
export const InstallationInput = styled(TextField)`
    border-radius: 10px;

    && {
        background-color: ${background.greyTranslucent}; 
    }
    .MuiInputLabel-shrink {
        /* Styles for the focused label */
        line-height: 3em; 
    }
    
    .MuiOutlinedInput-input {
        border: 2px solid ${background.green};
        border-radius: 10px;  

        // styles for the user input text
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        color: ${background.green};

        
        &:focus {
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
            color: ${background.orange};
            
            &:focus {
                color: ${background.orange};
            }
            
        }
`