import { newBackground } from "@/app/pages/styles"
import simpleIcon from "../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import sustainableIcon from "../../../resources/icons/small/leve-folha-icone-orange-small.svg"
import safeIcon from "../../../resources/icons/small/leve-protecao-orange-icone-small.svg"
import fastIcon from "../../../resources/icons/small/leve-raio-orange-icone-small.svg"

import solarPanelIcon from "../../../resources/icons/large/leve-solar-panel-orange-icon.svg"
import rechargingIcon from "../../../resources/icons/large/leve-recharging-orange-icon.svg"
import percentageEconomyIcon from "../../../resources/icons/large/leve-percentage-economy-orange.svg"
import appTapIcon from "../../../resources/icons/large/leve-app-tap-orange-icon.svg"
import engineerIcon from "../../../resources/icons/large/leve-happy-engineer-orange-icon.svg"
import solarEnergyIcon from "../../../resources/icons/large/leve-energy-from-the-sun-orange-icon.svg"

export const landingPageBoxes = [
    {
        icon: fastIcon,
        title: "É rápido",
        description: "Adesão 100% digital em apenas 3 cliques.",
        backgroundColor: newBackground.white,
        titleColor: newBackground.orange,
        descriptionColor: newBackground.orange
    },
    {
        icon: simpleIcon,
        title: "Simples",
        description: "Sem obras, instalações ou custos adicionais.",
        backgroundColor: newBackground.white,
        titleColor: newBackground.orange,
        descriptionColor: newBackground.orange
    },
    {
        icon: safeIcon,
        title: "Seguro",
        description: "A energia chegará para você da mesma forma que chega hoje.",
        backgroundColor: newBackground.white,
        titleColor: newBackground.orange,
        descriptionColor: newBackground.orange
    },
    {
        icon: sustainableIcon,
        title: "Sustentável",
        description: "Energia solar limpa e 100% renovável.",
        backgroundColor: newBackground.white,
        titleColor: newBackground.orange,
        descriptionColor: newBackground.orange
    },

]

export const landingPagePresentationBoxes = [
    {
        icon: solarPanelIcon,
        description: "Usinas referência na geração de energia solar",
    },
    {
        icon: rechargingIcon,
        description: "Alta tecnologia e portfólio de soluções",
    },
    {
        icon: percentageEconomyIcon,
        description: "Economia de verdade para o seu bolso",
    },
    {
        icon: appTapIcon,
        description: "Adesão 100% digital e sem burocracias",
    },
    {
        icon: engineerIcon,
        description: "Time altamente qualificado",
    },
    {
        icon: solarEnergyIcon,
        description: "Energia limpa e 100% renovável",
    },

]