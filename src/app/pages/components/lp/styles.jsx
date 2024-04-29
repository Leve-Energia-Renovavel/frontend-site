import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, Slider, Button, CircularProgress } from "@mui/material";
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

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 3rem;
    
    @media (max-width: 600px) {
      padding: 0;
    }
`

export const LandingPageBanner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    height: auto;
    
    /* padding: 27px 39px; */
    margin-top: 74px;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      
      /* padding: 1rem 1.5rem; */
      padding: 0;

      height: auto;
    }
`


export const LandingPageMainContent = styled.div`

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;
    
    border-radius: 15px;
    
    padding: 32px 38px;
    
    width: 900px;
    max-width: 900px;
    
    max-height: 750px;
    
    @media (max-width: 600px) {
      background-position: 50% 50%;
      padding: 1rem;
      width: 100vw;
      max-width: 100vw;

      margin: 1rem 24px;

      height: 70vh;

      border-radius: 15px;
    }
`

export const LandingPageContent = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: end; 
  height: 100%; 
`

export const LandingPageTitleContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  animation: ${fadeInUp} 0.5s ease-out;
  
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h1 { 
      font-family: "Graphie";
      font-weight: 600;
      text-align: left;

      font-size: 89px;
      line-height: 89px;
      max-width: 420px;
      
      @media (max-width: 600px) {
        text-align: center;
        font-size: 42px;
        line-height: 42px;
      }
    }

    .underline { 
      font-family: "Graphie";
      font-weight: 600;
      text-decoration: underline;
      font-size: 89px;

      @media (max-width: 600px) {
        font-size: 40px;
      }
    }
`

export const LandingPageMainTitle = styled(Typography)`
    font-family: "Metropolis", sans-serif;
    color: ${newBackground.yellow};
    font-size: 5rem;
    font-weight: bold;
    max-width: 400px;
    word-wrap: break-word;
`

export const LandingSubtitleContainer = styled.div`
  display : flex ;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: ${newBackground.white};
  
  gap: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }

  .moreAboutLeve {
    font-family: "Graphie";
    font-size: 12px;
  }
  
  .arrowIcon {
    transform: scale(1.5);
  }

  &:hover { 
    text-decoration: underline;
    cursor: pointer;
  }
  `



export const LandingPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 388px;
  max-width: 388px;  

  .privacyPolicyDisclaimer {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    text-align: left;
    color: ${newBackground.orange};

    max-width: 360px;
    
    margin: 0 auto;
    
    @media (max-width: 600px) {
      max-width: 320px;
      margin-bottom: 24px;
    }
  }

  .privacyPolicy {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    text-decoration: underline;
    text-align: left;
    color: ${newBackground.orange};
    border-radius: 5px;

    &:hover{
      cursor: pointer;
      color: ${newBackground.green};
      background-color: ${newBackground.yellow};
    }
  }
`

export const LandingMainFormContainer = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};

    border-radius: 15px;
    
    /* height: 85vh; */
    height: 590px;
    
    @media (max-width: 600px) {
      height: auto;
      width: 100vw;
      max-width: 100vw;
    }
`
export const LandingPageForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.orange};

    border-radius: 15px;
    
    padding: 2rem;
    
    height: auto;
    overflow: hidden;
    
    @media (max-width: 600px) {
      padding: 1.5rem;
      width: 100%;
      max-width: 100vw;

      border-radius: 0;
    }
    
    p {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      font-size: 14px;
      line-height: 14px;

      margin-top: 17px;
      margin-bottom: 30px;

      @media (max-width: 600px) {
        text-align: center;
        line-height: 18px;
        margin: 20px;
      }
    }
    .highlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.yellow};
      font-size: 14px;
      line-height: 14px;
    }

    .homeFormInput {
      background-color: ${newBackground.white};
      border-radius: 10px;
      height: 42px;
      margin-bottom: 8px;

      .MuiInputBase-input {
        display: none;
      }

      .MuiOutlinedInput-input {
        
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${newBackground.orange};
        }

        & label {
          font-family: "Graphie";
          font-weight: 500;
          font-size: 14px;
          color:  ${newBackground.orange};
        }
        
        &:focus-within label,
        & input:focus + label {
            margin-top: 8px;
        }
        
        & .MuiOutlinedInput-root {
          & fieldset {
            height: 42px;
            border-radius: 10px;
            border-color: ${newBackground.white};
          }
        }

    }
`
export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  
  animation: ${fadeInUp} 0.5s ease-out; 
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }

  h2 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.yellow};
      white-space: nowrap;
      font-size: 27px;
      text-align: left;
      
      @media (max-width: 600px) {
        font-size: 27px;
      }

  }

  .economyIcon {
    @media (max-width: 600px) {
      width: 32px;
      height: 32px;
    }
  }
`
export const LandingPageFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    h6 {
      font-family: "Graphie";
      font-size: 17px;
      font-weight: 900;
      color:${newBackground.green};
      
      white-space: nowrap;
    }
    
    .averageUserCost { 
      margin: 0;
      margin-top: 25px;
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

    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }

    .chooseWhereToEconomy {
      margin: 17px 0 0 0;  //25px - 8px from margin-bottom of .homeFormInput
    }

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

export const FormSelect = styled(Button)`
  background-color: ${newBackground.orange};
  border: 1px solid ${newBackground.yellow};
  border-radius: 10px;

  font-family: "Graphie";
  font-size: 14px;
  color: ${props => props.selected ? newBackground.yellow : newBackground.white};
  font-weight: 400;
  text-transform: none;
  padding: 0.5rem 2rem;

  width: 100%;
  max-width: 250px;
  
  &:hover {
    cursor: pointer;
  }
  
  ${props => props.selected && `background-image: linear-gradient(to left, ${newBackground.yellow}, transparent 50%);`}
  
  `

export const FormButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${newBackground.yellow};
  color: ${newBackground.green};
  border-radius: 30px;

  height: 42px;
  
  margin: 1rem 0;
  
  @media (max-width: 600px) {
    width: 90vw;
    margin: 1rem auto;
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
    height: 8px;
    
    @media (max-width: 600px) {
      height: 10px;
    }
    
    & .MuiSlider-thumb {
        background-color: ${newBackground.orange};
        height: 12px;
        width: 12px;
    }
    
    & .MuiSlider-rail {
      background-color: ${newBackground.yellow};
      height: 8px;
      opacity: 1;
    } 

`;

export const Loading = styled(CircularProgress)`
  color: ${newBackground.green};
  width: 10px;
  height: 10px;

`

