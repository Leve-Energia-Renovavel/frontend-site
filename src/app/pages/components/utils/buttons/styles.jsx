import { background, newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const colorForVariants = {
    "contained": newBackground.orange,
    "outlined": newBackground.yellow,
    "outlined-inverse": newBackground.white,
}
const backgroundColorForVariants = {
    "contained": newBackground.yellow,
    "outlined": newBackground.orange,
    "outlined-inverse": newBackground.orange,
}
const backgroundHoverColor = {
    "contained": newBackground.white,
    "outlined": newBackground.yellow,
    "outlined-inverse": newBackground.white,
}

const hoverColor = {
    "contained": newBackground.orange,
    "outlined": newBackground.orange,
    "outlined-inverse": newBackground.orange,

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
        color: ${newBackground.white};
        border-color: ${background.lightBorder};
        background-color: ${newBackground.orange};
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
            background-color: ${newBackground.yellow};
            color: ${newBackground.orange};
            border-color: ${background.lightBorder};
        }
`;

export const HeaderButtonStyle = styled(Button)`
        text-transform: none;
        color: ${newBackground.white};
        border: 1px solid ${newBackground.white};
        background-color: ${newBackground.orange};
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
            background-color: ${newBackground.yellow};
            color: ${newBackground.orange};
            border-color: ${background.lightBorder};
        }
`;

export const DashboardButtonStyle = styled(Button)`
        text-transform: none;
        color: ${newBackground.orange};
        border: 1px solid ${newBackground.orange};
        background-color: ${newBackground.white};
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
            background-color: ${newBackground.orange};
            color: ${newBackground.white};
            border-color: ${background.lightBorder};
        }
`;
export const NewInstallationButtonStyle = styled(Button)`
        text-transform: none;
        color: ${newBackground.orange};
        border: 1px solid ${newBackground.orange};
        background-color: ${newBackground.white};
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
            background-color: ${newBackground.orange};
            color: ${newBackground.white};
            border-color: ${background.lightBorder};
        }
`;

export const NewInstallationButtonConfirmStyle = styled(Button)`
        text-transform: none;
        color: ${newBackground.white};
        border: 1px solid ${background.lightBorder};
        background-color: ${newBackground.orange};
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
            background-color: ${newBackground.orange};
            color: ${newBackground.white};
            border-color: ${background.lightBorder};
        }
`;


export const MobileHeaderButtonContained = styled(Button)`
    text-transform: none;
    color: ${newBackground.orange};
    border-color: ${newBackground.orange};
    background-color: ${newBackground.yellow};
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
        background-color: ${newBackground.white};
        color: ${newBackground.orange};
        border: 1px solid ${newBackground.orange};
    }
`;


export const MobileHeaderButtonOutlined = styled(Button)`
    text-transform: none;
    color: ${newBackground.yellow};
    border: 1px solid ${newBackground.yellow};
    background-color: ${newBackground.orange};
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
        background-color: ${newBackground.white};
        color: ${newBackground.orange};
        border: 1px solid ${newBackground.orange};
    }
`;

export const TimelineButtonStyled = styled(Button)`
    text-transform: none;
    color: ${newBackground.orange};
    border: 1px solid ${newBackground.orange};
    background-color: ${newBackground.white};
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
        background-color: ${newBackground.orange};
        color: ${newBackground.white};
        border: 1px solid ${newBackground.orange};
    }
`;

