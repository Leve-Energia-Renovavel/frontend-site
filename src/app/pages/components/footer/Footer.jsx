import React from 'react';
import logo from "../../../../resources/img/logo-header.png"
import Image from 'next/image'

export default function Footer() {
    return (
        <div>
            <h2>Footer</h2>
            <Image
                src={logo}
                alt="Leve Energia Logo"
            />

        </div>
    );
}