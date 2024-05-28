"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import timMainImage from '../../../../../../resources/img/partners/tim/tim-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, TimMain } from "./styles";

export default function TimMainBanner() {

    return (
        <TimMain image={timMainImage}>
            <h1 className="title">Energia solar por assinatura: A melhor alternativa para quem quer <span className="titleHighlighted">economizar</span>!</h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Conheça a Leve e o nosso serviço</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </TimMain>
    )
}