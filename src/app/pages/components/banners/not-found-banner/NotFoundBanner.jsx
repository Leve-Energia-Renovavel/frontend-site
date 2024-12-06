import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { BannerContainer, ButtonContainer, ContentContainer } from './styles';

export default function NotFoundBanner() {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <h1>Página não encontrada... 😥</h1>
                <h6>Não gaste energia à toa, clique no botão abaixo para voltar para a tela inicial.</h6>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.back()}
                    className='backToMainPage'>Voltar para Tela Anterior</Button>
            </ButtonContainer>
        </BannerContainer>
    );
}