/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Backdrop, Modal } from '@mui/material';
import dynamic from 'next/dynamic';
import { ModalBox } from './styles';
import { modalBackdropGreen } from '@/app/pages/globalStyles';

const DashboardSharedAccess = dynamic(() => import('../../../dashboard/side-bar/shared-access/DashboardSharedAccess'), { ssr: false });

export default function SharedAccessModal({ isMobileContent, isOpen, openModal, closeModal }) {

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
                        backgroundColor: modalBackdropGreen,
                    },
                },
            }}>
            <ModalBox className={`sharedAccessModalBox${isMobileContent ? "Mobile" : ""}`}>
                <DashboardSharedAccess
                    expanded={true}
                    closeModal={closeModal}
                    isMobileContent={false} />
            </ModalBox>
        </Modal>
    )
}
