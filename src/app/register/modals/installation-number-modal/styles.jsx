import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"
import { Box } from "@mui/material"

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: ${background.light};
    border: 1px solid ${background.lightBorder} ;
    border-radius: 10px;
    box-shadow: 12;
    padding: 20px;
    
    @media (max-width: 600px) {
        padding: 20px;
    }

    .modal-title {
        color: ${background.primary}; 
        font-weight: bold;

        @media (max-width: 600px) {
            font-size: 18px;
            
        }
    }
    .modal-description {
        margin: 2rem 0 1rem 0;

        @media (max-width: 600px) {
            font-size: 12px;
            margin: 1rem 0 1rem 0;
            
        }
    }
    .modal-image { 
        width: auto; 
        height: 300px; 
        @media (max-width: 600px) {
            height: 120px; 

        }
    }
`