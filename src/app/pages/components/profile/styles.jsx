import styled from "@emotion/styled";
import { background, notification } from "../../styles";
import { keyframes } from "@emotion/react";
import { Alert } from "@mui/material";

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
export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100vw;
    
    padding: 2rem;

    h1 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.5rem;
        color: ${background.blueLeve};
        font-weight: 700;
    }

    @media (max-width: 600px) {

        h1 { 
            margin: 1rem 0;
        }
    }

`
export const ProfileMainContent = styled.div`
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 60vw;
    max-width: 80vw;
`
export const ProfileSecondaryContent = styled.div`
    padding: 0 2rem;
  
    width: 30vw;
    max-width: 50vw;
`
export const ProfileChangePasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
    
    width: 30vw;
    max-width: 50vw;
    
    .changePasswordInput {
        width: 100%;
        max-width: 50vw;
    }
    
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;

        .changePasswordInput {
        margin: 0 1rem;
        width: 90%;
        max-width: 80vw;
        }
    }
`
export const ProfileSecondaryEmailContent = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
    
    width: 30vw;
    max-width: 40vw;
    
    .secondaryEmailInput {
        margin: 0 1rem 0 0;
        width: 100%;
        max-width: 50vw;
    }
    
    @media (max-width: 600px) {
        padding: 1.5rem;

        .secondaryEmailInput {
        margin: 0 1rem 1rem 1rem;
        width: 90%;
        max-width: 80vw;
        }
    }
`


export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Metropolis";
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
  font-family: "Metropolis";
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