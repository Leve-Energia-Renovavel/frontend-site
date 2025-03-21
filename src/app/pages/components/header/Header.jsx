"use client"

import { PATH_TO } from "@/app/pages/enums/globalEnums";
import { clearPartnerName, partners } from "@/app/utils/helper/partners/partnerHelper";
import { headerHelper, landingPageHelper, partnersPath } from '@/app/utils/helper/pathHelper';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import logoLeve from '../../../../resources/icons/small/leve-logo-orange-icon-small.svg';
import LoggedModal from "../utils/modals/header-modal/logged-modal/LoggedModal";
import LoginModal from "../utils/modals/header-modal/login-modal/LoginModal";
import { HeaderContainer, PartnerContainer, ProfileIcon } from './styles';

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
    }

    const closeLoginModal = () => {
        setOpenLogin(false);
    }

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
                {/* {isPartner && (
                    <PartnerContainer>
                        <p className="partnershipIcon">+</p>
                        {partners[partner]?.logo}
                    </PartnerContainer>)} */}

                {/* {isLoggedUser ?
                    <MenuIcon className='profile' onClick={() => openLoginModal()} />
                    :
                    <ProfileIcon className='profile' onClick={() => setOpenLogin(true)} />
                } */}
            </HeaderContainer>

            {openLogin && (
                isLoggedUser ? (
                    <LoggedModal
                        isOpen={openLogin}
                        closeModal={closeLoginModal} />
                ) : (
                    <LoginModal
                        isOpen={openLogin}
                        closeModal={closeLoginModal}
                        hasForgottenPassword={false} />
                )
            )}
        </>
    );
}