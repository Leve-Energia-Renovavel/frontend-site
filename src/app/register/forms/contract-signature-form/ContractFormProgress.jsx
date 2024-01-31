import { Typography, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { RegisterFormProgressContainer as Container } from "./styles";

export default function ContractFormProgress() {

    const [progress, setProgress] = useState(30);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress < 80 ? prevProgress + 10 : prevProgress + 0);
        }, 200);
        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <Container>
            <Typography variant="body1" component="h2">Progresso: </Typography>
            <LinearProgress
                className="progressBar"
                variant="buffer"
                valueBuffer={100}
                value={progress} />
        </Container>
    );
}