"use client"

import { handleScroll } from "@/app/utils/browser/BrowserUtils";
import Image from "next/image";
import yellowArrow from '../../../../../resources/icons/large/icon-arrow-down-yellow-large.png';
import soleImage from '../../../../../resources/icons/large/arraia/sole-festa-junina-arraia-leve-large.png';
import sunImage from '../../../../../resources/icons/large/arraia/background-sun-leve-large.png';
import flagsImage from '../../../../../resources/icons/large/arraia/bandeiras-festa-junina-arraia-leve-large.png';
import logoImage from '../../../../../resources/icons/large/arraia/pula-fatura-arraia-leve-large.png';
import { ArraiaMain, ArraiaSection, ArrowScrollerContainer } from "./styles";

export default function LandingPageArraiaMainBanner() {

    return (
        <ArraiaMain>
            <Image className="flags" src={flagsImage} alt="Bandeirinhas de São João"/>
            <Image className="sole"  src={soleImage} alt="Imagem do Sole pulando fatura na Festa Junina Leve!"/>
            <Image className="logo" src={logoImage} alt="Logo Pula Fatura Leve!"/>
            <Image className="sun" src={sunImage} alt="Sol brilhando atrás do Sole"/>
            <ArraiaSection>
                <h1 className="title">No Arraiá da Leve,<span className="titleHighlighted"> a primeira fatura é por nossa conta!</span></h1>
                <h1 className="subtitle">Pule a fatura e economize!</h1>
                <ArrowScrollerContainer onClick={() => handleScroll()}>
                    <p className="scrollerDescription">Veja como funciona</p>
                    <Image alt={`Deixe sua energia mais Leve!`} src={yellowArrow} className="whiteArrow" />
                </ArrowScrollerContainer>
            </ArraiaSection>
        </ArraiaMain>
    )
}