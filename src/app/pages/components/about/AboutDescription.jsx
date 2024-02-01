import { Typography } from "@mui/material"
import { AboutDescriptionContainer } from "./styles"

export default function AboutDescription() {
    return (
        <AboutDescriptionContainer>
            <Typography variant="subtitle1">
                Nosso serviço conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma
                <span className="bold"> economia na conta de luz de até 10% e ajudando a construir um meio ambiente mais limpo.</span>
            </Typography>

            <Typography variant="subtitle1">
                A contratação do serviço acontece pela nossa plataforma, de maneira totalmente
                <span className="bold"> digital e fácil, sem necessidade de nenhum investimento ou obra no seu imóvel.</span>
            </Typography>
        </AboutDescriptionContainer>

    )
}