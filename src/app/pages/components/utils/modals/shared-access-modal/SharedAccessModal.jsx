import dynamic from 'next/dynamic';
import { ModalBox } from './styles';
import { Backdrop, Modal } from '@mui/material';

const DashboardSharedAccess = dynamic(() => import('../../../new-dashboard/side-bar/shared-access/DashboardSharedAccess'), { ssr: false });

export default function SharedAccessModal({ isOpen, closeModal, setErrorMessage, setNotifications }) {

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
            <ModalBox className="sharedAccessModalBox">
                <DashboardSharedAccess
                    expanded={true}
                    isMobileContent={false}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
            </ModalBox>
        </Modal>
    )
}
