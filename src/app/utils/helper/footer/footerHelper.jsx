import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const linkTo = {
    "linkedin": "https://br.linkedin.com/company/leve-energia-renov%C3%A1vel",
    "facebook": "https://m.facebook.com/leveenergiaoficial",
    "instagram": "https://www.instagram.com/leveenergiaoficial/",
    "youtube": "https://www.youtube.com/watch?v=Zs9r8xWwn3I",
    "twitter": "",
    "mail": "",
    "reclameAqui": "https://www.reclameaqui.com.br/empresa/leve-energia-renovavel/",
}

export const socialMedia = [
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
]

export const footerBasedOn = {
    "/lp/empresas/": true,
    "/connection/": true,
    "/dashboard/": true,
    "/dashboard/profile/": true,
    "/dashboard/installations/": true,
    "/dashboard/installations/contract-signature/": true,
    "/dashboard/invoices/": true,
    "/dashboard/help/": true,
    "/dashboard/payment/": true
}