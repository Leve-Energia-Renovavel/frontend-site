import { fadeInLeft } from "@/app/pages/globalAnimations";
import styled from "@emotion/styled";
import { Button, Drawer } from "@mui/material";
import { background } from "../../../../../globalStyles";

export const DrawerMenu = styled(Drawer)`

    .MuiDrawer-paper {
        background-color: ${background.white};
        margin: 5rem 0;
        border-radius: 10px 0 0 10px;
        max-height: 80vh;
        animation: ${fadeInLeft} 0.5s ease-out forwards;
    }

    // change backdrop color
  .MuiBackdrop-root {
    background-color: transparent;
  }

  @media (max-width: 900px) {
        /* width: 100%;
        height: 100%;
        height: auto;

        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem; */
    }
 `
export const DrawerMenuContent = styled.div`
    padding: 1rem;
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
        color: ${background.green};
        
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
    border: 1px solid ${background.orange};
    border-radius: 30px;
    padding: 5px 30px;
    
    max-width: 220px;
    
    &:hover { 
        background-color: ${background.orange}; 
    }
    
    .menuTitle { 
        font-family: "Graphie";
        font-size: 21px;
        font-weight: 600;
        color: ${background.orange};
        text-align: center;
        
        &:hover { 
            color: ${background.white};
            cursor: pointer;
        }
    }
    
`

export const LoggoutButton = styled(Button)`
        margin-right: auto;
        margin-left: 8rem;
        
        font-family: "Graphie";
        font-size: 21px;
        color: ${background.orange};
        
        text-transform: none;
        border-radius: 30px;
        
        &:hover { 
            text-decoration: underline;
            cursor: pointer;
        }
        
`