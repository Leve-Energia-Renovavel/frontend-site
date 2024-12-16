import { Alert } from "@mui/material"
import { notification } from "../../globalStyles"
import { fadeInUp } from "../../globalAnimations"
import styled from "@emotion/styled"

export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.alert};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    font-size: 1rem; 

    border-radius: 5px;
    margin-bottom: 8px;

    width: 100%;
    max-width: 100vw;
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
    padding: 8px 16px;
    font-size: 1rem; 

    margin-bottom: 8px;

    border-radius: 5px;

    width: 100%;
    max-width: 100vw;
  }

`
