"use client"

import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums'
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils'
import bannerImage from '@/resources/img/new-home-image.webp'
import Image from 'next/image'
import infoJson from '../../../../../../../public/info.json'
import checkIcon from '../../../../../../resources/icons/small/leve-icon-new-home-check-small.webp'

import HomeMainBannerMobile from './mobile/HomeMainBannerMobile'
import { NewHomeBannerImageContainer as BannerImageContainer, NewHomeMainBannerContainer as Container, CTAButton, NewHomeMainDescriptionContainer as DescriptionContainer, NewHomeMainContainer as HomeMain, NewHomeMainBaloon } from './styles'

export default function NewHomeMainBanner() {

  const texts = infoJson.home

  return (
    <>
      <Container className="leveHomeMainBannerContainer">
        <HomeMain className='leveHomeMainContainer'>
          <h1 className='homeMainTitle'>{texts.title}<span className='highlighted'>{texts.cheaper}</span>{texts.withClearEnergy}</h1>
          <h2 className='homeMainSubtitle'>{texts.subtitle}</h2>

          <DescriptionContainer className='leveHomeMainBannerDescriptionContainer'>
            <Image src={checkIcon} alt='checkIcon' className='checkIcon'
              width={36}
              height={36}
              unoptimized={true}
              quality={1} />
            <h3 className='homeMainDescription'>{texts.description}</h3>
          </DescriptionContainer>

          <CTAButton
            className='homeMainBannerButton'
            aria-label="Quero me cadastrar"
            onClick={() => handleScrollToId(HOME_FORM_ID)}>
            <span>Quero me cadastrar</span>
          </CTAButton>
        </HomeMain>

        <NewHomeMainBaloon className='leveHomeBannerBaloon'>
          <p>Você economizou <span className='hihglighted'>R$42,50</span> nesse mês!</p>
          <p>Sua ajuda ao meio ambiente equivale a <span className='hihglighted'>4 árvores plantadas.</span></p>
        </NewHomeMainBaloon>

        <BannerImageContainer className='leveHomeBannerImageContainer'>
          <Image src={bannerImage} alt='leveHomeBanner' className='leveHomeBannerImage' priority={true} />
        </ BannerImageContainer>
      </Container>

      {/* Mobile content here! */}
      <HomeMainBannerMobile />
    </>
  )
}