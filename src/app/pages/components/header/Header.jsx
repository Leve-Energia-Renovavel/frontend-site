"use client"

import { PATH_TO } from "@/app/pages/enums/globalEnums";
import { clearPartnerName, partners } from "@/app/utils/helper/partners/partnerHelper";
import { headerHelper, landingPageHelper, partnersPath } from '@/app/utils/helper/pathHelper';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import logoLeve from '../../../../resources/icons/small/leve-logo-orange-icon-small.svg';
import LoggedModal from '../utils/modals/header-modal/logged-modal/LoggedModal';
import LoginModal from '../utils/modals/header-modal/login-modal/LoginModal';
import { MobileHeaderContainer, PartnerContainer } from './styles';

export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const [openLogin, setOpenLogin] = useState(false);

    const loginPath = pathname === PATH_TO.LOGIN

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

    const goToLogin = () => {
        router.push(PATH_TO.LOGIN)
    }

    return (
        <>
            <MobileHeaderContainer
                isLandingPage={isLandingPage}
                isPartner={isPartner}
                isOpen={openLogin || loginPath}
                className="leveHeader">
                <Image src={logoLeve}
                    onClick={() => handleRoutesWhenUserIsLogged()}
                    className='logoLeve'
                    alt={"Logo da Leve na cor laranja"}
                    priority={true} />
                {isPartner && (
                    <PartnerContainer>
                        <p className="partnershipIcon">+</p>
                        {partners[partner]?.logo}
                    </PartnerContainer>)}
                {isLoggedUser ?
                    <MenuIcon className='profile' onClick={openLoginModal} />
                    :
                    <PersonOutlineOutlinedIcon className='profile' onClick={goToLogin} />
                }
            </MobileHeaderContainer>
            {openLogin && (
                isLoggedUser ? (
                    <LoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
                ) : (
                    <LoginModal
                        isOpen={openLogin}
                        hasForgottenPassword={false}
                        openModal={openLoginModal}
                        closeModal={closeLoginModal} />
                )
            )}
        </>
    );
}