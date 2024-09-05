"use client"

import { confirmNewPassword } from '@/app/service/login-service/LoginService';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Box, CircularProgress, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import leveLogo from '../../../../../resources/icons/large/leve-logo-orange-icon-large.svg';
import { ConfirmNewPasswordBox, ConfirmNewPasswordButton, ConfirmNewPasswordButtonContainer, ConfirmNewPasswordContentContainer, ConfirmNewPasswordForm, FormFooterContainer, IconContainer, TitleContainer } from './styles';

export default function ConfirmNewPassword({ token, isOpen, openModal, closeModal, setNotifications, setValidationErrors }) {

    const router = useRouter()

    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [isLoading, setIsLoading] = useState(false)

    const newPasswordRef = useRef(null)
    const confirmNewPasswordRef = useRef(null)

    const handleConfirmNewPassword = async () => {
        setIsLoading(true)
        const newPassword = newPasswordRef.current.value
        const confirmedNewPassword = confirmNewPasswordRef.current.value
        await confirmNewPassword(newPassword, confirmedNewPassword, token, setNotifications, setValidationErrors, router, setIsLoading)
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
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        },
                    },
                }}>

                <ConfirmNewPasswordBox>
                    <IconContainer>
                        <div style={{ marginLeft: 'auto' }}>
                            <CloseIcon className="closeIcon" onClick={() => router.push("/")} />
                        </div>
                    </IconContainer>
                    <TitleContainer>
                        <Image
                            className="logoLeve"
                            loading="lazy"
                            src={leveLogo}
                            alt="Ícone de formulário para completar o cadastro"
                            onClick={() => getBackToHome()} />
                        <h1>Confirme sua nova senha</h1>
                    </TitleContainer>

                    <ConfirmNewPasswordContentContainer>
                        <ConfirmNewPasswordForm>
                            <TextField
                                className="formInput"
                                inputRef={newPasswordRef}
                                label="Nova senha"
                                variant="outlined"
                                placeholder="Nova senha"
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
                                }} />
                            <TextField className="formInput"
                                label="Confirmar nova senha"
                                inputRef={confirmNewPasswordRef}
                                variant="outlined"
                                placeholder="Confirme a nova senha"
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
                                }} />
                            <ConfirmNewPasswordButtonContainer>
                                {isLoading ?
                                    <Box className="box">
                                        <CircularProgress className='loading' />
                                    </Box>
                                    :
                                    <ConfirmNewPasswordButton onClick={() => handleConfirmNewPassword()}>
                                        <span>Confirmar Nova Senha</span>
                                    </ConfirmNewPasswordButton>}
                                <Typography className='forgotPassword' variant='subtitle1' onClick={() => router.push("/login/")}>
                                    Cancelar
                                </Typography>
                                <FormFooterContainer>
                                </FormFooterContainer>
                            </ConfirmNewPasswordButtonContainer>
                        </ConfirmNewPasswordForm>

                    </ConfirmNewPasswordContentContainer>
                </ConfirmNewPasswordBox>
            </Modal>


        </>
    )
}