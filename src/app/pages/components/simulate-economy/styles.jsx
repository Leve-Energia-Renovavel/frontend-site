import styled from "@emotion/styled"
import { background } from "../../styles"
import { FormControl, Radio, Slider } from "@mui/material";


export const SimulateEconomyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #ccc; 
  border-radius: 0.25rem;
  margin: 0 auto;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
  background-color: ${background.white};
  
  position: absolute;
  top: 97dvh;
  left: 50dvw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;
  max-width: 80vw;
  
  @media (max-width: 600px) {
    top: 175dvh;
    width: 100vw;
    max-width: 100vw;
    margin: 0;

    position: static; 
    top: auto; 
    left: auto; 
    transform: none;
    z-index: auto; 

  }



`;

export const SimulateEconomyHeader = styled.div`
  display: flex;
  flex-direction: column;

  .whereToSimulate { 
    font-family: "Inter";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.00938rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    
    @media (max-width: 600px) {
      font-size: 1rem;
      margin-top: 1rem;
      margin-right: 0;
      letter-spacing: 0rem;
    }
    
  }
  .radioGroup {
    display: flex;
    flex-direction: row;
    margin-top: 1.2rem;
    
    @media (max-width: 600px) {
      margin-top: 1rem;
    }

  }

  .radioGroup h6 {
    font-family: "Inter";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.00938rem;
    
    @media (max-width: 600px) {
      font-size: 1rem;
      letter-spacing: 0rem;
    }
  }
`;

export const SimulateEconomyTitleStyles = styled.div`

    h3, span {
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.555rem;

        } 
  .highlighted {
    color: ${background.primary};
          
    }

`

export const FormContainer = styled.form`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    
    @media (max-width: 600px) {
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(1,1fr);
    }

    div {
      grid-row: span 1;
      grid-column: span 1;

    }

    .isCNPJ { 
      grid-row: span 1;
      grid-column: span 3;

      @media (max-width: 600px) {
        grid-row: span 1;
        grid-column: span 1;
      }
    }
    
    .slider {
      grid-row: span 1;
      grid-column: span 1;
      
    }
      
  input {
    width: 100%;
  }

      .averageMonthlyCost{
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .monthyCostValue{
        font-family: Inter;
        float: right;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }



`

export const RadioContainer = styled(FormControl)`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  align-items: center; 
  margin-bottom: 1.2rem;
  
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`

export const Radios = styled(Radio)`
  color: ${background.stroke};
  
  & .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) {
    color: ${background.stroke};
  }

  &.Mui-checked {
    color: ${background.yellowLeve};
  }
`;

export const Sliders = styled(Slider)`
    color: ${background.yellowLeve};
    height: 0.5rem;
    
    & .MuiSlider-thumb {
        background-color: ${background.blueLeve};
    }
    
    & .MuiSlider-rail {
      background-color: lightblue;
    } 
`;

export const ValidationErrorsContainer = styled.div`
color: ${background.error};

    @media (max-width: 600px) {
      margin-top: .5rem;
        font-size: 1rem;
      }
`