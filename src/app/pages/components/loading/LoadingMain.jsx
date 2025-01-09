"use client"

import { CircularProgress } from "@mui/material";
import { LoadingContainer } from "./styles";

export default function LoadingMain() {
    return (
        <LoadingContainer>
            <CircularProgress className="circularProgress" />
            <h1>Carregando...</h1>
        </LoadingContainer>
    );
}