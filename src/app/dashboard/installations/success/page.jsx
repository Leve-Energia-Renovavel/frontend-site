"use client"

import NewDashboardMain from "@/app/pages/components/dashboard/DashboardMain";
import NewInstallationSuccessModal from "@/app/pages/components/utils/modals/installations-modal/success-modal/NewInstallationSuccessModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Installations() {

    const router = useRouter()

    const [isOpen, setIsOpenModal] = useState(true)

    const installationsInitialPageIndex = 0

    const closeModal = () => {
        router.push(`/dashboard`)
    }

    return (
        <>
            <NewDashboardMain page={installationsInitialPageIndex} />
            {isOpen && <NewInstallationSuccessModal isOpen={isOpen} closeModal={closeModal} />}
        </>
    );
}