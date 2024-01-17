
"use client"

import { Button } from "@mui/material"
import Image from "next/image"
import bannerImage from "../../../../../resources/img/person-banner.png"
import BannerTitle from "./BannerTitle"
import { BannerContainer, BannerImageContainer, ContentContainer } from "./styles"


export default function Banner(props) {

    const { handleChangeBanner } = props;

    return (
        <BannerContainer>
            <ContentContainer>
                <BannerTitle />
                <Button disableElevation={true} variant="contained" onClick={handleChangeBanner} sx={{
                    width: props.width ? props.width : null,
                    textTransform: 'none',
                    fontSize: 18,
                    color: "#0075FF",
                    borderColor: "#0075FF",
                    backgroundColor: "#FFD300",
                    paddingY: 1,
                    paddingX: 4,
                    height: '3rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    margin: 2,
                    "&:hover": {
                        backgroundColor: "#fefefe",
                        color: "contained" == "outlined" ? "#0075FF" : null,
                    }
                }}>Quero Economizar Agora</Button>
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