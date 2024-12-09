import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    
    border-radius: 15px;

    width: 100%;
    height: auto;

    max-width: 800px;
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

    .description {
            font-family: "Graphie";
            font-size: 17px;
            line-height: 21px;
            font-weight: 500;
            color: ${background.green};

            margin-top: 24px;
    }

    @media (max-width: 900px) {
        .modalTitle {
            white-space: wrap;
        }

        .description {
            display: none;
        }
    }
`