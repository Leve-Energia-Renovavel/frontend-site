"use client"

import { FormContent, FormLastRow, FormRow } from "@/app/register/forms/register-form/styles";
import { Checkbox, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from "@mui/material";
import InputMask from "react-input-mask";
import FormButton from "../utils/buttons/FormButton";
import { ProfileChangePasswordContent, ProfileContainer, ProfileMainContent, ProfileSecondaryEmailContent } from "./styles";
import { useRef } from "react";

export default function ProfileMain() {

    const secondaryEmailRef = useRef(null)

    const handleSubmit = () => {
        console.log("ProfileMain handleSubmit")
    }

    function handleChangePassword() {
        console.log("ProfileMain handleChangePassword")
    }
    function handleSecondaryEmail() {
        const secondaryEmailValue = secondaryEmailRef.current.value
        console.log("ProfileMain handleSecondaryEmail ===>>", secondaryEmailValue)
    }

    return (
        <ProfileContainer>
            <Typography variant="h1">Seu Perfil</Typography>
            <ProfileMainContent>
                <FormContent acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                    <>
                        <FormRow>
                            <TextField className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" disabled />
                            <TextField className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" disabled />
                        </FormRow>

                        <InputMask mask="(99) 99999-9999">
                            {() => <TextField
                                className="formInput" label="Celular" placeholder="Celular" variant="outlined" type="text" InputLabelProps={{ shrink: true }} />}
                        </InputMask>

                        <TextField className="formInput" label="RG" variant="outlined" placeholder="RG" type="text" InputLabelProps={{ shrink: true }} disabled />

                        <TextField className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" InputLabelProps={{ shrink: true }} disabled />

                        <TextField className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" disabled />

                        <TextField
                            placeholder={"test"}
                            select
                            defaultValue={""}
                            label="Estado Civil"
                            className="formInput"
                        >
                            <MenuItem value={"solteiro"}>Solteiro(a)</MenuItem>
                            <MenuItem value={"casado"}>Casado(a)</MenuItem>
                            <MenuItem value={"viuvo"}>Viúvo(a)</MenuItem>
                        </TextField>
                        <TextField select className="formInput" label="Nacionalidade" variant="outlined" placeholder="Nacionalidade" type="text" disabled>
                            <MenuItem value={"brasileiro"}>Brasileiro(a)</MenuItem>
                            <MenuItem value={"estrangeiro"}>Estrangeiro(a)</MenuItem>
                        </TextField>
                    </>

                    <TextField select defaultValue={""} className="formInput" label="Profissão" variant="outlined" placeholder="Profissão" type="text">
                        <MenuItem value={"autonomo"}>Autônomo(a)</MenuItem>
                        <MenuItem value={"assalariado"}>Assalariado(a)</MenuItem>
                        <MenuItem value={"aposentado"}>Aposentado(a)</MenuItem>
                        <MenuItem value={"estudante"}>Estudante</MenuItem>
                    </TextField>

                    <InputMask mask="99999-999">
                        {() => <TextField className="formInput" label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }} />}
                    </InputMask>

                    <TextField className="formInput" label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} />
                    <InputMask mask="99999">
                        {() => <TextField className="formInput" label="Nº" variant="outlined" placeholder="Nº" type="text" />}
                    </InputMask>

                    <TextField className="formInput" label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                    <TextField className="formInput" label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} />

                    <TextField className="formInput" label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} />

                    <FormLastRow>
                        <TextField sx={{
                            borderColor: '#0075FF',
                            '& label': {
                                color: '#0075FF',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#0075FF',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#0075FF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#0075FF',
                                },
                            },
                        }} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" disabled />
                        <FormButton className="formInput" variant="outlined" type="submit" text="Salvar Alterações" />
                    </FormLastRow>


                </FormContent>

            </ProfileMainContent>
            <Typography variant="h1">Alterar Senha de Acesso</Typography>
            <ProfileChangePasswordContent>
                <TextField className="changePasswordInput" label="Senha Atual" variant="outlined" placeholder="Senha Atual" type="text" />
                <TextField className="changePasswordInput" label="Nova Senha" variant="outlined" placeholder="Nova Senha" type="text" />
                <FormButton variant="outlined" text="Confirmar" onClick={() => handleChangePassword()} />
            </ProfileChangePasswordContent>

            <Typography variant="h1">E-mail Secundário</Typography>
            <Typography>Caso queira receber suas faturas em um novo e-mail, é só inserir no campo abaixo e checar a caixinha</Typography>
            <ProfileSecondaryEmailContent>
                <TextField className="secondaryEmailInput" inputRef={secondaryEmailRef} label="E-mail secundário" variant="outlined" placeholder="E-mail secundário" type="text" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked={false} onChange={() => handleSecondaryEmail()} />} label="Receber notificações por este e-mail" />
                </FormGroup>
            </ProfileSecondaryEmailContent>
        </ProfileContainer>
    );
}