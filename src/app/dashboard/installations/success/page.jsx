"use client"

import NewDashboardMain from "@/app/pages/components/new-dashboard/NewDashboardMain";
import NewInstallationSuccessModal from "@/app/pages/components/utils/modals/installations-modal/success-modal/NewInstallationSuccessModal";
import { useState } from "react";

export default function Installations() {

    const [isOpen, setIsOpenModal] = useState(true)

    const installationsInitialPageIndex = 0

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <NewDashboardMain page={installationsInitialPageIndex} />
            {isOpen && <NewInstallationSuccessModal isOpen={isOpen} closeModal={closeModal} />}
        </>
    );
}