import { PATH_TO } from '@/app/pages/enums/globalEnums';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function ModalCloseButton({ router, hideClose, getBackToHome }) {
    return (
        <div style={{ marginLeft: 'auto' }}>
            {hideClose ?
                <IconButton onClick={() => router.push(PATH_TO.HOME)}>
                    <CloseIcon />
                </IconButton>
                :
                <IconButton onClick={() => getBackToHome()}>
                    <CloseIcon />
                </IconButton>}
        </div>
    )
}