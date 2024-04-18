import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { newBackground } from "../../styles";
import { keyframes } from "@emotion/react";

const modalAppear = keyframes`
    from {
    opacity: 0;
    transform: translateY(-50%);
}
    to {
    opacity: 1;
    transform: translateY(0);
}
`
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
    top: 48%;
    left: 100%;
    transform: translate(-50%, -50%);
    background-color: ${newBackground.white};

    width: 60vw;
    height: 80vh;

    box-shadow: 5px 10px 15px 20px rgba(0, 0, 0, 0.1);

    

    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: ${newBackground.yellow};
    
    padding: 1rem 2rem;

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        height: auto;

        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem;
    }
`

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const MenuHeaderContent = styled.div`
    .sole {
        width: 60px;
        height: 60px;
        margin-left: 8rem;
    }
    
    .helloUser {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        color: ${newBackground.green};
        
        margin-left: 5rem;
        margin-top: 1rem;
    }
    `
export const MenuOptionsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-left: 3.5rem;
    margin-top: 2rem;
`

export const MenuOption = styled.div`
    border: 1px solid ${newBackground.orange};
    border-radius: 30px;
    padding: 5px 30px;
    
    max-width: 220px;
    
    &:hover { 
        background-color: "#ccc"; //change background-color
    }
    
    .menuTitle { 
        font-family: "Graphie";
        font-size: 21px;
        font-weight: 600;
        color: ${newBackground.orange};
        text-align: center;
        
        &:hover { 
            cursor: pointer;
        }
    }
    
`

export const LoggoutButton = styled(Button)`
        margin-right: auto;
        margin-left: 8rem;
        
        font-family: "Graphie";
        font-size: 21px;
        color: ${newBackground.orange};
        
        text-transform: none;
        border-radius: 30px;
        
        &:hover { 
            text-decoration: underline;
            cursor: pointer;
        }
        
        
`