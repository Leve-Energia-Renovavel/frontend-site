import { newBackground } from "@/app/pages/styles"
import simpleIcon from "../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import sustainableIcon from "../../../resources/icons/small/leve-folha-icone-small.svg"
import safeIcon from "../../../resources/icons/small/leve-protecao-white-icone-small.svg"
import fastIcon from "../../../resources/icons/small/leve-raio-yellow-icone-small.svg"

import economyIcon from "../../../resources/icons/small/leve-economia-icone-small.png"
import signIcon from "../../../resources/icons/small/leve-energia-clique-icone-small.png"
import solarPanelIcon from "../../../resources/icons/small/leve-painel-solar-icone-small.png"
import batteryIcon from "../../../resources/icons/small/leve-recarregar-energia-icone-small.png"

import touchpadIcon from "../../../resources/icons/large/touchpad.png"
import solarEnegyIcon from "../../../resources/icons/large/solar_energy.png"
import getRevenueIcon from "../../../resources/icons/large/get_revenue.png"
import guaranteeIcon from "../../../resources/icons/large/guarantee.png"

import solarPanelConnectedPollIcon from "../../../resources/icons/large/leve-solar-panel-connected-to-poll.svg"
import flowerLightIcon from "../../../resources/icons/large/leve-flower-light-large.svg"
import economyRenewalIcon from "../../../resources/icons/large/leve-economy-renewal.svg"

import localizaLogo from "../../../resources/img/small/logo-localiza-small.png"
import lorealLogo from "../../../resources/img/small/logo-loreal-small.png"
import martinsLogo from "../../../resources/img/small/logo-martins-small.png"
import timLogo from "../../../resources/img/small/logo-tim-small.png"
import tribancoLogo from "../../../resources/img/small/logo-tribanco-small.png"

import estacioLogo from "../../../resources/img/small/logo-estacio-small.png"
import estaparLogo from "../../../resources/img/small/logo-estapar-small.png"
import raiaDrogasilLogo from "../../../resources/img/small/logo-raia-drogasil-small.png"
import rennerLogo from "../../../resources/img/small/logo-renner-small.png"

export const homeBoxes = [
    {
        icon: fastIcon,
        title: "É rápido",
        description: "Adesão 100% digital em apenas 3 cliques.",
        backgroundColor: newBackground.orange,
        titleColor: newBackground.yellow,
        descriptionColor: newBackground.white
    },
    {
        icon: simpleIcon,
        title: "Simples",
        description: "Sem obras, instalações ou custos adicionais.",
        backgroundColor: newBackground.yellow,
        titleColor: newBackground.orange,
        descriptionColor: newBackground.orange
    },
    {
        icon: safeIcon,
        title: "Seguro",
        description: "A energia chegará para você da mesma forma que chega hoje.",
        backgroundColor: newBackground.orange,
        titleColor: newBackground.white,
        descriptionColor: newBackground.white
    },
    {
        icon: sustainableIcon,
        title: "Sustentável",
        description: "Energia solar limpa e 100% renovável.",
        backgroundColor: newBackground.green,
        titleColor: newBackground.yellow,
        descriptionColor: newBackground.white
    },

]

export const newHomeBoxes = [
    {
        title: "Economia mensal",
        subtitle: <p className="subtitle"><span className="highlighted">Desconto de até 20%</span> na conta de luz todo mês</p>
    },
    {
        title: "Energia limpa e renovável",
        subtitle: <p className="subtitle">Nossa energia é produzida a partir de <span className="highlighted">fontes solares</span></p>
    },
    {
        title: "Simples e rápido",
        subtitle: <p className="subtitle">Sem obras, sem instalação e <span className="highlighted">sem custos adicionais</span></p>
    },
    {
        title: "Cancele quando quiser",
        subtitle: <p className="subtitle">O cancelamento também é <span className="highlighted">100% digital</span> e simples</p>
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
        description: "A energia limpa que produzimos é inserida na rede da sua distribuidora que continua responsável pelo seu serviço de energia",
    },
    {
        icon: getRevenueIcon,
        title: "Créditos de energia",
        description: "Essa energia se transforma em créditos que abatem parte do seu consumo e deixa sua conta de luz mais barata todo mês",
},
    {
        icon: guaranteeIcon,
        title: "Aprovado pela ANEEL",
        description: "Isso é possível porque fazemos parte do sistema de Geração Distribuída regulado pela ANEEL com base na lei 14.300/22",
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