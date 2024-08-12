"use client"

import { useState } from 'react';
import LoginBanner from '../banners/login-banner/LoginBanner';
import HomeMain from '../home/HomeMain';
import NewLoginModal from '../new-login/NewLoginModal';

export default function NewRecoverPasswordMain() {

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
            <NewLoginModal isOpen={openLogin} hasForgottenPassword={true} openModal={openLoginModal} closeModal={closeLoginModal} />
        </>
    );
}
