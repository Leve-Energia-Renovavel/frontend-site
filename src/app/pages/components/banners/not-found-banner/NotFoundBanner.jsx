import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { BannerContainer, ButtonContainer, ContentContainer } from './styles';

export default function NotFoundBanner() {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Página não encontrada... 😥</Typography>
                <Typography variant="subtitle1" className="subtitle">Não gaste energia à toa, clique no botão abaixo para voltar para a tela inicial. </Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.push("https://leveenergia.com.br/")}
                    className='backToMainPage'>Voltar para Tela Inicial</Button>
            </ButtonContainer>
        </BannerContainer>
    );
}