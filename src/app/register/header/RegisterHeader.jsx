import { BoxComponent, RoutingHeaderContainer, StepComponent, StepLabelComponent, StepperComponent } from "./styles";

const steps = [
    'Titular',
    'Imóvel',
    'Contrato',
];

export default function RegisterHeader({ children, step }) {
    return (
        <RoutingHeaderContainer>
            <BoxComponent>
                <StepperComponent activeStep={step}>
                    {steps.map((label) => (
                        <StepComponent key={label}>
                            <StepLabelComponent>{label}</StepLabelComponent>
                        </StepComponent>
                    ))}
                </StepperComponent>
            </BoxComponent>
            {children}
        </RoutingHeaderContainer>
    )
}