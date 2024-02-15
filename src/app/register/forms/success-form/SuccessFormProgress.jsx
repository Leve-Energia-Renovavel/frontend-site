/* eslint-disable react-hooks/exhaustive-deps */
import { Typography, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { SuccessFormProgressContainer as Container } from "./styles";

export default function SuccessFormProgress(props) {


    const [progress, setProgress] = useState(80);
    const { finishedProgress } = props

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
        }, 600);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            finishedProgress()
        }
    }, [progress]);

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