"use client"

import React from 'react';
import Link from 'next/link';
import { Typography, TextField, InputAdornment } from '@mui/material';
import logo from "../../../../resources/img/logo-header.png"
import Image from 'next/image'
import { FooterContainer, LogoContainer, ContentContainer, AddressContainer, PagesContainer, ContactContainer, SocialMediaContainer, CallToActionContainer, RightsContainer } from './styles';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InputWithButton from '../inputs/InputWithButton';

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
                    <Link href="/">Como funciona</Link>
                    <Link href="/">Benefícios</Link>
                    <Link href="/">Quem pode ser Leve</Link>
                    <Link href="/">Blog</Link>
                    <Typography variant="body1"></Typography>
                    <Link href="/" style={{ fontWeight: "bold" }}>Sou gerador e quero ser Leve</Link>
                    <Typography variant="body1"></Typography>
                    <Typography variant="body1"></Typography>
                    <Link href="/">Política de Privacidade</Link>
                    <Link href="/">Termos de Uso</Link>
                </PagesContainer>

                <ContactContainer>
                    <Typography variant="body1" style={{ fontWeight: "bold" }}>Conecte-se com a Leve</Typography>
                    <SocialMediaContainer>
                        <InstagramIcon sx={{ fontSize: 40 }} />
                        <FacebookIcon sx={{ fontSize: 40 }} />
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                    </SocialMediaContainer>
                    <Typography variant="body1">Fique por dentro das novidades:</Typography>
                    {/* <TextField
                        id="stay-inside-our-news"
                        placeholder='E-mail'
                        // InputProps={{ endAdornment: <ArrowForwardIosIcon /> }}
                        InputProps={{
                            endAdornment: (
                                <ArrowForwardIosIcon sx={{ backgroundColor: 'red' }} />
                            )
                        }}
                    /> */}
                    <InputWithButton placeholder="E-mail" position="end" />


                    {/* contact informations */}
                    <CallToActionContainer>
                        {/* call to action informations */}
                    </CallToActionContainer>
                </ContactContainer>
                <RightsContainer>

                </RightsContainer>


            </ContentContainer>

        </FooterContainer>
    );
}