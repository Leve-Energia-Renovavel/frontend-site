import { logIn } from '@/app/service/user-service/UserService';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Backdrop, Divider, IconButton, InputAdornment, Modal, Snackbar, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import leveLogo from '../../../../resources/img/leve-logo-blue.jpg';
import { forgotPasswordSchema, loginSchema } from './schema';
import { FormFooterContainer, LoginBox, LoginButton, LoginButtonContainer, LoginContentContainer, LoginForm, LoginIconContainer, LoginTitleContainer, SnackbarMessageAlert } from './styles';
import { useStoreUser } from '@/app/hooks/useStore';

export default function LoginModal({ isOpen, openModal, closeModal }) {

    const router = useRouter()
    const user = useStoreUser().user

    const [forgotPassword, setForgotPassword] = useState(false)
    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [validationErrors, setValidationErrors] = useState([])

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
                return await logIn(data)
            })
            .catch((err) => {
                console.log(err.errors);
                setValidationErrors(err.errors)
            });
    }
    const forgotPasswordValidation = async (data) => {
        const response = await forgotPasswordSchema.validate(data, { abortEarly: false })
            .then(() => {

            })
            .catch((err) => {
                console.log(err.errors);
                setValidationErrors(err.errors)
            });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!forgotPassword) {

            const data = {
                username: loginRef.email.current.value,
                password: loginRef.password.current.value,
                grant_type: "password",
                client_secret: "Ne3XLQEfGYzkhwDAtIYcknkn8cbRXGL2Ya0vFY7r",
                client_id: user.clientId,
                scope: ""
            }


            const response = await loginValidation(data)
            console.log("handleSubmit response ===>>", response)

        } else {
            const data = { email: loginRef.email.current.value }
            const response = forgotPasswordValidation(data)
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
                            backgroundColor: 'rgba(57, 67, 212, 0.4)',
                        },
                    },
                }}

            >
                <LoginBox>
                    <LoginIconContainer>
                        <div style={{ marginLeft: 'auto' }}>
                            <IconButton onClick={closeModal}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </LoginIconContainer>
                    <LoginTitleContainer>
                        <Image className="logoLeve" loading="eager" priority={true} src={leveLogo} alt="Ícone de formulário para completar o cadastro" />
                        {!forgotPassword ? <h1>Entrar</h1> : <h1>Recuperar minha senha</h1>}
                    </LoginTitleContainer>
                    <LoginContentContainer>
                        <LoginForm>
                            <TextField className="formInput" inputRef={loginRef.email} label="Login" variant="outlined" placeholder="Login" type="text" required />
                            {!forgotPassword ?
                                <TextField className="formInput"
                                    inputRef={loginRef.password}
                                    label="Senha"
                                    variant="outlined"
                                    placeholder="Senha"
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
                                : <></>}
                            <LoginButtonContainer>
                                <LoginButton onClick={handleSubmit}>
                                    {!forgotPassword ? <span>Entrar</span> : <span>Recuperar Senha</span>}
                                </LoginButton>
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
        </>
    );
}