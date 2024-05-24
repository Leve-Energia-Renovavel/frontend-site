"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import martinsMainImage from '../../../../../../resources/img/partners/martins/martins-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, MartinsMain } from "./styles";

export default function MartinsMainBanner() {

    return (
        <MartinsMain image={martinsMainImage}>
            <h1 className="title">Agora nossa gente vai poder usar energia solar por assinatura e ainda <span className="titleHighlighted">economizar com a Leve</span>!</h1>
            <ArrowScrollerContainer onClick={() => handleScroll()}>
                <p className="scrollerDescription">Grupo Martins trazendo economia e sustentabilidade para a nossa gente!</p>
                <Image alt={`Deixe sua energia mais Leve!`} src={whiteArrow} className="whiteArrow" />
            </ArrowScrollerContainer>
        </MartinsMain>
    )
}