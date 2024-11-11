"use client"

import { useStoreUser } from "@/app/hooks/useStore"
import { useState } from "react"
import SharedAccessModal from "../../../modals/shared-access-modal/SharedAccessModal"
import { ArrowRightIcon, LockIcon, SharedAccessButtonContainer } from "./styles"

export default function DashboardSharedAccessButton({ setErrorMessage, setNotifications }) {

    const [openModal, setOpenModal] = useState(false)

    const storeUser = useStoreUser()

    const { distributor } = storeUser?.user || {}

    const handleOpenModal = () => {
        setOpenModal(current => !current)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            {distributor ?
                (<>
                    <SharedAccessButtonContainer onClick={handleOpenModal} className="sharedAccessButtonContainer">
                        <LockIcon className="lockIcon" />
                        <p className="sharedAccessButtonText">Informe os dados de acesso ao portal da sua distribuidora e garanta sua economia mensal</p>
                        <ArrowRightIcon className="arrowRightIcon" />
                    </SharedAccessButtonContainer>
                    <SharedAccessModal
                        isOpen={openModal}
                        closeModal={handleCloseModal}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </>) : <></>}
        </>
    )
}