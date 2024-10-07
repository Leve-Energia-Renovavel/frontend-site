import { fadeInUp } from "@/app/pages/animations"
import { newBackground } from "@/app/pages/styles"
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
    font-size: 27px;
    font-weight: 500;
    color: ${newBackground.yellow};
    white-space: nowrap;
  } 
  
  .homeFormLogoLeve {
    width: 120px;
    height: auto;
  }
  
  @media (max-width: 600px) {
    .formTitle {
      font-size: 20px;
    }
    .homeFormLogoLeve {
      width: 100%;
      max-width: 80px;
    }
  }


`