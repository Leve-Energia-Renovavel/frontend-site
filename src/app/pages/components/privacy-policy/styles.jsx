import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { background } from "../../globalStyles";


export const PolicyContainer = styled.div`
    margin: 74px auto 1rem auto;

    max-width: 1366px;
    background-color: ${background.white};
    border: 1px solid ${background.orange};
    border-radius: 15px;

    padding: 2rem;
    
    .mainTitle {
        font-family: "Graphie";
        color: ${background.orange};
        font-size: 41px;
        font-weight: 700;
        text-align: center;
    }
    
    .lastUpdate { 
        font-family: "Graphie";
        color: ${background.orange};
        font-size: 17px;
        font-weight: 500;
        
        margin: 2rem 0 0 2rem;
        
        @media (max-width: 1100px) {
            font-size: 14px;
            margin: 1rem 0 0 2rem;
        }
    }

    .topicTitle { 
        font-family: "Graphie";
        color: ${background.orange};
        font-size: 34px;
        font-weight: 600;
        
        margin-top: 2rem;
        
        @media (max-width: 1100px) {
            text-align: center;
            font-size: 24px;
        }
    }
    .topicDescription {
        margin: 1rem 2rem;
        
        @media (max-width: 1100px) {
            font-size: 14px;
            margin: 1rem;
        }
    }
    
    .bold { 
        font-weight: bold;
    }

    .backButtonContainer {
        text-align: center;
    }

    @media (max-width: 1100px) {
        padding: 2rem 1rem;
    }

`
