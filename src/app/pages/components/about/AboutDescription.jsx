import { Typography } from "@mui/material"

export default function AboutDescription() {
    return (
        <>
            <Typography variant="body1" component="subtitle1" className="subtitle1">
                Nosso serviço conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma
                <span className="bold">economina na conta de luz de até 10% e ajudando a construir um meio ambiente mais limpo.</span>
            </Typography>

            <Typography variant="body1" component="subtitle1" className="subtitle2">
                A contratação do serviço acontece pela nossa plataforma, de maneira totalmente
                <span className="bold"> digital e fácil, sem necessidade de nenhum investimento ou obra no seu imóvel.</span>
            </Typography>
        </>

    )
}