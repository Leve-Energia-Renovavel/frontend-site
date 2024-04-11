import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Slider, Typography } from "@mui/material";
import { newBackground } from "../../styles";

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
    
    max-width: 100vw;
    margin: 0 auto;
    background-color: ${newBackground.white};
    `
export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    
    
    height: 100vh;
    max-width: 1920px;
    
    padding: 27px 39px;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`
export const HomeMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 

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
    }

    .underline { 
      font-family: "Graphie";
      font-weight: 500;
      text-decoration: underline;
      font-size: 80px;
    }
`
export const HomeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const HomeMainFormContainer = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};

    border-radius: 35px;

    width: 30vw;
    max-width: 30vw;
    height: 85vh;
`
export const HomeMainForm = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${newBackground.orange};

    border-radius: 35px;

    padding: 2rem;
    
    width: 30vw;
    max-width: 30vw;
    height: 75vh;

    h2 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.yellow};
      white-space: nowrap;
      /* font-size: 41px; */
      font-size: 2rem;
    }
    
    p {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      /* font-size: 17px; */
      font-size: .8rem;
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

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 700;
    text-transform: none;

    margin-left: auto;

  }


  margin: 1rem 0;
  
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
    margin-bottom: 1rem;
    
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