"use client"

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Snackbar } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import infoJson from '../../../../../public/home-info.json';
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large.webp";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large.webp";
import { HomeContainer as Container, HomeContentContainer as HomeBanner, HomeSecondaryImagesContainer, HomeSecondaryImagesContent, HomeSecondarySectionContainer, SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";

import HomeMainBanner from './banners/HomeMainBanner';
import HomeMainForm from './form/HomeMainForm';

const BoxesContainer = dynamic(() => import('./HomeBoxes'), { ssr: false });
const BrandsContainer = dynamic(() => import('./HomeBrands'), { ssr: false });
const HomeEconomyBanner = dynamic(() => import('./banners/HomeEconomyBanner'), { ssr: false });
const HomeSoleBanner = dynamic(() => import('./banners/HomeSoleBanner'), { ssr: false });
const TutorialContainer = dynamic(() => import('./HomeTutorial'), { ssr: false });

export default function HomeMain() {

    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const handlePreSignup = (userType) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setSelectedUserType(userType);
    }

    const texts = infoJson

    return (
        <>
            <Container>
                <HomeBanner>
                    <HomeMainBanner />
                    <HomeMainForm setErrorMessage={setErrorMessage} setNotifications={setNotifications} selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType} />
                </HomeBanner>

                <HomeSecondarySectionContainer>
                    <BoxesContainer />
                    <HomeSecondaryImagesContainer >
                        <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")} >
                            <h6 variant="subtitle1">{texts.forYourHouse}</h6>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                        <HomeSecondaryImagesContent invertedBox={true} image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                            <h6 variant="subtitle1">{texts.forYourCompany}</h6>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                    </HomeSecondaryImagesContainer>
                </HomeSecondarySectionContainer>

                <HomeSoleBanner />

                <TutorialContainer />

                <HomeEconomyBanner />

                <BrandsContainer />

            </Container >

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