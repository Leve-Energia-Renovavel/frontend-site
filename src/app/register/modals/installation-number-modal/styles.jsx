import styled from "@emotion/styled"
import { background, newBackground } from "@/app/pages/styles"
import { Box, Button } from "@mui/material"

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: ${newBackground.white};
    border: 1px solid ${background.lightBorder} ;
    border-radius: 10px;
    box-shadow: 12;
    padding: 20px;
    
    @media (max-width: 600px) {
        padding: 20px;

    }

    .modal-title {
        font-family: "Graphie";
        color: ${newBackground.orange}; 
        font-weight: 700;
        
        @media (max-width: 600px) {
            font-size: 18px;
            
        }
    }
    .modal-description {
        font-family: "Graphie";
        color: ${newBackground.green};
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
    background-color: ${newBackground.yellow};
    color: ${newBackground.orange};
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orange};
        color: ${newBackground.yellow};
    }

    span {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        text-transform: none;
    }
`
