import Step from '@mui/material/Step';
import { StepperContainer as Container, CustomConnector, CustomStepIcon, CustomStepper, StyledStepLabel } from './styles';

const steps = [
    { 1: "Contrato assinado" },
    { 2: "Informações validadas" },
    { 3: "Cadastro na distribuidora" },
    { 4: "Unidade ativa!" },
];

export default function StatusStepper() {
    return (
        <Container>
            <CustomStepper activeStep={1} alternativeLabel connector={<CustomConnector />}>
                {steps.map((step, index) => (
                    <Step key={index + 1}>
                        <StyledStepLabel StepIconComponent={CustomStepIcon} icon={" "}>
                            {Object.keys(step)[0]}. {Object.values(step)[0]}
                        </StyledStepLabel>
                    </Step>
                ))}
            </CustomStepper>
            <p className='subtitle'>Parabéns, você assinou seu contrato com a Leve e receberá seus créditos de energia renovável em breve.</p>
        </Container>

    );
}