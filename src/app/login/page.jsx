"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Banners from '../pages/components/banners/Banners';
import LoginBanner from '../pages/components/banners/login-banner/LoginBanner';
import LoginModal from '../pages/components/login/LoginModal';
import HomeMain from '../pages/components/home/HomeMain';
import NewLoginModal from '../pages/components/new-login/NewLoginModal';
const LoginMain = dynamic(() => import('../pages/components/login/LoginMain'), { ssr: false });

export default function Profile() {

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
            <NewLoginModal isOpen={true} openModal={openLoginModal} closeModal={closeLoginModal} />
        </>
    );
}