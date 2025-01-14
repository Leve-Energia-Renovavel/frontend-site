"use client"

import DashboardMain from '@/app/pages/components/dashboard/DashboardMain'
import NewInstallationContractSignatureModal from '@/app/pages/components/utils/modals/installations-modal/contract-signature-modal/NewInstallationContractSignatureModal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function NewInstallationContractSignaturePage() {

    const router = useRouter()
    const search = useSearchParams()

    const uuid = search.get("uuid")

    const [isOpen, setIsOpenModal] = useState(true)

    const installationsInitialPageIndex = 0

    // if (!uuid || uuid == "undefined") {
    //     router.push("/dashboard")
    // }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <DashboardMain page={installationsInitialPageIndex} />
            {isOpen && <NewInstallationContractSignatureModal uuid={uuid} isOpen={isOpen} closeModal={closeModal} />}
        </>
    )
}