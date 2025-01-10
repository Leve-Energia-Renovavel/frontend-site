import { Alert } from "@mui/material"
import { messages, notification } from "../../globalStyles"
import { fadeInUp } from "../../globalAnimations"
import styled from "@emotion/styled"

const borderRadius = "8px"
const minWidth = "300px"

export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  border-radius: ${borderRadius};
  padding: 1rem;
  align-items: center;
  
  color: ${messages.error.title};
  border: 2px solid ${messages.error.border};
  background-color: ${messages.error.background};

  min-width: ${minWidth};
  
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
  border-radius: ${borderRadius};
  padding: 1rem;
  align-items: center;

  color: ${messages.success.title};
  border: 2px solid ${messages.success.border};
  background-color: ${messages.success.background};

  min-width: ${minWidth};

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
