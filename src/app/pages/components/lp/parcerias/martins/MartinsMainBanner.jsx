"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import martinsMainImage from '../../../../../../resources/img/partners/martins/martins-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, MartinsMain } from "./styles";

export default function MartinsMainBanner() {

    return (
        <MartinsMain image={martinsMainImage}>
            <h1 className="title">Colaborador Martins, agora você pode usar energia sustentável ao garantir sua <span className="titleHighlighted">energia solar por assinatura!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Deixe sua energia mais Leve!</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </MartinsMain>
    )
}