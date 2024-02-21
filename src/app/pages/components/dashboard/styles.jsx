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
        font-weight: 600;
    }

`
export const DashboardInfoContainer = styled.div`
    background-color: ${background.white};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;

`
export const NextBillContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NextBill = styled.div`
border: 1px solid ${background.blueLeve};

`
export const NextBillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
  grid-template-rows: auto auto; /* 2 rows with auto height */
  gap: 10px; /* Gap between grid items */
    
    .grid-item {
  background-color: #ccc;
  padding: 20px;
  border: 1px solid #999;
}

/* Set the specific grid positions for each grid item */
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
export const YourInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const YourInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns with equal width */
  grid-template-rows: repeat(3, auto); /* 3 rows with auto height */
  gap: 10px; /* Gap between grid items */
  
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
  }
`



export const HistoryContainer = styled.div`
    background-color: ${background.white};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 90vw;
    margin: 0 auto;

`

export const HistorySpendingContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const HistorySpending = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    border: 1px solid ${background.blueLeve};
    `
export const HistoryBillingContainer = styled.div`
        display: flex;
        flex-direction: column;
    `
export const HistoryBilling = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;

    border: 1px solid ${background.blueLeve};
`

export const SkeletonDiv = styled(Skeleton)`
    background-color: grey;
    width: 120px;
    height: 80px
`
