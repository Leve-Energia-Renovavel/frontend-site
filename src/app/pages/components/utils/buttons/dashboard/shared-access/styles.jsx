import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "@mui/material";

export const SharedAccessButtonContainer = styled(Button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${background.orangeTranslucent};

    border-radius: 15px;
    
    gap: 10px;

    padding: 18px 10px;
    
    .sharedAccessButtonText {
        font-family: "Graphie";
        font-size: 12px;
        font-weight: 600;
        line-height: 120%;
        color: ${background.orange};
        text-align: left;
        text-transform: none;

        max-width: 198px;
    }

    .lockIcon, .arrowRightIcon {
        width: 32px;
        height: 32px;
    }
`

export const LockIcon = styled(LockOutlinedIcon)`
    color: ${background.orange};
`
export const ArrowRightIcon = styled(ArrowForwardOutlinedIcon)`
    color: ${background.orange};
`
