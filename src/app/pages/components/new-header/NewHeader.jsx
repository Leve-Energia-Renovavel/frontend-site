import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import perfilLeve from "../../../../resources/icons/small/leve-profile-icon-small.svg"
import { MobileNewHeaderContainer } from './styles'

export default function NewHeader({ isOpen, openModal, closeModal }) {
    return (
        <MobileNewHeaderContainer>
            <Image src={logoLeve} className='logoLeve' alt={"Logo da Leve na cor laranja"} loading="eager" priority={true} />
            <Image src={perfilLeve} className='profile' alt={"Perfil Leve"} onClick={openModal} loading="eager" priority={true} />
        </MobileNewHeaderContainer>
    )
}