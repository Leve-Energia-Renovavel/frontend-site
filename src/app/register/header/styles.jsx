
import { background, containerWidth } from '@/app/pages/globalStyles';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

export const RegisterHeaderContainer = styled.div`
    background-color: ${background.white};
    border-radius: 0px 0px 10px 10px;
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
`;

export const StepperComponent = styled(Stepper)`
    width: 100%;
    max-width: 200px;

    .MuiStepConnector-root span {
        border-color: transparent;
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
export const StepLabelContainer = styled(StepLabel)`

    span {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 100%;
        font-weight: 600;
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
