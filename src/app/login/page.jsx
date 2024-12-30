"use client"

import HomeMain from '../pages/components/home/HomeMain';
import LoginModal from '../pages/components/utils/modals/header-modal/login-modal/LoginModal';
import { removeBackdropOverflow } from '../pages/globalStyles';

export default function LoginPage() {

    removeBackdropOverflow();

    return (
        <>
            <HomeMain />
            <LoginModal
                isOpen={true}
                hasForgottenPassword={false}
                isLoginPage={true} />
        </>
    );
}