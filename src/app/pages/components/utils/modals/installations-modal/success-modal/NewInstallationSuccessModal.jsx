import { Backdrop, Modal } from "@mui/material";
import { ModalBox, ModalMainButton, ModalTitleContainer } from "./styles";

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
                    <h1 className='modalTitle'>Contrato assinado com sucesso!</h1>
                    <p className="description">Seu novo endereço está em validação.</p>
                    <p>Após validarmos, <span className="underlined">em até 60 dias</span>, sua unidade será ativada e você começará a receber créditos de energia da Leve Energia.</p>
                </ModalTitleContainer>
                <ModalMainButton onClick={closeModal}>
                    <span>Entendi</span>
                </ModalMainButton>
            </ModalBox>
        </Modal>
    )
}