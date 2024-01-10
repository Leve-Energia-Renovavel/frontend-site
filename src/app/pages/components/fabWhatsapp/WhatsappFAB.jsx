
"use client"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { FABContainer, WhatsappLink } from './styles';

const WhatsAppFAB = () => {
    return (
        <FABContainer>
            <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=551151942681&text=Ol%C3%A1%2C+estou+no+site+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0">
                <WhatsappLink >
                    <WhatsAppIcon sx={{ fontSize: 40, }} />
                </WhatsappLink>
            </Link>
        </FABContainer>
    );
};

export default WhatsAppFAB;
