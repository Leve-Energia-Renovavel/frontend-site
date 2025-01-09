"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore';
import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { PATH_TO } from '@/app/pages/enums/globalEnums';
import { modalBackdrop } from '@/app/pages/globalStyles';
import { forgotPasswordValidation, loginValidation } from '@/app/service/login-service/LoginService';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { awaitSeconds } from '@/app/utils/browser/BrowserUtils';
import { createForgotPasswordData, createLoginData } from '@/app/utils/helper/login/loginHelper';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Box, CircularProgress, Divider, IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import leveLogo from '../../../../../../../resources/icons/large/leve-logo-orange-icon-large.svg';
import { CloseButtonContainer, ContentContainer, FormFooterContainer, LoginBox, LoginButton, LoginButtonContainer, LoginForm, TitleContainer } from './styles';

export default function LoginModal({ isOpen, closeModal, hasForgottenPassword, isLoginPage }) {

    const router = useRouter()

    const { user, updateUser } = useStoreUser();
    const { setErrors, setNotifications } = useStoreMessages();

    const [forgotPassword, setForgotPassword] = useState(hasForgottenPassword)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")

    const loginRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        if (forgotPassword) {
            const data = createForgotPasswordData(loginRef)
            await forgotPasswordValidation(data, setNotifications, setErrors)

        } else {
            const data = createLoginData(loginRef)
            const response = await loginValidation(data, updateUser)

            if (requestSuccessful(response?.status) && response?.data?.access_token) {
                router.push(PATH_TO.DASHBOARD)
            } else if (response?.data?.error) {
                setErrors(["E-mail e/ou senha estão incorretos"])
            } else if (response?.errors) {
                setErrors([response?.errors])
            } else {
                setErrors(["Erro ao realizar login. Tente novamente mais tarde"])
                await awaitSeconds(2)
            }
        }
        await awaitSeconds(2)
        closeModal
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    const goToHome = () => {
        router.push(PATH_TO.HOME)
    }

    const handleCloseModal = () => {
        if (isLoginPage) {
            router.push(PATH_TO.HOME)
        } else {
            closeModal()
        }
    }

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
                            backgroundColor: modalBackdrop
                        },
                    },
                }}>
                <LoginBox>
                    <CloseButtonContainer className="modalCloseButtonContainer">
                        <IconButton onClick={() => handleCloseModal()}>
                            <CloseIcon />
                        </IconButton>
                    </CloseButtonContainer>
                    <TitleContainer className="modalTitleContainer">
                        <Image
                            className="logoLeve"
                            loading="lazy"
                            src={leveLogo}
                            alt="Ícone de formulário para completar o cadastro"
                            onClick={() => goToHome()} />
                        {!forgotPassword ? <h1>Entrar</h1> : <h1>Recuperar minha senha</h1>}
                    </TitleContainer>
                    <ContentContainer className="modalContentContainer">
                        <LoginForm>
                            <TextField className="formInput"
                                autoComplete="username"
                                inputRef={loginRef.email}
                                label="E-mail"
                                variant="outlined"
                                placeholder="E-mail"
                                type="text"
                                required />
                            {!forgotPassword ?
                                <TextField className="formInput"
                                    inputRef={loginRef.password}
                                    autoComplete="current-password"
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
                                    <p className='forgotPassword' onClick={() => setForgotPassword(true)}>
                                        Esqueci minha senha
                                    </p> :
                                    <p className='forgotPassword' onClick={() => setForgotPassword(false)}>
                                        Cancelar
                                    </p>}
                                <Divider className='divider' />
                                <FormFooterContainer>
                                    <p >Ainda não tem uma conta? <span className='createNewAccount' onClick={() => goToHome()}>Crie uma aqui!</span> </p>
                                </FormFooterContainer>
                            </LoginButtonContainer>
                        </LoginForm>

                    </ContentContainer>
                </LoginBox>
            </Modal >
        </>
    );
}