"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain'
import NewInstallationContractSignatureModal from '@/app/pages/components/utils/modals/installations-modal/contract-signature-modal/NewInstallationContractSignatureModal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function NewInstallationContractSignaturePage() {

    const router = useRouter()
    const search = useSearchParams()

    const [isOpen, setIsOpenModal] = useState(true)

    const uuid = search.get("uuid")

    if (!uuid || uuid == "undefined") {
        router.push("/dashboard")
    }

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