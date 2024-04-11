import fastIcon from "../../../resources/icons/small/leve-raio-yellow-icone-small.svg"
import simpleIcon from "../../../resources/icons/small/leve-carregando-orange-icone-small.svg"
import safeIcon from "../../../resources/icons/small/leve-protecao-yellow-icone-small.svg"
import sustainableIcon from "../../../resources/icons/small/leve-folha-icone-small.svg"
import { newBackground } from "@/app/pages/styles"

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