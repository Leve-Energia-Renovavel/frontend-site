"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore';
import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { PATH_TO } from '@/app/pages/enums/globalEnums';
import { modalBackdrop } from '@/app/pages/globalStyles';
import { forgotPasswordValidation, loginValidation } from '@/app/service/login-service/LoginService';
import { emailInputComplete, emailInputIncomplete } from '@/app/utils/helper/form/formHelper';
import { stringLengthIsBiggerThanZero } from '@/app/utils/helper/globalHelper';
import { createForgotPasswordData, createLoginData } from '@/app/utils/helper/login/loginHelper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Box, CircularProgress, IconButton, Modal } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import leveLogo from '../../../../../../../resources/icons/large/leve-logo-orange-icon-large.svg';
import { CloseButtonContainer, ContentContainer, LoginBox, LoginButton, LoginButtonContainer, LoginForm, LoginInput, TitleContainer } from './styles';

export default function LoginModal({ isOpen, closeModal, hasForgottenPassword, isLoginPage }) {

    const router = useRouter()

    const { user, updateUser } = useStoreUser();
    const { setErrors, setNotifications } = useStoreMessages();

    const PASSWORD = "password"

    const [forgotPassword, setForgotPassword] = useState(hasForgottenPassword)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState(PASSWORD)

    const [login, setLogin] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        if (forgotPassword) {
            const data = createForgotPasswordData(login?.email, login?.password)
            await forgotPasswordValidation(data, setNotifications, setErrors)

        } else {
            const data = createLoginData(login?.email, login?.password)
            await loginValidation(data, updateUser, router, setErrors, closeModal)
        }
        setIsLoading(false)
        closeModal()
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    const handleCloseModal = () => {
        if (isLoginPage) {
            router.push(PATH_TO.HOME)
        } else {
            closeModal()
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-login"
            aria-describedby="modal-modal-login"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: modalBackdrop
                    },
                },
            }}>
            <LoginBox className='loginModalBox'>
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
                        alt="Ícone de formulário para completar o cadastro" />
                    <h1>{!forgotPassword ? `Entrar` : `Recuperar minha senha`}</h1>
                </TitleContainer>
                <ContentContainer className="modalContentContainer">
                    <LoginForm className='loginForm'>
                        <LoginInput
                            autoComplete="email"
                            label="E-mail"
                            name='email'
                            error={emailInputIncomplete(login?.email)}
                            success={emailInputComplete(login?.email)}
                            onChange={handleInputChange}
                            variant="outlined"
                            placeholder="E-mail"
                            type="text"
                            required />
                        {!forgotPassword ?
                            <LoginInput
                                autoComplete="password"
                                label="Senha"
                                name='password'
                                success={stringLengthIsBiggerThanZero(login?.password)}
                                onChange={handleInputChange}
                                variant="outlined"
                                placeholder="Senha"
                                type={passwordVisibible}
                                required
                                onKeyDown={(event) => handleKeyPress(event)}
                                InputProps={{
                                    endAdornment:
                                        <IconButton
                                            className='icon'
                                            onClick={() => setPasswordVisibible(passwordVisibible === PASSWORD ? "text" : "password")}>
                                            {passwordVisibible === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                }} />
                            : <></>}
                        <LoginButtonContainer className='loginButtonContainer'>
                            {isLoading ?
                                <Box className="box">
                                    <CircularProgress className='loading' />
                                </Box>
                                :
                                <LoginButton onClick={handleSubmit} endIcon={<ArrowForwardIcon className="icon" />} >
                                    <span>{!forgotPassword ? 'Entrar' : 'Recuperar senha'}</span>
                                </LoginButton>}

                            <p className="forgotPassword" onClick={() => setForgotPassword(!forgotPassword)} >
                                {forgotPassword ? "Cancelar" : "Esqueci minha senha"}
                            </p>
                        </LoginButtonContainer>
                    </LoginForm>

                </ContentContainer>
            </LoginBox>
        </Modal >
    );
}