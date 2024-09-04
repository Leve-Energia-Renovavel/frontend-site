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
                    <p className="description">falta assinar os contratos relativos ao endereço</p>
                    <p>{installation?.address} - {installation?.number} - {installation?.neighborhood}</p>
                </ModalTitleContainer>
                <ModalMainButton onClick={handleSignPendingContract}>
                    <span>Finalizar agora!</span>
                </ModalMainButton>
            </ModalBox>
        </Modal>
    )
}