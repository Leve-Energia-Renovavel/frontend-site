"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from "../../../../resources/img/logo-header.png";
import DefaultButton from '../utils/buttons/DefaultButton';
import MobileHeader from './MobileHeader';
import { ButtonContainer, HeaderContainer, LogoContainer, MenuBurguer, MenuItem, MobileHeaderContainer, Nav, NavContainer, Ul } from './styles';
import { usePathname } from 'next/navigation';
import LoggedUserHeader from './LoggedUserHeader';


export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isLoggedUser = pathname == '/dashboard' ? true : false;

    const mobileWidth = 900

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

    return (
        <>
            {!isMobile ? (
                <HeaderContainer>
                    {!isLoggedUser ?
                        (
                            <>
                                <LogoContainer>
                                    <Image className='logoImage'
                                        src={logo}
                                        alt="Leve Energia Logo"
                                        onClick={() => router.push("/")}
                                    />
                                </LogoContainer>
                                <NavContainer>
                                    <Nav>
                                        <Ul>
                                            <MenuItem>
                                                <Link href="/">A Leve</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="/about">Como funciona</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="/beneficios">Benefícios</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="/quem-pode-ser-Leve">Quem pode ser Leve</Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link href="/blog">Blog</Link>
                                            </MenuItem>
                                        </Ul>
                                    </Nav>
                                </NavContainer>
                                <ButtonContainer>
                                    <DefaultButton variant="contained" text="Quero ser Leve" />
                                    <DefaultButton variant="outlined" text="Já sou Leve" />
                                </ButtonContainer>
                            </>
                        ) : (

                            <LoggedUserHeader />
                        )}

                </HeaderContainer>

            ) : (
                <MobileHeaderContainer>
                    <LogoContainer>
                        <Image className='logoImage'
                            src={logo}
                            alt="Leve Energia Logo"
                            width={200}
                            height={60}
                            onClick={() => router.push("/")}
                        />
                    </LogoContainer>
                    <MenuBurguer onClick={() => setMenuOpen(!isMenuOpen)} />
                    {isMenuOpen && (
                        <MobileHeader isMenuOpen={isMenuOpen} closeMenu={closeMobileMenu} />
                    )}
                </MobileHeaderContainer>
            )}

        </>
    );
}