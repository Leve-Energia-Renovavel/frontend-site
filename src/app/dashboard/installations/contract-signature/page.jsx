"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain'
import NewInstallationContractSignatureModal from '@/app/pages/components/utils/modals/installations-modal/new-installation-contract-signature/NewInstallationContractSignatureModal'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function NewInstallationContractSignaturePage() {

    const [isOpen, setIsOpenModal] = useState(true)

    const search = useSearchParams()
    const uuid = search.get("uuid")

    const installationsInitialPageIndex = 0

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <NewDashboardMain page={installationsInitialPageIndex} />
            {isOpen && <NewInstallationContractSignatureModal uuid={uuid} isOpen={isOpen} closeModal={closeModal} />}
        </>
    )
}