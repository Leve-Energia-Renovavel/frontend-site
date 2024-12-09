import { background } from "@/app/pages/globalStyles"
import simpleIcon from "../../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import sustainableIcon from "../../../../resources/icons/small/leve-folha-icone-small.svg"
import safeIcon from "../../../../resources/icons/small/leve-protecao-white-icone-small.svg"
import fastIcon from "../../../../resources/icons/small/leve-raio-yellow-icone-small.svg"

import economyIcon from "../../../../resources/icons/small/leve-economia-icone-small.png"
import signIcon from "../../../../resources/icons/small/leve-energia-clique-icone-small.png"
import solarPanelIcon from "../../../../resources/icons/small/leve-painel-solar-icone-small.png"
import batteryIcon from "../../../../resources/icons/small/leve-recarregar-energia-icone-small.png"

import touchpadIcon from "../../../../resources/icons/icon-click-orange-gradient.svg"
import solarEnegyIcon from "../../../../resources/icons/icon-panel-orange-gradient.svg"
import getRevenueIcon from "../../../../resources/icons/icon-renew-orange-gradient.svg"

import localizaLogo from "../../../../resources/img/small/logo-localiza-small.png"
import lorealLogo from "../../../../resources/img/small/logo-loreal-small.png"
import martinsLogo from "../../../../resources/img/small/logo-martins-small.png"
import timLogo from "../../../../resources/img/small/logo-tim-small.png"
import tribancoLogo from "../../../../resources/img/small/logo-tribanco-small.png"

import estacioLogo from "../../../../resources/img/small/logo-estacio-small.png"
import estaparLogo from "../../../../resources/img/small/logo-estapar-small.png"
import raiaDrogasilLogo from "../../../../resources/img/small/logo-raia-drogasil-small.png"
import rennerLogo from "../../../../resources/img/small/logo-renner-small.png"

export const homeBoxes = [
    {
        icon: fastIcon,
        title: "É rápido",
        description: "Adesão 100% digital em apenas 3 cliques.",
        backgroundColor: background.orange,
        titleColor: background.yellow,
        descriptionColor: background.white
    },
    {
        icon: simpleIcon,
        title: "Simples",
        description: "Sem obras, instalações ou custos adicionais.",
        backgroundColor: background.yellow,
        titleColor: background.orange,
        descriptionColor: background.orange
    },
    {
        icon: safeIcon,
        title: "Seguro",
        description: "A energia chegará para você da mesma forma que chega hoje.",
        backgroundColor: background.orange,
        titleColor: background.white,
        descriptionColor: background.white
    },
    {
        icon: sustainableIcon,
        title: "Sustentável",
        description: "Energia solar limpa e 100% renovável.",
        backgroundColor: background.green,
        titleColor: background.yellow,
        descriptionColor: background.white
    },

]

export const newHomeBoxes = [
    {
        title: "Desconto mensal garantido",
        subtitle: <p className="subtitle">Economia de até 20% na conta de luz todo mês</p>
    },
    {
        title: "Energia limpa e renovável",
        subtitle: <p className="subtitle">Reduza a emissão de poluentes na atmosfera</p>
    },
    {
        title: "Sem custos extras",
        subtitle: <p className="subtitle">Adesão gratuita, sem investimentos e custos extras</p>
    },
    {
        title: "Cancele quando quiser",
        subtitle: <p className="subtitle">Cancele a qualquer momento em nossos canais digitais</p>
    },
]


export const homeTutorialCards = [
    {
        icon: signIcon,
        description: "Você assina o seu plano de energia com a Leve.",
    },
    {
        icon: solarPanelIcon,
        description: "A Leve gera os seus créditos de energia nas usinas solares.",
    },
    {
        icon: batteryIcon,
        description: "Injeta a energia na sua distribuidora local, para que chegue para você da mesma forma como é hoje.",
    },
    {
        icon: economyIcon,
        description: "Pronto! Você tem energia (créditos de energia solar) na sua casa ou no seu negócio, com muita economia todos os meses.",
    },
]
export const homeTutorialCardsMobile = [
    {
        icon: touchpadIcon,
        title: "Cadastro digital",
        description: "Você preenche o nosso cadastro de adesão digital, rápido e seguro para se tornar cliente Leve",
    },
    {
        icon: solarEnegyIcon,
        title: "Produção de energia",
        description: "Geramos energia limpa e inserimos na rede da sua distribuidora que continua responsável pelo seu serviço de energia",
    },
    {
        icon: getRevenueIcon,
        title: "Créditos de energia",
        description: "Essa energia gera créditos que abatem parte do seu consumo e deixam sua conta de luz mais barata",
    },
]

export const brands = [
    {
        label: "loreal",
        company: "L'Oréal",
        logo: lorealLogo,
    },
    {
        label: "tim",
        company: "Tim",
        logo: timLogo,
    },
    {
        label: "localiza",
        company: "Localiza",
        logo: localizaLogo,
    },
    {
        label: "martins",
        company: "Grupo Martins",
        logo: martinsLogo,
    },
    {
        label: "renner",
        company: "Renner",
        logo: rennerLogo,
    },
    {
        label: "estacio",
        company: "Estacio",
        logo: estacioLogo,
    },
    {
        label: "drogasil",
        company: "Raia Drogasil",
        logo: raiaDrogasilLogo,
    },
    {
        label: "estapar",
        company: "Estapar",
        logo: estaparLogo,
    },
    {
        label: "tribanco",
        company: "Tribanco",
        logo: tribancoLogo,
    },
]