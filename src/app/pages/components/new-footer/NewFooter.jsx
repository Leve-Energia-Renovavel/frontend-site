import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import infoJson from '../../../../../public/footer-info.json';
import logoLeve from "../../../../resources/icons/small/leve-logo-white-icon-small.png";
import { FooterContainer as Container, FooterButton, FooterPrimaryContainer, FooterSecondaryContainer, FooterSocialMediaContainer, MyNiceDiv } from './styles';

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

  const texts = infoJson

  const handleContactConsultant = () => {
    const url = `https://api.whatsapp.com/send/?phone=551131818210&text=Ol%C3%A1%2C+estou+na+home+do+site+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`;
    window.open(url, '_blank', 'noopener noreferrer');
  }

  return (
    <>
      <Container>
        <FooterPrimaryContainer>
          <Typography variant="h2">{texts.title}</Typography>
          <Typography variant="h3">{texts.ourTeam}</Typography>
          <Typography variant="h4">{texts.weAreReady}</Typography>
          <FooterButton
            onClick={() => handleContactConsultant()}
            startIcon={<QuestionAnswerIcon />}
          >{texts.callConsultant}</FooterButton>
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
          <Image src={logoLeve} className="leveLogoImage" alt={"Logo da Leve Energia Renovável"} loading="eager" priority={true} />
          <Typography variant="h6">{texts.rights}</Typography>

          <MyNiceDiv>
            <Image src={sunImage} className='sunImage' alt={"Imagem de um sol se pondo, ao fundo do logo da Leve"} loading="eager" priority={true} />
          </MyNiceDiv>
        </FooterSecondaryContainer>
      </Container>
    </>
  )
}