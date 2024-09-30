"use client"

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { FormContainer, FormHeader, SimpleFormContent } from "./styles";

export default function SuccessForm() {
    const router = useRouter()
    const [finishedProgress, setFinishedProgress] = useState(false)

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
