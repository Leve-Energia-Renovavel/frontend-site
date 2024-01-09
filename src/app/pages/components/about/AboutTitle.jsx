import { Typography } from "@mui/material"

export default function AboutTitle() {
    return (
        <div>
            <Typography variant="h1" className="highlightedTitle">A LEVE</Typography>
            <Typography variant="body1" component="h1">O
                <span className="highlighted"> futuro da energia </span>
                <span>chegou e ele é </span>
                <span className="highlighted">Leve</span>
            </Typography>
        </div>
    )
}
