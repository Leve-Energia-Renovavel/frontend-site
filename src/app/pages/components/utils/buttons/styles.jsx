import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const colorForVariants = {
    "contained": background.orange,
    "outlined": background.yellow,
    "outlined-inverse": background.white,
}
const backgroundColorForVariants = {
    "contained": background.yellow,
    "outlined": background.orange,
    "outlined-inverse": background.orange,
}
const backgroundHoverColor = {
    "contained": background.white,
    "outlined": background.yellow,
    "outlined-inverse": background.white,
}

const hoverColor = {
    "contained": background.orange,
    "outlined": background.orange,
    "outlined-inverse": background.orange,

}

export const DefaultButtonStyle = styled(Button)`
    text-transform: none;
    color: ${props => colorForVariants[props.variant]};
    border-color: ${props => colorForVariants[props.variant]};
    background-color: ${props => backgroundColorForVariants[props.variant]};
    border-radius: 21px;
    cursor: pointer;
    margin: 2rem;
    height: 3rem;
    padding: 1rem 4rem;
    
    @media (max-width: 1500px) {
        margin: 1rem;
        height: 3rem;
        padding: 1rem 3rem;
    }
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;

        @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        }
    }

    &:hover {
        background-color: ${props => backgroundHoverColor[props.variant]};
        color: ${props => hoverColor[props.variant]};
        border: 1px solid ${props => hoverColor[props.variant]};
    }
`;



export const FormButtonStyle = styled(Button)`
        text-transform: none;
        color: ${background.white};
        border-color: ${background.lightBorder};
        background-color: ${background.orange};
        padding: 1rem 4rem;
        height: 3rem;
        border-radius: 13px;
        
        @media (max-width: 600px) {
            padding: 1rem 2rem;
        }

        span { 
            font-family: "Graphie";
            font-size: 18px;
            line-height: 18px;
            font-weight: 600;
            
            @media (max-width: 1500px) {
                font-size: 16px;
            }
        }

        &:hover {
            background-color: ${background.yellow};
            color: ${background.orange};
            border-color: ${background.lightBorder};
        }
`;

export const HeaderButtonStyle = styled(Button)`
        text-transform: none;
        color: ${background.white};
        border: 1px solid ${background.white};
        background-color: ${background.orange};
        padding: 12px 24px;
        height: 3rem;
        border-radius: 8px;

        margin-left: 2rem;

        span { 
            font-family: "Graphie";
            font-size: 16px;
            line-height: 16px;
            font-weight: 400;
        }

        &:hover {
            background-color: ${background.yellow};
            color: ${background.orange};
            border-color: ${background.lightBorder};
        }
`;

export const DashboardButtonStyle = styled(Button)`
        text-transform: none;
        color: ${background.orange};
        border: 1px solid ${background.orange};
        background-color: ${background.white};
        padding: 12px 48px;
        height: 3rem;
        border-radius: 8px;

        margin: 0 1rem 0 0;

        span { 
            font-family: "Graphie";
            font-size: 16px;
            line-height: 16px;
            font-weight: 600;
        }

        &:hover {
            background-color: ${background.orange};
            color: ${background.white};
            border-color: ${background.lightBorder};
        }
`;
export const NewInstallationButtonStyle = styled(Button)`
        text-transform: none;
        color: ${background.orange};
        border: 1px solid ${background.orange};
        background-color: ${background.white};
        padding: 12px 24px;
        height: 3rem;
        border-radius: 8px;
        
        margin: 0 auto;
        
        @media (max-width: 600px) {
            height: 4rem;
        }

        span { 
            font-family: "Graphie";
            font-size: 16px;
            line-height: 16px;
            font-weight: 600;
        }

        &:hover {
            background-color: ${background.orange};
            color: ${background.white};
            border-color: ${background.lightBorder};
        }
`;

export const NewInstallationButtonConfirmStyle = styled(Button)`
        text-transform: none;
        color: ${background.white};
        border: 1px solid ${background.lightBorder};
        background-color: ${background.orange};
        padding: 12px 24px;
        height: 3rem;
        border-radius: 8px;
        
        margin: 0 auto;
        
        @media (max-width: 600px) {
            height: 4rem;
        }

        span { 
            font-family: "Graphie";
            font-size: 16px;
            line-height: 16px;
            font-weight: 600;
        }

        &:hover {
            background-color: ${background.orange};
            color: ${background.white};
            border-color: ${background.lightBorder};
        }
`;


export const MobileHeaderButtonContained = styled(Button)`
    text-transform: none;
    color: ${background.orange};
    border-color: ${background.orange};
    background-color: ${background.yellow};
    border-radius: 13px;
    cursor: pointer;
    margin: 2rem;
    height: 3rem;
    padding: 1rem 4rem;
    
    @media (max-width: 1500px) {
        margin: 1rem;
        height: 3rem;
        padding: 1rem 3rem;
    }
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;

        @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        }
    }

    &:hover {
        background-color: ${background.white};
        color: ${background.orange};
        border: 1px solid ${background.orange};
    }
`;


export const MobileHeaderButtonOutlined = styled(Button)`
    text-transform: none;
    color: ${background.yellow};
    border: 1px solid ${background.yellow};
    background-color: ${background.orange};
    border-radius: 13px;
    cursor: pointer;
    margin: 2rem;
    height: 3rem;
    padding: 1rem 4rem;
    
    @media (max-width: 1500px) {
        margin: 1rem;
        height: 3rem;
        padding: 1rem 3rem;
    }
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;

        @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        }
    }

    &:hover {
        background-color: ${background.white};
        color: ${background.orange};
        border: 1px solid ${background.orange};
    }
`;

export const TimelineButtonStyled = styled(Button)`
    text-transform: none;
    color: ${background.orange};
    border: 1px solid ${background.orange};
    background-color: ${background.white};
    border-radius: 13px;
    cursor: pointer;
    margin: 2rem;
    height: 3rem;
    padding: 1rem 4rem;

    @media (max-width: 1500px) {
        margin: 1rem;
        height: 3rem;
        padding: 1rem 3rem;
    }
    @media (max-width: 600px) {
        margin: 0 auto;
        height: 3rem;
        padding: 1rem 3rem;
    }
    
    span { 
        font-family: "Graphie";
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;

        @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        }
    }

    &:hover {
        background-color: ${background.orange};
        color: ${background.white};
        border: 1px solid ${background.orange};
    }
`;


export const NewDefaultButtonStyle = styled(Button)`
    cursor: pointer;
    text-transform: none;
    white-space: nowrap;
    border-radius: 21px;

    border: 1px solid ${props => backgroundColorForVariants[props.variant]};
    color: ${props => colorForVariants[props.variant]};
    border-color: ${props => colorForVariants[props.variant]};
    background-color: ${props => backgroundColorForVariants[props.variant]};
    
    min-height: 42px;
    padding: 10px 70px;

    span { 
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
    }

    &:hover {
        background-color: ${props => backgroundHoverColor[props.variant]};
        color: ${props => hoverColor[props.variant]};
        border: 1px solid ${props => hoverColor[props.variant]};
    }
        
    /* @media (max-width: 1500px) {
        margin: 1rem;
        height: 3rem;
        padding: 1rem 3rem;
    } */
`;


export const OutlinedButtonStyle = styled(Button)`
        text-transform: none;
        border: 1px solid ${background.orange};
        background-color: ${background.white};
        padding: 11px 18px;

        border-radius: 10px;
        height: 3rem;

        width: 100%;
        max-width: 280px;
        
        span { 
            font-family: "Graphie";
            font-size: 16px;
            line-height: 21px;
            font-weight: 600;
            color: ${background.orange};
        }

        &:hover {
            background-color: ${background.orange};
            border-color: ${background.lightBorder};
            
            span {
                color: ${background.white};
            } 
        }
`;