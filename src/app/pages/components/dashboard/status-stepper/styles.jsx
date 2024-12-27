import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { StepConnector, StepIcon, StepLabel, Stepper, stepConnectorClasses } from "@mui/material";

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 15px;

    /* height: auto; */
    height: 118px;

    text-align: center;

    .subtitle {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.green};

        margin-top: auto;
        margin-bottom: 1rem;
    }

        
    @media (max-width: 900px) {
        .subtitle {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        color: ${background.green};

        margin-top: auto;
        margin-bottom: 1rem;
        }
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
        color: ${background.orangeFocused}; /* Default dot color */
    }
    &.Mui-active {
        width: 16px;
        height: auto;
        color: ${background.orange}; /* Active dot color */
    }
    &.Mui-completed {
        margin-top: 0px;
        width: 20px;
        height: auto;
        color: ${background.green}; /* Completed dot color */
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



    @media (max-width: 900px) {

        & .MuiStepLabel-label {
            font-size: 10px;
            left: 0;
            white-space: normal;

            max-width: 150px; /* Adjust max-width as needed */

        }

        &.MuiStepLabel-alternativeLabel .MuiStepLabel-iconContainer {
            width: fit-content;
        }
        
        &.MuiStepLabel-root.MuiStepLabel-alternativeLabel.styledStepLabel-0 {

            margin-left: -20px;
        }
        &.MuiStepLabel-root.MuiStepLabel-alternativeLabel.styledStepLabel-1 {
            margin-left: 2px;
        }
        &.MuiStepLabel-root.MuiStepLabel-alternativeLabel.styledStepLabel-2 {
            margin-left: 2px;
        }
        &.MuiStepLabel-root.MuiStepLabel-alternativeLabel.styledStepLabel-3 {
            margin-left: 30px;
        }
    }
`



export const CustomConnector = styled(StepConnector)`
    &.${stepConnectorClasses.alternativeLabel} {
        top: 9px;
        left: calc(-53% + 16px);
        right: calc(46% + 16px);
    }
    
    &.${stepConnectorClasses.active} .${stepConnectorClasses.line} {
        border-color: ${background.orange};
        border-width: 4px;
    }

    &.${stepConnectorClasses.completed} .${stepConnectorClasses.line} {
        border-color: ${background.green};

    }
    
    & .${stepConnectorClasses.line} {
        border-color: ${background.orangeFocused};
        border-width: 4px;

    }

    @media (max-width: 900px) {
        
        &.${stepConnectorClasses.alternativeLabel} {
            /* left: calc(-60% + 18px); 
            right: calc(20% + 10px); */

            left: calc(-56% + 16px);
            right: calc(38% + 16px);
        }

    }
`;