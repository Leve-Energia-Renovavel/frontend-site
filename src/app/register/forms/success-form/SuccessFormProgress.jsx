import { Typography, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";

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
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '1rem 0' }}>
            <Typography variant="body1" component="h2" sx={{ fontWeight: 'bold', color: '#FFD300', marginRight: '1rem' }}>Progresso: </Typography>
            <LinearProgress
                variant="buffer"
                valueBuffer={100}
                value={progress} sx={{
                    height: '.75rem',
                    width: '40vw',
                    borderRadius: 5,
                    '& .MuiLinearProgress-colorPrimary': {
                        backgroundColor: 'lightblue'
                    },
                    '& .MuiLinearProgress-barColorPrimary': {
                        backgroundColor: '#FFD300'
                    },
                }} />
        </div>
    );
}