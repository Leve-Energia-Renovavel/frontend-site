import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    
    border-radius: 8px;

    width: 100%;
    height: auto;

    max-width: fit-content;
    max-height: fit-content;
    
    box-shadow: 24px;
    
    padding: 1rem;

    outline: none;
    
    @media (max-width: 900px) {
        padding: 1.5rem;
        transform: translate(-50%, -60%);
    }
    @media (max-width: 600px) {
        padding: 1.5rem;
        transform: translate(-48%, -50%);

        min-width: 340px;
        width: 342px;
        max-width: 342px;
    }
`