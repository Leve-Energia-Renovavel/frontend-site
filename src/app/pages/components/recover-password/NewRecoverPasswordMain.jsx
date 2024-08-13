"use client"

import { Snackbar } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import LoginBanner from '../banners/login-banner/LoginBanner';
import HomeMain from '../home/HomeMain';
import NewLoginModal from '../new-login/NewLoginModal';
import ConfirmNewPassword from './confirm-new-password/ConfirmNewPassword';
import { SnackbarMessageAlert, SnackbarMessageNotification } from './styles';

export default function NewRecoverPasswordMain() {

    const search = useSearchParams()

    const token = search.get("token")

    const [openLogin, setOpenLogin] = useState(true);
    const [confirmNewPassword, setConfirmNewPassword] = useState(true);

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const openLoginModal = () => {
        setOpenLogin(true);
    };

    const closeLoginModal = () => {
        setOpenLogin(false);
    };

    const openConfirmPasswordModal = () => {
        setConfirmNewPassword(true);
    };

    const closeConfirmPasswordModal = () => {
        setConfirmNewPassword(false);
    };


    return (
        <>
            <LoginBanner />
            <HomeMain />
            {token ?
                (<ConfirmNewPassword
                    token={token}
                    isOpen={confirmNewPassword}
                    openModal={openConfirmPasswordModal}
                    closeModal={closeConfirmPasswordModal}
                    setNotifications={setNotifications}
                    setValidationErrors={setValidationErrors} />)
                :
                (<NewLoginModal
                    isOpen={openLogin}
                    hasForgottenPassword={true}
                    openModal={openLoginModal}
                    closeModal={closeLoginModal}

                    setNotifications={setNotifications}
                    setValidationErrors={setValidationErrors}
                />)}

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
