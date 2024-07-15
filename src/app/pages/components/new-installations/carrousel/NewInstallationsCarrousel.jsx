"use client"

import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowBack, ArrowForward, CarrouselContentContainer, CarrouselContainer as Container } from './styles';

const ConsumptionHistoryChart = dynamic(() => import('../chart/ConsumptionHistoryChart'), { ssr: false });

export default function NewInstallationsCarrousel() {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (!activeStep === maxSteps - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep !== 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bird',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ];

    const maxSteps = images.length;

    return (
        <Container>
            <Typography>{images[activeStep].label}</Typography>

            <Image src={images[activeStep].imgPath} alt={`image-${activeStep}`} width={300} height={200} />


            <CarrouselContentContainer>
                <ArrowBack onClick={handleBack} disabled={activeStep === 0} />

                <ConsumptionHistoryChart />

                <ArrowForward onClick={handleNext} disabled={activeStep === maxSteps - 1} />
            </CarrouselContentContainer>

            <div>
                <MobileStepper
                    sx={{
                        '& .MuiMobileStepper-dot .MuiMobileStepper-dotActive': {
                            color: '#f69',
                        },
                    }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                />
            </div>
        </Container>

    )
}