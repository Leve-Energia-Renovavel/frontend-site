
import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import Image from "next/image";
import boletoCemig from "../../../resources/img/exemplo_numero_instalacao_cemig.png";
import boletoCpfl from "../../../resources/img/exemplo_numero_instalacao_cpfl.png";
import { Modal, Box, Typography } from "@mui/material";
import { background } from "@/app/pages/styles";

export default function RegisterModal(props) {

    const { distribuitor, isModalOpen, closeModal } = props;
    const distribuitorImage = distribuitor == "cemig" ? boletoCemig : boletoCpfl

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: `${background.light}`,
                    border: `1px solid ${background.lightBorder}`,
                    borderRadius: 5,
                    boxShadow: 12,
                    p: 5,
                }}>
                    <Typography variant="h5" id={"modal-modal-title"} sx={{ color: background.primary, fontWeight: `bold`, }}>Saiba onde encontrar o Número de Instalação 😉</Typography>
                    <Typography id="modal-modal-description" sx={{ margin: '2rem 0 1rem 0' }}>Para a {distribuitor.toUpperCase()}, normalmente ele fica no canto superior direito do boleto: </Typography>
                    <Image src={distribuitorImage} alt='exemplo numero instalacao' width={`auto`} height={300} loading="eager" priority={true} />
                    <DefaultButton variant="outlined" text={"Entendi"} onClick={closeModal} />
                </Box>
            </Modal>
        </>
    );
}