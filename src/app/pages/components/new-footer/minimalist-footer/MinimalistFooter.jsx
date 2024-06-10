import { linkTo, socialMedia } from '@/app/utils/helper/footerHelper';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import logoLeve from '../../../../../resources/icons/small/leve-logo-orange-icon-small.svg';
import { FooterContainer as Container, FooterMainInfo, FooterRightsReserved, FooterMainContent as MainContent, PrivacyPolicyAndHelp, SocialMediaContainer } from './styles';

export default function MinimalistFooter() {

  const handleRedirect = (socialMedia) => {
    window.open(linkTo[socialMedia], '_blank');
  };
  const handleRedirectLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container>
      <MainContent>
        <FooterMainInfo>
          <Image src={logoLeve} alt='Logo Leve laranja' className='leveLogo' />
          <PrivacyPolicyAndHelp>
            <p onClick={() => handleRedirectLink("https://leveenergia.com.br/politica-de-privacidade/")}>Políticas de Privacidade</p>
            <p>|</p>
            <p>Central de Ajuda</p>

          </PrivacyPolicyAndHelp>
        </FooterMainInfo>
        <SocialMediaContainer>
          {socialMedia.map((media) => {
            return (
              <IconButton key={media.name} onClick={() => handleRedirect(media.redirect)} aria-label={media.name} className='socialIcon'>
                {media.icon}
              </IconButton>
            )
          })}

        </SocialMediaContainer>

      </MainContent>
      <FooterRightsReserved>
        <p>©2024 - Todos os direitos reservados - Leve Energia Renovável</p>
      </FooterRightsReserved>

    </Container>
  )
}