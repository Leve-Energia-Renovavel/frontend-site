import { background } from "@/app/pages/globalStyles";
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
    
    border-radius: 10px;

    width: 100%;
    height: auto;

    max-width: 900px;
    max-height: 550px;
    
    box-shadow: 24px;
    
    padding: 2rem;

    outline: none;
    
    @media (max-width: 900px) {
        padding: 1.5rem;
        transform: translate(-50%, -60%);
    }
`