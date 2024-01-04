"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { StyledHeader, Nav, Ul, MenuItem } from './styles';
import logo from "../../../../resources/img/logo-header.png"

export default function Header() {
    return (
        <StyledHeader>
            <Image
                src={logo}
                alt="Leve Energia Logo"
            />
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

        </StyledHeader>
    );
}