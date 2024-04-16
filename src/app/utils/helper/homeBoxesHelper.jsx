import fastIcon from "../../../resources/icons/small/leve-raio-yellow-icone-small.svg"
import simpleIcon from "../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import safeIcon from "../../../resources/icons/small/leve-protecao-yellow-icone-small.svg"
import sustainableIcon from "../../../resources/icons/small/leve-folha-icone-small.svg"
import { newBackground } from "@/app/pages/styles"

import signIcon from "../../../resources/icons/small/leve-energia-clique-icone-small.png"
import solarPanelIcon from "../../../resources/icons/small/leve-painel-solar-icone-small.png"
import batteryIcon from "../../../resources/icons/small/leve-recarregar-energia-icone-small.png"
import economyIcon from "../../../resources/icons/small/leve-economia-icone-small.png"

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
        titleColor: newBackground.yellow,
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