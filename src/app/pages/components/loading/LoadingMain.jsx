"use client"

import Image from "next/image";
import { LoadingContainer } from "./styles";
import leveLogo from '../../../../resources/img/logo-header.png'
import { CircularProgress } from "@mui/material";

export default function LoadingMain() {
    return (
        <LoadingContainer>
            {/* <Image className="logoLeve" loading="lazy"  src={leveLogo} alt="Ícone de formulário para completar o cadastro" /> */}
            <CircularProgress className="circularProgress" />
            <h1>Carregando...</h1>
        </LoadingContainer>
    );
}