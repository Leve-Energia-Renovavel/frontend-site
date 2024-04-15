import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import logoLeve from "../../../../resources/icons/small/leve-logo-white-icon-small.png";
import { FooterContainer as Container, FooterButton, FooterPrimaryContainer, FooterSecondaryContainer, FooterSocialMediaContainer } from './styles';

import sunImage from "../../../../resources/icons/small/ellipse-small.png";

export default function NewFooter() {


  const linkTo = {
    "linkedin": "https://br.linkedin.com/company/leve-energia-renov%C3%A1vel",
    "facebook": "https://m.facebook.com/leveenergiaoficial",
    "instagram": "https://www.instagram.com/leveenergiaoficial/",
    "youtube": "https://www.youtube.com/channel/UC2GJXSoYAvsvaJHjSbufCTA",
    "twitter": "",
    "mail": "",
  }

  const handleRedirect = (socialMedia) => {
    window.open(linkTo[socialMedia], '_blank');
  };

  return (
    <>
      <Container>
        <FooterPrimaryContainer>
          <Typography variant="h2">Temos a melhor solução de energia para você</Typography>
          <Typography variant="h3">Fale com o nosso time agora mesmo!</Typography>
          <Typography variant="h4">Estamos prontos para te atender da melhor maneira:</Typography>
          <FooterButton
            startIcon={<QuestionAnswerIcon />}
          >Falar com um consultor</FooterButton>
        </FooterPrimaryContainer>
        <FooterSecondaryContainer image={sunImage}>
          <FooterSocialMediaContainer >
            <IconButton onClick={() => handleRedirect("linkedin")}>
              <LinkedInIcon fontSize={"large"} className="socialIcon" />
            </IconButton>
            <IconButton onClick={() => handleRedirect("facebook")}>
              <FacebookIcon className="socialIcon" />
            </IconButton>
            <IconButton onClick={() => handleRedirect("instagram")}>
              <InstagramIcon className="socialIcon" />
            </IconButton>
            <IconButton onClick={() => handleRedirect("youtube")}>
              <YouTubeIcon className="socialIcon" />
            </IconButton>
            <IconButton onClick={() => handleRedirect("twitter")}>
              <XIcon className="socialIcon" />
            </IconButton>
            <IconButton onClick={() => handleRedirect("mail")}>
              <MailOutlineIcon className="socialIcon" />
            </IconButton>
          </FooterSocialMediaContainer>
          <Image src={logoLeve} className="leveLogoImage" alt={"banner da Leve com uma mulher sorrindo ao usar notebook"} />
          <Typography variant="h6">©2024 - Todos os direitos reservados - Leve Energia Renovável</Typography>
        </FooterSecondaryContainer>
      </Container>
    </>
  )
}