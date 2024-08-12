import { partners } from "@/app/utils/helper/partnerHelper"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logoLeve from "../../../../resources/icons/small/leve-logo-orange-icon-small.svg"
import { MobileNewHeaderContainer, PartnerContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu'

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
        <MobileNewHeaderContainer isLandingPage={isLandingPage} isPartner={isPartner} isOpen={isOpen}>
            <Image src={logoLeve} onClick={() => handleRoute()} className='logoLeve' alt={"Logo da Leve na cor laranja"} priority={true} />
            {isPartner && (
                <PartnerContainer>
                    <p className="partnershipIcon">+</p>
                    {partners[partner]?.logo}
                </PartnerContainer>)}
            <MenuIcon className='profile' onClick={openModal} />
        </MobileNewHeaderContainer>
    )
}