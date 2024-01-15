"use client"

import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../../resources/img/logo-header.png";
import { AddressContainer, CallToActionContainer, ContactContainer, ContentContainer, FooterContainer, LogoContainer, PagesContainer, RightsContainer, SocialMediaContainer } from './styles';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DefaultButton from '../utils/buttons/DefaultButton';
import InputWithButton from '../utils/inputs/InputWithButton';

export default function Footer() {
    return (
        <FooterContainer>

            <LogoContainer>
                <Image
                    src={logo}
                    alt="Leve Energia Logo"
                />
            </LogoContainer>

            <ContentContainer>
                <AddressContainer>
                    <Typography variant="body1">R. Joaquim Floriano, 72</Typography>
                    <Typography variant="body1">Conjunto 177</Typography>
                    <Typography variant="body1">Itaim Bibi</Typography>
                    <Typography variant="body1">São Paulo - SP</Typography>
                    <Typography variant="body1">04534-000</Typography>
                    <Typography variant="body1"></Typography>
                    <Typography variant="body1">(11) 3181-8210</Typography>
                </AddressContainer>

                <PagesContainer>
                    <Link href="/">Sobre a Leve</Link>
                    <Link href="/about">Como funciona</Link>
                    <Link href="/beneficios">Benefícios</Link>
                    <Link href="/quem-pode-ser-leve">Quem pode ser Leve</Link>
                    <Link href="/blog">Blog</Link>
                    <Typography variant="body1"></Typography>
                    <br />
                    <Link href="/" style={{ fontWeight: "bold" }}>Sou gerador e quero ser Leve</Link>
                    <br />
                    <br />
                    <Typography variant="body1"></Typography>
                    <Typography variant="body1"></Typography>
                    <Link href="/">Política de Privacidade</Link>
                    <Link href="/">Termos de Uso</Link>
                </PagesContainer>

                <ContactContainer>
                    <Typography variant="body1" style={{ fontWeight: "bold" }}>Conecte-se com a Leve</Typography>
                    <SocialMediaContainer>
                        <InstagramIcon sx={{
                            fontSize: 40,
                            "&:hover": {
                                cursor: 'pointer',
                            }
                        }} />
                        <FacebookIcon sx={{
                            fontSize: 40,
                            "&:hover": {
                                cursor: 'pointer',
                            }
                        }} />
                        <LinkedInIcon sx={{
                            fontSize: 40,
                            "&:hover": {
                                cursor: 'pointer',
                            }
                        }} />
                    </SocialMediaContainer>
                    <Typography variant="body1">Fique por dentro das novidades:</Typography>

                    <InputWithButton placeholder="E-mail" position="end" />
                    <Typography sx={{ fontSize: '10px' }}>Ao informar seu e-mail, você concorda em receber e-mails da Leve Energia Renovável e aceita nossa Política de Privacidade.</Typography>

                </ContactContainer>

                <CallToActionContainer>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Adote um consumo mais Leve e comece a economizar agora mesmo com a gente.</Typography>
                    <DefaultButton variant="contained" text="Quero ser Leve" width="12vw" />
                </CallToActionContainer>

            </ContentContainer>

            <RightsContainer>
                <Typography variant="body1">&#169; 2024 Leve Energia Renovável &#174; Todos os direitos reservados</Typography>
            </RightsContainer>

        </FooterContainer>
    );
}