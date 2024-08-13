"use client"

import { useState } from 'react';
import LoginBanner from '../pages/components/banners/login-banner/LoginBanner';
import HomeMain from '../pages/components/home/HomeMain';
import NewLoginModal from '../pages/components/new-login/NewLoginModal';
import { Snackbar } from '@mui/material';
import { SnackbarMessageAlert, SnackbarMessageNotification } from '../pages/components/login/styles';

export default function LoginPage() {

    const [openLogin, setOpenLogin] = useState(true);

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

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
                closeModal={closeLoginModal}
                setNotifications={setNotifications}
                setValidationErrors={setValidationErrors}
            />
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