import LocalizaMainBanner from "@/app/pages/components/lp/parcerias/localiza/LocalizaMainBanner";
import MartinsMainBanner from "@/app/pages/components/lp/parcerias/martins/MartinsMainBanner";
import TimMainBanner from "@/app/pages/components/lp/parcerias/tim/TimMainBanner";
import TimSectionBanner from "@/app/pages/components/lp/parcerias/tim/TimSectionBanner";
import TribancoMainBanner from "@/app/pages/components/lp/parcerias/tribanco/TribancoMainBanner";
import TribancoSectionBanner from "@/app/pages/components/lp/parcerias/tribanco/TribancoSectionBanner";
import YduqsMainBanner from "@/app/pages/components/lp/parcerias/yduqs/YduqsMainBanner";
import Image from "next/image";

import localizaLogo from '../../../resources/img/partners/localiza/localiza-logo-large.png';
import martinsLogo from '../../../resources/img/partners/martins/martins-logo-large.png';
import timLogo from '../../../resources/img/partners/tim/tim-logo-large.png';
import tribancoLogo from '../../../resources/img/partners/tribanco/logo-tribanco-large.png';
import yduqsLogo from '../../../resources/img/partners/yduqs/yduqs-logo-large.png';

export const clearPartnerName = (str) => {
    return str.replace(/\/|lp/g, '');
};


export const partnerTokens = {
    "tribanco": process.env.NEXT_PUBLIC_TRIBANCO_TOKEN,
    "tim": process.env.NEXT_PUBLIC_TIM_TOKEN,
    "yduqs": process.env.NEXT_PUBLIC_YDUQS_TOKEN,
    "loreal": process.env.NEXT_PUBLIC_LOREAL_TOKEN,
    "localiza": process.env.NEXT_PUBLIC_LOCALIZA_TOKEN,
    "martins": process.env.NEXT_PUBLIC_MARTINS_TOKEN,
}

export const partners = {
    "tribanco": {
        mainBanner: <TribancoMainBanner />,
        section: <TribancoSectionBanner />,
        logo: <Image src={tribancoLogo} className='partnerLogo' alt={"Logo Tribanco"} priority={false} />
    },
    "tim": {
        mainBanner: <TimMainBanner />,
        section: <TimSectionBanner />,
        logo: <Image src={timLogo} className='partnerLogo' alt={"Logo Tim"} priority={false} />
    },
    "localiza": {
        mainBanner: <LocalizaMainBanner />,
        section: <TribancoSectionBanner />,
        logo: <Image src={localizaLogo} className='partnerLogo' alt={"Logo Localiza"} priority={false} />
    },
    "yduqs": {
        mainBanner: <YduqsMainBanner />,
        section: <TribancoSectionBanner />,
        logo: <Image src={yduqsLogo} className='partnerLogo' alt={"Logo Yduqs"} priority={false} />
    },
    "martins": {
        mainBanner: <MartinsMainBanner />,
        section: <TribancoSectionBanner />,
        logo: <Image src={martinsLogo} className='partnerLogo' alt={"Logo Martins"} priority={false} />
    },
}