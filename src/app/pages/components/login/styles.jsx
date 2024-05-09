import { background, notification } from "../../styles";
import styled from "@emotion/styled";
import { Alert, Box, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

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

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem;
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
        color: ${background.blueLeve};
    }

    .logoLeve { 
        width: 20%;
        height: 20%;

        @media (max-width: 600px) {
            width: 70%;
            height: 70%;
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
    }
`

export const LoginButtonContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .forgotPassword {
        font-family: "Graphie";
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        color: ${background.higherGrey};
        
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
        color: ${background.blueLeve};
        font-weight: 500;
        
        &:hover {
            font-weight: 700;
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
        color: ${background.blueLeve};
        border: 1px solid ${background.blueLeve};
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
        color: ${background.grey}
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