import { newBackground, newStatusColors, statusColors } from "@/app/pages/styles"
import styled from "@emotion/styled"
import Divider from '@mui/material/Divider'

export const DashboardInvoicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.orange};
    border-radius: 15px;
    
    width: 100%;
    max-width: 287px;

    .myInvoices {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.white};

        white-space: nowrap;

        margin: 12px 1rem;
    }
`
export const DashboardInvoicesContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 15px;

    padding: 0 1rem;

    width: 100%;
    max-width: 287px;
`
export const NextBillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
`
export const NextBill = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    .billDate {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};

        white-space: nowrap;

        margin-top: 34px;
    }
`
export const PayBillButtonContainer = styled.div`
    margin: 12px 0;
`
export const NextBillInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .value {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 800;
        color: ${newBackground.orange};

        padding: 12px 0;

        white-space: nowrap;
    }
    .status {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.white};
        border-radius: 20px;
        white-space: nowrap;

        padding: 4px 5px;
        ${props => props.status ? `background-color:${newStatusColors[props.status]};` : ""};

    }

    .label {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.orange};

        padding: 6px 0;
    }
    .info {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};

        padding: 6px 0;
    }
`
export const NextBillDivider = styled(Divider)`
    border-color: ${newBackground.orange};
`

export const NextBillsFooter = styled.div`
    margin-top: 37px;
    margin-bottom: 15px;
    text-align: center;
    background-color: ${newBackground.white};

    .checkAllInvoices {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.orange};

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }

        
    }

`