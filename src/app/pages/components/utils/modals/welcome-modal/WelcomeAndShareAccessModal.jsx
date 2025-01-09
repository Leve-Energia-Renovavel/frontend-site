"use client";

import { modalBackdropGreen } from '@/app/pages/globalStyles';
import { sendWhatsAppMessage } from '@/app/utils/helper/whatsapp/whatsappHelper';
import { Backdrop, Modal } from '@mui/material';
import ActiveDistributorMessage from './active-distributor-message/ActiveDistributorMessage';
import InactiveDistributorMessage from './inactive-distributor-message/InactiveDistributorMessage';
import { FormButton, ModalBox, SimpleArrowForward, WelcomeContent } from './styles';

export default function WelcomeAndShareAccessModal({ isMobileContent, isOpen, customerName, distributorStatus, closeModal }) {

    const isActiveDistributor = distributorStatus !== true;

    const handleButtonClick = () => {
        if (isActiveDistributor) {
        } else {
            sendWhatsAppMessage(`Olá! Meu nome é ${customerName} e quero conhecer o programa de indicações e agregados da Leve Energia.`);
        }
        closeModal();
    };

    if (distributorStatus === null) return null;

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: { backgroundColor: modalBackdropGreen },
                },
            }}
        >
            <ModalBox className={isMobileContent ? "welcomeAndShareAccessModalMobile" : "welcomeAndShareAccessModalDesktop"}>
                <WelcomeContent className='welcomeAndShareAccessContent'>
                    {isActiveDistributor ? <ActiveDistributorMessage /> : <InactiveDistributorMessage />}
                    <FormButton
                        onClick={handleButtonClick}
                        endIcon={<SimpleArrowForward className="icon" />}
                    >
                        <span>{isActiveDistributor ? "Completar cadastro" : "Conhecer programas"}</span>
                    </FormButton>
                </WelcomeContent>
            </ModalBox>
        </Modal>
    );
}
