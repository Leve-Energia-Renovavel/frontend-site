"use client"

import { clearPartnerName } from "@/app/utils/helper/partnerHelper";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TutorialBannerContainer } from "../novos-clientes/styles";
import { PartnershipMainContainer as Container, MainContentContainer } from "./styles";

import PartnerForm from "../form/PartnerForm";
import LocalizaMainBanner from "./localiza/LocalizaMainBanner";
import MartinsMainBanner from "./martins/MartinsMainBanner";
import TimMainBanner from "./tim/TimMainBanner";
import TribancoMainBanner from "./tribanco/TribancoMainBanner";
import YduqsMainBanner from "./yduqs/YduqsMainBanner";

const TribancoSectionBanner = dynamic(() => import("./tribanco/TribancoSectionBanner"), { ssr: false });
const LandingPageSecondaryBanner = dynamic(() => import("../novos-clientes/LandingPageSecondaryBanner"), { ssr: false });
const TutorialContainer = dynamic(() => import("../../home/HomeTutorial"), { ssr: false });
const HomeAreas = dynamic(() => import("../../home/HomeAreas"), { ssr: false });
const BrandsContainer = dynamic(() => import("../../home/HomeBrands"), { ssr: false });
const LandingPageContactBanner = dynamic(() => import("../novos-clientes/LandingPageContactBanner"), { ssr: false });
const LandingPageFaqBanner = dynamic(() => import("../novos-clientes/LandingPageFaqBanner"), { ssr: false });
const Messages = dynamic(() => import("../../messages/Messages"), { ssr: false });


export default function PartnershipMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const pathname = usePathname()

    const partners = {
        "tribanco": {
            mainBanner: <TribancoMainBanner />,
            section: <TribancoSectionBanner />
        },
        "tim": {
            mainBanner: <TimMainBanner />,
            section: <TribancoSectionBanner />
        },
        "localiza": {
            mainBanner: <LocalizaMainBanner />,
            section: <TribancoSectionBanner />
        },
        "yduqs": {
            mainBanner: <YduqsMainBanner />,
            section: <TribancoSectionBanner />
        },
        "martins": {
            mainBanner: <MartinsMainBanner />,
            section: <TribancoSectionBanner />
        },
    }

    return (
        <>
            <Container className="partnershipContainer">
                <MainContentContainer className="mainContentContainer">
                    {partners[clearPartnerName(pathname)].mainBanner}
                    <PartnerForm
                        partner={clearPartnerName(pathname)}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </MainContentContainer>

                <TribancoSectionBanner />

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