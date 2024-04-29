import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


export const linkTo = {
    "linkedin": "https://br.linkedin.com/company/leve-energia-renov%C3%A1vel",
    "facebook": "https://m.facebook.com/leveenergiaoficial",
    "instagram": "https://www.instagram.com/leveenergiaoficial/",
    "youtube": "https://www.youtube.com/channel/UC2GJXSoYAvsvaJHjSbufCTA",
    "twitter": "",
    "mail": "",
}

export const socialMedia = [
    {
        name: "Linkedin",
        redirect: "linkedin",
        icon: <LinkedInIcon className="socialIcon" />
    },
    {
        name: "Facebook",
        redirect: "facebook",
        icon: <FacebookIcon className="socialIcon" />
    },
    {
        name: "Instagram",
        redirect: "instagram",
        icon: <InstagramIcon className="socialIcon" />
    },
    {
        name: "Youtube",
        redirect: "youtube",
        icon: <YouTubeIcon className="socialIcon" />
    },
    {
        name: "Twitter",
        redirect: "twitter",
        icon: <XIcon className="socialIcon" />
    },
    {
        name: "Mail",
        redirect: "mail",
        icon: <MailOutlineIcon className="socialIcon" />
    },
]