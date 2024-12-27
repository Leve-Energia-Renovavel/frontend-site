import { PATH_TO } from '@/app/pages/enums/globalEnums';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ModalCloseButton() {

    const router = useRouter()

    return (
        <div style={{ marginLeft: 'auto' }}>
            <IconButton onClick={() => router.push(PATH_TO.HOME)}>
                <CloseIcon />
            </IconButton>
        </div>
    )
}