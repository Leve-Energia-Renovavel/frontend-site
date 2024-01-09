
"use client"

import DefaultButton from "../buttons/DefaultButton"
import { BannerContainer, ContentContainer, BannerImageContainer } from "./styles"
import Image from "next/image"
import bannerImage from "../../../../resources/img/person-banner.png"
import { Typography } from "@mui/material"
import BannerTitle from "./BannerTitle"

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