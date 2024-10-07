import bannerImage from '../../../../../../../resources/img/new-home-image.png'
import HomeMainBannerMobile from '../mobile/HomeMainBannerMobile'
import { NewHomeBannerImageContainer as BannerImageContainer, NewHomeMainBannerContainer as Container, CTAButton, NewHomeMainContainer as HomeMain, NewHomeMainBaloon } from './styles'

export default function NewHomeMainBanner() {
  return (
    <>
      <Container className="leveHomeMainBannerContainer">
        <HomeMain className='leveHomeMainContainer'>
          <h1 className='homeMainTitle'>Economia de até <span className='highlighted'>20% na conta de luz</span> com energia limpa</h1>
          <h2 className='homeMainSubtitle'>Solução 100% digital da Leve Energia que garante economia mensal na sua conta de luz a partir da produção de energia limpa</h2>
          <h3 className='homeMainDescription'>Sem custos adicionais, sem obras ou instalações e sem fidelidade</h3>

          <CTAButton className='homeMainBannerButton'><span>Calcular meu desconto</span></CTAButton>
        </HomeMain>

        <NewHomeMainBaloon>
          <p>Você economizou <span className='hihglighted'>R$42,50</span> nesse mês. Com a Leve, você já ajudou a reduzir 1.450kg da emissão de CO2 que equivale a <span className='hihglighted'>4 árvores plantadas.</span></p>
        </NewHomeMainBaloon>

        <BannerImageContainer className='leveHomeBannerImageContainer' image={bannerImage} />
      </Container>

      <HomeMainBannerMobile />
    </>
  )
}