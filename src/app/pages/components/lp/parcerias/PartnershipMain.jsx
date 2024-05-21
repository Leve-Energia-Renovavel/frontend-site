"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import PartnerForm from "../form/PartnerForm";
import { ArrowScrollerContainer, PartnershipMainContainer as Container, MainContentContainer, PartnerDescriptionContainer, PartnerSectionBanner, PartnerSectionContent, TribancoMain } from "./styles";
import tribancoBannerImage from '../../../../../resources/img/partners/tribanco/tribanco-banner-large.png'
import whiteArrow from '../../../../../resources/img/partners/icon-arrow-down-white.svg'
import Image from "next/image";
import TribancoMainBanner from "./tribanco/TribancoMainBanner";
import LandingPageSecondaryBanner from "../novos-clientes/LandingPageSecondaryBanner";
import { TutorialBannerContainer } from "../novos-clientes/styles";
import TutorialContainer from "../../home/HomeTutorial";
import BrandsContainer from "../../home/HomeBrands";
import LandingPageContactBanner from "../novos-clientes/LandingPageContactBanner";
import LandingPageFaqBanner from "../novos-clientes/LandingPageFaqBanner";
import HomeAreas from "../../home/HomeAreas";

export default function PartnershipMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const search = useSearchParams()
    const pathname = usePathname()

    const clearPartnerName = (str) => {
        return str.replace(/\/|lp/g, '');
    };


    return (
        <Container>
            <MainContentContainer>
                <TribancoMainBanner />
                <PartnerForm partner={clearPartnerName(pathname)} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
            </MainContentContainer>

            <PartnerSectionBanner>
                <PartnerSectionContent />
                <PartnerDescriptionContainer>
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">O Tribanco, comprometido com sua responsabilidade ambiental, incentiva a conscientização ecológica de seus funcionários e clientes, implementando ações para a otimização do uso de recursos naturais. </p>
                    <p className="highlightedDescription">É por isso que o Tribanco uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <Image alt="banner Tribanco" src={tribancoBannerImage} className="bannerImage" />

            <LandingPageSecondaryBanner />

            <TutorialContainer />

            <HomeAreas />

            <BrandsContainer />

            <LandingPageContactBanner />

            <LandingPageFaqBanner />

        </Container>
    )
}