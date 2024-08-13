"use client"

import { clearPartnerName } from '@/app/utils/helper/partnerHelper';
import { headerHelper, landingPageHelper, partnersPath } from '@/app/utils/helper/pathHelper';
import { Snackbar } from '@mui/material';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SnackbarMessageAlert, SnackbarMessageNotification } from '../login/styles';
import NewHeader from '../new-header/NewHeader';

const NewLoginModal = dynamic(() => import('../new-login/NewLoginModal'), { ssr: false });
const NewLoggedModal = dynamic(() => import('../new-header/NewLoggedModal'), { ssr: false });

export default function Header() {

    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

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
                        openModal={openLoginModal}
                        closeModal={closeLoginModal}
                        setNotifications={setNotifications}
                        setValidationErrors={setValidationErrors} />
                )
            )}
            {validationErrors.map((error, index) => {
                return (
                    <Snackbar
                        key={index}
                        open={validationErrors.length >= 1}
                        autoHideDuration={3000}
                        message={error}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => setValidationErrors([])}>
                        <SnackbarMessageAlert
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => setValidationErrors([])}
                        >
                            {error}
                        </SnackbarMessageAlert>
                    </Snackbar>
                )
            })}

            {notifications.map((notification, index) => {
                return (
                    <Snackbar
                        key={index}
                        open={notifications.length >= 1}
                        autoHideDuration={6000}
                        message={notification}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => setNotifications([])}>
                        <SnackbarMessageNotification
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => setNotifications([])}
                        >
                            {notification}
                        </SnackbarMessageNotification>
                    </Snackbar>
                )
            })}
        </>
    );
}