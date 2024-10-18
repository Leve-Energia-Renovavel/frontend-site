import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { background } from "../../styles";

export const MobileNewHeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${background.white};
    ${props => props.isPartner ? "" : `justify-content: ${props.isLandingPage ? 'center' : 'space-between'};`};
    
    overflow: hidden;

    border-radius: 0 0 10px 10px;

    width: 1366px;
    max-width: 100vw;
    margin: 0 auto;

    height: 74px;
    padding: 0 2rem;
    
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
    z-index: 1000;
    
    .profile {
        width: 45px;
        height: 45px;

        padding: 8px;

        border-radius: 30px;
        color: ${props => props.isOpen ? background.yellow : background.orange};
        background-color: ${props => props.isOpen ? background.orange : background.yellow};
        
        cursor: pointer;
        ${props => props.isLandingPage && "display:none"};
    }

    .mobileMenu {
        width: 45px;
        height: 45px;

        padding: 8px;

        border-radius: 30px;

        color: ${props => props.isOpen ? background.yellow : background.orange};
        background-color: ${props => props.isOpen ? background.orange : background.yellow};
        
        cursor: pointer;
        
        display:none;
    }

    .logoLeve {
        width: 200px; 
        height: 33px;
        cursor: pointer;
    }

    @media (max-width: 1100px) {
        padding: 0 30px;
    }
    @media (max-width: 600px) {
        width: 100vw;
        max-width: 100vw;
        margin: 0;

        .mobileMenu {
            display: block;
        }
        .profile {
            display: none;
        }

        .logoLeve {
            width: 155px; 
            height: 33px;
            cursor: pointer;
        }
    }
`


export const LoginBox = styled(Box)`
    position: absolute;
    top: 48%;
    left: 100%;
    transform: translate(-50%, -50%);
    background-color: ${background.white};

    width: 60vw;
    height: 80vh;

    box-shadow: 5px 10px 15px 20px rgba(0, 0, 0, 0.1);

    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: ${background.yellow};
    
    padding: 1rem 2rem;

    outline: none;

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

export const PartnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding-left: 1rem;

    .partnershipIcon {
        color: ${background.orange};
        font-weight: 700;
        font-size: 15px;
        text-align: center;
        background: linear-gradient(to bottom, #ffffff 6%, ${background.yellow} 94%);
        border: 2px solid ${background.orange};
        border-radius: 30px;
        padding: 3px 6px;
    }

    .partnerLogo {
        width: 154px;
        height: auto;
    }

    .martinsLogo {
        width: 74px;
        height: 54px;
    }
    .timLogo {
        width: 121px;
        height: 32px;
    }
    
    @media (max-width: 900px) {
        .partnerLogo {
        width: 120px;
        height: auto;
        }
    }
`