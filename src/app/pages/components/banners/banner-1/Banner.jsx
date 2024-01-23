
"use client"

import { Button } from "@mui/material"
import Image from "next/image"
import bannerImage from "../../../../../resources/img/person-banner.png"
import BannerTitle from "./BannerTitle"
import { BannerContainer, BannerImageContainer, ContentContainer, BannerButton, BannerImage } from "./styles"


export default function Banner(props) {

    const { handleChangeBanner } = props;

    return (
        <BannerContainer>
            <ContentContainer>
                <BannerTitle />
                <BannerButton onClick={handleChangeBanner}><span>Quero economizar agora!</span></BannerButton>
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