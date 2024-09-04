import { Backdrop, Modal } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ModalBox, ModalMainButton, ModalTitleContainer } from "./styles";

export default function NewInstallationPendingContractModal({ pendingInstallations, isOpen }) {

    const router = useRouter()
    const path = usePathname()

    const notContractPage = path !== "/dashboard/installations/contract-signature/"

    const installation = pendingInstallations[0]

    const handleSignPendingContract = () => {
        router.push(`/dashboard/installations/contract-signature/?uuid=${installation?.documentKey}`)
    }

    return (
        <Modal
            open={isOpen && notContractPage}
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
                    <h1 className='modalTitle'>Atenção!</h1>
                    <p className="description">Notamos que você iniciou o processo para adicionar uma nova unidade consumidora, mas não concluiu a assinatura dos contratos.</p>
                    <p>Para garantir que seu novo endereço comece a receber nossos créditos de energia, finalize a assinatura o quanto antes. Estamos aqui para ajudar, caso precise de qualquer suporte!</p>
                </ModalTitleContainer>
                <ModalMainButton onClick={handleSignPendingContract}>
                    <span>Assinar Contratos</span>
                </ModalMainButton>
            </ModalBox>
        </Modal>
    )
}