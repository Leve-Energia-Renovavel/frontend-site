import styled from "@emotion/styled";
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