import styled from "@emotion/styled"
import { background } from "@/app/pages/globalStyles";

export const ClicksignWidgetContainer = styled.div`
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem 4rem;
  background-color: ${background.light};

  overflow: auto;

  position: absolute;
  top: 90vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  @media (max-width: 2150px) {
      top: 46rem;
  }
  @media (max-width: 1800px) {
      top: 45rem;
  }
  @media (max-width: 1500px) {
      top: 45rem;
  }
  @media (max-width: 1300px) {
      top: 45rem;
  }
  @media (max-width: 1200px) {
      top: 45rem;
  }
  @media (max-width: 900px) {
      top: 40rem;
  }

  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100vw;
    
    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 

    padding: 2rem 1rem;
  }

  #clicksign-container {
      width: 60vw; 
      height: 60vh;
      
      @media (max-width: 600px) {
          width: 90vw; 
          max-width: 90vw; 
          height: 70vh;
      }
  }

  h1 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${background.primary}
    }
`;

export const ClicksignComponentContainer = styled.div`

    #clicksign-container {
        width: 100%;

        height: 410px;

        @media (max-width: 600px) {
            width: 100%;
            height: 420px;

            max-height: 100%;

        }   
        @media (max-width: 440px) {
            width: 100%;
            height: 490px;
        }   
        @media (max-width: 420px) {
            width: 100%;
            height: 510px;
        }   

        @media (max-width: 380px) {
            width: 100%;
            height: 450px;
        }   
        @media (max-width: 370px) {
            width: 100%;
            height: 510px;
        }   
    }
`
