"use client"

import { AboutContainer, AboutTitleContainer, ContentContainer, AboutDescriptionContainer } from "./styles"
import AboutTitle from "./AboutTitle"
import AboutDescription from "./AboutDescription"
import Image from "next/image"
import aboutImage from "../../../../resources/img/a-leve.png"
import DefaultButton from "../utils/buttons/DefaultButton"

export default function About() {
    return (
        <AboutContainer>
            <AboutTitleContainer>
                <AboutTitle />
            </AboutTitleContainer>
            <ContentContainer>
                <AboutDescriptionContainer>
                    <AboutDescription />
                    <DefaultButton variant="contained" text="Quero Contratar" />
                </AboutDescriptionContainer>
                <Image
                    src={aboutImage}
                    alt="Descrição sobre a Leve Energias Renováveis"
                />

            </ContentContainer>

        </AboutContainer>
    )
}