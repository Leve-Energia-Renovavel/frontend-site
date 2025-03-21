"use client"

import { handleChangePassword } from '@/app/service/login-service/PasswordService'
import { IconButton, InputAdornment } from '@mui/material'
import { useRef, useState } from 'react'
import NewSuccessModal from '../utils/modals/success-modal/NewSuccessModal'
import { ChangePasswordButton, ChangePasswordContainer, ChangePasswordForm, FormInput, InvisibleIcon, LockIcon, TitleContainer, VisibleIcon } from './styles'

export default function NewChangePassword({ setErrorMessage, setNotifications }) {

    const oldPasswordRef = useRef(null)
    const newPasswordRef = useRef(null)
    const confirmNewPasswordRef = useRef(null)

    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false)
    const [newPasswordVisible, setNewPasswordVisible] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const changePassword = async () => {
        const oldPassword = oldPasswordRef.current.value
        const newPassword = newPasswordRef.current.value
        const confirmedNewPassword = confirmNewPasswordRef.current.value
        if (newPassword !== confirmedNewPassword) {
            setErrorMessage(["É necessário confirmar a nova senha"])
        } else {
            const result = await handleChangePassword(oldPassword, newPassword, setNotifications, setErrorMessage)
            if (result) {
                setOpenModal(true)
            }
        }
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <ChangePasswordContainer className='profileChangePassword'>
            <TitleContainer>
                <LockIcon />
                <h3 className='title'>Alterar Senha de Acesso</h3>
            </TitleContainer>
            <ChangePasswordForm>
                <FormInput
                    required
                    className="inputForm"
                    inputRef={oldPasswordRef}
                    placeholder='Senha atual'
                    type={currentPasswordVisible ? "text" : "password"}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)}>
                                    {currentPasswordVisible ? <VisibleIcon /> : <InvisibleIcon />}
                                </IconButton>
                            </InputAdornment>
                    }} />
                <FormInput
                    required
                    className="inputForm"
                    type={newPasswordVisible ? "text" : "password"}
                    inputRef={newPasswordRef}
                    placeholder='Nova senha'
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setNewPasswordVisible(!newPasswordVisible)}>
                                    {newPasswordVisible ? <VisibleIcon /> : <InvisibleIcon />}
                                </IconButton>
                            </InputAdornment>
                    }}
                />
                <FormInput
                    required
                    className="inputForm"
                    type={newPasswordVisible ? "text" : "password"}
                    inputRef={confirmNewPasswordRef}
                    placeholder='Confirmar nova senha'
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setNewPasswordVisible(!newPasswordVisible)}>
                                    {newPasswordVisible ? <VisibleIcon /> : <InvisibleIcon />}
                                </IconButton>
                            </InputAdornment>
                    }}
                />
                <ChangePasswordButton className='button' onClick={() => changePassword()}>
                    <span>Trocar senha</span>
                </ChangePasswordButton>
            </ChangePasswordForm>

            <NewSuccessModal
                isOpen={openModal}
                closeModal={closeModal}
                title={`Senha alterada com sucesso`}
                description={<span className='description'>Em breve, entraremos em contato através do email <span className="highlighted">comercial@leveenergia.com.br</span> ou no WhatsApp pelo número <span className="highlighted">(11) 9 9988-8899</span></span>}
                buttonTitle={`Concluir`}
            />
        </ChangePasswordContainer>
    )
}