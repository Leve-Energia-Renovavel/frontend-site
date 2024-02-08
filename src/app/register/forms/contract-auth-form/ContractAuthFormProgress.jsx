import { LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ContractAuthFormProgressContainer as Container } from "./styles";

export default function ContractAuthFormProgress() {

    const [progress, setProgress] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress < 90 ? prevProgress + 10 : prevProgress + 0);
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