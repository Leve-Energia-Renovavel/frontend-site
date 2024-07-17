import { Dot, StepperContainer } from './styles'

export default function ChartStepper({ formattedBillings, activeStep, handleStepChange }) {
    return (
        <StepperContainer>
            {formattedBillings?.map((item, index) => {
                return (
                    <Dot key={index} selected={index === activeStep} onClick={() => handleStepChange(index)} />
                )
            })}
        </StepperContainer>

    )
}