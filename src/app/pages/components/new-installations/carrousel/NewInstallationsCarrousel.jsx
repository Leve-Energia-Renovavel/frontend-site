"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatBillingArray } from '@/app/utils/helper/installationsCarrouselHelper';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ChartStepper from '../chart-stepper/ChartStepper';
import ChartLegend from '../legend/ChartLegend';
import { ArrowBack, ArrowForward, CarrouselContentContainer, CarrouselContainer as Container, FooterContainer, InfoIcon } from './styles';
import ConsumptionHistoryChart from '../chart/ConsumptionHistoryChart';

// const ConsumptionHistoryChart = dynamic(() => import('../chart/ConsumptionHistoryChart'), { ssr: false });

export default function NewInstallationsCarrousel({ dataType }) {

    const billings = useStoreBillingHistory()?.getFilteredBillings()
    const [activeStep, setActiveStep] = useState(0);

    const [chartQuantity, setChartQuantity] = useState(4);

    const formattedBillings = billings ? formatBillingArray(billings, chartQuantity) : []
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

    useEffect(() => {
        const updateChartQuantity = () => {
            if (window?.innerWidth < 500) {
                setChartQuantity(2);
            } else {
                setChartQuantity(4);
            }
        };

        updateChartQuantity();
        window?.addEventListener('resize', updateChartQuantity);

        return () => {
            window.removeEventListener('resize', updateChartQuantity);
        };
    }, []);


    return (
        <Container className='installationsCarrouselContainer'>
            <CarrouselContentContainer className='carrouselContentContainer'>
                <ArrowBack onClick={handleBack} disabled={activeStep === 0} />
                <ConsumptionHistoryChart selectedBillings={selectedBillings} dataType={dataType} />
                <ArrowForward onClick={handleNext} disabled={activeStep === maxSteps - 1} />
            </CarrouselContentContainer>

            <ChartStepper
                formattedBillings={formattedBillings}
                activeStep={activeStep}
                handleStepChange={handleStepChange} />

            <ChartLegend />

            {/* <FooterContainer className='understandYourEconomy'>
                <InfoIcon />
                <span>Entenda sua economia</span>
            </FooterContainer> */}
        </Container>

    )
}