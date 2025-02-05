"use client"

import useFetchEmailAndWhatsapp from '@/app/hooks/useFetchEmailAndWhatsapp';
import { linkTo, socialMedia } from '@/app/utils/helper/footer/footerHelper';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import infoJson from '../../../../../public/info.json';
import reclameAquiLogo from '../../../../resources/icons/icon-RA.webp';
import logoLeve from "../../../../resources/icons/small/leve-logo-yellow-icon-small-reduced.webp";
import { PATH_TO } from '../../enums/globalEnums';
import { CompanyNameAndCNPJ, Contact, ContactContainer, ContactContent, ContactContentContainer, FooterContainer as Container, FooterSocialMediaContainer, LegalContainer, SocialMediaContainer } from './styles';

export default function DefaultFooter() {

  const router = useRouter()
  const { data, loading, error } = useFetchEmailAndWhatsapp();

  const texts = infoJson.footer

  const handleRedirect = (socialMedia) => {
    window.open(linkTo[socialMedia], '_blank');
  };

  return (
    <>
      <Container className='footerContainer'>

        <LegalContainer className='footerLegalContainer'>
          <Image src={logoLeve} className="leveLogoImage" alt={"Logo da Leve Energia Renovável"} priority={false} loading='lazy' />
          <CompanyNameAndCNPJ className='footerCompanyNameAndCNPJ'>
            <p className='highlighted'>Leve Energia Renovável</p>
            <p >CNPJ 42.497.169/0001-49</p>
          </CompanyNameAndCNPJ>
          <p className='leveRightsDesktop'>{texts.rights}</p>
        </LegalContainer>

        <ContactContainer className='footerContactContainer'>
          <p className='contactUs'>Fale com a gente</p>
          <ContactContentContainer>

            <ContactContent>
              <p className='comercialService'>Atendimento comercial</p>
              <Contact className='contact'>
                <p className='phone'>{data?.emailComercial}</p>
              </Contact>
            </ContactContent>
            <ContactContent>
              <p className='comercialService'>Atendimento a clientes</p>
              <Contact className='contact'>
                <p className='email'>{data?.emailClientes}</p>
              </Contact>
            </ContactContent>
          </ContactContentContainer>
          <p className='privacyPolicy' onClick={() => router.push(PATH_TO.PRIVACY_POLICY)}>Política de Privacidade</p>

        </ContactContainer>

        {/* <SocialMediaContainer className='footerSocialMediaContainer'>
          <FooterSocialMediaContainer>
            {socialMedia.map((media) => {
              return (
                <IconButton className="iconButton"
                  key={media.name}
                  aria-label={media.name}
                  onClick={() => handleRedirect(media.redirect)}>
                  {media.icon}
                </IconButton>
              )
            })}
            <IconButton className="iconButton" onClick={() => handleRedirect("reclameAqui")}>
              <Image src={reclameAquiLogo} className="reclameAquiLogo" alt={"Logo da Leve Energia Renovável"} priority={false} loading='lazy' />
            </IconButton>
          </FooterSocialMediaContainer>

        </SocialMediaContainer> */}

        <p className='leveRightsMobile'>{texts.rights}</p>

      </Container >
    </>
  )
}