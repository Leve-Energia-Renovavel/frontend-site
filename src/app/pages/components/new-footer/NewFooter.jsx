import { Typography } from "@mui/material"
import { FooterContainer, FooterPrimaryContainer, FooterSecondaryContainer, FooterSocialMediaContainer } from './styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from "next/image"
import logoLeve from "../../../../resources/icons/small/leve-logo-white-icon-small.png"

export default function NewFooter() {
  return (
    <>
      <FooterContainer>
        <FooterPrimaryContainer>
          <Typography variant="h2">Temos a melhor solução de energia para você</Typography>
          <Typography variant="h3">Fale com o nosso time agora mesmo!</Typography>
          <Typography variant="h4">Estamos prontos para te atender da melhor maneira:</Typography>
        </FooterPrimaryContainer>
        <FooterSecondaryContainer>
          <FooterSocialMediaContainer>
            <LinkedInIcon fontSize={"large"} className="socialIcon" />
            <FacebookIcon className="socialIcon" />
            <InstagramIcon className="socialIcon" />
            <YouTubeIcon className="socialIcon" />
            <XIcon className="socialIcon" />
            <MailOutlineIcon className="socialIcon" />
          </FooterSocialMediaContainer>
          <Image src={logoLeve} width={253} height={115} alt={"banner da Leve com uma mulher sorrindo ao usar notebook"} />
          <Typography variant="h6">©2024 - Todos os direitos reservados - Leve Energia Renovável</Typography>
        </FooterSecondaryContainer>
      </FooterContainer>
    </>
  )
}