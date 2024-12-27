"use client"

import { useRouter } from 'next/navigation';
import HomeMain from '../pages/components/home/HomeMain';
import LoginModal from '../pages/components/utils/modals/header-modal/login-modal/LoginModal';
import { PATH_TO } from '../pages/enums/globalEnums';
import { removeBackdropOverflow, resetBackdropOverflow } from '../pages/globalStyles';
import { useEffect } from 'react';

export const fetchCache = 'force-no-store';

export default function LoginPage() {

    const router = useRouter()

    const closeModal = () => {
        router.push(PATH_TO.HOME)
    };

    removeBackdropOverflow();

    return (
        <>
            <HomeMain />
            <LoginModal
                isOpen={true}
                hasForgottenPassword={false}
                closeModal={closeModal} />
        </>
    );
}