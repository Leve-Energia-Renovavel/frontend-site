import { Typography } from "@mui/material"
import { AboutTitleContainer } from "./styles"

export default function AboutTitle() {
    return (
        <AboutTitleContainer>
            <Typography variant="subtitle1">A LEVE</Typography>
            <Typography variant="body1" component="h1">O
                <span className="highlighted"> futuro da energia </span>
                <span>chegou e ele é </span>
                <span className="highlighted">Leve</span>
            </Typography>
        </AboutTitleContainer>
    )
}
