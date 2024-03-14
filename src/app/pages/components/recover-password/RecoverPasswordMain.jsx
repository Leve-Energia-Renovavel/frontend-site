"use client"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, Snackbar, TextField } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RecoverPasswordContainer, RecoverPasswordFormContainer, RecoverPasswordTitleContainer, SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";
import DefaultButton from '../utils/buttons/DefaultButton';
import axios from 'axios';
import { requestSuccessful } from '@/app/service/utils/Validations';

export default function RecoverPasswordMain() {

    const [validatedToken, setValidatedToken] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const params = useParams()
    const search = useSearchParams()

    const userRefs = {
        newPassword: useRef(null),
        confirmNewPassword: useRef(null),
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/`);
    //             if (requestSuccessful(response.status)) {
    //                 setValidatedToken(true)

    //             }
    //         } catch (error) {
    //             console.error(error);
    //             setValidationErrors(error)
    //         }

    //     };

    //     fetchData();
    // }, []);

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
                <h1>Recuperar Senha</h1>
            </RecoverPasswordTitleContainer>

            {validatedToken &&
                <RecoverPasswordFormContainer>
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
                </RecoverPasswordFormContainer>}

            {/* {validatedToken && <RecoverPasswordFormContainer>
                <TextField className="formInput" label="Nova Senha" variant="outlined" placeholder="Nova Senha" type="text" required />
                <TextField className="formInput" label="Confirmar Nova Senha" variant="outlined" placeholder="Confirmar Nova Senha" type="text" required />
            </RecoverPasswordFormContainer>} */}
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
