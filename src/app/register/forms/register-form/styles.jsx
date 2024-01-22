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
  top: 160vh;
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
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${background.light};

  max-width: 100%;

  .formInput {
    max-width: 40%;
    margin: 1rem;
  }
  `

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
`
export const FileUploadItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

