
"use client"

import Image from "next/image"
import bannerImage from "../../../../../resources/img/person-banner.png"
import BannerTitle from "./BannerTitle"
import { BannerButton, BannerContainer, BannerImageContainer, ContentContainer } from "./styles"

export default function Banner(props) {
    const { handleChangeBanner } = props;

    return (
        <BannerContainer>
            <ContentContainer>
                <BannerTitle />
                <BannerButton onClick={handleChangeBanner}><span>Quero economizar agora!</span></BannerButton>
            </ContentContainer>
            <BannerImageContainer>
                <Image
                    loading="eager" priority={true}
                    className='logoImage'
                    src={bannerImage}
                    alt="Leve Energia Logo"
                />
            </BannerImageContainer>
        </BannerContainer>
    )
}