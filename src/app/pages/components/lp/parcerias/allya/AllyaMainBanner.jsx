"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import allyaMainImage from '../../../../../../resources/img/partners/allya/allya-main-banner-large.png';
import { ArrowScrollerContainer, AllyaMain } from "./styles";

export default function AllyaMainBanner() {

    return (
        <AllyaMain image={allyaMainImage}>
            <h1 className="title">Usuário Allya, agora você pode usar energia sustentável e ainda <span className="titleHighlighted">economizar com a Leve!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">De forma rápida, fácil e 100% digital.</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </AllyaMain>
    )
}