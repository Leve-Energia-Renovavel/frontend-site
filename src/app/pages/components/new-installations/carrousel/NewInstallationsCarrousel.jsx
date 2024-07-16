"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatBillingArray } from '@/app/utils/helper/installationsCarrouselHelper';
import MobileStepper from '@mui/material/MobileStepper';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ArrowBack, ArrowForward, CarrouselContentContainer, CarrouselContainer as Container } from './styles';

const ConsumptionHistoryChart = dynamic(() => import('../chart/ConsumptionHistoryChart'), { ssr: false });

export default function NewInstallationsCarrousel() {

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
        console.log("STEP ====>>>", step)
    };


    return (
        <Container>
            <CarrouselContentContainer>
                <ArrowBack onClick={handleBack} disabled={activeStep === 0} />

                <ConsumptionHistoryChart selectedBillings={selectedBillings} />

                <ArrowForward onClick={handleNext} disabled={activeStep === maxSteps - 1} />
            </CarrouselContentContainer>

            <div>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    // Custom dots click handler
                    sx={{
                        '& .MuiMobileStepper-dot': {
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#f69',
                            },
                        },
                    }}
                    onDotClick={(step) => handleStepChange(step)}
                />
            </div>
        </Container>

    )
}