"use client"

import { useStoreMainInstallation, useStoreUser } from "@/app/hooks/useStore";
import { FormContent, FormLastRow, FormRow } from "@/app/register/forms/register-form/styles";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { maritalStatusOptions, nationalityOptions, professionOptions } from "@/app/utils/form-options/formOptions";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import FormButton from "../utils/buttons/FormButton";
import { ProfileChangePasswordContent, ProfileContainer, ProfileMainContent, ProfileSecondaryEmailContent, SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";
import Cookies from "js-cookie";


export default function ProfileMain() {

    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const user = useStoreUser().user
    const address = useStoreMainInstallation().mainInstallation

    const secondaryEmailRef = useRef(null)
    const oldPasswordRef = useRef(null)
    const newPasswordConfirmationRef = useRef(null)

    const handleSubmit = () => {
        console.log("ProfileMain handleSubmit")
    }

    const handleChangePassword = async () => {
        if (oldPasswordRef.current.value !== "" && newPasswordConfirmationRef.current.value !== "") {

            const headers = {
                Authorization: `Bearer ${Cookies.get('accessToken')}`
            };

            const data = {
                last_pass: oldPasswordRef.current.value,
                new_pass: newPasswordConfirmationRef.current.value,
            }
            try {
                const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/change-pass`, data, { headers })
                console.log(response)
                if (requestSuccessful(response.status)) {

                    setNotifications()
                }

            } catch (error) {
                console.log(error)

            }
        } else {
            setValidationErrors(["É necessário preencher os campos de Senha Atual e Nova Senha"])
        }
    }

    const handleSecondaryEmail = async () => {
        if (secondaryEmailRef.current.value !== "") {

            const headers = {
                Authorization: `Bearer ${Cookies.get('accessToken')}`
            };

            const data = {
                email_secondary: secondaryEmailRef.current.value,
                secondary_send: "on"
            }
            try {
                const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/add-secondary-email`, data, { headers })
                console.log(response)
                if (requestSuccessful(response.status)) {

                    setNotifications()

                }

            } catch (error) {
                console.log(error)
                setValidationErrors([error?.response?.data?.message])

            }
        } else {
            setValidationErrors(["É necessário preencher o campo de E-mail Secundário"])
        }
    }

    return (
        <>
            <ProfileContainer>
                <Typography variant="h1">Seu Perfil</Typography>
                <ProfileMainContent>
                    <FormContent acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                        <>
                            <FormRow>
                                <TextField className="formInput" value={user.name || ''} label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" disabled />
                                <TextField className="formInput" value={user.email || ''} label="Email" variant="outlined" placeholder="Email" type="text" disabled />
                            </FormRow>

                            <InputMask mask="(99) 99999-9999" value={user.phone || ''}>
                                {() => <TextField
                                    className="formInput" label="Celular" placeholder="Celular" variant="outlined" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>

                            <TextField className="formInput" label="RG" value={user.rg || ''} variant="outlined" placeholder="RG" type="text" InputLabelProps={{ shrink: true }} disabled />

                            <TextField className="formInput" label="CPF" value={user.cpf || ''} variant="outlined" placeholder="CPF" type="text" InputLabelProps={{ shrink: true }} disabled />

                            <TextField className="formInput" label="Data de Nascimento" value={user.birthDate || ''} variant="outlined" placeholder="Data de Nascimento" type="text" disabled />

                            <TextField
                                value={user.maritalStatus || ''}
                                placeholder={"test"}
                                select
                                defaultValue={""}
                                label="Estado Civil"
                                className="formInput"
                            >
                                {maritalStatusOptions?.map((maritalStatus) => {
                                    return (
                                        <MenuItem key={maritalStatus.label} value={maritalStatus.value}>{maritalStatus.label}</MenuItem>
                                    )
                                })}
                            </TextField>
                            <TextField
                                value={user.nationality || ''}
                                select
                                className="formInput"
                                label="Nacionalidade"
                                variant="outlined"
                                placeholder="Nacionalidade"
                                type="text"
                                disabled>
                                {nationalityOptions?.map((nationality) => {
                                    return (
                                        <MenuItem key={nationality.label} value={nationality.value}>{nationality.label}</MenuItem>
                                    )
                                })}
                            </TextField>
                        </>

                        <TextField
                            select
                            value={user.profession || ''}
                            defaultValue={""}
                            className="formInput"
                            label="Profissão"
                            variant="outlined"
                            placeholder="Profissão"
                            type="text">
                            {professionOptions?.map((profession) => {
                                return (
                                    <MenuItem key={profession.label} value={profession.value}>{profession.label}</MenuItem>
                                )
                            })}
                        </TextField>

                        <InputMask mask="99999-999" value={user.cep || ''} disabled>
                            {() => <TextField className="formInput" label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }} disabled />}
                        </InputMask>

                        <TextField className="formInput" label="Endereço" value={address.street || ''} variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} disabled />
                        <InputMask mask="99999" value={address.number || ''} disabled>
                            {() => <TextField className="formInput" label="Nº" variant="outlined" placeholder="Nº" type="text" disabled />}
                        </InputMask>

                        <TextField className="formInput" label="Complemento" value={address.complement || ''} variant="outlined" placeholder="Complemento" type="text" disabled />
                        <TextField className="formInput" label="Bairro" value={address.neighborhood || ''} variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} disabled />

                        <TextField className="formInput" label="Estado" value={address.state || ''} variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} disabled />
                        <TextField className="formInput" label="Cidade" value={address.city || ''} variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} disabled />

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
                            }} value={address.installationNumber || ''} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" disabled />
                            <FormButton className="formInput" variant="outlined" type="submit" text="Salvar Alterações" />
                        </FormLastRow>
                    </FormContent>

                </ProfileMainContent>
                <Typography variant="h1">Alterar Senha de Acesso</Typography>
                <ProfileChangePasswordContent>
                    <TextField
                        className="changePasswordInput"
                        inputRef={oldPasswordRef}
                        label="Senha Atual"
                        variant="outlined"
                        placeholder="Senha Atual"
                        type={passwordVisibible}
                        required
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setPasswordVisibible(passwordVisibible == "password" ? "text" : "password")}>
                                        {passwordVisibible == "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}

                    />
                    <TextField
                        className="changePasswordInput"
                        inputRef={newPasswordConfirmationRef}
                        label="Nova Senha"
                        variant="outlined"
                        placeholder="Nova Senha"
                        type={passwordVisibible}
                        required
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setPasswordVisibible(passwordVisibible == "password" ? "text" : "password")}>
                                        {passwordVisibible == "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}

                    />
                    <FormButton variant="outlined" text="Confirmar" onClick={() => handleChangePassword()} />
                </ProfileChangePasswordContent>

                <Typography variant="h1">E-mail Secundário</Typography>
                <Typography>Caso queira receber suas faturas em um novo e-mail, é só inserir no campo abaixo e checar a caixinha</Typography>
                <ProfileSecondaryEmailContent>
                    <TextField className="secondaryEmailInput" inputRef={secondaryEmailRef} label="E-mail secundário" variant="outlined" placeholder="E-mail secundário" type="text" />
                    {/* <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked={false} onChange={() => handleSecondaryEmail()} />} label="Receber notificações por este e-mail" />
                </FormGroup> */}
                    <div style={{ margin: '1rem 1rem 1rem 0' }}>
                        <FormButton className="formInput" variant="outlined" text="Receber notificações por este e-mail" onClick={() => handleSecondaryEmail()} />
                    </div>
                </ProfileSecondaryEmailContent>
            </ProfileContainer>
            <>
                {validationErrors.map((error, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={validationErrors.length >= 1}
                            autoHideDuration={3000}
                            message={error}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setValidationErrors([])}>
                            <SnackbarMessageAlert
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setValidationErrors([])}
                            >
                                {error}
                            </SnackbarMessageAlert>
                        </Snackbar>
                    )
                })}
            </>
            <>
                {notifications.map((notification, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={notifications.length >= 1}
                            autoHideDuration={6000}
                            message={notification}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setNotifications([])}>
                            <SnackbarMessageNotification
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setNotifications([])}
                            >
                                {notification}
                            </SnackbarMessageNotification>
                        </Snackbar>
                    )
                })}
            </>
        </>

    );
}