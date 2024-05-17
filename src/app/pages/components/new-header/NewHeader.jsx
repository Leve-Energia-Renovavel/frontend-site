import Image from "next/image"
import { useRouter } from "next/navigation"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import selectedMenuIcon from "../../../../resources/icons/small/leve-profile-orange-icon-small-compressed.svg"
import menuIcon from "../../../../resources/icons/small/leve-profile-yellow-icon-small-compressed.svg"
import { MobileNewHeaderContainer } from './styles'

export default function NewHeader({ isOpen, openModal, closeModal, isLandingPage }) {

    const router = useRouter()

    return (
        <MobileNewHeaderContainer isLandingPage={isLandingPage}>
            <Image src={logoLeve} onClick={() => router.push(`/`)} className='logoLeve' alt={"Logo da Leve na cor laranja"} priority={true} />
            <Image src={isOpen ? selectedMenuIcon : menuIcon} className='profile' alt={"Perfil Leve"} onClick={openModal} />
        </MobileNewHeaderContainer>
    )
}