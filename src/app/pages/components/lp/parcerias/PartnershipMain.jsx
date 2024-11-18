"use client"

import { clearPartnerName, partners } from "@/app/utils/helper/partners/partnerHelper";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PartnerForm from "../form/PartnerForm";
import { TutorialBannerContainer } from "../novos-clientes/styles";
import { PartnershipMainContainer as Container, MainContentContainer } from "./styles";

const LandingPageSecondaryBanner = dynamic(() => import("../novos-clientes/LandingPageSecondaryBanner"), { ssr: false });
const TutorialContainer = dynamic(() => import("../../home/tutorial/HomeTutorial"), { ssr: false });
const HomeAreas = dynamic(() => import("../../home/areas/HomeAreas"), { ssr: false });
const LandingPageContactBanner = dynamic(() => import("../novos-clientes/LandingPageContactBanner"), { ssr: false });
const LandingPageFaqBanner = dynamic(() => import("../novos-clientes/LandingPageFaqBanner"), { ssr: false });
const Messages = dynamic(() => import("../../messages/Messages"), { ssr: false });


export default function PartnershipMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const pathname = usePathname()

    return (
        <>
            <Container className="partnershipContainer">
                <MainContentContainer className="mainContentContainer">
                    {partners[clearPartnerName(pathname)]?.mainBanner}
                    <PartnerForm
                        partner={clearPartnerName(pathname)}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </MainContentContainer>

                {partners[clearPartnerName(pathname)]?.section}

                <LandingPageSecondaryBanner />

                <TutorialBannerContainer>
                    <TutorialContainer />
                </TutorialBannerContainer>

                <HomeAreas partner={clearPartnerName(pathname)} />

                <LandingPageContactBanner />

                <LandingPageFaqBanner />

            </Container>

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>

    )
}