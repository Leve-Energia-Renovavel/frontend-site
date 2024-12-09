import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    
    border-radius: 20px;

    width: 100%;
    height: 100%;

    max-width: 792px;
    max-height: 319px;
    
    box-shadow: 24px;

    padding: 60px 55px;

    outline: none;

    .modalTitle {
        white-space: nowrap;
            font-family: "Graphie";
            font-size: 27px;
            line-height: 32px;
            font-weight: 600;
            color: ${background.orange};
    }

    .description {
            font-family: "Graphie";
            font-size: 17px;
            line-height: 20px;
            font-weight: 600;
            color: ${background.green};

            margin-top: 29px;

            text-align: center;
    }

    .highlighted {
        font-weight: 800;
    }


    @media (max-width: var(--medium)) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem;
    }
`
export const Check = styled(CheckIcon)`
    background-color: ${background.yellow};
    color: ${background.orange};

    max-width: 36px;
    max-height: 36px;

    border-radius: 20px;
    padding: 4px;

    margin-bottom: 6px;
`

export const ModalMainButton = styled(Button)`
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: 39px;

        gap: 4px;

        text-transform: none;
        border: 1px solid ${background.orange};
        background-color: ${background.orange};
        padding: 11px 18px;

        border-radius: 10px;
        height: 3rem;

        width: 100%;
        max-width: 280px;

        span { 
            white-space: nowrap;
            font-family: "Graphie";
            font-size: 16px;
            line-height: 21px;
            font-weight: 600;
            color: ${background.white};
        }

        &:hover {
            background-color: ${background.green};
            border-color: ${background.green};
            
            span {
                color: ${background.yellow};
            } 
        }
`;