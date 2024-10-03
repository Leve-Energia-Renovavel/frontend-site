import React from 'react'
import { NewHomeBannerImageContainer as BannerImageContainer, NewHomeMainBannerContainer as Container, NewHomeMainContainer as HomeMain } from './styles'

export default function NewHomeMainBanner() {
  return (
    <Container className="leveHomeMainBannerContainer">
      <HomeMain className='leveHomeMainContainer'>
        <h1 className='homeMainTitle'>Economia de até <span className='highlighted'>20% na conta de luz</span> com energia limpa</h1>
        <h2 className='homeMainSubtitle'>Solução 100% digital da Leve Energia que garante economia mensal na sua conta de luz a partir da produção de energia limpa</h2>
        <h3 className='homeMainDescription'>Sem custos adicionais, sem obras ou instalações e sem fidelidade</h3>
      </HomeMain>

      <BannerImageContainer className='leveHomeBannerImageContainer'>

      </BannerImageContainer>

    </Container>
  )
}