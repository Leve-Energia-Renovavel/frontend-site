import styled from "@emotion/styled";
import { background } from "@/app/pages/styles";


export const ResultEconomyContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${background.light};
  
  position: absolute;
  top: 85vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  /* max-height: 25vh; */
  width: 60vw;
  max-width: 80vw;

  h1, span {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.7rem;

    } 
  .highlighted {
    color: ${background.primary};
          
    }

`;