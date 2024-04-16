import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { newBackground } from "../../styles";

export const MobileNewHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    background-color: ${newBackground.white};

    width: 100vw;
    max-width: 1920px;

    height: 74px;
    padding: 0 6rem;
    text-align: center;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    
    @media (max-width: 1100px) {
        padding: 0 30px;
    }

    .profile {
        width:40px; 
        height:40px;
        cursor: pointer;
    }

    .logoLeve {
        width:144px; 
        height:24px;
        cursor: pointer;
    }
`