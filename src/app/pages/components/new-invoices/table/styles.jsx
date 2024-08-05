import { background, newBackground, newStatusColors } from "@/app/pages/styles";
import styled from "@emotion/styled";
import BarChartIcon from '@mui/icons-material/BarChart';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export const NewInvoicesTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    .tableHeader, .tableHeaderStatus {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};

        margin-left: 70px;
    }
    
    .tableHeaderStatus {
        margin-left: 90px;
    }
    
    @media (max-width: 900px) {
        .tableHeader, .tableHeaderStatus {
            margin-left: 70px;
        }
    }
    @media (max-width: 700px) {
        .tableHeader, .tableHeaderStatus {
            margin-left: 20px;
        }
    }
    
    `
export const NewInvoicesTableContent = styled(Accordion)`
    border-radius: 10px;

    .mobileActionButtonContainer {
        display: none;
     }

     @media (max-width: 900px) {
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
        color: ${newBackground.green};
        
        white-space: nowrap;
        text-align: center;

        margin: auto 0;

        width: 70px;
        
        margin-left: 55px;
    }
    
    .leveBillStatus {
        width: 100%;
        max-width: 100px;

        height: fit-content;

        background-color: ${props => newStatusColors[props.status]};
        color: ${props => props.status === "due" ? newBackground.orange : newBackground.white};
        padding: 4px 8px;
        border-radius: 10px;
    }
    
    &.Mui-expanded {
        border-radius: 10px;
        border: 2px solid ${newBackground.orange};

        .leveBillValue {
            color: ${newBackground.orange};
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
        color: ${newBackground.orange};

        margin: 0 auto;
     }

     .desktopActionButtonContainer {
        margin-left: auto;
     }

    @media (max-width: 900px) {
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
        color: ${newBackground.greyDark};

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
        color: ${newBackground.greyDark};
        border: 1px solid ${newBackground.greyDark};
        
        white-space: nowrap;
        text-align: center;
        
        padding: 4px 6px;
        border-radius: 10px;

        margin-left: 40px;
    }
    `