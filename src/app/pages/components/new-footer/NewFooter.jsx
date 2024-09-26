
"use client"

import { linkTo, socialMedia } from '@/app/utils/helper/footerHelper';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton } from "@mui/material";
import Image from "next/image";
import infoJson from '../../../../../public/info.json';
import sunImage from "../../../../resources/icons/small/ellipse-small-reduced.webp";
import logoLeve from "../../../../resources/icons/small/leve-logo-white-icon-small.png";
import { FooterContainer as Container, FooterButton, FooterPrimaryContainer, FooterSecondaryContainer, FooterSocialMediaContainer, SunContainer } from './styles';

export default function NewFooter() {


  const texts = infoJson.footer

  const handleRedirect = (socialMedia) => {
    window.open(linkTo[socialMedia], '_blank');
  };

  const handleContactConsultant = () => {
    const url = `https://api.whatsapp.com/send/?phone=551131818210&text=Ol%C3%A1%2C+estou+na+home+do+site+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`;
    window.open(url, '_blank', 'noopener noreferrer');
  }

  return (
    <>
      <Container className='leveFooterContainer'>
        <FooterPrimaryContainer className='leveFooterPrimaryContainer'>
          <p className='footerTitle'>{texts.title}</p>
          <p className='footerSubtitle'>{texts.ourTeam}</p>
          <p className='footerDescription'>{texts.weAreReady}</p>

          <FooterButton className="callConsultantButton" onClick={() => handleContactConsultant()} startIcon={<QuestionAnswerIcon />} aria-label={texts.callConsultant}>
            {texts.callConsultant}
          </FooterButton>
        </FooterPrimaryContainer>

        <FooterSecondaryContainer image={sunImage} className='leveFooterSecondaryContainer'>

          <FooterSocialMediaContainer className='leveFooterSocialMediaContainer'>
            {socialMedia.map((media) => {
              return (
                <IconButton key={media.name} onClick={() => handleRedirect(media.redirect)} aria-label={media.name}>
                  {media.icon}
                </IconButton>
              )
            })}
          </FooterSocialMediaContainer>

          <Image src={logoLeve} className="leveLogoImage" alt={"Logo da Leve Energia Renovável"} priority={false} loading='lazy' />
          <p className='rights'>{texts.rights}</p>
          <p className='leveLegalData'>Leve Energia Renovável - CNPJ 45.193.816/0001-17</p>

          <SunContainer className='leveFooterSunContainer'>
            <Image src={sunImage} className='sunImage' alt={"Imagem de um sol se pondo, ao fundo do logo da Leve"} loading="lazy" />
          </SunContainer>
        </FooterSecondaryContainer>
      </Container>
    </>
  )
}