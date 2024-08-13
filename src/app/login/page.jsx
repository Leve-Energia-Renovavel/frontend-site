"use client"

import { useState } from 'react';
import LoginBanner from '../pages/components/banners/login-banner/LoginBanner';
import HomeMain from '../pages/components/home/HomeMain';
import NewLoginModal from '../pages/components/new-login/NewLoginModal';

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
            <LoginBanner />
            <HomeMain />
            <NewLoginModal
                isOpen={openLogin}
                hasForgottenPassword={false}
                openModal={openLoginModal}
                closeModal={closeLoginModal} />
        </>
    );
}