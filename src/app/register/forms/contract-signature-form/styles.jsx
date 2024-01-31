import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem 4rem;
  background-color: ${background.light};
  
  position: absolute;
  top: 90vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;

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

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Contract = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;

`
  ;

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;

`;


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