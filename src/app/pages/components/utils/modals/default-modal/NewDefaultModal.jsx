import { Backdrop, Modal } from '@mui/material'
import { ModalBox, ModalCancelButton, ModalMainButton } from './styles'

export default function NewDefaultModal({ title, description, buttonTitle, cancel, isOpen, openModal, closeModal, confirmModal }) {
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
                <h1 className='modalTitle'>{title}</h1>
                <p className='modalDescription'>{description}</p>
                <ModalMainButton onClick={confirmModal}>
                    <span>{buttonTitle}</span>
                </ModalMainButton>
                <ModalCancelButton onClick={closeModal}>
                    <span>{cancel}</span>
                </ModalCancelButton>
            </ModalBox>
        </Modal>
    )
}