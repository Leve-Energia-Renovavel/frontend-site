"use client"


import { useState } from "react";
import HomeAreas from "../../home/HomeAreas";
import BrandsContainer from "../../home/HomeBrands";
import TutorialContainer from "../../home/HomeTutorial";
import Messages from "../../messages/Messages";
import DefaultForm from "../form/default/DefaultForm";
import LandingPageContactBanner from "../novos-clientes/LandingPageContactBanner";
import LandingPageFaqBanner from "../novos-clientes/LandingPageFaqBanner";
import LandingPageSecondaryBanner from "../novos-clientes/LandingPageSecondaryBanner";
import { TutorialBannerContainer } from "../novos-clientes/styles";
import { PartnershipMainContainer as Container, MainContentContainer, } from "../parcerias/styles";
import LandingPageArraiaMainBanner from "./LandingPageArraiaMainBanner";
import LandingPageArraiaPanelBanner from "./LandingPageArraiaPanelBanner";

export default function LandingPageArraia() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container className="partnershipContainer">
                <MainContentContainer className="mainContentContainer">
                    <LandingPageArraiaMainBanner />
                    <DefaultForm setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </MainContentContainer>

                <LandingPageArraiaPanelBanner />

                <LandingPageSecondaryBanner />

                <TutorialBannerContainer>
                    <TutorialContainer />
                </TutorialBannerContainer>

                <HomeAreas />

                <BrandsContainer />

                <LandingPageContactBanner />

                <LandingPageFaqBanner />

            </Container>

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}