import { Typography } from "@mui/material"

export default function BannerTitle() {
    return (
        <div>
            <Typography variant="body1" component="h1">Já pensou em
                <span className="highlighted"> pagar menos </span>
                <span>na conta de luz consumindo </span>
                <span className="highlighted">energia limpa</span>
                <span>?</span>
            </Typography>

            <Typography variant="subtitle1" className="bannerSubtitle">A partir de uma fonte de energia totalmente sustentável – o Sol – nós levamos até a sua casa, apartamento ou pequeno negócio uma economia de até 10% na sua conta de luz.</Typography>
        </div>
    )
}
