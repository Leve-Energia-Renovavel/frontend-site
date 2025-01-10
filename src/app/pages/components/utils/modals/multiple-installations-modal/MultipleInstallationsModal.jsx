import { useStoreInstallations } from '@/app/hooks/stores/useStore'
import { Backdrop, Modal } from '@mui/material'
import InstallationCard from '../../cards/InstallationCard'
import { ModalBox, RegisteredInstallationsContainer } from './styles'
import InstallationCardOption from '../../cards/card-option/InstallationCardOption'

export default function MultipleInstallationsModal({ isOpen, closeModal, handleSelectInstallationToBeCancelled }) {

    const storeInstallations = useStoreInstallations()
    const installations = storeInstallations.installations

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
                <h1 className='title'>De qual unidade consumidora você está saindo?</h1>
                <RegisteredInstallationsContainer>
                    {installations?.map((installation, index) => {
                        return (
                            <InstallationCardOption key={installation?.uuid} installation={installation} index={index + 1} handleSelectInstallationToBeCancelled={handleSelectInstallationToBeCancelled}/>
                        )
                    })}
                </RegisteredInstallationsContainer>
            </ModalBox>
        </Modal>
    )
}