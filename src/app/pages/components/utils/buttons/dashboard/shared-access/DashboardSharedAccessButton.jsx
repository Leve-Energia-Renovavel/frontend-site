"use client"

import { useStoreUser } from "@/app/hooks/stores/useStore"
import { useState } from "react"
import SharedAccessModal from "../../../modals/shared-access-modal/SharedAccessModal"
import { ArrowRightIcon, LockIcon, SharedAccessButtonContainer, SharedAccessButtonContent, SharedAccessButtonTitle } from "./styles"

export default function DashboardSharedAccessButton({ isMobileContent, setErrorMessage, setNotifications }) {

    const storeUser = useStoreUser()
    const { distributor, hasSyncDistributorData } = storeUser?.user || {}

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        storeUser.updateUser({ hasOpenedSharedAccessModal: true })
        setOpenModal(false)
    }

    return (
        <>
            {distributor &&
                (<>
                    <SharedAccessButtonContainer
                        className={`sharedAccessButtonContainer${isMobileContent ? "Mobile" : ""}`}
                        isMobileContent={isMobileContent}
                        hasSyncDistributorData={hasSyncDistributorData}
                        onClick={handleOpenModal} >
                        <SharedAccessButtonTitle
                            className={`sharedAccessButtonTitle${isMobileContent ? "Mobile" : ""}`}
                            hasSyncDistributorData={hasSyncDistributorData}>
                            <LockIcon className="lockIcon" />
                            <p className="sharedAccessButtonTitle">Acesso à Distribuidora</p>
                            <ArrowRightIcon className="arrowRightIcon" />
                        </SharedAccessButtonTitle>

                        <SharedAccessButtonContent
                            className={`sharedAccessButtonContent${isMobileContent ? "Mobile" : ""}`}
                            hasSyncDistributorData={hasSyncDistributorData}>
                            <p className="sharedAccessButtonText">Informe os dados de acesso ao portal da sua distribuidora e garanta sua economia mensal</p>
                        </SharedAccessButtonContent>

                    </SharedAccessButtonContainer>

                    <SharedAccessModal
                        isMobileContent={isMobileContent}
                        isOpen={openModal}
                        openModal={handleOpenModal}
                        closeModal={() => handleCloseModal()}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </>)}
        </>
    )
}