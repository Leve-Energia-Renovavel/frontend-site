"use client"

import { requestSuccessful } from '@/app/service/utils/Validations';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, Snackbar, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import DefaultButton from '../utils/buttons/DefaultButton';
import { RecoverPasswordContainer, RecoverPasswordFormContainer, RecoverPasswordTitleContainer, SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";

export default function RecoverPasswordMain() {

    const router = useRouter()
    const search = useSearchParams()

    const token = search.get("token")

    if (token) {
        Cookies.set('accessToken', token)
    } else {
        notFound()
    }

    const [validatedToken, setValidatedToken] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const userRefs = {
        newPassword: useRef(null),
        confirmNewPassword: useRef(null),
    };

    const handleRecoverPassword = async () => {

        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };

        const data = {
            newPassword: userRefs.newPassword.current.value,
            confirmNewPassword: userRefs.confirmNewPassword.current.value
        }

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/recovery-pass/`, data, { headers });
            if (requestSuccessful(response.status)) {
                setNotifications(["Senha redefinida com sucesso!"])
            }
        } catch (error) {
            console.error(error);
            setValidationErrors(error)

        }
    }

    return (
        <RecoverPasswordContainer>
            <RecoverPasswordTitleContainer>
                <Typography variant='h1'>Recuperar Senha</Typography>
            </RecoverPasswordTitleContainer>

            {!validatedToken &&
                <RecoverPasswordFormContainer>
                    <Typography variant='subtitle1'>Crie e confirme sua nova senha nos campos abaixo:</Typography>
                    <TextField className="formInput"
                        inputRef={userRefs.newPassword}
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
                    <TextField className="formInput"
                        inputRef={userRefs.confirmNewPassword}
                        label="Confirmar Nova Senha"
                        variant="outlined"
                        placeholder="Confirmar Nova Senha"
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
                    <DefaultButton variant="outlined" text="Redefinir Senha" onClick={() => handleRecoverPassword()} />
                </RecoverPasswordFormContainer>
            }

            <>
                {validationErrors?.map((error, index) => {
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
                {notifications?.map((notification, index) => {
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
        </RecoverPasswordContainer>
    );
}
