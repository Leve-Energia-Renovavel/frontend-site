"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import timMainImage from '../../../../../../resources/img/partners/tim/tim-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, TimMain } from "./styles";

export default function TimMainBanner() {

    return (
        <TimMain image={timMainImage}>
            <h1 className="title">Colaborador Tim, agora você pode usar energia sustentável ao garantir sua <span className="titleHighlighted">energia solar por assinatura!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Deixe sua energia mais Leve!</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </TimMain>
    )
}