import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import { background, statusColors } from "../../styles";
import { statusHelper } from "@/app/utils/helper/StyleHelpers";
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
export const DashboardContainer = styled.div`
    color: ${background.blueLeve};

    background-color: ${background.white};
    display: flex;
    flex-direction: column;

    max-width: 100vw;
`

export const TitleContainer = styled.div`
    padding: 1rem 0;

    h1 {
        font-family: "Metropolis";
        font-size: 24px;
        line-height: 18px;
        font-weight: 700;
    }

`
export const MainInfoContainer = styled.div`
    background-color: ${background.white};

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;
    
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;

    padding: 0 2rem;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1rem;

      max-width: 90vw;
      padding: 1rem 2rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1rem;

      max-width: 100vw;
      padding: 1rem 1rem;
     }

`
export const NextBillContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NextBill = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  animation: ${fadeInUp} 0.5s ease-out;

  border: 1px solid ${background.blueLeve};
  border-radius: 4px;
  padding: 1rem 3rem;


  height: 100%;
  max-height: 50vh;
`

export const NextBillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
  grid-template-rows: auto auto; /* 2 rows with auto height */
  gap: 1rem; 
    
  .grid-item {
    padding: 1rem;

  }

    .grid-item:nth-of-type(1) {
      grid-column: 1;
      grid-row: 1;
    }

    .grid-item:nth-of-type(2) {
      grid-column: 1;
      grid-row: 2;
    }

    .grid-item:nth-of-type(3) {
      grid-column: 2;
      grid-row: 2;
    }

    .grid-item:nth-of-type(4) {
      grid-column: 3;
      grid-row: 2;
    }


    .loaded-grid-item {
      padding: .5rem;
    }

    .loaded-grid-item:nth-of-type(1) {
      grid-column: 1;
      grid-row: 1;
    }

    .loaded-grid-item:nth-of-type(2) {
      grid-column: 1;
      grid-row: 2;
    }

    .loaded-grid-item:nth-of-type(3) {
      grid-column: 2;
      grid-row: 2;
    }

    .loaded-grid-item:nth-of-type(4) {
      grid-column: 3;
      grid-row: 2;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem; 

    .grid-item:nth-of-type(1),
    .grid-item:nth-of-type(2),
    .grid-item:nth-of-type(3),
    .grid-item:nth-of-type(4) {
      grid-column: auto;
      grid-row: auto; 

      margin: 0 auto;

      padding: 10px;

    }
  }


`

export const NextBillValue = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .referenceMonth {
    color: ${background.mediumGrey};
    font-weight: 600;
    font-size: 1rem;
  }
  
  .billValue {
    color: ${background.textLeve};
    font-weight: 500;
    font-size: 2rem;
    white-space: nowrap;
  }
`
export const NextBillInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .title { 
    color: ${background.mediumGrey};
    font-weight: 600;
    font-size: 1rem;
  }

  .content {
    color: ${background.textLeve};
    font-weight: 600;
    font-size: 1rem;
  }
  
  .paymentStatus { 
    font-weight: 800;
    color: ${props => props.status ? statusHelper[props.status] : background.mediumGrey};
  }
`
export const PaymentButtonContainer = styled.div`
  display: flex;
  padding: 2rem 0;

  @media (max-width: 600px) {
    margin: 0 auto;
  } 
`
export const YourInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const YourInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns with equal width */
  grid-template-rows: repeat(3, auto); /* 3 rows with auto height */
  gap: 1.5rem;

  height: 100%;
  max-height: 50vh;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem; 
    max-height: 80vh;
  }
`

export const NewInstallationButtonContainer = styled.div`
    padding: 1.8rem;

`
export const UserEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const UserEconomyInfos = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${fadeInUp} 0.5s ease-out;
  
  border: 1px solid ${background.blueLeve};
  border-radius: 4px;
  text-align: center;
  align-items: center;

  padding: 1.8rem;
  
  span{
      text-align: center;
      color: ${background.textLeve};
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em;

      padding: 2px;
  }

  .economyValue {
    color: ${statusColors.paid}
  }
`



export const HistoryContainer = styled.div`
    background-color: ${background.white};

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;

    width: 100%;
    max-width: 80vw;
    margin: 0 auto;

    padding: 1rem 2rem;
    
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.5rem;
    }
    
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.5rem;
      
      margin: 0;
      padding: 1rem 1rem;

    }
`

export const HistorySpendingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const HistorySpendingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;

    border: 1px solid ${background.blueLeve};
    border-radius: 4px;

    padding: 0 2rem;
    animation: ${fadeInUp} 0.5s ease-out;

    
    height: 100%;
    max-height: 50vh;
    
    @media (max-width: 600px) {
      padding: 0 10px;
    }

    .grid-item {
      background-color: grey;
      width: 40px;
      height: 300px;
      margin-top: auto;
      
      @media (max-width: 600px) {
        width: 36px;
        margin-right: 4px;
      }
      
    }
    
    .grid-item:nth-child(3) {
      height: 300px;
    }
`

export const HistoryBillingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const HistoryBilling = styled.div`
    display: flex;
    flex-direction: column;
`
export const BillDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    animation: ${fadeInUp} 0.5s ease-out;

    padding: 2rem;
    margin-bottom: 1.5rem;

    height: 100%;
    max-height: 50vh;

    border: 1px solid ${background.blueLeve};
    border-radius: 4px;

    span {
      color: ${background.textLeve};
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: center;

    }
`

export const SkeletonDiv = styled(Skeleton)`
    background-color: grey;
    width: 177px;

    padding: 1rem;
`
