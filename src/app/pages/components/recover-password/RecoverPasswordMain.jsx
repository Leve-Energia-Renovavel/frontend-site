"use client"

import { useParams, useSearchParams } from "next/navigation";
import { RecoverPasswordContainer, RecoverPasswordFormContainer, RecoverPasswordTitleContainer } from "./styles";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function RecoverPasswordMain() {

    const [validatedToken, setValidatedToken] = useState(false)

    const params = useParams()
    const search = useSearchParams()

    useEffect(() => {
        setValidatedToken(true)
    }, [])

    return (
        <RecoverPasswordContainer>
            <RecoverPasswordTitleContainer>
                <h1>Recuperar Senha</h1>
            </RecoverPasswordTitleContainer>

            {validatedToken && <RecoverPasswordFormContainer>
                <TextField className="formInput" label="Nova Senha" variant="outlined" placeholder="Nova Senha" type="text" required />
                <TextField className="formInput" label="Confirmar Nova Senha" variant="outlined" placeholder="Confirmar Nova Senha" type="text" required />
            </RecoverPasswordFormContainer>}
        </RecoverPasswordContainer>
    );
}
