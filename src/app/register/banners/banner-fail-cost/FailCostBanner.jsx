
"use client"

import { Button, Typography } from "@mui/material"
import { BannerContainer, ButtonContainer, ContentContainer } from "./styles"
import { useRouter } from 'next/navigation';


export default function RegisterBannerFailCost(props) {

    const router = useRouter()
    const { name, type } = props.userData

    const fullName = name.split(" ");
    const userName = fullName[0] + " " + fullName[fullName.length - 1]
    const location = type == "cnpj" ? "empresa" : "residência"

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Seu custo já é muito baixo.</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Por ora, ainda nao e possivel atender sua {location}</Typography>
                <Typography variant="subtitle1" className="subtitle">É importante questionar o quanto a determinação clara de objetivos agrega valor ao estabelecimento do orçamento setorial.</Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.push("/")}
                    className='backToMainPage'>Voltar para Tela Inicial</Button>
            </ButtonContainer>
        </BannerContainer>
    )
}