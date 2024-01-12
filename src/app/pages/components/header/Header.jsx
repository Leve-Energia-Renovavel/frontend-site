"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer, Nav, Ul, MenuItem, ButtonContainer, LogoContainer, NavContainer, HeaderHeightComponent } from './styles';
import logo from "../../../../resources/img/logo-header.png"
import DefaultButton from '../utils/buttons/DefaultButton';
import { useRouter } from 'next/navigation';

export default function Header() {

    const router = useRouter()

    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <Image className='logoImage'
                        src={logo}
                        alt="Leve Energia Logo"
                        width={200}
                        height={60}
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
            </HeaderContainer>
        </>

    );
}