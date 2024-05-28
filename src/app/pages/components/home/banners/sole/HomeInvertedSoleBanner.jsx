"use client"

import { handleWhatsapp, helperToPath } from '@/app/utils/helper/pathHelper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import infoJson from '../../../../../../../public/info.json';
import soleImage from "../../../../../../resources/icons/large/sole-icon-large.webp";
import { InvertedSoleBannerContainer as Container, InvertedSoleButton } from './styles';

const texts = infoJson.home


export default function HomeInvertedSoleBanner() {

    const pathname = usePathname()
    const location = helperToPath[pathname]

    return (
        <Container className='invertedSoleBannerContainer'>
            <h6 className='invertedSoleBannerTitle'>Bora ser Leve?</h6>
            <p className='invertedSoleBannerSubtitle'>Fale com o nosso time agora mesmo!</p>
            <p className='invertedSoleBannerDescription'>Estamos prontos para te atender da melhor maneira:</p>
            <InvertedSoleButton onClick={() => handleWhatsapp(location)}>
                <WhatsAppIcon className='whatsappIcon' />
                <span>Falar agora - WhatsApp Leve</span>
            </InvertedSoleButton>
            <Image src={soleImage} className="sole" alt={"Imagem de Sole, personagem da Leve, carregando uma placa solar"} loading="lazy" />
        </Container>
    )
}