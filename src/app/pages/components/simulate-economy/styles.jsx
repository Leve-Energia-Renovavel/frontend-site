import styled from "@emotion/styled"
import { background } from "../../styles"

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
  
  @media (max-width: 900px) {
    top: 170dvh;
    left: 50dvw;

  }



`;

export const SimulateEconomyHeader = styled.div`
  display: flex;
  flex-direction: column;

  .whereToSimulate { 
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.00938rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    
  }
  .radioGroup {
    display: flex;
    flex-direction: row;
    margin-top: 1.2rem;

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

    div {
      grid-row: span 1;
      grid-column: span 1;

    }

    .isCNPJ { 
      grid-row: span 1;
      grid-column: span 3;
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
export const radioButtonStyle = {
  color: 'black',
  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
    color: background.stroke,
  },
  '&.Mui-checked': {
    color: '#FFD300',
  }
}

export const radioButtonLabelStyle = {
  fontFamily: 'Inter',
  fontSize: '1.125rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '0.00938rem'

}