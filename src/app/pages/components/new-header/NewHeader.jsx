import React from 'react'
import { MobileNewHeaderContainer } from './styles'
import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import perfilLeve from "../../../../resources/icons/small/leve-perfil-icone-small.svg"

export default function NewHeader({ isOpen, openModal, closeModal }) {
    return (
        <MobileNewHeaderContainer>
            <Image src={logoLeve} className='logoLeve' alt={"Logo da Leve na cor laranja"} />
            <Image src={perfilLeve} className='profile' alt={"Perfil Leve"} onClick={openModal} />
        </MobileNewHeaderContainer>
    )
}