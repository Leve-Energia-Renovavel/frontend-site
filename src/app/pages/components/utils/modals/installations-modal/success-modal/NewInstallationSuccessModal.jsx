import { Backdrop, Modal } from "@mui/material";
import { ModalBox, ModalMainButton, ModalTitleContainer } from "./styles";
import { useRouter } from "next/navigation";

export default function NewInstallationSuccessModal({ isOpen, closeModal }) {

    const router = useRouter()

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
                <ModalTitleContainer>
                    <h1 className='modalTitle'>Contrato assinado com sucesso!</h1>
                    <p className="description">Seu novo endereço passará por uma validação e em até 45 dias te daremos um retorno. </p>
                    <p >Não se preocupe! Você poderá acompanhar o status na aba <span className="underlined" onClick={() => router.push("/dashboard/installations")}>Endereços</span></p>
                </ModalTitleContainer>
                <ModalMainButton onClick={closeModal}>
                    <span>Entendi</span>
                </ModalMainButton>
            </ModalBox>
        </Modal>
    )
}