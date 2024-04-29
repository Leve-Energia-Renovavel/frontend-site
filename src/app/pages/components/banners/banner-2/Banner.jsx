
"use client"

import { Typography } from "@mui/material"
import Image from "next/image"
import icon1 from "../../../../../resources/icons/frame1.svg"
import icon2 from "../../../../../resources/icons/frame2.svg"
import icon3 from "../../../../../resources/icons/frame3.svg"
import icon4 from "../../../../../resources/icons/frame4.svg"
import { BannerContainer, LeftContent, RightContentContainer, StepContent, StepTitle } from "./styles"

import Divider from '@mui/material/Divider'

export default function Banner() {

    return (
        <BannerContainer>
            <LeftContent>
                <Typography variant="body1" component="h1">Com a Leve, </Typography>
                <Typography variant="body1" component="h1">tudo é mais fácil</Typography>
                <Typography className="mainInfo">Em apenas <span className="bold">3 passos</span>, você se cadastra e começa a economizar na sua conta de luz com energia limpa e renovável. Simples, rápido, fácil, sem investimento e sem dor de cabeça.</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Esse é o jeito Leve, como tudo deve ser.</Typography>
                <Typography variant="subtitle1" className="yellowSubtitle">Para completar o cadastro, você precisará ter a sua fatura e um documento em mãos. Também pediremos uma selfie com seus documentos ao lado do rosto.</Typography>
            </LeftContent>

            <Divider orientation="vertical" className="divider" flexItem />

            <RightContentContainer>
                <StepContent>
                    <Image
                        loading="lazy" 
                        src={icon1} alt="Ícone de porcentagem para simular a economia de casa" />
                    <StepTitle>
                        <Typography variant="subtitle1" className="stepTitle">Passo 1</Typography>
                        <Typography variant="subtitle1" className="yellowSubtitle">Simule a economia</Typography>
                    </StepTitle>
                </StepContent>
                <StepContent>
                    <Image loading="lazy"  src={icon2} alt="Ícone de formulário para completar o cadastro" />
                    <StepTitle>
                        <Typography variant="subtitle1" className="stepTitle">Passo 2</Typography>
                        <Typography variant="subtitle1" className="yellowSubtitle">Complete o cadastro</Typography>
                    </StepTitle>
                </StepContent>
                <StepContent>
                    <Image loading="lazy"  src={icon3} alt="Ícone de assinatura para assinar o contrato" />
                    <StepTitle>
                        <Typography variant="subtitle1" className="stepTitle">Passo 3</Typography>
                        <Typography variant="subtitle1" className="yellowSubtitle">Assine o contrato</Typography>
                    </StepTitle>
                </StepContent>
                <StepContent>
                    <Image loading="lazy"  src={icon4} alt="Ícone de documento para completar o cadastro com uma selfie com os documentos em mãos" />
                    <StepTitle>
                        <Typography variant="subtitle1" className="whiteSubtitle">Precisaremos de uma selfie com seus documentos em mãos ao lado do seu sorriso</Typography>
                    </StepTitle>
                </StepContent>
            </RightContentContainer>
        </BannerContainer >
    )
}