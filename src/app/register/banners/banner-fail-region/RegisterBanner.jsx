"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "../banner-success/styles"
import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { useRouter } from "next/navigation";

export default function RegisterBannerFailRegion(props) {

    const router = useRouter()
    const { name, type } = props.userData
    const location = type == "cnpj" ? "empresa" : "residência"

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">A Leve ainda não chegou na região de sua {location}.</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A região em que a sua {location} se encontra ainda não possui uma usina fotovoltáica nossa conectada à concessionária local para que possamos atende-la e fornecer os créditos de energia.</Typography>
                <Typography variant="subtitle1" className="subtitle">Mas é bom saber desse interesse.</Typography>
                <Typography variant="subtitle1" className="subtitle">Vamos nos esforçar para te atender o mais breve possível.</Typography>
                <DefaultButton variant="contained" text={"Voltar para a tela inicial"} onClick={() => router.push("/")} />
            </ContentContainer>
        </BannerContainer>
    )
}