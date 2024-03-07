import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Divider, IconButton, Modal, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef, useState } from 'react';
import leveLogo from '../../../../resources/img/leve-logo-blue.jpg';
import { FormFooterContainer, LoginBox, LoginButton, LoginButtonContainer, LoginContentContainer, LoginForm, LoginIconContainer, LoginTitleContainer } from './styles';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, openModal, closeModal }) {

    const router = useRouter()

    const [forgotPassword, setForgotPassword] = useState(false)

    const loginRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const handleCreateNewAccount = () => {
        router.push(`/`)
        setForgotPassword(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!forgotPassword) {
            const email = loginRef.email.current.value
            const password = loginRef.password.current.value
            console.log(`handleSubmit  ${forgotPassword} value ==>>`, email, password)

        } else {
            const email = loginRef.email.current.value
            console.log(`handleSubmit  ${forgotPassword} value ==>>`, email)
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
                                <TextField className="formInput" inputRef={loginRef.password} label="Senha" variant="outlined" placeholder="Senha" type="text" required />
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
        </>
    );
}