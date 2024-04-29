import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import checkIcon from "../../../../resources/icons/small/check-icon-yellow-small.svg";
import { FormButton, NewSuccessFormContent } from './styles';

export default function NewSuccessContent() {

    const router = useRouter()

    const handleDashboard = () => {
        router.push(`/panel`)
    }
    return (
        <NewSuccessFormContent >
            <Image
                className='checkIcon'
                loading="lazy"
                
                src={checkIcon}
                alt="Assinaturas feitas com sucesso!"
            />
            <Typography variant='h1'>Assinaturas feitas com sucesso!</Typography>
            <Typography className='info'><span className='bold'>Agora é só desfrutar da economia e dos benefícios de ser Leve.</span> Clique no botão abaixo e acesse a sua mais nova conta Leve.</Typography>
            <FormButton
                onClick={() => handleDashboard()}
                startIcon={<PermIdentityIcon className="buttonIcon" />}>
                <span>Acessar minha conta</span>
            </FormButton>
        </NewSuccessFormContent>
    )
}