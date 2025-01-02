"use client"

import { sendWhatsAppMessage } from '@/app/utils/helper/whatsapp/whatsappHelper';
import { Backdrop, Modal } from '@mui/material';
import { FormButton, ModalBox, SimpleArrowForward, WelcomeContent } from './styles';

export default function WelcomeAndShareAccessModal({ isMobileContent, isOpen, customerName, distributorStatus, openModal, closeModal }) {

    const activeDistributor = distributorStatus === true

    const handleButtonClick = () => {
        if (activeDistributor) {
            closeModal()
        } else {
            sendWhatsAppMessage(`Olá! Meu nome é ${customerName} e quero conhecer o programa de indicações e agregados da Leve Energia.`)
        }
    }

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
            <ModalBox className={`${isMobileContent ? "welcomeAndShareAccessModalMobile" : "welcomeAndShareAccessModalDesktop"}`}>

                <WelcomeContent>
                    {activeDistributor ? <>
                        <h6 className='title'>Parabéns!</h6>
                        <p className='subtitle'>Você acaba de contratar a Leve Energia</p>
                        <p className='descriptionPrimary'>Agora você precisa completar o seu cadastro com informações do seu imóvel.</p>
                        <p className='descriptionSecondary'>Após isso, iremos confirmar seus dados e solicitar que sua distribuidora cadastre seu imóvel como consumidor de nossas usinas.</p>
                        <p className='descriptionSecondary'>O cadastro na distribuidora pode levar até <span className='highlighted'>30 dias</span> e sua conta de luz começará a ficar mais barata em até <span className='highlighted'>60 dias</span>.</p>
                    </> :
                        <>
                            <h6 className='title'>Parabéns!</h6>
                            <p className='subtitle'>Você acaba de contratar a Leve Energia</p>
                            <p className='descriptionPrimary'>As usinas que atenderão a sua região ainda estão em fase de construção, por isso, sua economia na conta de luz vai demorar um pouco mais para começar.</p>
                            <p className='descriptionSecondary'>Enquanto isso, você pode começar a espalhar impacto positivo em sua rede e garantir outros ganhos com a Leve desde já utilizando nossos programas de indicação e agregados.</p>
                        </>}
                    <FormButton
                        onClick={() => handleButtonClick()}
                        endIcon={<SimpleArrowForward className="icon" />}>
                        <span>{activeDistributor ? "Completar cadastro" : "Conhecer programas"} </span>
                    </FormButton>
                </WelcomeContent>

            </ModalBox>
        </Modal>
    )
}
