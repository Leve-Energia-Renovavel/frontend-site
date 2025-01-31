"use client"

import { notFound } from 'next/navigation';
import HomeMain from '../pages/components/home/HomeMain';
import LoginModal from '../pages/components/utils/modals/header-modal/login-modal/LoginModal';

export default function LoginPage() {

    notFound() //remove to bring back the partners pages

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