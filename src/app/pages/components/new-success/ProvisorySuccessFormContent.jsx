import { Typography } from '@mui/material';
import Image from 'next/image';
import checkIcon from "../../../../resources/icons/small/check-icon-yellow-small.svg";
import { NewSuccessFormContent } from './styles';

export default function ProvisorySuccessFormContent() {

    return (
        <NewSuccessFormContent >
            <Image
                className='checkIcon'
                loading="lazy"

                src={checkIcon}
                alt="Assinaturas feitas com sucesso!"
            />
            <Typography variant='h1'>Recebemos o seu cadastro!</Typography>
            <Typography className='info'><span className='bold'>Em breve entraremos em contato.</span></Typography>
        </NewSuccessFormContent>
    )
}