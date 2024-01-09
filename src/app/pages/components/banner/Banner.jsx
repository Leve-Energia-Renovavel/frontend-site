
"use client"

import Image from "next/image"
import bannerImage from "../../../../resources/img/person-banner.png"
import DefaultButton from "../buttons/DefaultButton"
import BannerTitle from "./BannerTitle"
import { BannerContainer, BannerImageContainer, ContentContainer } from "./styles"

export default function Banner() {


    return (
        <BannerContainer>
            <ContentContainer>
                <BannerTitle />
                <DefaultButton variant="contained" text="Quero economizar agora" />
            </ContentContainer>
            <BannerImageContainer>
                <Image className='logoImage'
                    src={bannerImage}
                    alt="Leve Energia Logo"
                />
            </BannerImageContainer>
        </BannerContainer>
    )
}