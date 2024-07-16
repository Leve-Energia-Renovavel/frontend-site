import { partners } from "@/app/utils/helper/partnerHelper"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import selectedMenuIcon from "../../../../resources/icons/small/leve-profile-orange-icon-small-compressed.svg"
import menuIcon from "../../../../resources/icons/small/leve-profile-yellow-icon-small-compressed.svg"
import { MobileNewHeaderContainer, PartnerContainer } from './styles'

export default function NewHeader({ isLoggedUser, isOpen, openModal, closeModal, isLandingPage, isPartner, partner }) {

    const router = useRouter()

    const handleRoute = () => {
        if (isLoggedUser) {
            router.push(`/dashboard`)
        } else {
            router.push(`/`)
        }
    }

    return (
        <MobileNewHeaderContainer isLandingPage={isLandingPage} isPartner={isPartner}>
            <Image src={logoLeve} onClick={() => handleRoute()} className='logoLeve' alt={"Logo da Leve na cor laranja"} priority={true} />
            {isPartner && (
                <PartnerContainer>
                    <p className="partnershipIcon">+</p>
                    {partners[partner]?.logo}
                </PartnerContainer>)}
            < Image src={isOpen ? selectedMenuIcon : menuIcon} className='profile' alt={"Perfil Leve"} onClick={openModal} />
        </MobileNewHeaderContainer>
    )
}