"use client"

import Image from "next/image";
import whiteArrow from '../../../../../../resources/img/partners/icon-arrow-down-white.svg';
import tribancoMainImage from '../../../../../../resources/img/partners/tribanco/tribanco-main-banner-large-compressed.webp';
import { ArrowScrollerContainer, TribancoMain } from "./styles";

export default function TribancoMainBanner() {

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop + 40, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 500, behavior: 'smooth' })
        }
    }

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