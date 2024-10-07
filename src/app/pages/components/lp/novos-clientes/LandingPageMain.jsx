"use client"

import { Snackbar } from "@mui/material";
import { useState } from 'react';

import dynamic from 'next/dynamic';
import SimulationForm from '../../home/form/SimulationForm';
import LandingPageMainContent from './LandingPageMainContent';
const BrandsContainer = dynamic(() => import('../../home/brands/HomeBrands'), { ssr: false });
const TutorialContainer = dynamic(() => import('../../home/tutorial/HomeTutorial'), { ssr: false });
const LandingPageContactBanner = dynamic(() => import('./LandingPageContactBanner'), { ssr: false });
const LandingPageFaqBanner = dynamic(() => import('./LandingPageFaqBanner'), { ssr: false });
const LandingPageSecondaryBanner = dynamic(() => import('./LandingPageSecondaryBanner'), { ssr: false });

import {
    LandingPageContainer as Container,
    LandingPageBanner as MainBanner,
    SnackbarMessageAlert,
    SnackbarMessageNotification,
    TutorialBannerContainer
} from "./styles";


export default function LandingPageMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container>
                <MainBanner>
                    <LandingPageMainContent />
                    <SimulationForm setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
                </MainBanner>

                <LandingPageSecondaryBanner />

                <TutorialBannerContainer>
                    <TutorialContainer />
                </TutorialBannerContainer>

                <BrandsContainer />

                <LandingPageContactBanner />

                <LandingPageFaqBanner />

            </Container>
            <>
                {errors.map((error, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={errors.length >= 1}
                            autoHideDuration={3000}
                            message={error}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setErrorMessage([])}>
                            <SnackbarMessageAlert
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setErrorMessage([])}
                            >
                                {error}
                            </SnackbarMessageAlert>
                        </Snackbar>
                    )
                })}
            </>
            <>
                {notifications.map((notification, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={notifications.length >= 1}
                            autoHideDuration={6000}
                            message={notification}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setNotifications([])}>
                            <SnackbarMessageNotification
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setNotifications([])}
                            >
                                {notification}
                            </SnackbarMessageNotification>
                        </Snackbar>
                    )
                })}
            </>
        </>
    )
}