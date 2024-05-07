"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { recoverPassword } from '@/app/service/login-service/LoginService';
import { getAccessToken } from '@/app/service/user-service/UserService';
import { requestNotFound, requestSuccessful } from '@/app/service/utils/Validations';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Box, CircularProgress, Divider, IconButton, InputAdornment, Modal, Snackbar, TextField, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import leveLogo from '../../../../resources/icons/large/leve-logo-orange-icon-large.svg';
import { forgotPasswordSchema, loginSchema } from './schema';
import { FormFooterContainer, LoginBox, LoginButton, LoginButtonContainer, LoginContentContainer, LoginForm, LoginIconContainer, LoginTitleContainer, SnackbarMessageAlert, SnackbarMessageNotification } from './styles';

export default function NewLoginModal({ isOpen, openModal, closeModal }) {

    const router = useRouter()
    const pathname = usePathname()

    const store = useStoreUser()
    const user = useStoreUser().user

    const [forgotPassword, setForgotPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const hideClose = pathname == '/login/' ? true : false
    const homeUrl = "https://leveenergia.com.br/"

    const loginRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const handleCreateNewAccount = () => {
        router.push(`/`)
        setForgotPassword(false)
    }

    const loginValidation = async (data) => {
        return await loginSchema.validate(data, { abortEarly: false })
            .then(async () => {
                const response = await getAccessToken(data)
                if (requestSuccessful(response.status)) {
                    store.updateUser({
                        accessToken: response?.data?.access_token,
                        refreshToken: response?.data?.refresh_token
                    })
                    Cookies.set('accessToken', response?.data?.access_token)
                    Cookies.set('refreshToken', response?.data?.refresh_token)
                }
                return response
            })
            .catch((err) => {
                console.log(err.errors);
                setValidationErrors(err.errors)
            });
    }
    const forgotPasswordValidation = async (data) => {
        const response = await forgotPasswordSchema.validate(data, { abortEarly: false })
            .then(async () => {
                return await recoverPassword(data)
            })
            .catch((err) => {
                console.log(err.errors);
                return (err.errors)
            });
        return response
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        if (!forgotPassword) {

            const data = {
                username: loginRef.email.current.value,
                password: loginRef.password.current.value,
                grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE,
                client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                scope: ""
            }

            const response = await loginValidation(data)
            if (response?.status === 200 && response?.data.access_token) {
                router.push(`/dashboard`)
                closeModal()
            } else if (response?.data?.error) {
                setValidationErrors(["E-mail ou senha estão incorretos"])

            } else {
                setValidationErrors([response?.response?.data?.message])
            }

        } else {
            const data = { email: loginRef.email.current.value }
            const response = await forgotPasswordValidation(data)
            if (requestSuccessful(response?.status)) {
                setNotifications(["E-mail enviado com sucesso!"])
            } else if (requestNotFound(response?.status)) {
                setValidationErrors(["Usuário não encontrado"])
            } else {
                setValidationErrors(["Erro ao recuperar senha. Por favor, tente novamente"])
            }

        }

        setIsLoading(false)

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <>
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        },
                    },
                }}

            >
                <LoginBox>
                    <LoginIconContainer>
                        <div style={{ marginLeft: 'auto' }}>
                            {hideClose ?
                                <IconButton onClick={() => router.push(homeUrl)}>
                                    <CloseIcon />
                                </IconButton>
                                :
                                <IconButton onClick={closeModal}>
                                    <CloseIcon />
                                </IconButton>}
                        </div>
                    </LoginIconContainer>
                    <LoginTitleContainer>
                        <Image className="logoLeve" loading="lazy" src={leveLogo} alt="Ícone de formulário para completar o cadastro" />
                        {!forgotPassword ? <h1>Entrar</h1> : <h1>Recuperar minha senha</h1>}
                    </LoginTitleContainer>
                    <LoginContentContainer>
                        <LoginForm>
                            <TextField className="formInput" inputRef={loginRef.email} label="E-mail" variant="outlined" placeholder="E-mail" type="text" required />
                            {!forgotPassword ?
                                <TextField className="formInput"
                                    inputRef={loginRef.password}
                                    label="Senha"
                                    variant="outlined"
                                    placeholder="Senha"
                                    type={passwordVisibible}
                                    required
                                    onKeyDown={(event) => handleKeyPress(event)}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setPasswordVisibible(passwordVisibible == "password" ? "text" : "password")}>
                                                    {passwordVisibible == "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                    }} />
                                : <></>}
                            <LoginButtonContainer>
                                {isLoading ?
                                    <Box sx={{ margin: "0 auto" }}>
                                        <CircularProgress />
                                    </Box>
                                    :
                                    <LoginButton onClick={handleSubmit}>
                                        {!forgotPassword ? <span>Entrar</span> : <span>Recuperar Senha</span>}
                                    </LoginButton>}
                                {!forgotPassword ?
                                    <Typography className='forgotPassword' variant='subtitle1' onClick={() => setForgotPassword(true)}>
                                        Esqueci minha senha
                                    </Typography> :
                                    <Typography className='forgotPassword' variant='subtitle1' onClick={() => setForgotPassword(false)}>
                                        Cancelar
                                    </Typography>}
                                <Divider className='divider' />
                                <FormFooterContainer>
                                    <Typography variant='subtitle1'>Ainda não tem uma conta? <span className='createNewAccount' onClick={() => handleCreateNewAccount()}>Crie uma aqui!</span> </Typography>
                                </FormFooterContainer>
                            </LoginButtonContainer>
                        </LoginForm>

                    </LoginContentContainer>
                </LoginBox>
            </Modal >
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