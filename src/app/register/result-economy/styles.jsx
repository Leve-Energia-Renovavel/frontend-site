import styled from "@emotion/styled";
import { background } from "@/app/pages/styles";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ResultEconomyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${background.light};
  
  position: absolute;
  top: 35rem;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  font-family: "Graphie", sans-serif, system-ui, -apple-system;
  
  width: 60vw;
  max-width: 80vw;
  
  @media (min-width: 2000px) and (max-width: 2150px) {
    top: 55rem;
  }
  @media (min-width: 1200px) and (max-width: 1500px) {
    top: 37rem;
  }
  
  @media (max-width: 1200px) {
    top: 105vh;
    width: 100vw;
    max-width: 100vw;

    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 
  }

  @media (max-width: 600px) {
    top: 40rem;
    width: 100vw;
    max-width: 100vw;

    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 
  }

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
    
    animation: ${fadeInUp} 0.5s ease-out;
    
    @media (max-width: 770px) {
      flex-direction: column;
      padding: 2rem 1rem;  //must be equal to ResultEconomyToUnderstandContent
    }
     
    .bold {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.7rem;

    } 
    `;

export const TodayPriceInfo = styled.div`
  flex: 1; 
  max-width: 50%;
  
  @media (max-width: 770px) {
    max-width: 100%;
    text-align: center;
  }

  h1 { 
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    display:inline; 
    font-size: 1.8rem;
    font-weight: bold;
    line-height: normal;
    color: ${background.orangeLeve}; 
    margin: 2rem 0;
    
    white-space: nowrap; 
  }


  h6 { 
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 1rem;

    white-space: nowrap;
    
    @media (max-width: 770px) {
      padding-bottom: .5rem;
    }
  }
  .distributorName {
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 1rem;

    white-space: nowrap;
  }
  `;

export const LeveEconomyInfo = styled.div`
  flex: 1; 
  max-width: 50%;
  margin-right: auto;
  
  @media (max-width: 770px) {
    max-width: 100%;
    text-align: center;
    margin-right: 0;
    margin-top: 2rem;
  }

  h1 {
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: normal;
    display: inline;
    color: ${background.blueLeve}; 
    background-color: ${background.yellowLeve}; 
    border-radius: 0.5rem;
    margin: 2rem 0;
    padding: .5rem 1rem;

    white-space: nowrap;

  }

  h6 { 
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 1rem;

    white-space: nowrap;

    @media (max-width: 770px) {
      padding-bottom: .5rem;
    }
  }
`;

export const ResultEconomyToUnderstandContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 4rem; //must be equal to ResultEconomyToUnderstandContent

  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 770px) {
    flex-direction: column;
    padding: 2rem 1rem; //must be equal to ResultEconomyComparissonContent
  }

  `;

export const ResultEconomyDiscount = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  
  @media (max-width: 770px) {
    max-width: 100%;
    text-align: center;
  }
  
  .yearDiscountLeve {
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    color: ${background.blueLeve}; 
    background-color: ${background.yellowLeve};
    padding: 1rem;
    margin-right: auto;
    margin-left: 1rem;
    border-radius: 0.5rem;
    
    @media (max-width: 770px) {
      margin: 0 auto;
    }
  }
  
  h6 {
    color: ${background.textLeve};
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 1rem;

  }

  .slider {
    width: 90%;
    margin:0 auto;
  }
  .simulationCost{
    font-family: Inter;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin: 0 auto;
  }
  .simulationCostValue{
    font-family: Inter;
    margin-left: 4px;
    font-size: .8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  `;

export const LeveMonthlyDiscount = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
  
  h1 { 
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    color: ${background.blueLeve}; 
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 60%;
    
    @media (max-width: 770px) {
      max-width: 80%;
      text-align: left;

    }

    
  }
  
  img {
    margin: 0 1.5rem; 
    width: auto;
    max-width: 30%;
    height: auto;
    
    @media (max-width: 600px) {
      margin: 0 1rem; 
    }
    
  }
  
  `;
export const ResultEconomyDiscountGraph = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
  
  @media (max-width: 770px) {
      max-width: 100%;
    }

  h6 {
    font-family: "Graphie", sans-serif, system-ui, -apple-system;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    @media (max-width: 770px) {
      font-size: 1.2rem;
      margin: 2rem auto;
    }
  }

  .discountGraph {
    width: 420px;
    height: auto;
    
    @media (max-width: 1300px) {
      width: 30vw;
      height: auto;
      margin: 0 auto;
    }
    @media (max-width: 770px) {
      width: 90vw;
      height: auto;
      margin: 0 auto;
    }
  }
`;