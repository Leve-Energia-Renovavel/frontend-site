"use client"

import { CircularProgress } from "@mui/material";
import { LoadingContainer } from "./styles";

export default function LoadingMain() {
    return (
        <LoadingContainer className="loadingContainer">
            <CircularProgress className="circularProgress" />
            <h1 className="loading">Carregando...</h1>
        </LoadingContainer>
    );
}