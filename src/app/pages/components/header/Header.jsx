"use client"

import { clearPartnerName } from '@/app/utils/helper/partners/partnerHelper';
import { headerHelper, landingPageHelper, partnersPath } from '@/app/utils/helper/pathHelper';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewHeader from '../new-header/NewHeader';
import NewLoggedModal from '../new-header/NewLoggedModal';
import NewLoginModal from '../new-login/NewLoginModal';

export default function Header() {

    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const mobileWidth = 900
    const isLandingPage = landingPageHelper[pathname]
    const isPartner = partnersPath[pathname]
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
                isLoggedUser={isLoggedUser}
                isOpen={openLogin}
                openModal={openLoginModal}
                isLandingPage={isLandingPage}
                isPartner={isPartner}
                partner={clearPartnerName(pathname)}
            />
            {openLogin && (
                isLoggedUser ? (
                    <NewLoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
                ) : (
                    <NewLoginModal
                        isOpen={openLogin}
                        hasForgottenPassword={false}
                        openModal={openLoginModal}
                        closeModal={closeLoginModal} />
                )
            )}
        </>
    );
}