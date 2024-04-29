import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import perfilLeve from "../../../../resources/icons/small/leve-profile-icon-small.svg"
import { MobileNewHeaderContainer } from './styles'
import { useRouter } from "next/navigation"

export default function NewHeader({ isOpen, openModal, closeModal }) {

    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/`)
    }

    return (
        <MobileNewHeaderContainer>
            <Image src={logoLeve} onClick={() => handleRedirect()} className='logoLeve' alt={"Logo da Leve na cor laranja"} priority />
            <Image src={perfilLeve} className='profile' alt={"Perfil Leve"} onClick={openModal} loading="lazy"  />
        </MobileNewHeaderContainer>
    )
}