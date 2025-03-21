import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { background, notification } from "../../globalStyles";

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
    background-color: ${background.white};
    
    padding: 2rem;
    
    h1 {
      font-family: "Graphie", sans-serif;
      font-size: 1.5rem;
      color: ${background.orange};
      font-weight: 700;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {

        h1 { 
            margin: 1rem 0;
        }
    }

`
export const ProfileMainContent = styled.div`
    background-color: ${background.white};
    border: 1px solid ${background.orange};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 60vw;
    max-width: 80vw;

    @media (max-width: 1000px) {
      width: 80vw;
      max-width: 80vw;
    }
`
export const ProfileSecondaryContent = styled.div`
    padding: 0 2rem;

    margin-top: 2.5rem;
  
    width: 30vw;
    max-width: 50vw;

    
    @media (max-width: 1000px) {
      width: 100%;
      max-width: 100vw;
    }

    h1 {
      white-space: nowrap;
    }
`
export const ProfileChangePasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    background-color: ${background.white};
    border: 1px solid ${background.orange};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
    
    width: 30vw;
    max-width: 50vw;
    
    @media (max-width: 1000px) {
      width: 80vw;
      max-width: 80vw;
    }
    
    .changePasswordInput {
        width: 100%;
        max-width: 50vw;
        @media (max-width: 1000px) {
          max-width: 80vw;
        }
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

    background-color: ${background.white};
    border: 1px solid ${background.orange};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
    
    width: 30vw;
    max-width: 40vw;

    @media (max-width: 1000px) {
      width: 80vw;
      max-width: 80vw;
    }
    
    .secondaryEmailInput {
        margin: 0 1rem 0 0;
        width: 100%;
        max-width: 50vw;
        
        @media (max-width: 1000px) {
          max-width: 80vw;
        }
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