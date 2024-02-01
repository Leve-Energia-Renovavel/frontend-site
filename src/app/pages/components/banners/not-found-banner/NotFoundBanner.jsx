import React from 'react';
import { BannerContainer, ButtonContainer, ContentContainer } from './styles';
import { Button, Typography } from '@mui/material';
import DefaultButton from '../../utils/buttons/DefaultButton';
import { useRouter } from 'next/navigation';

export default function NotFoundBanner() {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Página não encontrada... 😥</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Se não é pra ser Leve, eu nem quero!</Typography>
                <Typography variant="subtitle1" className="subtitle">Não gaste energia à toa, clique no botão abaixo para voltar para a tela inicial. </Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.push("/")}
                    className='backToMainPage'>Voltar para Tela Inicial</Button>
            </ButtonContainer>
        </BannerContainer>
    );
}