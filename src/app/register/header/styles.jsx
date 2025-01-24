
import { background, containerWidth } from '@/app/pages/globalStyles';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

export const RegisterHeaderContainer = styled.div`
    background-color: ${background.white};
    border-radius: 10px;
`

export const BoxComponent = styled(Box)`
    margin: 0 auto;
    width: calc(100% - 200px); /* 100px from left + 100px from right */
    padding: 2rem 0;
    
    .registerHeaderDivider {
        display: block;
        width:100%;
        margin: 2rem auto;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 1rem;

        .registerHeaderDivider {
            margin: 1rem auto;
        }
    }
`;

export const StepperComponent = styled(Stepper)`
    width: 100%;
    max-width: 200px;

    .MuiStepConnector-root span {
        border-color: transparent;
    }

    @media (max-width: 600px) {
        width: 100%;
        max-width: 100%;
    }
`
export const StepComponent = styled(Step)`

    .MuiStepLabel-root .Mui-active {
        color: ${background.orange};
    }

    .MuiStepLabel-root .Mui-completed {
        color: ${background.green};
    }
`

// This corrects the hydratation error message when using props 
// https://stackoverflow.com/questions/54468535/how-to-solve-warning-react-does-not-recognize-the-x-prop-on-a-dom-element
const StepLabelContainerBase = styled(StepLabel, {
    shouldForwardProp: (prop) => prop !== "isSelected" && prop !== "isCompleted",
})``;

export const StepLabelContainer = styled(StepLabelContainerBase)`

    span {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 100%;
        font-weight: 600;
        white-space: nowrap;
        color: ${props => props.isSelected ? background.orange : background.greyHigh};
        color: ${props => props.isCompleted && background.green};
    }
    `

export const RegisterHeaderTitleContainer = styled.div`

    .registerHeaderTitle {
        font-family: "Graphie";
        font-size: 28px;
        line-height: 120%;
        font-weight: 600;
        color: ${background.orange};
    }   

    @media (max-width: 600px) {
        .registerHeaderTitle {
            font-family: "Graphie";
            font-size: 22px;
            line-height: 120%;
            font-weight: 600;
            color: ${background.orange};
        }
    }
`
