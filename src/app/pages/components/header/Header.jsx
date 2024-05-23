"use client"

import { headerHelper, landingPageHelper } from '@/app/utils/helper/pathHelper';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewHeader from '../new-header/NewHeader';

const NewLoginModal = dynamic(() => import('../new-login/NewLoginModal'), { ssr: false });
const NewLoggedModal = dynamic(() => import('../new-header/NewLoggedModal'), { ssr: false });

export default function Header() {

    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const mobileWidth = 900
    const isLandingPage = landingPageHelper[pathname]
    const isPartner = pathname == "/lp/tribanco/"
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

    return (
        <>
            <NewHeader
                isOpen={openLogin}
                openModal={openLoginModal}
                isLandingPage={isLandingPage}
                isPartner={isPartner}
            />
            {openLogin && (
                isLoggedUser ? (
                    <NewLoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
                ) : (
                    <NewLoginModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
                )
            )}
        </>
    );
}