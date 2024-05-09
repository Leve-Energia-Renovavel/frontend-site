"use client"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from "@mui/material";
import infoJsonLp from '../../../../../../public/lp-info.json';
import { ContactBannerContainer } from "./styles";

export default function LandingPageContactBanner() {

    const lpTexts = infoJsonLp

    return (

        <ContactBannerContainer>
            <Typography variant='h4'>{lpTexts.anyDoubt}</Typography>
            <Typography variant='h5'>{lpTexts.contactOutTeam}</Typography>
            <Typography className='contactButton' onClick={() => handleWhatsapp()}><WhatsAppIcon />{lpTexts.whatsappLeve}</Typography>
        </ContactBannerContainer>
    )
}