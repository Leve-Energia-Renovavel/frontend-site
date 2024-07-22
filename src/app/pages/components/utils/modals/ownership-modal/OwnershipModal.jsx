"use client"

import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Backdrop, Modal } from '@mui/material';
import { ModalBox, ModalContent, ModalHeader, ModalOption, ModalTitleIcon } from './styles';

export default function OwnershipModal({ isOpen, closeModal, handleChangeOwnership }) {

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
                <ModalHeader>
                    <h6 className='title'>Qual o motivo da troca de titularidade?</h6>
                </ModalHeader>
                <ModalContent>

                    <ModalOption onClick={() => handleChangeOwnership()}>
                        <ModalTitleIcon >
                            <PersonOutlineOutlinedIcon className='personIcon' />
                            <AutorenewOutlinedIcon className='renewIcon' />
                        </ModalTitleIcon>
                        <p className='optionTitle'>Estou mudando de endereço</p>
                        <p className='optionDescription'>Estou me <span className='underlined'>mudando para um novo endereço</span> e desejo <span className='bold'>cancelar o endereço antigo</span> da minha conta Leve.</p>
                    </ModalOption>

                    <ModalOption onClick={() => handleChangeOwnership()}>
                        <ModalTitleIcon >
                            <InventoryIcon className='installationIcon' />
                            <AutorenewOutlinedIcon className='renewIcon' />
                        </ModalTitleIcon>
                        <p className='optionTitle'>Outra pessoa será titular desse endereço</p>
                        <p className='optionDescription'><span className='highlighted'>Outra pessoa</span> será responsável por esse endereço e desejo realizar a troca da titularidade.</p>
                    </ModalOption>

                </ModalContent>
            </ModalBox>
        </Modal>
    )
}