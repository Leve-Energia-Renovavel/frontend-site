"use client"

import { useStoreMainInstallation } from '@/app/hooks/useStore';
import Step from '@mui/material/Step';
import { StepperContainer as Container, CustomConnector, CustomStepIcon, CustomStepper, StyledStepLabel } from './styles';

const steps = [
    { 1: "Contrato assinado" },
    { 2: "Informações validadas" },
    { 3: "Cadastro na distribuidora" },
    { 4: "Unidade ativa!" },
];

export default function StatusStepper() {

    const storeMainInstallation = useStoreMainInstallation()

    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))

    const { status, hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const handleInstallationStatus = (status) => {
        if (status === "ativo") return 4
        else if (status === "enviado") return 3
        else if (status === "validado") return 2
        else return 1
    }
    const handleInstallationSubtitle = (status) => {
        if (status === "ativo") return "Sua unidade está ativa! Em breve, você começará a economizar com a Leve Energia."
        else if (status === "enviado") return "Ótima notícia! Seu cadastro na distribuidora foi realizado com sucesso."
        else if (status === "validado") return "Suas informações foram validadas com sucesso. Em breve, a distribuidora aprovará seu cadastro!"
        else return "Parabéns, você assinou seu contrato com a Leve e receberá seus créditos de energia renovável em breve."
    }

    return (
        <Container className='statusStepperContainer'>
            <CustomStepper activeStep={handleInstallationStatus(status)} alternativeLabel connector={<CustomConnector />}>
                {steps.map((step, index) => (
                    <Step key={index + 1}>
                        <StyledStepLabel StepIconComponent={CustomStepIcon} icon={" "} className={`styledStepLabel-${index}`}>
                            {Object.keys(step)[0]}. {Object.values(step)[0]}
                        </StyledStepLabel>
                    </Step>
                ))}
            </CustomStepper>
            <p className='subtitle'>{handleInstallationSubtitle(status)}</p>
        </Container>
    );
}