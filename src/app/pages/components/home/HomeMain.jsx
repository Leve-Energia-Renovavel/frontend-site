"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { ButtonContainer, HomeContainer as Container, CTAButton, HomeContentContainer as HomeBanner } from "./styles";

import { Divider } from "@mui/material";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import HomeBoxesMobile from "./boxes/mobile/HomeBoxesMobile";
import HomeMainForm from './form/HomeMainForm';

const BrandsContainer = dynamic(() => import('./HomeBrands'), { ssr: false });
const TutorialContainer = dynamic(() => import('./tutorial/HomeTutorial'), { ssr: false });
const Messages = dynamic(() => import('../messages/Messages'), { ssr: false });

export default function HomeMain() {

    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container className="homeContainer">
                <HomeBanner className="homeBanner">
                    <Divider className='dividerBar' />

                    <NewHomeMainBanner />

                    <ButtonContainer  className="homeBannerButtonContainer">
                        <CTAButton><span>Calcular meu desconto</span></CTAButton>
                    </ButtonContainer>
                </HomeBanner>

                <HomeBoxesMobile className='homeMainBoxesContainerMobile' />

                <TutorialContainer />

                <HomeMainForm
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications}
                    selectedUserType={selectedUserType}
                    setSelectedUserType={setSelectedUserType}
                    isMobile={true} />


                <BrandsContainer />

            </Container >

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>

    )
}