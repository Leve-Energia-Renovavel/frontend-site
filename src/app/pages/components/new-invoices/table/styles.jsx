import { background, newBackground, newStatusColors } from "@/app/pages/styles";
import styled from "@emotion/styled";
import BarChartIcon from '@mui/icons-material/BarChart';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export const NewInvoicesTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    
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
    `
export const NewInvoicesTableContent = styled(Accordion)`
    border-radius: 10px;
    `

export const InvoicesTableLeveBill = styled(AccordionSummary)`
    display: flex;
    flex-direction: row;
    align-items: center;

    
    .leveBillValue, .leveBillStatus {
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

export const InvoicesTableActionButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;

    margin-left: auto;
    margin-right: 1rem;
`

export const GraphIcon = styled(BarChartIcon)`
    max-width: 19px;
    color: ${newBackground.orange};
    `
export const DownloadIcon = styled(FileDownloadOutlinedIcon)`
    max-width: 20px;
    color: ${newBackground.green};
`
export const LinkIcon = styled(InsertLinkIcon)`
    transform: rotate(135deg);
    max-width: 20px;
    color: ${newBackground.green};
`

export const DueButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 120px;

    padding: 6px 10px;
    background-color: ${background.white};
    border-radius: 10px;

    border: 2px solid ${newBackground.orange};

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.orange};

        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orangeFocused};
    }
`

export const PaidButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 120px;

    padding: 6px 10px;
    background-color: ${background.white};
    border-radius: 10px;

    border: 2px solid ${newBackground.green};

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.greenLight};
    }
`
export const PendingButton = styled.button`
    text-align: center;

    width: 82px;
    height: 35px;

    padding: 6px 10px;
    background-color: ${background.orangeLeve};
    border-radius: 10px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.white};
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.green};
    }
`

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;

    padding: 8px;
    background-color: ${background.white};
    border: 2px solid ${newBackground.orange};
    border-radius: 10px;

    .icon{
        color: ${newBackground.orange};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orangeFocused};
    }
`