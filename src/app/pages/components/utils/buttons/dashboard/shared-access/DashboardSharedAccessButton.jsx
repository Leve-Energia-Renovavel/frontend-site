/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from "@/app/hooks/useStore"
import { useEffect, useState } from "react"
import SharedAccessModal from "../../../modals/shared-access-modal/SharedAccessModal"
import { ArrowRightIcon, LockIcon, SharedAccessButtonContainer } from "./styles"

export default function DashboardSharedAccessButton({ isMobileContent, setErrorMessage, setNotifications }) {

    const storeUser = useStoreUser()
    const { distributor, hasSyncDistributorData } = storeUser?.user || {}

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        if (hasSyncDistributorData === false && isMobileContent) {
            handleOpenModal()
        }
    }, [hasSyncDistributorData])

    return (
        <>
            {distributor &&
                (<>
                    <SharedAccessButtonContainer
                        className={`sharedAccessButtonContainer${isMobileContent && "Mobile"}`}
                        isMobileContent={isMobileContent}
                        onClick={handleOpenModal} >
                        <LockIcon className="lockIcon" />
                        <p className="sharedAccessButtonText">Informe os dados de acesso ao portal da sua distribuidora e garanta sua economia mensal</p>
                        <ArrowRightIcon className="arrowRightIcon" />
                    </SharedAccessButtonContainer>

                    <SharedAccessModal
                        isMobileContent={isMobileContent}
                        isOpen={openModal}
                        openModal={handleOpenModal}
                        closeModal={handleCloseModal}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications} />
                </>)}
        </>
    )
}