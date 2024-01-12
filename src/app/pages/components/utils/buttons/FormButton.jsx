import { Button } from '@mui/material';
import { background } from '@/app/pages/styles';

export default function FormButton(props) {
    return (
        <>
            <Button className="formInput" variant="outlined" type="submit"
                sx={{
                    textTransform: 'none',
                    fontSize: 18,
                    color: background.light,
                    borderColor: background.lightBorder,
                    backgroundColor: background.primary,
                    paddingY: 1,
                    paddingX: 4,
                    height: '3rem',
                    borderRadius: '12px',
                    "&:hover": {
                        backgroundColor: background.secondary,
                        color: background.primary,
                        borderColor: background.lightBorder,
                    },
                }} >{props.text}</Button >
        </>
    )
}