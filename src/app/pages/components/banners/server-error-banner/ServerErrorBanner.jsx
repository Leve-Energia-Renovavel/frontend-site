"use client"

import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { BannerContainer, ButtonContainer, ContentContainer } from './styles';

export default function ServerErrorBanner() {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Erro no servidor 😥</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Por favor, aguarde e tente novamente mais tarde</Typography>
                <Typography variant="subtitle1" className="subtitle">Não gaste energia à toa, clique no botão abaixo para voltar para a tela inicial. </Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.push("https://wp-homolog.leveenergia.com.br/")}
                    className='backToMainPage'>Voltar para Tela Inicial</Button>
            </ButtonContainer>
        </BannerContainer>
    );
}