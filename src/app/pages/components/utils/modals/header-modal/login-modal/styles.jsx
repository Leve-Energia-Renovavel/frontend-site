import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import { background, inputHeight } from "../../../../../globalStyles";

export const LoginBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    border-radius: 10px;

    overflow: hidden;

    width: 50vw;
    height: 80vh;
    
    padding: 1rem;
    
    outline: none;
    
    @media (max-height: 1100px) {
        height: 65vh;
    }
    @media (max-height: 900px) {
        height: 80vh;
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;
    }
`
export const CloseButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: fit-content;

    margin-left: auto;
`
export const TitleContainer = styled.div`
    text-align: center;

    h1 { 
        font-family: "Graphie";
        font-style: bold;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: ${background.orange};

        margin-top: 6rem;
    }

    .logoLeve { 
        width: 250px;
        height: auto;
    }

    &:hover {
        .logoLeve {
            cursor: pointer;
        }
    }

    @media (max-width: 600px) {
        .logoLeve {
            width: 70%;
            height: 70%;
        }   
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 13px;

    margin: 0 auto;
    width: 100%;
    height: auto;

    padding: 2rem;
    
    @media (max-width: 600px) {
        padding: 2rem 1rem;
    }
`

const FormInputBase = styled(TextField, {
    shouldForwardProp: (prop) => prop !== "success" && prop !== "error",
})``;

export const LoginInput = styled(FormInputBase)`
    background-color: ${background.white};
    border-radius: 5px;

      && {
            border: 2px solid transparent;
    
            background-color: ${background.greyTranslucent}; 
            background-color: ${props => props.success && background.greenTranslucent}; 
            background-color: ${props => props.error && background.orangeTranslucent}; 
    
            &:focus-within {
              /* Applies when the input is focused */
              border-color: ${background.greyBorder}; 
              border-color: ${props => props.success && background.greenSoft}; 
              border-color: ${props => props.error && background.orange};
            }
        }
    
      .MuiOutlinedInput-input {
        width: 100%;
        padding: 0px 14px;
    
        /* User input text style */
        font-family: "Graphie";
        font-size:18px;
        font-weight: 500;
        /* line height of input text */
        margin-top: 12px;
    
        color: ${background.greyMediumHigh} !important; 
        color: ${props => props.error && background.orange} !important;
        color: ${props => props.success && background.green} !important; 
      }
    
      & label {
        width: fit-content;
        font-family: "Graphie";
        font-weight: 500;
        font-size: 20px;
      }
    
      .MuiOutlinedInput-root {
        height: ${inputHeight};
        max-height: ${inputHeight};
        width: 100%;
        box-sizing: border-box;
    
        & fieldset, &:hover fieldset, &.Mui-focused fieldset, &.Mui-focused + label {
          /* Default border color */
          border: 2px solid ${background.greyTranslucent}; 
          border-color: ${props => props.success && background.greenTranslucent}; 
          border-color: ${props => props.error && background.orangeTranslucent}; 
        }
    
      }
    
      .MuiFormLabel-root{
        font-family: "Graphie";
        font-size: 16px;
        font-weight: 400;
    
        // line height of the placeholder
        margin-top: -6px;
        
        color: ${background.greyMediumHigh} !important; 
        color: ${props => props.success && background.green} !important; 
        color: ${props => props.error && background.orange} !important;
    
        &:focus {
            color: ${background.greyMediumHigh} !important; 
            color: ${props => props.success && background.green} !important; 
            color: ${props => props.error && background.orange} !important;
        }
      }
      & .MuiInputLabel-shrink {
        font-size: 14px;
        line-height: 14px;
        /* margin-top: 12px; */
        margin-top: 9px;
      }

      .icon {
        color: ${background.greyMediumHigh} !important; 
        color: ${props => props.success && background.green} !important; 
        color: ${props => props.error && background.orange} !important;
      }
    
      input {
        all: unset;
      }
    
      & input:-webkit-autofill {
        -webkit-text-fill-color: ${props =>
        props.success ? background.green :
            props.error ? background.orange :
                background.greyMediumHigh} !important;
    
        box-shadow: 0 0 0px 1000px ${props =>
        props.success ? background.greenTranslucent :
            props.error ? background.orangeTranslucent :
                background.greyTranslucent} inset !important;
    
        transition: background-color 5000s ease-in-out 0s;
      }
`


export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
        max-width: 90vw;
    }
`

export const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;

    .forgotPassword {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
        color: ${background.greyHigh};
        
        margin: 0 auto;
        
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    
    .createNewAccount {
        color: ${background.orange};
        font-weight: 500;
        
        &:hover {
            font-weight: 700;
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .box { 
        margin: 0 auto;
    }

    .loading {
        color: ${background.orange};
    }
`
export const LoginButton = styled(Button)`
    text-transform: none;
    color: ${background.white};
    background-color: ${background.orange};
    border-radius: 30px;
    cursor: pointer;
    height: 3rem;
    padding: 1rem 4rem;
    
    margin: 0 auto;
    
    width: 100%;
    max-width: 30vw;
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
    }

    &:hover {
        background-color: ${background.green};
        color: ${background.yellow};
    }

    @media (max-width: 1200px) {
        span {
            font-size: 16px;
            line-height: 16px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        max-width: 90vw;
    }

`