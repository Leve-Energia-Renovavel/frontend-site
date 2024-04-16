import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Slider, Typography } from "@mui/material";
import { newBackground, notification } from "../../styles";
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
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    max-width: 1920px;
    margin: 0 auto;
    padding: 3rem;
    
    @media (max-width: 600px) {
      padding: 0;
    }
`
export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    
    height: 100vh;
    
    padding: 27px 39px;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      
      padding: 1rem 1.5rem;

      height: auto;
    }
`
export const HomeMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;

    border-radius: 35px;

    padding: 2rem;
    
    width: 70vw;
    max-width: 70vw;
    
    h1 { 
      font-family: "Graphie";
      font-weight: 500;
      text-align: left;

      font-size: 80px;
      max-width: 370px;
      
      @media (max-width: 600px) {
        font-size: 40px;
      }
    }

    .underline { 
      font-family: "Graphie";
      font-weight: 500;
      text-decoration: underline;
      font-size: 80px;

      @media (max-width: 600px) {
        font-size: 40px;
      }
    }

    .logoLeve {
      width:370px;
      height:62px;
      
      @media (max-width: 600px) {
        width:220px;
        height:30px;
      }
    }

    @media (max-width: 600px) {
      padding: 1rem;
      width: 100vw;
      max-width: 100vw;

      height: 70vh;

      border-radius: 15px;
    }
`
export const HomeFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 30vw;
  max-width: 30vw;
  
  `
export const HomeMainFormContainer = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};
    
    border-radius: 35px;
    
    height: 85vh;
    
    @media (max-width: 600px) {
      height: auto;
      width: 90vw;
      max-width: 100vw;
      border-radius: 15px;
    }
`
export const HomeMainForm = styled.form`
    display: flex;
    flex-direction: column;

    background-color: ${newBackground.orange};

    border-radius: 35px;
    
    padding: 2rem;
    
    width: 30vw;
    max-width: 30vw;
    height: 75vh;
    
    @media (max-width: 600px) {
      padding: 1.5rem;
      width: 90vw;
      max-width: 100vw;

      border-radius: 15px;
    }

    h2 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.yellow};
      white-space: nowrap;
      /* font-size: 41px; */
      font-size: 2rem;
      text-align: left;
      
      @media (max-width: 600px) {
        font-size: 1.5rem;
        /* font-size: 40px; */
        margin-bottom: 6px;
      }
    }
    
    p {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      /* font-size: 17px; */
      font-size: .8rem;

      @media (max-width: 600px) {
        margin-bottom: 6px;
      }
    }
    .highlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.yellow};
      /* font-size: 17px; */
      font-size: .8rem;
    }

    .homeFormInput {
      background-color: ${newBackground.white};
      border-radius: 10px;
      height: 60px;
      margin-bottom: 10px;

        & label {
          font-family: "Graphie";
          font-weight: 700;
          font-size: 17px;
          color:  ${newBackground.orange};
          margin-top: 4px;
        }

        & .MuiOutlinedInput-root {
          & fieldset {
            border-radius: 10px;
            border-color: ${newBackground.white};
          }
        }

    }
`
export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 2rem;

    h6 {
      font-family: "Graphie";
      font-size: 15px;
      font-weight: 900;
      color:${newBackground.green};

    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${newBackground.orange};
    }

`
export const UserTypeFormContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const UserTypeFormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    
    @media (max-width: 600px) {
      gap: .5rem;
      padding: .5rem 0;
    }
`

export const HomeMainTitle = styled(Typography)`
    font-family: "Metropolis", sans-serif;
    color: ${newBackground.yellow};
    font-size: 5rem;
    font-weight: bold;
    max-width: 400px;
    word-wrap: break-word;
`
export const FormSelect = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border: 1px solid ${newBackground.yellow};
  border-radius: 10px;

  font-family: "Graphie";
  font-size: 17px;
  text-transform: none;
  padding: 0.8rem 2rem;

  width: 100%;
  
  &:hover {
    cursor: pointer;
  }
  
  ${props => props.selected && `background-image: linear-gradient(to left, ${newBackground.yellow}, transparent 70%);`}
  
  `

export const FormButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${newBackground.yellow};
  color: ${newBackground.green};
  border-radius: 30px;
  
  margin: 1rem 0;
  
  @media (max-width: 600px) {
    width: 90vw;
  }

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 700;
    text-transform: none;

    margin-left: auto;

  }
  
  &:hover {
    background-color: ${newBackground.orange};
    color: ${newBackground.yellow};
    cursor: pointer;
  }
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }
`

export const FormSlider = styled(Slider)`
    color: ${newBackground.green};
    height: 5px;
    
    @media (max-width: 600px) {
      height: 10px;
    }
    
    & .MuiSlider-thumb {
        background-color: ${newBackground.orange};
        height: 12px;
        width: 12px;
    }
    
    & .MuiSlider-rail {
      background-color: ${newBackground.orange};
      height: 5px;
    } 

`;



export const HomeSecondarySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    gap: 2rem;
    
    margin: 0 auto;
    
    padding: 5rem 2rem;
    
    height: auto;
    max-width: 1920px;
    
    @media (max-width: 600px) {
      width: 100vw;
      max-width: 100vw;

      padding: 15px;

    }
`

export const HomeSecondaryBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin: 0 auto;

    gap: 2rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
    }
`

export const HomeSecondaryBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 300px;
    width: 300px;

    padding: 1rem;

    border-radius: 20px;

    background-color: ${props => props.color};

    .boxDescription {
      font-family: "Graphie";
      font-size: 18px;
      font-weight: 500;
      color: ${props => props.descriptionColor};
      
      margin-bottom: 20px;
      
      @media (max-width: 600px) {
        margin-bottom: 4px;
        font-size: 12px;
      }
    }

    @media (max-width: 600px) {
      width: 180px;
      height: 180px;

      padding: .8rem;

      border-radius: 15px;
    }
    @media (max-width: 415px) {
      width: 150px;
      height: 150px;

      padding: .8rem;

      border-radius: 15px;
    }
`
export const HomeSecondaryBoxTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;

    h6 {
      font-family: "Graphie";
      font-size: 25px;
      font-weight: 600;
      color: ${props => props.titleColor};
      
      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    .titleIcon {
      width: 30px;
      height: 30px;
      
      @media (max-width: 600px) {
        height: 20px;
        width: 20px;
      }
    }
`

export const HomeSecondaryImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 2rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`
export const HomeSecondaryImagesContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    transition: filter 0.5s ease; /* Smooth transition for the filter property */


    /* Darken the background image on hover */
    &:hover {
        filter: brightness(0.8); /* Adjust the brightness value to darken/lighten */
    }

    height: 420px;
    width: 620px;

    border-radius: 20px;
    
    padding: 1rem;
    /* margin-bottom: 5rem; */
    
    @media (max-width: 600px) {
      height: 250px;
      width: 330px;

      border-radius: 15px;
    }

    h6 {
      font-family: "Graphie";
      font-size: 32px;
      font-weight: 600;
      color: ${newBackground.white};
      
      @media (max-width: 600px) {
        font-size: 21px;
      }
      
    }

    .arrowIcon {
      font-size: 50px;
      color: ${newBackground.yellow};
      
      &:hover {
        color: ${newBackground.green};
        background-color: ${newBackground.yellow};
        border-radius: 30px;
      }
    }
`

export const HomeThirdSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${newBackground.orange};

    gap: 2rem;

    border-radius: 30px;
    
    height: auto;
    max-width: 100vw;
    
    padding: 3rem 3rem 0 3rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
      padding: 3rem 2rem 0 2rem;
      gap: 0;
    }
`
export const HomeThirdSectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 950px;

    text-align: left;

    
    h6 {
      font-family: "Graphie";
      font-size: 50px;
      
      line-height: 50px;
      
      @media (max-width: 600px) {
        font-size: 21px;
        line-height: 21px;
      }
    }

    .sectionTitle {
      color: ${newBackground.white};
      font-weight: 200;
      
    }
    .sectionSubtitle {
      color: ${newBackground.yellow};
      font-weight: 500;

      @media (max-width: 600px) {
        margin-top: 24px;
      }

    }
    .highlighted {
      font-weight: 500;
    }
`

export const HomeThirdSectionSoleContainer = styled.div`

  .sole {
    margin-top: 5rem;
    width:315px;
    height:315px;
    
    @media (max-width: 600px) {
      margin-top: 2rem;
      width: 220px;
      height: 220px;
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