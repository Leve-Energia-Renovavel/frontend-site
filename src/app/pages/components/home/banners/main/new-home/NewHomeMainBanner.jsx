import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums'
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils'
import checkIcon from '@/resources/icons/small/leve-icon-new-home-check-small.png'
import bannerImage from '@/resources/img/new-home-image.png'
import Image from 'next/image'
import HomeMainBannerMobile from '../mobile/HomeMainBannerMobile'
import { NewHomeBannerImageContainer as BannerImageContainer, NewHomeMainBannerContainer as Container, CTAButton, NewHomeMainDescriptionContainer as DescriptionContainer, NewHomeMainContainer as HomeMain, NewHomeMainBaloon } from './styles'

export default function NewHomeMainBanner() {
  return (
    <>
      <Container className="leveHomeMainBannerContainer">
        <HomeMain className='leveHomeMainContainer'>
          <h1 className='homeMainTitle'>Economia de até <span className='highlighted'>20% na conta de luz</span> com energia limpa.</h1>
          <h2 className='homeMainSubtitle'>Solução 100% digital da Leve Energia que garante economia mensal para sua casa e também para seu negócio.</h2>

          <DescriptionContainer className='leveHomeMainBannerDescriptionContainer'>
            <Image src={checkIcon} alt='checkIcon' className='checkIcon' />
            <h3 className='homeMainDescription'>Acesso a energia solar sem precisar instalar equipamentos, sem custos extras e sem investimento inicial.</h3>
          </DescriptionContainer>

          <CTAButton className='homeMainBannerButton' onClick={() => handleScrollToId(HOME_FORM_ID)}><span>Calcular meu desconto</span></CTAButton>
        </HomeMain>

        <NewHomeMainBaloon>
          <p>Você economizou <span className='hihglighted'>R$42,50</span> nesse mês!</p>
          <p>Sua ajuda ao meio ambiente equivale a <span className='hihglighted'>4 árvores plantadas.</span></p>
        </NewHomeMainBaloon>

        <BannerImageContainer className='leveHomeBannerImageContainer' image={bannerImage} />
      </Container>

      <HomeMainBannerMobile />
    </>
  )
}