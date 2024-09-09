"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react';
import HomeMain from '../pages/components/home/HomeMain';

const NewLoginModal = dynamic(() => import('../pages/components/new-login/NewLoginModal'), { ssr: false });

export const fetchCache = 'force-no-store';

export default function LoginPage() {

    const [openLogin, setOpenLogin] = useState(true);

    const openLoginModal = () => {
        setOpenLogin(true);
    };

    const closeLoginModal = () => {
        setOpenLogin(false);
    };
    return (
        <>
            <HomeMain />
            <NewLoginModal
                isOpen={openLogin}
                hasForgottenPassword={false}
                openModal={openLoginModal}
                closeModal={closeLoginModal} />
        </>
    );
}