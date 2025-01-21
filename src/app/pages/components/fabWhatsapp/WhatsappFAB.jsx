
"use client"

import { helperToPath } from '@/app/utils/helper/pathHelper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from 'next/navigation';
import { LEVE_WHATSAPP_NUMBER, PATH_TO } from '../../enums/globalEnums';
import { FABContainer, WhatsappButton } from './styles';

export default function WhatsAppFAB() {

    const pathname = usePathname()
    const location = helperToPath[pathname]

    const hideFAB =
        pathname === PATH_TO.REGISTER_USER ||
        pathname === PATH_TO.REGISTER_ADDRESS

    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send/?phone=${LEVE_WHATSAPP_NUMBER}&text=Oi!+Estou+${location}+da+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`
        window.open(url, '_blank', 'noopener noreferrer');
    }

    if (hideFAB) {
        return null;
    }

    return (
        <FABContainer onClick={() => handleWhatsapp()} className='leveWhatsappContainer'>
            <WhatsappButton className='leveWhatsappButton' aria-label="Whatsapp">
                <WhatsAppIcon className='icon' />
            </WhatsappButton>
        </FABContainer >
    );
};