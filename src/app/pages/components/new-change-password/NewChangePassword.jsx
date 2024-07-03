import { handleChangePassword } from '@/app/service/login-service/PasswordService'
import { IconButton, InputAdornment } from '@mui/material'
import { useRef, useState } from 'react'
import { ChangePasswordButton, ChangePasswordContainer, ChangePasswordForm, FormInput, InvisibleIcon, LockIcon, TitleContainer, VisibleIcon } from './styles'

export default function NewChangePassword({ setErrorMessage, setNotifications }) {

    const oldPasswordRef = useRef(null)
    const newPasswordRef = useRef(null)

    const [passwordVisible, setPasswordVisible] = useState(false)

    const changePassword = async () => {
        const oldPassword = oldPasswordRef.current.value
        const newPassword = newPasswordRef.current.value
        await handleChangePassword(oldPassword, newPassword, setNotifications, setErrorMessage)
    }

    return (
        <ChangePasswordContainer>
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
                    type={passwordVisible ? "text" : "password"}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setPasswordVisible(!passwordVisible)}>
                                    {passwordVisible ? <VisibleIcon /> : <InvisibleIcon />}
                                </IconButton>
                            </InputAdornment>
                    }} />
                <FormInput
                    required
                    className="inputForm"
                    type={passwordVisible ? "text" : "password"}
                    inputRef={newPasswordRef}
                    placeholder='Nova senha'
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setPasswordVisible(!passwordVisible)}>
                                    {passwordVisible ? <VisibleIcon /> : <InvisibleIcon />}
                                </IconButton>
                            </InputAdornment>
                    }}
                />
                <ChangePasswordButton className='button' onClick={() => changePassword()}>
                    <span>Trocar senha</span>
                </ChangePasswordButton>
            </ChangePasswordForm>
        </ChangePasswordContainer>
    )
}