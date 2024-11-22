import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "@mui/material";

export const SharedAccessButtonContainer = styled(Button, {
    shouldForwardProp: (prop) => prop !== "isMobileContent" && prop !== "hasSyncDistributorData",
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.hasSyncDistributorData ? background.greenTranslucent : background.orange};
    ${(props) => props.hasSyncDistributorData && `border: 1px solid ${background.green}`};
    ${(props) => props.isMobileContent && `display:none;`}
    
    border-radius: 8px;
    
    gap: 8px;
    
    padding: 12px 8px;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.hasSyncDistributorData ? background.greenTranslucent : background.orangeLight};
    }
    
    .lockIcon, .arrowRightIcon {
            width: 24px;
            height: 24px;
            color: ${(props) => props.hasSyncDistributorData ? background.green : background.white};
    }

    @media (max-width: 600px) {
        ${(props) => props.isMobileContent && `display:flex;`}
    }
    `
export const SharedAccessButtonTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 8px;

    .sharedAccessButtonTitle {
        font-family: "Graphie";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 21.6px */
        text-transform: none;
        color: ${(props) => props.hasSyncDistributorData ? background.green : background.white};
    }
`
export const SharedAccessButtonContent = styled.div`
    .sharedAccessButtonText {
        font-family: "Graphie";
        font-size: 14px;
        font-weight: 400;
        line-height: 120%;
        color: ${(props) => props.hasSyncDistributorData ? background.green : background.white};
        text-align: left;
        text-transform: none;
        
        max-width: 205px;
        }
`

export const LockIcon = styled(LockOutlinedIcon)`
    color: ${background.orange};
    `
export const ArrowRightIcon = styled(ArrowForwardOutlinedIcon)`
    color: ${background.orange};
    `
