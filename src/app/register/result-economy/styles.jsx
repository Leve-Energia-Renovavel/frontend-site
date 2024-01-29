import styled from "@emotion/styled";
import { background } from "@/app/pages/styles";


export const ResultEconomyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${background.light};
  
  position: absolute;
  top: 75vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;

  font-family: "Metropolis", sans-serif, system-ui, -apple-system;

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

    .divider {
      margin: 1rem 3rem;
      background-color: ${background.yellowLeve};
      height: 0.0625rem;
    }

`;

export const ResultEconomyComparissonContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 4rem; //must be equal to ResultEconomyToUnderstandContent
     
    .bold {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.7rem;

    } 
    `;

export const TodayPriceInfo = styled.div`
  flex: 1; 
  max-width: '50%';

  h1 { 
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    display:inline; 
    font-size: 1.8rem;
    font-weight: bold;
    line-height: normal;
    color: ${background.orangeLeve}; 
    margin: 2rem 0;
  }

  h6 { 
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 1rem;
  }
  `;

export const LeveEconomyInfo = styled.div`
  flex: 1; 
  max-width: 50%;
  margin-right: auto;

  h1 {
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: normal;
    display: inline;
    color: ${background.blueLeve}; 
    background-color: ${background.yellowLeve}; 
    border-radius: 0.5rem;
    margin: 2rem 0;
    padding: .5rem 1rem;
  }


  h6 { 
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 1rem;
  }
`;

export const ResultEconomyToUnderstandContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 3rem; //must be equal to ResultEconomyComparissonContent
  `;

export const ResultEconomyDiscount = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  .yearDiscountLeve {
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    color: ${background.blueLeve}; 
    background-color: ${background.yellowLeve};
    padding: 1rem;
    margin-right: auto;
    margin-left: 1rem;
    border-radius: 0.5rem;

  }

  .yearDiscountLeveSubtitle {
    color: ${background.textLeve};
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 1rem;
  }
  
  `;

export const LeveMonthlyDiscount = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
  
  h1 { 
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    color: ${background.blueLeve}; 
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 60%;
  }
  
  img {
    margin: 0 1.5rem; 
    max-width: 30%;
  }
  
  `;
export const ResultEconomyDiscountGraph = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;

  h6 {
    font-family: "Metropolis", sans-serif, system-ui, -apple-system;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .discountGraph {
    width: 420px;
    height: auto;
  }
`;