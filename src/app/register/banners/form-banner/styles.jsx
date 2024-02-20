import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormBannerContainer = styled.div`
  max-width: 100vw;
  padding: 22vw;
  border: 1px solid #ccc; 
  background-color: ${background.light};
  
  @media (max-width: 600px) {
    padding: 2rem;
    background-color: ${background.blueLeve};
  }
  
`