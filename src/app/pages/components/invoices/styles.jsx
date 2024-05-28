import { statusHelper } from "@/app/utils/helper/StyleHelpers";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { background, newBackground } from "../../styles";

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
    background-color: ${newBackground.white};
    
    padding: 2rem 0;
    
    overflow: auto; //for timeline height
    width: 100%;
    max-width: 100vw;

    @media (max-width: 600px) {
      width: 100%;
      max-width: 100vw;

      padding: 1rem;
    }

    h1 {
        font-family: "Graphie", sans-serif;
        font-size: 1.5rem;
        color: ${newBackground.orange};
        font-weight: 700;
      }

    @media (max-width: 800px) {
      flex-direction: column;
    }
`

export const InvoicesMainContent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${newBackground.white};
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
    
    .yourInvoices {
      margin-left: 15rem;

      @media (max-width: 2500px) {
        margin-left: 25rem;
      }
      @media (max-width: 2000px) {
        margin-left: 20rem;
      }
      @media (max-width: 1800px) {
        margin-left: 18rem;
      }
      @media (max-width: 1600px) {
        margin-left: 15rem;
      }
      @media (max-width: 1500px) {
        margin-left: 12rem;
      }
      
      @media (max-width: 1500px) {
        margin-left: 12rem;
      }

      @media (max-width: 1400px) {
      margin-left: 10rem;
      }
    
      @media (max-width: 1200px) {
          margin-left: 8rem;
      }
      @media (max-width: 1000px) {
          margin-left: 1rem;
      }
    }

      .breadcrumbs {
      margin: .5rem 1rem 1rem 0;
      margin-left: 15rem;

      @media (max-width: 2500px) {
        margin-left: 25rem;
      }
      @media (max-width: 2000px) {
        margin-left: 20rem;
      }
      @media (max-width: 1800px) {
        margin-left: 18rem;
      }
      @media (max-width: 1600px) {
        margin-left: 15rem;
      }
      @media (max-width: 1500px) {
        margin-left: 12rem;
      }
      
      @media (max-width: 1500px) {
        margin-left: 12rem;
      }

      @media (max-width: 1400px) {
      margin-left: 10rem;
      }
    
      @media (max-width: 1200px) {
          margin-left: 8rem;
      }
      @media (max-width: 1000px) {
          margin-left: 1rem;
      }

    }
`
export const InvoicesMainCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 1px solid ${newBackground.orange};
    animation: ${fadeInUp} 0.5s ease-out;

    border-radius: 4px;

    margin: 1rem 2rem 0 15rem;
    padding: 1rem 2rem;
    
    width: 30vw;
    max-width: 20vw;
    
    @media (max-width: 2500px) {
      margin: 0 2rem 0 25rem;
    }
    @media (max-width: 2000px) {
      margin: 0 2rem 0 20rem;
    }
    @media (max-width: 1800px) {
      margin: 0 2rem 0 18rem;
    }
    @media (max-width: 1600px) {
      margin: 0 2rem 0 15rem;
    }
    @media (max-width: 1500px) {
      margin: 0 2rem 0 12rem;
    }
    @media (max-width: 1400px) {
      margin: 0 2rem 0 10rem;
      width: 30vw;
      max-width: 25vw;
    }
    @media (max-width: 1300px) {
      margin: 0 2rem 0 10rem;      
      width: 30vw;
      max-width: 25vw;
    }
    @media (max-width: 1200px) {
      margin: 0 2rem 0 8rem;
    }
    @media (max-width: 1000px) {
      width: 40vw;
      max-width: 40vw;
      margin: 1rem;
    }
    @media (max-width: 600px) {
      width: 70vw;
      max-width: 70vw;
      margin: 1rem;
    }

    .noOpenInvoices { 
      font-family: "Graphie", sans-serif;
        font-size: 1rem;
        font-weight: 700;
        color: ${background.grey};
    }
`
export const InvoicesMainCardChangeDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    border: 1px solid ${newBackground.orange};
    border-radius: 4px;


    margin: 1rem 3.2rem 0 auto;
    padding: 1rem 2rem;
    
    width: 30vw;
    max-width: 20vw;

    @media (max-width: 1500px) {
      margin: 1rem 5.6rem 0 auto;
    }
    @media (max-width: 1200px) {
      max-width: 25vw;
      margin: 1rem 3.2rem 0 auto;
    }
    @media (max-width: 1000px) {
      width: 100%;
      max-width: 80vw;
      margin: 0 1rem;
    }
    @media (max-width: 1000px) {
      width: 100%;
      max-width: 70vw;
      margin: 0 1rem;
    }

    .changeInvoiceDate {
      font-family: "Graphie", sans-serif;
        font-size: 21px;
        line-height: 27px;
        font-weight: 700;
        color: ${newBackground.orange};
    }

    .invoiceDateField {
      width: 100%;

      .MuiOutlinedInput-root {
            border-color: ${newBackground.white};
        }

        .MuiInputLabel-root {
            color: ${newBackground.orange};
        }
        .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${newBackground.orange};
        }

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: ${newBackground.orange};
        }
    }

    .buttonChangeDate {
      display: block;
      background-color: ${newBackground.orange};
      color: ${newBackground.white};
      border: 1px solid ${newBackground.orange};
      margin: 1rem 0;
      border-radius: 8px;
      
      span { 
        font-family: "Graphie";
        font-size: 21px;
        line-height: 27px;
        font-weight: 600;
        text-transform: none;
      }
      
      &:hover {
        background-color: ${newBackground.white};
        color: ${newBackground.orange};
        
      }
      
    }
`

export const InvoicesTimelineContainer = styled.div`
    border-radius: 4px;

    width: 60vw;
    max-width: 60vw;

`
export const PreviousInvoicesContainer = styled.div`

    @media (max-width: 600px) {
      margin-top: 2rem;
    }

    .previousInvoices {
      white-space: nowrap;
      margin-left: 12rem;
      
      @media (max-width: 2500px) {
        margin-left: 18rem;
      }
      @media (max-width: 2000px) {
        margin-left: 18rem;
      }
      @media (max-width: 1900px) {
        margin-left: 17rem;
      }
      @media (max-width: 1800px) {
        margin-left: 12rem;
      }
      @media (max-width: 1400px) {
        margin: 0 2rem 0 10rem;
        width: 30vw;
        max-width: 25vw;
      }
      
      @media (max-width: 1300px) {
        margin-left: 7rem;
      }
      @media (max-width: 600px) {
        margin-left: 4rem;
      margin-top: 3rem;
    }
      @media (max-width: 400px) {
        margin-left: 3rem;
      margin-top: 3rem;
    }
    }
`
export const NextBillTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2 {
        font-family: "Graphie", sans-serif;
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
