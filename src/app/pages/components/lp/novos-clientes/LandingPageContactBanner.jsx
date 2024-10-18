"use client"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from "@mui/material";
import infoJson from '../../../../../../public/info.json';
import { ContactBannerContainer } from "./styles";
import { leveWhatsappNumber } from '@/app/pages/globalEnums';

export default function LandingPageContactBanner() {

    const lpTexts = infoJson.lp.novosClientes

    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send/?phone=${leveWhatsappNumber}&text=Ol%C3%A1%2C+estou+na+home+do+site+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`;
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (

        <ContactBannerContainer>
            <Typography variant='h4'>{lpTexts.anyDoubt}</Typography>
            <Typography variant='h5'>{lpTexts.contactOutTeam}</Typography>
            <Typography className='contactButton' onClick={() => handleWhatsapp()}><WhatsAppIcon />{lpTexts.whatsappLeve}</Typography>
        </ContactBannerContainer>
    )
}