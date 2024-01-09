"use client"

import { AboutContainer, AboutTitleContainer, ContentContainer, AboutDescriptionContainer } from "./styles"
import AboutTitle from "./AboutTitle"
import AboutDescription from "./AboutDescription"
import Image from "next/image"
import aboutImage from "../../../../resources/img/a-leve.png"

export default function About() {
    return (
        <AboutContainer>
            <AboutTitleContainer>
                <AboutTitle />
            </AboutTitleContainer>
            <ContentContainer>
                <AboutDescriptionContainer>
                    <AboutDescription />
                </AboutDescriptionContainer>
                <Image
                    src={aboutImage}
                    alt="Descrição sobre a Leve Energias Renováveis"
                />

            </ContentContainer>
        </AboutContainer>
    )
}