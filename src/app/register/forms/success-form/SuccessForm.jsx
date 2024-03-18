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
