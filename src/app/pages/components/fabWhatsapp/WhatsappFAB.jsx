
"use client"

import { helperToPath } from '@/app/utils/helper/pathHelper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from 'next/navigation';
import { leveWhatsappNumber } from '../../globalEnums';
import { FABContainer, WhatsappLink } from './styles';

export default function WhatsAppFAB() {

    const pathname = usePathname()
    const location = helperToPath[pathname]

    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send/?phone=${leveWhatsappNumber}&text=Oi!+Estou+${location}+da+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <FABContainer onClick={() => handleWhatsapp()}>
            <WhatsappLink >
                <WhatsAppIcon className='icon' />
            </WhatsappLink>
        </FABContainer >
    );
};