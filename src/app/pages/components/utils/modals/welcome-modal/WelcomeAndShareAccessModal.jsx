/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Backdrop, Modal } from '@mui/material';
import { FormButton, ModalBox, SimpleArrowForward, WelcomeContent } from './styles';

export default function WelcomeAndShareAccessModal({ isMobileContent, isOpen, openModal, closeModal, setErrorMessage, setNotifications }) {

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 89, 64, 0.4)',
                    },
                },
            }}>
            <ModalBox className={`welcomeAndShareAccessModal${isMobileContent ? "Mobile" : ""}`}>

                <WelcomeContent>
                    <h6 className='title'>Parabéns!</h6>
                    <p className='subtitle'>Você acaba de contratar a Leve Energia</p>
                    <p className='descriptionPrimary'>Agora você precisa completar o seu cadastro com informações do seu imóvel.</p>
                    <p className='descriptionSecondary'>Após isso, iremos confirmar seus dados e solicitar que sua distribuidora cadastre seu imóvel como consumidor de nossas usinas. O cadastro na distribuidora pode levar até <span className='highlighted'>30 dias</span> e sua conta de luz começará a ficar mais barata em até <span className='highlighted'>60 dias</span>.</p>
                    <FormButton
                        onClick={closeModal}
                        endIcon={<SimpleArrowForward className="icon" />}>
                        <span>{"Completar cadastro"} </span>
                    </FormButton>
                </WelcomeContent>

            </ModalBox>
        </Modal>
    )
}
