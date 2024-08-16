import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function ModalCloseButton({ router, hideClose, getBackToHome }) {
    return (
        <div style={{ marginLeft: 'auto' }}>
            {hideClose ?
                <IconButton onClick={() => router.push("/")}>
                    <CloseIcon />
                </IconButton>
                :
                <IconButton onClick={() => getBackToHome()}>
                    <CloseIcon />
                </IconButton>}
        </div>
    )
}