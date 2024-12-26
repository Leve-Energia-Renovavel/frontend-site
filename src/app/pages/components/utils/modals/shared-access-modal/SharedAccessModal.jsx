/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Backdrop, Modal } from '@mui/material';
import dynamic from 'next/dynamic';
import { ModalBox } from './styles';

const DashboardSharedAccess = dynamic(() => import('../../../new-dashboard/side-bar/shared-access/DashboardSharedAccess'), { ssr: false });

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
                        backgroundColor: 'rgba(0, 89, 64, 0.4)',
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
