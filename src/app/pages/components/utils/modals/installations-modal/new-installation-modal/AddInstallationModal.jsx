import { Backdrop, Modal } from "@mui/material";
import dynamic from "next/dynamic";
import { ModalBox, ModalTitleContainer } from "./styles";

const InstallationForm = dynamic(() => import("../forms/InstallationForm"), { ssr: false });

export default function AddInstallationModal({ isOpen, closeModal }) {
    return (
        <Modal
            open={isOpen}
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
                    <h1 className='modalTitle'>Cadastre seu novo endereço</h1>
                    <p className="description">Preencha o formulário abaixo:</p>
                </ModalTitleContainer>
                <InstallationForm closeModal={closeModal} />
            </ModalBox>
        </Modal>
    )
}