"use client"

import HomeMain from '../pages/components/home/HomeMain';
import LoginModal from '../pages/components/utils/modals/header-modal/login-modal/LoginModal';

export default function LoginPage() {

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