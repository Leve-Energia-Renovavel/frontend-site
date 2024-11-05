"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { forgotPasswordValidation, loginValidation } from '@/app/service/login-service/LoginService';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { awaitSeconds } from '@/app/utils/browser/BrowserUtils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Box, CircularProgress, Divider, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import leveLogo from '../../../../resources/icons/large/leve-logo-orange-icon-large.svg';
import Messages from '../messages/Messages';
import ModalCloseButton from '../utils/buttons/close-button/ModalCloseButton';
import { FormFooterContainer, LoginBox, LoginButton, LoginButtonContainer, LoginContentContainer, LoginForm, LoginIconContainer, LoginTitleContainer } from './styles';

export default function NewLoginModal({ isOpen, openModal, closeModal, hasForgottenPassword }) {

    const router = useRouter()
    const pathname = usePathname()

    const store = useStoreUser()

    const [forgotPassword, setForgotPassword] = useState(hasForgottenPassword)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")

    const [errors, setErrorMessage] = useState([])
    const [notifications, setNotifications] = useState([])

    const hideClose = pathname == '/login/' ? true : false

    const loginRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const handleCreateNewAccount = () => {
        router.push(`/`)
        setForgotPassword(false)
    }
    const getBackToHome = () => {
        router.push(`/`)
        closeModal()
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

            const response = await loginValidation(data, store, setErrorMessage)
            if (requestSuccessful(response?.status) && response?.data?.access_token) {
                router.push(`/dashboard`)
            } else if (response?.data?.error) {
                setErrorMessage(["E-mail e/ou senha estão incorretos"])
            } else if (response?.errors) {
                setErrorMessage([response?.errors])
            } else {
                setErrorMessage(["Erro ao realizar login. Tente novamente mais tarde"])
                // setErrorMessage([response?.response?.data?.message])
                await awaitSeconds(2)
                closeModal()
            }

        } else {
            const data = { email: loginRef.email.current.value }
            await forgotPasswordValidation(data, setNotifications, setErrorMessage)
        }
        await awaitSeconds(0.6)
        closeModal()
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
                }}>
                <LoginBox>
                    <LoginIconContainer>
                        <ModalCloseButton router={router} hideClose={hideClose} getBackToHome={getBackToHome} />
                    </LoginIconContainer>
                    <LoginTitleContainer>
                        <Image
                            className="logoLeve"
                            loading="lazy"
                            src={leveLogo}
                            alt="Ícone de formulário para completar o cadastro"
                            onClick={() => getBackToHome()} />
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
                                    <Box className="box">
                                        <CircularProgress className='loading' />
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

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />

        </>
    );
}