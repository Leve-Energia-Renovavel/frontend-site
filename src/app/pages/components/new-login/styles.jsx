import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { background } from "../../globalStyles";

export const LoginBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    border-radius: 15px;

    width: 60vw;
    height: 80vh;
    
    box-shadow: 24px;

    padding: 1rem 2rem;

    outline: none;

    .MuiOutlinedInput-root {
        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orangeFocused}; // Border color on hover
        }
        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orange} !important; // Border color when focused
        }
        &:not(.Mui-focused) .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orangeFocused} !important; // Border color when not focused
        }
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${background.orangeFocused}; // Border color: ;
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem;

        overflow: hidden;

    }
`
export const LoginIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0;
`
export const LoginTitleContainer = styled.div`
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
        width: 20%;
        height: 20%;

        @media (max-width: 600px) {
            width: 70%;
            height: 70%;
        }

        &:hover {
            cursor: pointer;
        }
    }
`

export const LoginContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 13px;

    margin: 0 auto;
    width: 100%;
    height: auto;

    padding: 2rem;

`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    .formInput {
        background-color: ${background.light};
        border-radius: 4px;

        margin: 0 auto;
        
        width: 30vw;
        
        @media (max-width: 900px) {
            margin: 0 auto;
            width: 70%;
            max-width: 90vw;
        }
        @media (max-width: 600px) {
            margin: 0 auto;
            width: 100%;
            max-width: 90vw;
        }

        .MuiInputLabel-root {
            color: ${background.orange};
        }

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orange};
        }
        & .MuiSelect-select:focus {
            background-color: ${background.orange};
        }
    }
    
`

export const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .forgotPassword {
        font-family: "Graphie";
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        color: ${background.greyHigh};
        
        margin: 1rem auto;
        
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }

        .divider {
            margin-top: 1rem;
        }

        @media (max-width: 600px) {
            margin: 2.5rem auto;
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
    color: ${background.yellow};
    border-color: ${background.white};
    background-color: ${background.orange};
    border-radius: 13px;
    cursor: pointer;
    height: 3rem;
    padding: 1rem 4rem;
    
    margin: 0 auto;
    width: 30vw;
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
        
        @media (max-width: 1200px) {
            font-size: 16px;
            line-height: 16px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        max-width: 75vw;
    }

    &:hover {
        background-color: ${background.light};
        color: ${background.orange};
        border: 1px solid ${background.orange};
    }
`

export const FormFooterContainer = styled.div`
    text-align: center;

    padding: 1rem;

    h6 { 
        font-family: "Graphie";
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 500;
        color: ${background.greyMediumHigh}
    }
`

