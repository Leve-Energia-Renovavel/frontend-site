import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${background.light};
  
  position: absolute;
  top: 130vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  max-width: 80vw;

  h1 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${background.primary}
  }
  
  `
export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
  background-color: ${background.light};

  width: 60vw;

  .formInput {
    display: inline-block;
    max-width: 20vw;
  }
    
`