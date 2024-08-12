"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ChurnModal from '../../utils/modals/churn-modal/ChurnModal'
import NewSuccessModal from '../../utils/modals/success-modal/NewSuccessModal'
import { FinalOptionsButton, FinalOptionsContainer } from './styles'

export default function FinalOptions() {

    const router = useRouter()

    const [avoidChurnModal, setAvoidChurnModal] = useState(false)
    const [churnConfirmationModal, setChurnConfirmationModal] = useState(false)

    const handleOpenChurnModal = () => {
        setAvoidChurnModal(true)
    }
    const handleCloseChurnModal = () => {
        setAvoidChurnModal(false)
    }

    const handleOpenChurnConfirmationModal = () => {
        setChurnConfirmationModal(true)
    }
    const handleCloseChurnConfirmationModal = () => {
        setChurnConfirmationModal(false)
    }

    return (
        <FinalOptionsContainer className='profileFormFinalOptionsContainer'>

            <FinalOptionsButton onClick={() => router.push(`/dashboard/installations/`)}>
                <span>Quero entender melhor minha economia</span>
            </FinalOptionsButton>
            <FinalOptionsButton onClick={() => handleOpenChurnModal()}>
                <span>Quero parar de economizar com a Leve</span>
            </FinalOptionsButton>

            <ChurnModal isOpen={avoidChurnModal} closeModal={handleCloseChurnModal} confirmChurn={handleOpenChurnConfirmationModal} />

            <NewSuccessModal
                title={`Solicitação de cancelamento enviada com sucesso!`}
                description={`Esperamos que volte em breve e continue economizando`}
                buttonTitle={`Sair`}
                isOpen={churnConfirmationModal}
                closeModal={handleCloseChurnConfirmationModal} />
        </FinalOptionsContainer>
    )
}