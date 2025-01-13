"use client";

import { modalBackdropGreen } from '@/app/pages/globalStyles';
import { isNull } from '@/app/utils/helper/globalHelper';
import { sendWhatsAppMessage } from '@/app/utils/helper/whatsapp/whatsappHelper';
import { isNull } from '@/app/utils/helper/globalHelper';
import { Backdrop, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import ActiveDistributorMessage from './active-distributor-message/ActiveDistributorMessage';
import InactiveDistributorMessage from './inactive-distributor-message/InactiveDistributorMessage';
import { FormButton, LampIcon, ModalBox, SimpleArrowForward, SwitchButton, WelcomeContent } from './styles';
export default function WelcomeAndShareAccessModal({ isMobileContent, isOpen, customerName, distributorStatus, closeModal }) {

    const [checked, setChecked] = useState(false)

    const isNotActiveDistributor = distributorStatus === false;
    const isActiveDistributor = distributorStatus === true;

    const handleButtonClick = () => {
        closeModal()
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isNull(distributorStatus)) return null;

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
                    <SwitchButton checkedIcon={<LampIcon />} checked={checked} />
                    {isNotActiveDistributor ? <InactiveDistributorMessage /> : <ActiveDistributorMessage />}
                    <FormButton
                        onClick={handleButtonClick}
                        endIcon={<SimpleArrowForward className="icon" />}>
                        <span>{"Completar cadastro"}</span>
                    </FormButton>
                </WelcomeContent>
            </ModalBox>
        </Modal>
    );
}
