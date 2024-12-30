"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore'
import { isTrue } from '@/app/utils/helper/generalHelper'
import { useEffect, useState } from 'react'
import SharedAccessModal from '../../../modals/shared-access-modal/SharedAccessModal'
import WelcomeAndShareAccessModal from '../../../modals/welcome-modal/WelcomeAndShareAccessModal'

export default function DashboardWelcomeAndShareAccess({ isMobileContent }) {

    const storeUser = useStoreUser()

    const { isFirstAccess, name, distributorStatus, hasSyncDistributorData, hasOpenedSharedAccessModal } = storeUser?.user || {}

    const [openModal, setOpenModal] = useState(false)

    const hasToOpenShareAccess = !isFirstAccess && !hasSyncDistributorData && !hasOpenedSharedAccessModal && openModal && isTrue(distributorStatus)

    const handleCloseWelcomeModal = () => {
        storeUser.updateUser({ isFirstAccess: false })
    }

    const handleClose = () => {
        storeUser.updateUser({ hasOpenedSharedAccessModal: true })
        setOpenModal(false)
    }

    useEffect(() => {
        if (hasSyncDistributorData === false && hasOpenedSharedAccessModal === false) {
            setOpenModal(true)
        }
    }, [hasSyncDistributorData, hasOpenedSharedAccessModal])

    console.log("storeUser ===>>", storeUser)

    return (
        <>
            {isFirstAccess &&
                (<WelcomeAndShareAccessModal
                    isMobileContent={isMobileContent}
                    isOpen={isFirstAccess}
                    customerName={name}
                    distributorStatus={distributorStatus}
                    closeModal={handleCloseWelcomeModal} />
                )}

            {hasToOpenShareAccess && (
                < SharedAccessModal
                    isMobileContent={isMobileContent}
                    isOpen={openModal}
                    closeModal={handleClose} />)
            }
        </>
    )
}