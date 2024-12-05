import { fadeInUp } from "@/app/pages/animations"
import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  animation: ${fadeInUp} 0.5s ease-out; 

  padding: 0px 1rem 1rem 1rem;

  margin: 1rem 0;

  gap: 1rem;
  
  .formTitle {
    font-family: "Graphie";
    font-size: 24px;
    line-height: 120%;
    font-weight: 500;
    color: ${background.yellow};
    max-width: 395px;
  } 
  
  @media (max-width: 600px) {
    padding: 0 0 1rem 0;

    .formTitle {
      font-size: 20px;
      white-space: normal;
    }

  }
  @media (max-width: 400px) {
    .formTitle {
      font-size: 18px;
      white-space: normal;
    }
  }

`