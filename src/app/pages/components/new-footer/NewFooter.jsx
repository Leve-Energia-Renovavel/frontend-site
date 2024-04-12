import { Typography, IconButton } from "@mui/material"
import { FooterContainer as Container, FooterButton, FooterPrimaryContainer, FooterSecondaryContainer, FooterSocialMediaContainer, LeveLogoImage } from './styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-white-icon-small.png"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import sunImage from "../../../../resources/icons/small/ellipse-small.png"

export default function NewFooter() {
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
            <IconButton>
              <LinkedInIcon fontSize={"large"} className="socialIcon" />
            </IconButton>
            <IconButton>
              <FacebookIcon className="socialIcon" />
            </IconButton>
            <IconButton>
              <InstagramIcon className="socialIcon" />
            </IconButton>
            <IconButton>
              <YouTubeIcon className="socialIcon" />
            </IconButton>
            <IconButton>
              <XIcon className="socialIcon" />
            </IconButton>
            <IconButton>
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