"use client"

import { CircularProgress } from "@mui/material";
import { LoadingContainer } from "./styles";

export default function LoadingMain() {
    return (
        <LoadingContainer>
            {/* <Image className="logoLeve" loading="lazy"  src={leveLogo} alt="Ícone de formulário para completar o cadastro" /> */}
            <CircularProgress className="circularProgress" />
            <h1>Carregando...</h1>
        </LoadingContainer>
    );
}