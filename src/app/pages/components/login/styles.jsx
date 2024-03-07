import { background } from "../../styles";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const LoginBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.light};

    width: 60vw;
    height: 80vh;
    
    border: 2px solid ${background.lightBorder};
    box-shadow: 24px;
    border-radius: 13px;

    padding: 1rem 2rem;
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
        font-family: "Metropolis";
        font-style: bold;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: ${background.blueLeve};
    }

    .logoLeve { 
        width: 20%;
        height: 20%;
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
    }
`

export const LoginButtonContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .forgotPassword {
        font-family: "Metropolis";
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${background.grey};
        
        margin: 1rem auto;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
    
        }

        .divider {
            margin-top: 1rem;
        }
    }
    
    .createNewAccount {
        color: ${background.blueLeve};
        font-weight: 500;
        
        &:hover {
            cursor: pointer;
            text-decoration: underline;

        }
    }
`
export const LoginButton = styled(Button)`
    text-transform: none;
    color: ${background.blueLeve};
    border-color: ${background.blueLeve};
    background-color: ${background.yellowLeve};
    border-radius: 13px;
    cursor: pointer;
    height: 3rem;
    padding: 1rem 4rem;
    
    margin: 0 auto;
    width: 30vw;
    
    span { 
        font-family: "Metropolis";
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;

        @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        }
    }

    &:hover {
        background-color: ${background.light};
        color: ${background.blueLeve};
        border: 1px solid ${background.blueLeve};
    }
`

export const FormFooterContainer = styled.div`
    text-align: center;

    padding: 1rem;

    h6 { 
        font-family: "Metropolis";
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 500;
        color: ${background.grey}
    }
`