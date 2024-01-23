import { Typography } from "@mui/material"
import { BannerSubTitleContainer, BannerTitleContainer } from "./styles"

export default function BannerTitle() {
    return (
        <>
            <BannerTitleContainer>
                <Typography variant="body1" component="h1">Já pensou em
                    <span className="highlighted"> pagar menos </span>
                    <span>na conta de luz consumindo </span>
                    <span className="highlighted">energia limpa</span>
                    <span>?</span>
                </Typography>
            </BannerTitleContainer>
            <BannerSubTitleContainer>
                <Typography className="subtitle" >A partir de uma fonte de energia totalmente sustentável – o Sol – nós levamos até a sua casa, apartamento ou pequeno negócio uma economia de até 10% na sua conta de luz.</Typography>
            </BannerSubTitleContainer>
        </>

    )
}
