import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

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
    max-height: 383px;
    
    box-shadow: 24px;

    padding: 60px 55px;

    outline: none;

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
