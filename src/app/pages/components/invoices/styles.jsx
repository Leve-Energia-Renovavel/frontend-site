import { statusHelper } from "@/app/utils/helper/StyleHelpers";
import styled from "@emotion/styled";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { background } from "../../styles";
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
export const InvoiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    padding: 2rem;
    
    overflow: auto; //for timeline height
    max-width: 100vw;

    h1 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.5rem;
        color: ${background.blueLeve};
        font-weight: 700;
      }

    @media (max-width: 600px) {
      flex-direction: column;
    }
`

export const InvoicesMainContent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${background.light};
    border-radius: 4px;
    
    margin: 1rem auto;
    
    width: 100vw;
    max-width: 100vw;
`
export const InvoicesMainContainer = styled.div`
    width: 40vw;
    max-width: 40vw;
    
    @media (max-width: 600px) {
      width: 100%;
      max-width: 100vw;
    }
`
export const InvoicesMainCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 1px solid ${background.blueLeve};
    animation: ${fadeInUp} 0.5s ease-out;

    border-radius: 4px;

    margin: 0 2rem 0 0;
    padding: 1rem 2rem;
    
    @media (max-width: 600px) {
      margin: 1rem;
    }
`
export const InvoicesTimelineContainer = styled.div`
    border-radius: 4px;

    width: 60vw;
    max-width: 60vw;
`
export const NextBillTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${background.grey};
      }
      
      @media (max-width: 600px) {
      flex-direction: column;
    }
`


export const NextBillDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;


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

export const NextBillButtonContainer = styled.div`
    margin-left: auto;
    padding: 1rem;
`

export const MoneyIcon = styled(AttachMoneyIcon)`
    color: ${background.grey};
    font-size: 1.5rem;
    font-weight: bold;
`
