"use client"

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import HomeMain from '../home/HomeMain';
import Messages from '../messages/Messages';
import LoginModal from '../utils/modals/header-modal/login-modal/LoginModal';
import ConfirmNewPassword from './confirm-new-password/ConfirmNewPassword';

export default function NewRecoverPasswordMain() {

    const search = useSearchParams()

    const token = search.get("token")

    const [openLogin, setOpenLogin] = useState(true);
    const [confirmNewPassword, setConfirmNewPassword] = useState(true);

    const [errors, setErrorMessage] = useState([])
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
            <HomeMain />
            {token ?
                (<ConfirmNewPassword
                    token={token}
                    isOpen={confirmNewPassword}
                    openModal={openConfirmPasswordModal}
                    closeModal={closeConfirmPasswordModal}
                    setNotifications={setNotifications}
                    setValidationErrors={setErrorMessage} />)
                :
                (<LoginModal
                    isOpen={openLogin}
                    hasForgottenPassword={true}
                    openModal={openLoginModal}
                    closeModal={closeLoginModal} />)}

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />

        </>
    );
}
