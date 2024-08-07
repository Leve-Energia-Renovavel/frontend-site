"use client"

import { useStoreMainInstallation } from '@/app/hooks/useStore'
import { factoryInfos } from '@/app/utils/helper/newDashboardHelper'
import Image from 'next/image'
import leveTopBanner from '../../../../../resources/img/large/leve-top-banner-image-large.png'
import factoryBannerImage from '../../../../../resources/img/small/factory-banner-image-small.png'
import { CardsContainer, FactoryContainer as Container, FactoryDescription, FactoryInfoContent, FactoryMainContent, MainContentCard, MainContentInfo } from './styles'

export default function FactoryContent() {

  const storeMainInstallation = useStoreMainInstallation()
  const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))
  
  const { hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

  return (
    <>
      {hasStartedBilling ?
        (<Container className="factoryContainer">
          <FactoryInfoContent className="factoryInfoContent" image={factoryBannerImage}>
            <FactoryDescription className="factoryDescription">
              <p>Sua energia é gerada por:</p>
              <p className='factoryName'>Usina Uberlândia II</p>
              <p className='factoryLocation'>Uberlândia, Minas Gerais</p>
            </FactoryDescription>
          </FactoryInfoContent>

          <FactoryMainContent className="factoryMainContent">
            <MainContentInfo className="factoryMainContentInfo">
              <p className='infoDescription'>Você faz parte de uma comunidade que ajuda a criar um futuro mais leve e renovável:</p>
              <Image src={leveTopBanner} alt='você mais Leve' className='leveTopBanner' />
            </MainContentInfo>

            <CardsContainer className="factoryCardsContainer">
              {factoryInfos?.map((info, index) => {
                return (
                  <MainContentCard key={info.title} className={`factoryCard-${index}`}>
                    {info.icon}
                    <p className='infoTitle'>{info.title}</p>
                    <p className='infoValue'>{info.value}</p>
                  </MainContentCard>
                )
              })}
            </CardsContainer>

          </FactoryMainContent>
        </Container>)
        : <></>
      }
    </>


  )
}