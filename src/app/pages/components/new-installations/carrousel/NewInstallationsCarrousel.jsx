"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatBillingArray } from '@/app/utils/helper/installationsCarrouselHelper';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ArrowBack, ArrowForward, CarrouselContentContainer, CarrouselContainer as Container, Dot, StepperContainer } from './styles';

const ConsumptionHistoryChart = dynamic(() => import('../chart/ConsumptionHistoryChart'), { ssr: false });

export default function NewInstallationsCarrousel({ dataType }) {

    const billings = useStoreBillingHistory().billings
    const [activeStep, setActiveStep] = useState(0);

    const formattedBillings = formatBillingArray(billings, 4)
    const selectedBillings = formattedBillings[activeStep]

    const maxSteps = formattedBillings?.length;

    const handleNext = () => {
        if (!(activeStep === maxSteps - 1)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep !== 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleStepChange = (step) => {
        if (activeStep !== step) {
            setActiveStep(step)
        }
    };


    return (
        <Container>
            <CarrouselContentContainer>
                <ArrowBack onClick={handleBack} disabled={activeStep === 0} />

                <ConsumptionHistoryChart selectedBillings={selectedBillings} dataType={dataType} />

                <ArrowForward onClick={handleNext} disabled={activeStep === maxSteps - 1} />
            </CarrouselContentContainer>

            <StepperContainer>
                {formattedBillings?.map((item, index) => {
                    return (
                        <Dot key={index} selected={index === activeStep} onClick={() => handleStepChange(index)} />
                    )
                })}

            </StepperContainer>
        </Container>

    )
}