import { background } from "@/app/pages/globalStyles";
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
    background-color: ${background.white};
    
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

        max-width: 1920px;
        max-height: 1080px;

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
            color: ${background.orange};
    }

    p, .underlined {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.green};

        margin-top: 10px;
    }
    
    .description {
        margin-top: 24px;
    }
    
    .underlined {
        font-weight: 700;
        text-decoration: underline;
        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 900px) {
        .modalTitle {
            white-space: wrap;
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