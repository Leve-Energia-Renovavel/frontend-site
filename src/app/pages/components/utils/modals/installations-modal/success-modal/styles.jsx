import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${newBackground.white};
    
    border-radius: 15px;

    width: 100%;
    height: auto;

    max-width: 500px;
    max-height: 650px;
    
    box-shadow: 24px;

    padding: 1.5rem;

    outline: none;

    @media (max-width: 900px) {
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

export const ModalTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    .modalTitle {
        white-space: nowrap;
            font-family: "Graphie";
            font-size: 27px;
            line-height: 42px;
            font-weight: 600;
            color: ${newBackground.orange};
    }

    p, .underlined {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.green};
    }

    .description {
        margin-top: 24px;
    }

    .underlined {
        text-decoration: underline;
        &:hover {
            cursor: pointer;
        }
    }
`

export const ModalMainButton = styled(Button)`
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: 39px;

        gap: 4px;

        text-transform: none;
        border: 1px solid ${newBackground.orange};
        background-color: ${newBackground.orange};
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
            color: ${newBackground.white};
        }

        &:hover {
            background-color: ${newBackground.green};
            border-color: ${newBackground.green};
            
            span {
                color: ${newBackground.yellow};
            } 
        }
`;