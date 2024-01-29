"use client"

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { FormControl, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { Form, FormContainer, FormHeader, FormContent } from "./styles";
import { useState, useRef } from "react";
import DistibuitorSyncData from "./DistribuitorSyncData";

export default function SuccessForm() {
    const router = useRouter()

    const loginRef = useRef(null)
    const passwordRef = useRef(null)

    const [finishedProgress, setFinishedProgress] = useState(false)
    const [hasSync, setHasSync] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }

        setHasSync(true)
        console.log("handleSubmit payload ===>>", payload)
    }

    const distribuitor = "cemig".toUpperCase()

    return (
        <>
            <FormContainer isDown={!finishedProgress}>
                {!finishedProgress &&
                    <FormHeader >
                        <SuccessFormTitle />
                        <SuccessFormProgress finishedProgress={() => setFinishedProgress(true)} />
                    </FormHeader>}
                {finishedProgress && <FormContent>
                    {!hasSync ? (
                        <>
                            <Typography variant="h3">Agora é só se conectar à Leve!</Typography>
                            <Typography className="orientations">Para que a Leve seja capaz de direcionar os créditos de energia da usina para você,
                                precisamos que você conecte sua conta da <span className="bold">{distribuitor}</span> a sua Conta da Leve. </Typography>
                            <Typography className="orientations">Para isso,
                                insira
                                suas informações de login e senha que você usa no portal da <span className="bold">{distribuitor}</span>.</Typography>

                            <Form method="POST" onSubmit={handleSubmit}>
                                <FormControl>
                                    <TextField label={`Login da ${distribuitor}`} variant="outlined" placeholder="Login" type="text" required inputRef={loginRef} />
                                </FormControl>
                                <FormControl>
                                    <TextField label={`Senha da ${distribuitor}`} variant="outlined" placeholder="Senha" type="text" required inputRef={passwordRef} />
                                </FormControl>
                                <div style={{ margin: '0 auto' }}>
                                    <DefaultButton variant="contained" text={"Vincular minha conta de luz"} isSubmit={true} />
                                </div>
                            </Form>
                        </>
                    ) : (
                        <>
                        <Typography variant="h3">Conta conectada com sucesso!</Typography>
                        <Typography className="orientations">Agora você já pode curtir sua vida mais Leve 😉</Typography>
                        <DistibuitorSyncData />
                        <DefaultButton variant="contained" text={"Acessar minha conta"} onClick={() => router.push(`/`)} />
                        </>
                    )}


                </FormContent>}
            </FormContainer>
        </>
    );
}