import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { newHomeBoxes } from '@/app/utils/helper/home/homeBoxesHelper';
import bannerImage from "../../../../../../resources/img/new-home-image.webp";
import { HomeSecondaryBannerContainerMobile as BannerImageMobile, MobileBoxesContainer as BoxesContainer, CTAButtonEconomy, EconomyButtonContainer, HomeBoxesBaloon, HomeBoxesContainerMobile, MobileBox } from './styles';
import Image from 'next/image';

export default function HomeBoxesMobile() {
    return (
        <HomeBoxesContainerMobile className='homeMainBoxesContainerMobile'>

            <HomeBoxesBaloon className='homeBoxesBaloonMobile'>
                <p>Você economizou <span className='hihglighted'>R$42,50</span> nesse mês!</p>
                <p>Sua ajuda ao meio ambiente equivale a <span className='hihglighted'>4 árvores plantadas.</span></p>
            </HomeBoxesBaloon>

            <BannerImageMobile className='homeSecondaryBannerContainer'>
                <Image src={bannerImage} alt='leveHomeBanner'
                    className='homeBoxesMobileBannerImage'
                    quality={80}
                    fill
                    priority={true} />
                <h2 className='homeBoxesSecondarySectionTitle'>Vantagens em ser Leve</h2>
            </BannerImageMobile>
            <BoxesContainer className='homeSecondaryBoxesContainer'>
                {newHomeBoxes.map((box, index) => {
                    return (
                        <MobileBox key={box.title} className={`homeSecondaryMobileBox-${index}`}>
                            <p className='title'>{box.title}</p>
                            {box.subtitle}
                        </MobileBox>
                    )
                })}
            </BoxesContainer>

            <EconomyButtonContainer className='homeSecondaryMobileButtonContainer'>
                <CTAButtonEconomy onClick={() => handleScrollToId("calculateYourEconomy")}><span>Calcular minha economia</span></CTAButtonEconomy>
            </EconomyButtonContainer>

        </HomeBoxesContainerMobile>
    )
}