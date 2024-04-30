"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { headerHelper } from '@/app/utils/helper/pathHelper';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import NewHeader from '../new-header/NewHeader';
import NewLoginModal from '../new-login/NewLoginModal';

const NewLoggedModal = dynamic(() => import('../new-header/NewLoggedModal'), { ssr: false });

export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const store = useStoreUser()
    const user = JSON.parse(window.localStorage.getItem('user')) || store.user

    const [isMobile, setIsMobile] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const mobileWidth = 900

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
            {!isLoggedUser && (
                <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} />
            )}
            {!openLogin && isLoggedUser && (
                <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} />
            )}

            {isMobile && !isLoggedUser && (
                <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} />
            )}

            {openLogin && !isLoggedUser &&
                <NewLoginModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
            }
            {openLogin && isLoggedUser &&
                <NewLoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
            }

        </>
    );
}