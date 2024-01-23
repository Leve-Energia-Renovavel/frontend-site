"use client"

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { FormControl, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { Form, FormContainer, FormHeader, FormContent } from "./styles";
import { useState } from "react";

export default function SuccessForm() {
    const router = useRouter()

    const [finishedProgress, setFinishedProgress] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handleSubmit")
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
                    <Typography variant="h3">Agora é só se conectar à Leve!</Typography>
                    <Typography className="orientations">Para que a Leve seja capaz de direcionar os créditos de energia da usina para você,
                        precisamos que você conecte sua conta da <span className="bold">{distribuitor}</span> a sua Conta da Leve. </Typography>
                    <Typography className="orientations">Para isso,
                        insira
                        suas informações de login e senha que você usa no portal da <span className="bold">{distribuitor}</span>.</Typography>

                    <Form method="POST" onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField label={`Login da ${distribuitor}`} variant="outlined" placeholder="Login" type="text" required />
                        </FormControl>
                        <FormControl>
                            <TextField label={`Senha da ${distribuitor}`} variant="outlined" placeholder="Senha" type="text" required />
                        </FormControl>
                        <div style={{ margin: '0 auto' }}>
                            <DefaultButton variant="contained" text={"Vincular minha conta de luz"} isSubmit={true} />
                        </div>
                    </Form>

                </FormContent>}
            </FormContainer>
        </>
    );
}