"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton, Modal, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRef, useState } from 'react';
import leveLogo from '../../../../resources/img/leve-logo-blue.jpg';
import { CodeButton, MemberGetMemberContainer, MemberGetMemberMain, ModalBox, ModalContentContainer, ModalIconContainer, ModalTitleContainer, SendInviteAndShareContainer, SendInviteButton, ShareButton, SnackbarMessageAlert, SnackbarMessageNotification, TitleContainer } from './styles';

export default function MemberGetMember() {

    const storeUser = useStoreUser()
    const user = useStoreUser().user

    const [copiedToClipboard, setCopiedToClipboard] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const invitedEmailRef = useRef(null)

    const handleCopyToClipboard = () => {
        setCopiedToClipboard(current => !current)
        navigator.clipboard.writeText(user.memberGetMemberCode)
    }
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const handleSendInvite = async () => {
        if (invitedEmailRef.current.value != "") {
            const headers = {
                Authorization: `Bearer ${Cookies.get('accessToken')}`
            };
            const data = {
                send_mail: invitedEmailRef.current.value,
            }
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/send-code`, data, { headers })
                if (requestSuccessful(response.status)) {
                    setNotifications([response?.data?.message])
                }

            } catch (error) {
                console.error(error)
                setValidationErrors([error?.response?.data?.message])
            }
        }
    }

    const handleShareWhatsapp = () => {
        const link = `https://api.whatsapp.com/send?text=Segue%20link%20disponibilizado%20pela%20Leve%20para%20que%20possa%20conhecer%20o%20processo%20de%20opt-in%20ao%20programa%20de%20economia%20Martins/Tribanco.%0A%0AUse%20meu%20c%C3%B3digo%20de%20indica%C3%A7%C3%A3o%20e%20garanta%2020%%20de%20desconto%20na%20sua%20fatura%20da%20CEMIG%0A${user.memberGetMemberCode}%0A%0AAcesse:%20https://cliente.leveenergia.com.br/cadastro/`
        window.open(link, '_blank');

    }

    return (
        <>
            <Modal
                open={isModalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <ModalBox>
                    <ModalIconContainer>
                        <div style={{ marginLeft: 'auto' }}>
                            <IconButton onClick={() => setModalOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </ModalIconContainer>
                    <ModalTitleContainer>
                        <Image className="logoLeve" loading="eager" priority={true} src={leveLogo} alt="Ícone de formulário para completar o cadastro" />
                        <Typography variant="h1">Indique um Amigo</Typography>
                    </ModalTitleContainer>
                    <ModalContentContainer>
                        <TextField className="formInput" inputRef={invitedEmailRef} label="E-mail da Indicação" variant="outlined" placeholder="E-mail da Indicação" type="text" required />
                    </ModalContentContainer>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <SendInviteButton onClick={() => handleSendInvite()}>
                            <EmailIcon />
                            Enviar Convite
                        </SendInviteButton>
                    </div>
                </ModalBox>
            </Modal>

            <MemberGetMemberContainer>
                <TitleContainer>
                    <Typography>A vida é Leve, né? Convide outros para ter o mesmo benefício!
                        Eles só precisam usar seu código na hora da inscrição =)</Typography>
                </TitleContainer>
                <MemberGetMemberMain>
                    <CodeButton onClick={() => handleCopyToClipboard()}>
                        {!copiedToClipboard ?
                            <>
                                <ContentCopyIcon />
                                {user.memberGetMemberCode}
                            </> :
                            <span>Copiado!</span>
                        }
                    </CodeButton>
                    <SendInviteAndShareContainer>
                        <SendInviteButton onClick={() => handleOpenModal()}>
                            <EmailIcon />
                            Enviar Convite
                        </SendInviteButton>
                        <ShareButton onClick={() => handleShareWhatsapp()}>
                            <WhatsAppIcon />
                            Compartilhar
                        </ShareButton>
                    </SendInviteAndShareContainer>
                </MemberGetMemberMain>
            </MemberGetMemberContainer>
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
