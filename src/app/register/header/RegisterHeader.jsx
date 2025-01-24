import Divider from "@mui/material/Divider";
import {
    BoxComponent,
    RegisterHeaderContainer as Container,
    RegisterHeaderTitleContainer,
    StepComponent,
    StepLabelContainer,
    StepperComponent
} from "./styles";

const steps = [
    { key: 0, label: "Titular", title: "Quem é o titular da conta de luz?" },
    { key: 1, label: "Imóvel", title: "Qual o endereço do imóvel da conta de luz?" },
    { key: 2, label: "Termo de adesão", title: "Leia e assine o contrato para começar a economizar e gerar impacto positivo para o planeta" }
];

export default function RegisterHeader({ children, step }) {
    return (
        <Container className="registerHeaderLabelContainer">
            <BoxComponent>
                <StepperComponent activeStep={step}>
                    {steps.map(({ key, label }) => (
                        <StepComponent key={key}>
                            <StepLabelContainer
                                className="registerHeaderLabelContainer"
                                isCompleted={step > key}
                                isSelected={step === key}>
                                <span className="registerHeaderLabel">{label}</span>
                            </StepLabelContainer>
                        </StepComponent>
                    ))}
                </StepperComponent>

                <Divider className="registerHeaderDivider" />
                <RegisterHeaderTitleContainer>
                    <h1 className="registerHeaderTitle">
                        {steps.find(({ key }) => key === step)?.title}
                    </h1>
                </RegisterHeaderTitleContainer>
            </BoxComponent>

            {children}
        </Container>
    );
}
