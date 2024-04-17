import styled from "@emotion/styled";
import { Box } from "@mui/material";
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
    margin: 0 auto;

    height: 74px;
    padding: 0 6rem;
    
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
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


export const LoginBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${newBackground.white};

    width: 60vw;
    height: 80vh;
    
    border: 2px solid ${newBackground.yellow};
    box-shadow: 24px;
    border-radius: 13px;

    padding: 1rem 2rem;

    @media (max-width: 900px) {
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