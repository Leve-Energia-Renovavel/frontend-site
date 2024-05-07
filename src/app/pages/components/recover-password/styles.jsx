import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { background, newBackground, notification } from "../../styles";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RecoverPasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${newBackground.orange};
    
    padding: 2rem;
    text-align: center;
`
export const RecoverPasswordTitleContainer = styled.div`

h1 {
    font-family: "Graphie";
    font-style: bold;
    font-weight: 700;
    line-height: 2.625rem;
    font-size: 2rem;
    color: ${background.yellowLeve}
}

`
export const RecoverPasswordFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    width: 50vw;
    padding: 2rem;
    
    border-radius: 8px;
    background-color: ${newBackground.white};
    
    margin: 2rem auto;

    h6 { 
      font-family: "Graphie";
      font-style: bold;
      font-weight: 500;
      line-height: 1rem;
      font-size: 1rem;
      color: ${newBackground.orange};
    }
    
    @media (max-width: 600px) {
      width: 80vw;
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