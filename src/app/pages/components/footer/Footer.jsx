"use client"

import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../../resources/img/logo-header.png";
import { AddressContainer, CallToActionContainer, ContactContainer, ContentContainer, FacebookLogo, FooterContainer, InstagramLogo, LinkedinLogo, LogoContainer, PagesContainer, RightsContainer, SocialMediaContainer } from './styles';

import DefaultButton from '../utils/buttons/DefaultButton';
import InputWithButton from '../utils/inputs/InputWithButton';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    const currentYear = getCurrentYear();


    return (
        <FooterContainer>
            <LogoContainer>
                <Image
                    loading="eager" priority={true}
                    src={logo}
                    alt="Leve Energia Logo"
                />
            </LogoContainer>

            <ContentContainer>
                <AddressContainer>
                    <Typography>R. Joaquim Floriano, 72</Typography>
                    <Typography>Conjunto 177</Typography>
                    <Typography>Itaim Bibi</Typography>
                    <Typography>São Paulo - SP</Typography>
                    <Typography>04534-000</Typography>
                    <Typography></Typography>
                    <Typography className='phoneNumber'>(11) 3181-8210</Typography>
                </AddressContainer>

                <PagesContainer>
                    <Link href="https://leveenergia.com.br/" className='pageLink'>Sobre a Leve</Link>
                    <Link href="https://leveenergia.com.br/#comofunciona" className='pageLink'>Como funciona</Link>
                    <Link href="https://leveenergia.com.br/#beneficios" className='pageLink'>Benefícios</Link>
                    <Link href="https://leveenergia.com.br/#serleve" className='pageLink'>Quem pode ser Leve</Link>
                    <Link href="https://leveenergia.com.br/blog/" className='pageLink'>Blog</Link>
                    <Link href="https://leveenergia.com.br/sou-gerador" className="pageLinkGenerator">Sou gerador e quero ser Leve</Link>
                    <Link href="https://leveenergia.com.br/politica-de-privacidade" className='pageLink'>Política de Privacidade</Link>
                    <Link href="https://leveenergia.com.br/termos-de-uso" className='pageLink'>Termos de Uso</Link>
                </PagesContainer>

                <ContactContainer>
                    <Typography variant="subtitle1">Conecte-se com a Leve</Typography>
                    <SocialMediaContainer>
                        <InstagramLogo className="socialIcon" />
                        <FacebookLogo className="socialIcon" />
                        <LinkedinLogo className="socialIcon" />
                    </SocialMediaContainer>
                    <Typography variant="body1">Fique por dentro das novidades:</Typography>

                    <InputWithButton placeholder="E-mail" />
                    <Typography className='acceptReceivingEmails'>Ao informar seu e-mail, você concorda em receber e-mails da Leve Energia Renovável e aceita nossa Política de Privacidade.</Typography>

                </ContactContainer>

                <CallToActionContainer>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Adote um consumo mais Leve e comece a economizar agora mesmo com a gente.</Typography>
                    <DefaultButton variant="contained" text="Quero ser Leve" />
                </CallToActionContainer>

            </ContentContainer>

            <RightsContainer>
                <Typography variant="body1">&#169; {currentYear} Leve Energia Renovável. Todos os direitos reservados</Typography>
            </RightsContainer>

        </FooterContainer>
    );
}