"use client"

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { FormControl, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DistibuitorSyncData from "./DistribuitorSyncData";
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { ButtonContainer, Form, FormContainer, FormContent, FormHeader } from "./styles";

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
                            <Typography variant="subtitle1">Para que a Leve seja capaz de direcionar os créditos de energia da usina para você,
                                precisamos que você conecte sua conta da <span className="bold">{distribuitor}</span> a sua Conta da Leve. </Typography>
                            <Typography variant="subtitle1">Para isso,
                                insira
                                suas informações de login e senha que você usa no portal da <span className="bold">{distribuitor}</span>.</Typography>

                            <Form method="POST" onSubmit={handleSubmit}>
                                <FormControl>
                                    <TextField label={`Login da ${distribuitor}`} variant="outlined" placeholder="Login" type="text" required inputRef={loginRef} />
                                </FormControl>
                                <FormControl>
                                    <TextField label={`Senha da ${distribuitor}`} variant="outlined" placeholder="Senha" type="text" required inputRef={passwordRef} />
                                </FormControl>
                                <ButtonContainer>
                                    <DefaultButton variant="contained" text={"Vincular minha conta de luz"} isSubmit={true} />
                                </ButtonContainer>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Typography variant="h3">Conta conectada com sucesso!</Typography>
                            <Typography className="orientations">Agora você já pode curtir sua vida mais Leve 😉</Typography>
                            <br />
                            <DistibuitorSyncData />
                            <br />
                            <br />
                            <DefaultButton variant="contained" text={"Acessar minha conta"} onClick={() => router.push(`/`)} />
                        </>
                    )}


                </FormContent>}
            </FormContainer>
        </>
    );
}