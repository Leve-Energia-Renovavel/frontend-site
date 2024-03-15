import styled from "@emotion/styled"
import { background, notification } from "@/app/pages/styles"
import { Alert } from "@mui/material";
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
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${background.light};
  
  position: absolute;
  top: 80rem;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;

  @media (max-width: 2400px) {
    top: 80rem;
  }
  @media (max-width: 2150px) {
    top: 80rem;
  }

  @media (max-width: 2000px) {
    top: 80rem;
  }
  
  @media (max-width: 1600px) {
    top: 80rem;
  }
  
  @media (min-width: 1200px) and (max-width: 1500px) {
    top: 85rem;
  }
  
  @media (max-width: 1200px) {
    width: 100vw;
    max-width: 100vw;
    
    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 

  }
  
  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100vw;

    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 

  }

  h1 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${background.primary}
  }
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const FormContent = styled.form`
  display: grid;
  grid-template-columns: 1fr 200px 1fr; 
  grid-gap: 20px 40px;
  background-color: ${background.light};
  max-width: 100%;

  @media (max-width: 600px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);

    div { 
      grid-row: span 1;
      grid-column: span 1;
    }
  }

  .installationNumberField {
    border-color: #0075FF;

      & label {
        color: #0075FF;
      }

      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #0075FF;
        }

        &:hover fieldset {
          border-color: #0075FF;
        }

        &.Mui-focused fieldset {
          border-color: #0075FF;
        }
      }
  }

  `

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-column: span 3; 
  grid-gap: 40px;
  
  @media (max-width: 600px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);
    grid-gap: 1.5rem;
  }
  
`;

export const FormLastRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-column: span 3; 
  grid-gap: 40px;
  margin-top: .5rem;
  
  @media (max-width: 600px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);
    grid-gap: 1.5rem;
    margin-top: 0rem;
  }

  .installationNumberField {
    border-color: #0075FF;

      & label {
        color: #0075FF;
      }

      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #0075FF;
        }

        &:hover fieldset {
          border-color: #0075FF;
        }

        &.Mui-focused fieldset {
          border-color: #0075FF;
        }
      }
  }

  .linkInstallationNumberTutorial {
    color:#0075FF; 
    text-decoration: underline; 
    cursor: pointer;
  }
`;


export const FileUploadContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr); 
  grid-column: span 3; 
  flex-direction: row;
  flex-wrap: wrap;
`
export const FileUploadItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RegisterFormProgressContainer = styled.div`
 display: flex;
 flex-direction: row; 
 align-items: center; 
 padding: 1rem 0;

 h2{ 
  font-weight: bold; 
  color: ${background.yellowLeve};
  margin-right: 1rem;
 }

 .progressBar {
    height: .75rem;
    width: 100%;
    border-radius: 5px;

    .MuiLinearProgress-colorPrimary {
      background-color: ${background.greyLeve};
    }

    .MuiLinearProgress-barColorPrimary {
      background-color: ${background.yellowLeve};
    }
 }
`
export const ValidationErrorsContainer = styled.div`
color: ${background.error};

    @media (max-width: 600px) {
      margin-top: .5rem;
        font-size: 1rem;
      }
`

export const fileInputStyles = {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '0 5px',
  marginLeft: '.5rem',
  fontSize: '1rem',
  fontWeight: 'bold',
}

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

