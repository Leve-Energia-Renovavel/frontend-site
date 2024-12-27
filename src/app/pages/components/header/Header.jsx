"use client"

import { PATH_TO } from "@/app/pages/enums/globalEnums";
import { clearPartnerName, partners } from "@/app/utils/helper/partners/partnerHelper";
import { headerHelper, landingPageHelper, partnersPath } from '@/app/utils/helper/pathHelper';
import MenuIcon from '@mui/icons-material/Menu';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import logoLeve from '../../../../resources/icons/small/leve-logo-orange-icon-small.svg';
import { HeaderContainer, PartnerContainer, ProfileIcon } from './styles';

const LoginModal = dynamic(() => import('../utils/modals/header-modal/login-modal/LoginModal'), { ssr: false });
const LoggedModal = dynamic(() => import('../utils/modals/header-modal/logged-modal/LoggedModal'), { ssr: false });

export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const [openLogin, setOpenLogin] = useState(false);

    const isLandingPage = landingPageHelper[pathname]
    const partner = clearPartnerName(pathname)
    const isPartner = partnersPath[pathname]
    const isLoggedUser = headerHelper[pathname]

    const openLoginModal = () => {
        setOpenLogin(true);
    };

    const closeLoginModal = () => {
        setOpenLogin(false);
    };

    const handleRoutesWhenUserIsLogged = () => {
        if (isLoggedUser) {
            router.push(PATH_TO.DASHBOARD)
        } else {
            router.push(PATH_TO.HOME)
        }
    }

    return (
        <>
            <HeaderContainer
                isLandingPage={isLandingPage}
                isPartner={isPartner}
                isOpen={openLogin}
                className="leveHeaderContainer">
                <Image src={logoLeve} className='logoLeve' priority={true} alt={"Logo da Leve na cor laranja"}
                    onClick={() => handleRoutesWhenUserIsLogged()} />
                {isPartner && (
                    <PartnerContainer>
                        <p className="partnershipIcon">+</p>
                        {partners[partner]?.logo}
                    </PartnerContainer>)}
                {isLoggedUser ?
                    <MenuIcon className='profile' onClick={() => openLoginModal()} />
                    :
                    <ProfileIcon className='profile' onClick={() => setOpenLogin(true)} />
                }
            </HeaderContainer>

            {/* Header modals below*/}
            {openLogin && (
                isLoggedUser ? (
                    <LoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
                ) : (
                    <LoginModal
                        isOpen={openLogin}
                        hasForgottenPassword={false}
                        closeModal={closeLoginModal} />
                )
            )}
        </>
    );
}