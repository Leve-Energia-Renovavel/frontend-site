import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import HomeIcon from '@mui/icons-material/Home';
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

export const InstallationsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    padding: 2rem;

    h1 {
        font-family: "Graphie", sans-serif;
        font-size: 1.5rem;
        color: ${newBackground.orange};
        font-weight: 700;
      }
      
      .noInstallationRegistered {
        font-family: "Graphie", sans-serif;
        font-size: 1rem;
        color: ${newBackground.orange};
        font-weight: 500;
        }
`
export const InstallationsMainContent = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;

    animation: ${fadeInUp} 0.5s ease-out;
  
    width: 80vw;
    max-width: 100vw;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: "Graphie", sans-serif;
        font-size: 1.2rem;
        color: ${background.grey};
        font-weight: 700;
        
        margin-left: 4px;
    }

    .deleteIcon { 
      color: ${background.grey};
      
      &:hover {
        color: ${notification.alert}
      }
    }
`


export const MainTitleContainer = styled.div`
    margin-left: 7rem;
    margin-top: 2rem;
    
    @media (max-width: 2200px) {
      margin-left: 11rem;
    }
    @media (max-width: 2000px) {
      margin-left: 10rem;
    }
    @media (max-width: 1800px) {
      margin-left: 9rem;
    }
    @media (max-width: 1500px) {
      margin-left: 7rem;
    }
    @media (max-width: 1350px) {
      margin-left: 6rem;
    }
    @media (max-width: 1200px) {
      margin-left: 5rem;
    }
    @media (max-width: 1000px) {
      margin-left: 4rem;
    }
    @media (max-width: 800px) {
      margin-left: 3rem;
    }
    @media (max-width: 700px) {
      margin-left: 2rem;
    }
    @media (max-width: 500px) {
      margin-left: 1rem;
    }
`
export const TitleIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 1.5rem;
`

export const HomeIconStyled = styled(HomeIcon)`
    color: ${background.grey};
    font-size: 1.5rem;
    
    `
export const MainInstallationInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px 40px;
  background-color: ${newBackground.white};
  max-width: 100%;

  @media (max-width: 600px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);

    div { 
      grid-row: span 1;
      grid-column: span 1;
    }
  }
    
    h3 {
        margin: 6px 0;
        font-size: 1.5rem;
        color: ${newBackground.orange};

        @media (max-width: 600px) {
            font-size: 1.2rem;
        }
    }
    .mainAddress {
        color: ${newBackground.orange};
        font-size: 2rem;
        font-weight: 500;

        @media (max-width: 600px) {
            font-size: 1.5rem;
        }
    }
`
export const ButtonContainer = styled.div`

    display: flex;
    flex-direction: row;
    gap: 1rem;

    justify-content: space-between;

    margin-top: 1rem;
    
    width: 100%;
    max-width: 80vw;
    
    @media (max-width: 600px) {
        max-width: 90%;
    }
`

export const NewInstallationContent = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
    
    width: 80vw;
    max-width: 100vw;
    
    @media (max-width: 600px) {
        margin: 1rem 0;
        width: 85vw;

        overflow: auto;

    }
`
export const NewInstallationButtonContainer = styled.div`
    display: flex;
`


export const FormContentNewInstallation = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px 40px;

  max-width: 100%;
  
  @media (max-width: 600px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1,1fr);

    div { 
      grid-row: span 1;
      grid-column: span 1;
    }

    .formInput {
      max-width: 90%;
    }
  }

  .installationNumberField {
    border-color: ${newBackground.orange};

      & label {
        color: ${newBackground.orange};
      }

      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: ${newBackground.orange};
        }

        &:hover fieldset {
          border-color: ${newBackground.orange};
        }

        &.Mui-focused fieldset {
          border-color: ${newBackground.orange};
        }
      }

      @media (max-width: 600px) {
        max-width: 90%;
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