import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import { background } from "../../styles";

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

`
export const NextBillContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NextBill = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

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
    background-color: #ccc;
    border: 1px solid #999;

    padding: 20px;
  }

    .grid-item:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    .grid-item:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    .grid-item:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    .grid-item:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
`

export const PaymentButtonContainer = styled.div`
  padding: 1rem 0;
`
export const YourInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const YourInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns with equal width */
  grid-template-rows: repeat(3, auto); /* 3 rows with auto height */
  gap: 2rem;

  height: 100%;
  max-height: 50vh;
`
export const UserEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const UserEconomyInfos = styled.div`
  border: 1px solid ${background.blueLeve};
  border-radius: 4px;
  text-align: center;
  align-items: center;

  padding: 2rem;
  
  span{
      text-align: center;
      color: ${background.textLeve};
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em;
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

`

export const HistorySpendingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const HistorySpending = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;

    border: 1px solid ${background.blueLeve};
    border-radius: 4px;

    padding: 0 2rem;

    height: 100%;
    max-height: 50vh;

    .grid-item {
      background-color: grey;
      width: 40px;
      height: 300px;
      margin-top: auto;
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
