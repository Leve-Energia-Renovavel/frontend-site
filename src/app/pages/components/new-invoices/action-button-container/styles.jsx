import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import BarChartIcon from '@mui/icons-material/BarChart';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { BILL_STATUS } from "../../new-dashboard/invoices/invoicesEnums";

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
    `
export const DownloadIcon = styled(FileDownloadOutlinedIcon)`
    max-width: 20px;
`
export const LinkIcon = styled(InsertLinkIcon)`
    transform: rotate(135deg);
    max-width: 20px;
`

export const DueButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 120px;

    padding: 6px 10px;
    background-color: ${background.white};
    border-radius: 10px;

    border: 2px solid ${props => props.status === BILL_STATUS.PAID ? background.green : background.orange};

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${props => props.status === BILL_STATUS.PAID ? background.green : background.orange};

        white-space: nowrap;
    }

    .icon {
        color: ${props => props.status === BILL_STATUS.PAID ? background.green : background.orange};
    }

    &:hover {
        cursor: pointer;
        background-color: ${props => props.status === BILL_STATUS.PAID ? background.greenLight : background.orangeFocused}
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

    border: 2px solid ${background.green};

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }

    &:hover {
        cursor: pointer;
        background-color: ${background.greenLight};
    }
`
export const PendingButton = styled.button`
    text-align: center;

    width: 82px;
    height: 35px;

    padding: 6px 10px;
    background-color: ${background.orange};
    border-radius: 10px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.white};
    }

    &:hover {
        cursor: pointer;
        background-color: ${background.green};
    }
`

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;

    padding: 8px;
    background-color: ${background.white};
    border: 2px solid ${props => props.status === "paid" ? background.green : background.orange};
    border-radius: 10px;

    .icon{
        color: ${props => props.status === "paid" ? background.green : background.orange};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.status === "paid" ? background.greenLight : background.orangeFocused};
    }
`