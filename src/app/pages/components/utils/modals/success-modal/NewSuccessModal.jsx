import { Backdrop, Modal } from "@mui/material";
import { Check, ModalBox, ModalMainButton } from "./styles";

export default function NewSuccessModal({ title, description, buttonTitle, isOpen, closeModal }) {
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
                <Check />
                <h1 className='modalTitle'>{title}</h1>
                <p className="description">{description}</p>
                <ModalMainButton onClick={closeModal}>
                    <span>{buttonTitle}</span>
                </ModalMainButton>
            </ModalBox>
        </Modal>
    )
}