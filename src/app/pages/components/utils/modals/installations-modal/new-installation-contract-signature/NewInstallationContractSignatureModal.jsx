import ClicksignWidgetDefault from "@/app/utils/clicksign/ClickSignWidgetDefault";
import { Backdrop, Modal } from "@mui/material";
import { ModalBox, ModalTitleContainer } from "./styles";

export default function NewInstallationContractSignatureModal({ uuid, isOpen, closeModal }) {

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
                    <h1 className='modalTitle'>Assine o contrato do seu novo endereço:</h1>
                    <p className="description">Contrato ID: {uuid}</p>
                </ModalTitleContainer>
                <ClicksignWidgetDefault uuid={uuid} />
            </ModalBox>
        </Modal>
    )
}