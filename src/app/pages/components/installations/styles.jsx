import styled from "@emotion/styled";
import { background, notification } from "../../styles";
import HomeIcon from '@mui/icons-material/Home';
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

export const InstallationsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 2rem;

    h1 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.5rem;
        color: ${background.blueLeve};
        font-weight: 700;
    }
`
export const InstallationsMainContent = styled.div`
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
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
        font-family: "Metropolis", sans-serif;
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
export const TitleIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HomeIconStyled = styled(HomeIcon)`
    color: ${background.grey};
    font-size: 1.5rem;
    
    `
export const MainInstallationInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    h3 {
        margin: 6px 0;
        font-size: 1.5rem;
        color: ${background.blueLeve};

        @media (max-width: 600px) {
            font-size: 1.2rem;
        }
    }
    .mainAddress {
        color: ${background.blueLeve};
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
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
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
  /* background-color: ${background.light}; */

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

      @media (max-width: 600px) {
        max-width: 90%;
      }
  }
`