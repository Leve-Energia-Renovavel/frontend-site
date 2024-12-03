import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"
import { Box, Button } from "@mui/material"

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: ${background.white};
    border-radius: 10px;
    box-shadow: 24px;
    padding: 40px;

    outline: none;
    
    @media (max-width: 600px) {
        padding: 20px;
    }

    .modal-title {
        font-family: "Graphie";
        color: ${background.orange}; 
        font-weight: 700;
        
        @media (max-width: 600px) {
            font-size: 18px;
            
        }
    }
    .modal-description {
        font-family: "Graphie";
        color: ${background.green};
        font-weight: 600;
        margin: 1rem 0 1rem 0;

        @media (max-width: 600px) {
            font-size: 12px;
            margin: 1rem 0 1rem 0;
            
        }
    }
    .modal-image { 
        width: auto; 
        height: 300px; 
        @media (max-width: 600px) {
            height: 200px; 
        }
    }
`

export const ModalButton = styled(Button)`
    background-color: ${background.yellow};
    color: ${background.orange};
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: ${background.orange};
        color: ${background.yellow};
    }

    span {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        text-transform: none;
    }
`
