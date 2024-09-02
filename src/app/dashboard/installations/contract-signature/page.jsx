"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain'
import NewInstallationContractSignatureModal from '@/app/pages/components/utils/modals/installations-modal/contract-signature-modal/NewInstallationContractSignatureModal'
import Cookies from 'js-cookie'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function NewInstallationContractSignaturePage() {

    const router = useRouter()
    const search = useSearchParams()

    const uuid = search.get("uuid")
    const token = Cookies.get("accessToken")

    const [isOpen, setIsOpenModal] = useState(true)

    const installationsInitialPageIndex = 0

    if (!token) {
        router.push("/")
    }

    if (!uuid || uuid == "undefined") {
        router.push("/dashboard")
    }


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