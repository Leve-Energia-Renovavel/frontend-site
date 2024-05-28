"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import tribancoMainImage from '../../../../../../resources/img/partners/tribanco/tribanco-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, TribancoMain } from "./styles";

export default function TribancoMainBanner() {

    return (
        <TribancoMain image={tribancoMainImage}>
            <h1 className="title">Colaborador Tribanco, agora você pode usar energia sustentável ao garantir sua <span className="titleHighlighted">energia solar por assinatura!</span></h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Deixe sua energia mais Leve!</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </TribancoMain>
    )
}