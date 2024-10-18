import styled from "@emotion/styled"
import { Alert, Box, Button } from "@mui/material"
import { background, notification, statusColors } from "../../styles"
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
export const MemberGetMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 1px solid ${background.orange};
  border-radius: 4px;
  
  margin: 1rem auto;
  
  padding: 2rem;
  width: 100%;
  max-width: 75vw;
  
  @media (max-width: 600px) {
    margin: 1rem auto;
    max-width: 100vw;
  }
  
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MemberGetMemberMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`
export const CodeButton = styled(Button)`
  background-color: ${background.grey};
  color: ${background.white};
  border-radius: 8px;
  gap: .5rem;

  padding: 1rem 2rem;
  
  &:hover{ 
    background-color: ${background.darkGrey};
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }

`
export const SendInviteButton = styled(Button)`
  background-color: ${statusColors.warning};
  color: ${background.white};
  border-radius: 8px;
  gap: .5rem;
  
  padding: 1rem 2rem;
  
  margin-right: 1rem;
  
  &:hover{ 
    background-color: ${statusColors.warningFocus};
  }
  
  @media (max-width: 600px) {
    margin-right: 0;
  }

`
export const ShareButton = styled(Button)`
  background-color: ${statusColors.paid};
  color: ${background.white};
  border-radius: 8px;
  gap: .5rem;

  padding: 1rem 2rem;

  &:hover{ 
    background-color: ${statusColors.paidFocus};
  }
`

export const SendInviteAndShareContainer = styled.div`

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }
`


export const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.light};

    width: 50vw;
    height: 50vh;
    
    border: 2px solid ${background.lightBorder};
    box-shadow: 24px;
    border-radius: 13px;

    padding: 1rem 2rem;

    outline: none;

    @media (max-width: 600px) {
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

export const ModalIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0;
`

export const ModalTitleContainer = styled.div`
    text-align: center;

    h1 { 
        font-family: "Graphie";
        font-style: bold;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: ${background.orange};
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

export const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 13px;

    margin: 0 auto;
    width: 100%;
    height: auto;

    padding: 2rem;

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