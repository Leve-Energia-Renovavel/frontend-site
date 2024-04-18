"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { headerHelper, newHeaderHelper } from '@/app/utils/helper/pathHelper';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from "../../../../resources/img/logo-header.png";
import LoginModal from '../login/LoginModal';
import NewHeader from '../new-header/NewHeader';
import NewLoginModal from '../new-login/NewLoginModal';
import DefaultButton from '../utils/buttons/DefaultButton';
import MobileHeader from './MobileHeader';
import { ButtonContainer, HeaderContainer, LogoContainer, MenuBurguer, MenuItem, MobileHeaderContainer, Nav, NavContainer, Ul } from './styles';

const LoggedUserHeader = dynamic(() => import('./LoggedUserHeader'), { ssr: false });
const NewLoggedModal = dynamic(() => import('../new-header/NewLoggedModal'), { ssr: false });

export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const store = useStoreUser()
    const user = JSON.parse(window.localStorage.getItem('user')) || store.user

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const homeUrl = "https://leveenergia.com.br/"

    const mobileWidth = 900

    const isLoggedUser = headerHelper[pathname]
    const isNewHeader = newHeaderHelper[pathname]
    const loggedUser = user?.user?.name ? true : false

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

    const closeMobileMenu = () => {
        setMenuOpen(false)
    }

    const openLoginModal = () => {
        setOpenLogin(true);
    };

    const closeLoginModal = () => {
        setOpenLogin(false);
    };

    return (
        <>
            {!isMobile && typeof isLoggedUser === 'boolean' && (
                <HeaderContainer>
                    {!isLoggedUser &&
                        (
                            <>
                                <LogoContainer>
                                    <Image className='logoImage'
                                        loading="eager" priority={true}
                                        src={logo}
                                        alt="Leve Energia Logo"
                                        onClick={() => router.push(homeUrl)}
                                    />
                                </LogoContainer>
                                <NavContainer>
                                    <Nav>
                                        <Ul>
                                            <MenuItem>
                                                <Link href="https://leveenergia.com.br/">A Leve</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="https://leveenergia.com.br/#comofunciona">Como funciona</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="https://leveenergia.com.br/#beneficios">Benefícios</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="https://leveenergia.com.br/#serleve">Quem pode ser Leve</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="https://leveenergia.com.br/blog/">Blog</Link>
                                            </MenuItem>
                                        </Ul>
                                    </Nav>
                                </NavContainer>
                                <ButtonContainer>
                                    <DefaultButton variant="contained" text="Quero ser Leve" />
                                    <DefaultButton variant="outlined" text="Já sou Leve" onClick={() => setOpenLogin(true)} />
                                </ButtonContainer>
                            </>
                        )}
                    {isLoggedUser && <LoggedUserHeader />}
                </HeaderContainer>
            )}
            {isMobile && typeof isLoggedUser === 'boolean' && (
                <MobileHeaderContainer>
                    <LogoContainer>
                        <Image className='logoImage'
                            loading="eager" priority={true}
                            src={logo}
                            alt="Leve Energia Logo"
                            width={200}
                            height={60}
                            onClick={() => router.push(homeUrl)}
                        />
                    </LogoContainer>
                    <MenuBurguer onClick={() => setMenuOpen(!isMenuOpen)} />
                    {isMenuOpen && (
                        <MobileHeader isMenuOpen={isMenuOpen} closeMenu={closeMobileMenu} openModal={openLoginModal} closeModal={closeLoginModal} />
                    )}
                </MobileHeaderContainer>
            )}

            {typeof isLoggedUser !== 'boolean' && (
                <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} />
            )}

            {isMobile && typeof isLoggedUser !== 'boolean' && !loggedUser && (
                <NewHeader openModal={openLoginModal} closeModal={closeLoginModal} />
            )}

            {openLogin && typeof isLoggedUser === 'boolean' &&
                <LoginModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
            }

            {openLogin && typeof isLoggedUser !== 'boolean' && !loggedUser &&
                <NewLoginModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
            }
            {openLogin && typeof isLoggedUser !== 'boolean' && loggedUser &&
                <NewLoggedModal isOpen={openLogin} openModal={openLoginModal} closeModal={closeLoginModal} />
            }

        </>
    );
}