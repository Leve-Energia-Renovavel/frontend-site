
import { background } from '@/app/pages/globalStyles';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

export const RoutingHeaderContainer = styled.div`
    padding: 1rem 0;
    background-color: ${background.orangeTranslucent};
`
export const StepperComponent = styled(Stepper)`
    width: 100%;
    max-width: 200px;

    .MuiStepConnector-root span {
        border-color: transparent;
    }
`
export const StepComponent = styled(Step)`

    .MuiStepLabel-root .Mui-completed {
        color: ${background.orange};
    }
`
export const StepLabelComponent = styled(StepLabel)`
`
export const BoxComponent = styled(Box)`
    width: 100%;
`
