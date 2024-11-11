import { background, newFontStatusColors, newStatusColors, statusColors } from "@/app/pages/styles"
import styled from "@emotion/styled"
import Divider from '@mui/material/Divider'

export const DashboardInvoicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orange};
    border-radius: 15px;
    
    width: 100%;
    max-width: 287px;

    .myInvoices {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.white};

        white-space: nowrap;

        margin: 12px 1rem;
    }

    @media (max-width: 900px) {
        margin: 0 auto;
    }

    
`
export const DashboardInvoicesContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 15px;

    margin-top: auto;

    padding: 0 1rem;

    width: 100%;
    min-width: 287px;
    max-width: 287px;
`
export const AllBillsPaidContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orange};

    margin-top: 4px;
    margin-bottom: -10px;

    padding: 4px 8px;
    border-radius: 10px;

    p {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.white};

        text-align: center;
    }
`
export const NextBillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
`
export const NextBill = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    .billDate {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};

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
        color: ${background.orange};

        padding: 12px 0;

        white-space: nowrap;
    }
    .status {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.white};
        border-radius: 20px;
        white-space: nowrap;

        width: 100%;
        max-width: 85px;
        text-align: center;

        padding: 4px 5px;
        ${props => props.status ? `background-color:${newStatusColors[props.status]};` : ""};
        ${props => props.status ? `color:${newFontStatusColors[props.status]};` : ""};
    }

    .label {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.orange};

        padding: 6px 0;
    }
    .info {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};

        padding: 6px 0;
    }
`
export const NextBillDivider = styled(Divider)`
    border-color: ${background.orange};
`


export const NextBillsFooter = styled.div`
    margin-top: 37px;
    margin-bottom: 15px;
    text-align: center;
    background-color: ${background.white};

    .checkAllInvoices {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.orange};

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }

        
    }

`

export const NoBillsContainer = styled.div`
    text-align: center;
    margin-top: 10px;

    .noBillsYet {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.orange};
    }

`