"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import yduqsMainImage from '../../../../../../resources/img/partners/yduqs/yduqs-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, YduqsMain } from "./styles";

export default function YduqsMainBanner() {

    return (
        <YduqsMain image={yduqsMainImage}>
            <h1 className="title">Colaborador Yduqs, agora você pode usar energia sustentável ao garantir sua <span className="titleHighlighted">energia solar por assinatura!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Deixe sua energia mais Leve!</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </YduqsMain>
    )
}