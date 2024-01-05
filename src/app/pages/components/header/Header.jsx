"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer, Nav, Ul, MenuItem, ButtonContainer, LogoContainer, NavContainer } from './styles';
import logo from "../../../../resources/img/logo-header.png"
import DefaultButton from '../buttons/DefaultButton';

export default function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Image className='logoImage'
                    src={logo}
                    alt="Leve Energia Logo"
                    width={200}
                    height={60}
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
                            <Link href="/blog/hello-world">Benefícios</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/blog/hello-world">Quem pode ser Leve</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/blog/hello-world">Blog</Link>
                        </MenuItem>
                    </Ul>
                </Nav>
            </NavContainer>
            <ButtonContainer>
                <DefaultButton variant="contained" text="Quero ser Leve" />
                <DefaultButton variant="outlined" text="Já sou Leve" />
            </ButtonContainer>
        </HeaderContainer>
    );
}