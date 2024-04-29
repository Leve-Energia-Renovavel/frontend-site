import { newBackground } from "@/app/pages/styles"
import simpleIcon from "../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import sustainableIcon from "../../../resources/icons/small/leve-folha-icone-small.svg"
import safeIcon from "../../../resources/icons/small/leve-protecao-white-icone-small.svg"
import fastIcon from "../../../resources/icons/small/leve-raio-yellow-icone-small.svg"

export const landingPageBoxes = [
    {
        icon: fastIcon,
        title: "É rápido",
        description: "Adesão 100% digital em apenas 3 cliques.",
        backgroundColor: newBackground.white,
        titleColor: newBackground.yellow,
        descriptionColor: newBackground.white
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