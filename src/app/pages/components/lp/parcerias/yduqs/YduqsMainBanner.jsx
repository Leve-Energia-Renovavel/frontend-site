"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import yduqsMainImage from '../../../../../../resources/img/partners/yduqs/yduqs-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, YduqsMain } from "./styles";

export default function YduqsMainBanner() {

    return (
        <YduqsMain image={yduqsMainImage}>
            <h1 className="title">Colaborador YDUQS, agora você pode usar energia sustentável e ainda <span className="titleHighlighted">economizar com a Leve!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">De forma rápida, fácil e 100% digital.</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </YduqsMain>
    )
}