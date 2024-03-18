"use client"

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { FormControl, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DistibuitorSyncData from "./DistribuitorSyncData";
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { ButtonContainer, Form, FormContainer, FormContent, FormHeader, SimpleFormContent } from "./styles";
import { useStoreUser } from "@/app/hooks/useStore";
import axios from "axios";
import { requestSuccessful } from "@/app/service/utils/Validations";
import Cookies from "js-cookie";

export default function SuccessForm() {
    const router = useRouter()
    const user = useStoreUser().user

    const loginRef = useRef(null)
    const passwordRef = useRef(null)

    const [finishedProgress, setFinishedProgress] = useState(false)
    const [hasSync, setHasSync] = useState(false)

    const distribuitor = "cemig".toUpperCase()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const loginValue = loginRef.current.value
        const passwordValue = passwordRef.current.value

        if (loginValue && passwordValue) {
            const payload = {
                login: loginValue,
                password: passwordValue
            }
            console.log("handleSubmit payload ===>>", payload)
            setHasSync(true)
        }

    }

    const handleFinishSignup = async () => {
        try {
            const data = { uuid: Cookies.get("leveUUID") }
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/finalizar-cadastro`, data)
            if (requestSuccessful(response.status)) {
                Cookies.set('accessToken', response.data.access_token)
                router.push(`/dashboard`)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <FormContainer isDown={!finishedProgress}>
                {!finishedProgress &&
                    <FormHeader >
                        <SuccessFormTitle />
                        <SuccessFormProgress finishedProgress={() => setFinishedProgress(true)} />
                    </FormHeader>}
                {/* {finishedProgress && 
                <FormContent>
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
                                    <Typography className="skipBinding" onClick={handleSubmit}>Fazer isso mais tarde</Typography>
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
                            <DefaultButton variant="contained" text={"Acessar minha conta"} isSubmit={true} />
                        </>
                    )}
                </FormContent>} */}
                {finishedProgress && (
                    <SimpleFormContent>
                        <Typography variant="h3">Sucesso!</Typography>
                        <Typography className="orientations">Agora você já pode curtir sua vida mais Leve 😉</Typography>
                        <DefaultButton variant="contained" text={"Acessar minha conta"} onClick={() => handleFinishSignup()} />
                    </SimpleFormContent>
                )}
            </FormContainer>
        </>
    );
}
