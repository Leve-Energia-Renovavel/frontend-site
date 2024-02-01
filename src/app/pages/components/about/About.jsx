"use client"

import Image from "next/image"
import aboutImage from "../../../../resources/img/a-leve.png"
import DefaultButton from "../utils/buttons/DefaultButton"
import AboutDescription from "./AboutDescription"
import AboutTitle from "./AboutTitle"
import { AboutContainer, ContentContainer, DescriptionContainer } from "./styles"

export default function About() {
    return (
        <AboutContainer>
            <AboutTitle />
            <ContentContainer>
                <DescriptionContainer>
                    <AboutDescription />
                    <DefaultButton variant="contained" text="Quero Contratar" />
                </DescriptionContainer>
                <Image
                    src={aboutImage}
                    alt="Descrição sobre a Leve Energias Renováveis"
                />
            </ContentContainer>

        </AboutContainer>
    )
}