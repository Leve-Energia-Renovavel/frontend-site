import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { StepConnector, StepIcon, StepLabel, Stepper, stepConnectorClasses } from "@mui/material";

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 15px;

    /* height: auto; */
    height: 118px;

    text-align: center;

    .subtitle {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.green};

        margin-top: auto;
        margin-bottom: 1rem;
    }
`

export const CustomStepper = styled(Stepper)`
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 0;

    margin-top: 41px;

`;

export const CustomStepIcon = styled(StepIcon)`
    &.MuiStepIcon-root {
        margin-top: 3px;
        width: 16px;
        height: auto;
        color: ${newBackground.orangeFocused}; /* Default dot color */
    }
    &.Mui-active {
        width: 16px;
        height: auto;
        color: ${newBackground.orange}; /* Active dot color */
    }
    &.Mui-completed {
        margin-top: 0px;
        width: 20px;
        height: auto;
        color: ${newBackground.green}; /* Completed dot color */
    }
`;


export const StyledStepLabel = styled(StepLabel)`

    & .MuiStepLabel-label {
        position: absolute;
        text-align: center; /* Center align the label */
        top: -3rem;
        left: 27px;

        max-width: 195px;

        white-space: nowrap;

        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
    }
`;


export const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 9,
        left: 'calc(-53% + 16px)',
        right: 'calc(46% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: newBackground.orange,
            borderWidth: 4,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#e5e2e5',
        borderWidth: 4,
    },
}));

