import { background } from '@/app/pages/globalStyles';
import { BoxComponent, RoutingHeaderContainer, StepComponent, StepLabelComponent, StepperComponent } from "./styles";

const steps = [
    'Titular',
    'Imóvel',
    'Contrato',
];

export default function RegisterHeader({ children }) {
    return (
        <RoutingHeaderContainer>
            <BoxComponent>
                <StepperComponent activeStep={1}>
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