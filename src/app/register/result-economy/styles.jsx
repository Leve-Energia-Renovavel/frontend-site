import styled from "@emotion/styled";
import { background } from "@/app/pages/styles";


export const ResultEconomyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${background.light};
  
  position: absolute;
  top: 75vh;
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

export const ResultEconomyComparissonContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem; //must be equal to ResultEconomyToUnderstandContent
     
    .bold {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.7rem;

    } 
    `;

export const ResultEconomyToUnderstandContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem; //must be equal to ResultEconomyComparissonContent
  `;

export const ResultEconomyDiscount = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  
  `;
export const ResultEconomyDiscountGraph = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;