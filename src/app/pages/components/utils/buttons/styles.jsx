import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { background } from "@/app/pages/styles";

const colorForVariants = {
    "contained": background.blueLeve,
    "outlined": background.yellowLeve,
    "outlined-inverse": background.light,
}
const backgroundColorForVariants = {
    "contained": background.yellowLeve,
    "outlined": background.blueLeve,
    "outlined-inverse": background.blueLeve,
}
const backgroundHoverColor = {
    "contained": background.light,
    "outlined": background.yellowLeve,
    "outlined-inverse": background.light,
}

const hoverColor = {
    "contained": background.blueLeve,
    "outlined": background.blueLeve,
    "outlined-inverse": background.blueLeve,

}

export const DefaultButtonStyle = styled(Button)`
    text-transform: none;
    color: ${props => colorForVariants[props.variant]};
    border-color: ${props => colorForVariants[props.variant]};
    background-color: ${props => backgroundColorForVariants[props.variant]};
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
        font-family: "Metropolis";
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;

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
        font-size: 18;
        color: ${background.light};
        border-color: ${background.lightBorder};
        background-color: ${background.blueLeve};
        padding: 1rem 4rem;
        height: 3rem;
        border-radius: 13px;

        span { 
            font-family: "Metropolis";
            font-size: 18px;
            line-height: 18px;
            font-weight: 600;
        }

        &:hover {
            background-color: ${background.yellowLeve};
            color: ${background.blueLeve};
            border-color: ${background.lightBorder};
        }
`;

