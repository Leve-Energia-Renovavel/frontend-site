
import { DISTRIBUTOR } from "@/app/pages/enums/globalEnums";
import { Modal, Typography } from "@mui/material";
import Image from "next/image";
import boletoCemig from "../../../../resources/img/exemplo_numero_instalacao_cemig.png";
import boletoCpfl from "../../../../resources/img/exemplo_numero_instalacao_cpfl.png";
import { ModalBox, ModalButton } from "./styles";

export default function InstallationNumberModal(props) {

    const { distribuitor, isModalOpen, closeModal } = props;
    const distribuitorImage = distribuitor?.toUpperCase() === DISTRIBUTOR.CEMIG ? boletoCemig : boletoCpfl

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox>
                    <Typography variant="h5" className="modal-title" >Saiba onde encontrar o Número de Instalação</Typography>
                    <Typography className="modal-description">Para a {distribuitor?.toUpperCase()}, normalmente ele fica no canto superior direito do boleto: </Typography>
                    <Image src={distribuitorImage} alt='exemplo numero instalacao' className="modal-image" loading="lazy" />
                    <ModalButton onClick={closeModal}><span>Entendi</span></ModalButton>
                </ModalBox>
            </Modal>
        </>
    );
}