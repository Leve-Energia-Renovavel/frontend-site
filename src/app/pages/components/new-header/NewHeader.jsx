import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import menuIcon from "../../../../resources/icons/small/leve-profile-yellow-icon-small-compressed.svg"
import selectedMenuIcon from "../../../../resources/icons/small/leve-profile-orange-icon-small-compressed.svg"
import { MobileNewHeaderContainer } from './styles'
import { useRouter } from "next/navigation"

export default function NewHeader({ isOpen, openModal, closeModal, isLandingPage }) {

    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/`)
    }

    return (
        <MobileNewHeaderContainer isLandingPage={isLandingPage}>
            <Image src={logoLeve} onClick={() => handleRedirect()} className='logoLeve' alt={"Logo da Leve na cor laranja"} priority={true} />
            <Image src={isOpen ? selectedMenuIcon : menuIcon} className='profile' alt={"Perfil Leve"} onClick={openModal} loading="lazy" />
        </MobileNewHeaderContainer>
    )
}