import { Typography, LinearProgress } from "@mui/material"

export default function RegisterFormProgress() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="body1" component="h2" sx={{ color: 'orange' }}>Progresso: </Typography>
            <LinearProgress variant="buffer" valueBuffer={100} value={30} sx={{
                height: '.75rem',
                width: '40vw',
                borderRadius: 5,
                '& .MuiLinearProgress-colorPrimary': {
                    backgroundColor: 'lightblue'
                },
                '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: '#FFD300'
                }
            }} />
        </div>
    );
}