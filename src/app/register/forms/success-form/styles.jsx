import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${background.light};
  
  position: absolute;
  top: ${(props) => props.isDown ? `30rem` : `42rem`};
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;

  @media (max-width: 2500px) {
    top: 33rem;
  }
  @media (max-width: 2150px) {
    top: 33rem;
  }
  @media (max-width: 1700px) {
    top: 33rem;
  }
  @media (max-width: 1500px) {
    top: 33rem;
  }
  @media (max-width: 1300px) {
    top: 35rem;
  }

  @media (max-width: 1100px) {
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
    color: ${background.blueLeve}
  }
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const Form = styled.form`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 1rem;
    
    `;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    
    @media (max-width: 600px) {
      margin: 0;
    }
    
    
    h3 {
      color: ${background.blueLeve};
      font-family: "Graphie";
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      
      margin-bottom: 1.5rem;
      
      @media (max-width: 600px) {
        font-size: 1.75rem;
      }
    }
    
    h6 {
      width: 30dvw;
      color: ${background.darkGrey};
      font-family: "Graphie";
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      
      margin-bottom: 1.5rem;
      
      @media (max-width: 600px) {
        width: 100%;
        max-width: 100vw;
        font-size: 1.2rem;
      }
    }
    
    .bold{
      font-weight: bold;
  }
  
  div {
    grid-row: span 1;
    grid-column: span 1;
    
  }
  
  `;

export const SimpleFormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 600px) {
      margin: 0;
    }
    
    
    h3 {
      color: ${background.blueLeve};
      font-family: "Graphie";
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      
      margin-bottom: 1.5rem;
      
      @media (max-width: 600px) {
        font-size: 1.75rem;
      }
    }
  
  `;

export const ButtonContainer = styled.div`
    margin: 0 auto;

    text-align: center;
    
    .skipBinding { 
      color: ${background.grey};
      font-family: "Graphie";
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration: underline;
      
      cursor: pointer;
    }
  `;



export const SuccessFormProgressContainer = styled.div`
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
`;