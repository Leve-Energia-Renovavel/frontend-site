import { background, newFontStatusColors, newStatusColors } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { BILL_STATUS } from "../../dashboard/invoices/invoicesEnums";

export const NewInvoicesSelectedInstallation = styled.div`
    .mainInstallation {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 27px;
        font-weight: 600;
        color: ${background.orange};

        margin-right: auto;
    }
`
export const NewInvoicesTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    .tableHeader, .tableHeaderStatus {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};

        margin-left: 71px;
    }
    
    .tableHeaderStatus {
        margin-left: 60px;
    }
    
    @media (max-width: 900px) {
        .tableHeader, .tableHeaderStatus {
            margin-left: 70px;
        }
    }
    @media (max-width: 700px) {
        .tableHeader, .tableHeaderStatus {
            margin-left: 28px;
        }
    }
    
    `
const AccordionBase = styled(Accordion, {
    shouldForwardProp: (prop) => prop !== "noBills",
})``;

export const NewInvoicesTableContent = styled(AccordionBase)`
    border-radius: 10px;
    width: 100%;
    
    .mobileActionButtonContainer {
        display: none;
    }
    
    @media (max-width: 900px) {
        width: fit-content;
        ${props => props.noBills && "width: 100%;"};
         max-width: 94vw;

        .mobileActionButtonContainer {
           display: block;
        }

    }
`
export const MobileActionButtonContainer = styled.div`
    width: fit-content;
    margin-left: auto;
    
    padding: 1rem;
`

export const InvoicesTableLeveBill = styled(AccordionSummary)`
    display: flex;
    flex-direction: row;
    align-items: center;

    .leveBillValue, .leveBillStatus {
        display: block;

        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
        
        white-space: nowrap;
        text-align: center;

        margin: auto 0;

        width: 70px;
        
        margin-left: 55px;
    }
    
    .leveBillStatus {
        width: 80px;

        height: fit-content;

        background-color: ${props => newStatusColors[props.status]};
        color: ${props => newFontStatusColors[props.status]};
        padding: 4px 8px;
        border-radius: 10px;
    }

    
    &.Mui-expanded {
        border-radius: 10px;
        border: 2px solid ${background.orange};

        .leveBillValue {
            color: ${background.orange};
        }

    }

    /* &.Mui-disabled {
        background-color: transparent;
    } */

     .dontHaveAnyBillsYet {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.orange};

        margin: 0 auto;
     }

     .desktopActionButtonContainer {
        margin-left: auto;
     }

    @media (max-width: 900px) {
        /* padding: 0px; */

        .leveBillValue, .leveBillStatus {
            font-size: 12px;
            line-height: 14px;
        }
        .leveBillStatus {
            margin-left: 10px;
        }
        .leveBillValue {
            width: 70px;

            margin-left: 10px;

        }
        .desktopActionButtonContainer {
           display: none;
        }

    }

`

export const InvoicesTableDistributorBill = styled(AccordionDetails)`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    padding: 20px 16px;

    .distributorBillValue {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.greyDark};

        white-space: nowrap;
        text-align: center;

        width: 70px;

        margin-left: 55px;
    }
    
    .distributorBillStatus {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.greyDark};
        border: 1px solid ${background.greyDark};
        
        white-space: nowrap;
        text-align: center;
        
        padding: 4px 6px;
        border-radius: 10px;

        margin-left: 40px;
    }
    `