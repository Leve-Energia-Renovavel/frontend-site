import { newBackground } from "@/app/pages/styles";
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
    background-color: ${newBackground.white};
    
    border-radius: 10px;

    width: 100%;
    height: 100%;

    max-width: 900px;
    max-height: 350px;
    
    box-shadow: 24px;

    padding: 2rem;
`