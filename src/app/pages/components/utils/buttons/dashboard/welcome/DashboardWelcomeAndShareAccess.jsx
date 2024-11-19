"use client"

import { useStoreUser } from '@/app/hooks/useStore'
import { useEffect, useState } from 'react'
import SharedAccessModal from '../../../modals/shared-access-modal/SharedAccessModal'
import WelcomeAndShareAccessModal from '../../../modals/welcome-modal/WelcomeAndShareAccessModal'

export default function DashboardWelcomeAndShareAccess({ isMobileContent, setErrorMessage, setNotifications }) {

    const storeUser = useStoreUser()
    const { isFirstAccess, hasSyncDistributorData } = storeUser?.user || {}

    const [openModal, setOpenModal] = useState(false)

    const hasToOpenShareAccess = !isFirstAccess && !hasSyncDistributorData && openModal

    const handleCloseWelcomeModal = () => {
        storeUser.updateUser({ isFirstAccess: false })
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        if (hasSyncDistributorData === false) {
            setOpenModal(true)
        }
    }, [hasSyncDistributorData])

    return (
        <>
            {isFirstAccess &&
                (<WelcomeAndShareAccessModal
                    isMobileContent={isMobileContent}
                    isOpen={isFirstAccess}
                    closeModal={handleCloseWelcomeModal}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
                )}

            {hasToOpenShareAccess && (
                < SharedAccessModal
                    isMobileContent={isMobileContent}
                    isOpen={openModal}
                    closeModal={handleClose}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />)
            }
        </>
    )
}