import React from 'react'
import { MobileNewHeaderContainer } from './styles'
import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import perfilLeve from "../../../../resources/icons/small/leve-perfil-icone-small.svg"

export default function NewHeader({ isOpen, openModal, closeModal }) {
    return (
        <MobileNewHeaderContainer>
            <Image src={logoLeve} width={144} height={24} alt={"Logo da Leve na cor laranja"} />
            <Image src={perfilLeve} width={30} height={30} alt={"Perfil Leve"} onClick={openModal} />
        </MobileNewHeaderContainer>
    )
}