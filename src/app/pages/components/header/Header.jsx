"use client"

import { headerHelper, landingPageHelper } from '@/app/utils/helper/pathHelper';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import NewHeader from '../new-header/NewHeader';
import NewLoginModal from '../new-login/NewLoginModal';

const NewLoggedModal = dynamic(() => import('../new-header/NewLoggedModal'), { ssr: false });

export default function Header() {

    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const mobileWidth = 900
    const isLandingPage = landingPageHelper[pathname]
    const isLoggedUser = headerHelper[pathname]

    useEffect(() => {
        const handleResize = () => {
            const windowSize = window.innerWidth <= mobileWidth;
            if (windowSize !== isMobile) setIsMobile(windowSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const openLoginModal = () => {
        setOpenLogin(true);
    };

    const closeLoginModal = () => {
        setOpenLogin(false);
    };

    const handleHeaders = () => {
        return <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} isLandingPage={isLandingPage} />;
    }
    const handleModals = () => {
        if (openLogin && !isLoggedUser) {
            return <NewLoginModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />;
        } else if (openLogin && isLoggedUser) {
            return <NewLoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />;
        }
    }

    return (
        <>
            {handleHeaders()}
            {handleModals()}
        </>
    );
}