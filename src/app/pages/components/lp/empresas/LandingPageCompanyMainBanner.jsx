"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../resources/img/partners/icon-arrow-down-white.svg';
import bannerMainImage from '../../../../../resources/img/small/company-main-banner-small.png';
import { ArrowScrollerContainer, BannerMain } from "./styles";

export default function LandingPageCompanyMainBanner() {

    return (
        <BannerMain image={bannerMainImage}>
            <h1 className="title">Um ecossistema de soluções de energia para <span className="titleHighlighted">aumentar a lucratividade</span> do seu negócio</h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Como fazemos isso</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </BannerMain>
    )
}