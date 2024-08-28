import { Backdrop, Modal } from "@mui/material";
import { ModalBox, ModalTitleContainer } from "./styles";

export default function NewInstallationSuccessModal({ isOpen, closeModal }) {

    return (
        <Modal
            open={isOpen}
            // onClose={closeModal}
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
                <ModalTitleContainer>
                    <h1 className='modalTitle'>Sucesso!</h1>
                    <p className="description">Contrato assinado com sucesso</p>
                </ModalTitleContainer>
            </ModalBox>
        </Modal>
    )
}