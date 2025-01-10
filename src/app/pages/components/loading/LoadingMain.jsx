"use client"

import { CircularProgress } from "@mui/material";
import { LoadingContainer } from "./styles";
import { useEffect } from "react";

export default function LoadingMain() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <LoadingContainer className="loadingContainer">
            <CircularProgress className="circularProgress" />
            <h1 className="loading">Carregando...</h1>
        </LoadingContainer>
    );
}