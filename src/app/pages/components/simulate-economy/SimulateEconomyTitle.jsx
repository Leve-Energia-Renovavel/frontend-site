import { Typography } from "@mui/material"
import { SimulateEconomyTitleStyles as TitleContainer } from "./styles"

export default function SimulateEconomyTitle() {
    return (
        <TitleContainer>
            <Typography component="h3">A
                <span className="highlighted"> Leve </span>
                <span> te ajuda a </span>
            </Typography>
            <Typography component="h3">
                <span className="highlighted">economizar </span>
                <span>na conta de luz.</span>
            </Typography>
        </TitleContainer>
    )
}