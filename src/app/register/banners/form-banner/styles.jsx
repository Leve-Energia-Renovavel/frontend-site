import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormBannerContainer = styled.div`
  max-width: 100vw;
  padding: 18rem;
  border: 1px solid #ccc; 
  background-color: ${background.light};
  
  @media (min-width: 2000px) and (max-width: 2150px) {
    padding: 17rem;
  }
  @media (max-width: 2000px) {
    padding: 18rem;
  }
  @media (max-width: 1800px) {
    padding: 19rem;
  }
  @media (max-width: 1300px) {
    padding: 20rem;
  }
  @media (max-width: 1200px) {
    padding: 3rem;
  }
  @media (max-width: 1100px) {
    padding: 2rem;
  }
  
  @media (max-width: 600px) {
    padding: 2rem;
    background-color: ${background.blueLeve};
  }
  
`