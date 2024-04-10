"use client"

import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-new-logo-small.svg"
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.png"
import { HomeContainer, HomeContentContainer, HomeMainContent, HomeMainTitle } from "./styles"

export default function HomeMain() {
    return (
        <HomeContainer>
            <HomeContentContainer>
                <HomeMainContent image={bannerImage}>
                    <Image src={logoLeve} width={370} height={62} alt={"banner da Leve com uma mulher sorrindo ao usar notebook"} />
                    <HomeMainTitle variant="h1">A energia do futuro é Leve</HomeMainTitle>
                </HomeMainContent>
            </HomeContentContainer>
        </HomeContainer>
    )
}