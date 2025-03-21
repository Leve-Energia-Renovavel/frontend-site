import { Backdrop, Modal } from '@mui/material'
import { ModalBox } from './styles'

export default function SingleInstallationModal({ isOpen, closeModal, installationToBeCancelled }) {
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
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    },
                },
            }}>
            <ModalBox>
                <p>SingleInstallationModal</p>
                <p>{JSON.stringify(installationToBeCancelled)}</p>
            </ModalBox>
        </Modal>
    )
}