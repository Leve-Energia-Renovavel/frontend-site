"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import localizaMainImage from '../../../../../../resources/img/partners/localiza/localiza-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, LocalizaMain } from "./styles";


export default function LocalizaMainBanner() {

    return (
        <LocalizaMain image={localizaMainImage}>
            <h1 className="title">Colaborador Localiza, agora pode usar energia sustentável e ainda <span className="titleHighlighted">economizar com a Leve!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">De forma rápida, fácil e 100% digital</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </LocalizaMain>
    )
}