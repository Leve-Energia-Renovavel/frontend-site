import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { newHomeBoxes } from '@/app/utils/helper/homeBoxesHelper';
import bannerImage from "../../../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large-compressed.webp";
import { HomeSecondaryBannerContainerMobile as BannerImageMobile, MobileBoxesContainer as BoxesContainer, ButtonContainer, CTAButton, HomeSecondaryBoxesContainerMobile, MobileBox } from './styles';

export default function HomeBoxesMobile() {
    return (
        <HomeSecondaryBoxesContainerMobile className='homeSecondaryBoxesContainerMobile'>
            <BannerImageMobile image={bannerImage} className='homeSecondaryBannerImage'>
                <h2 className='homeBoxesSecondarySectionTitle'>Benefícios que você terá sendo Leve</h2>
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

            <ButtonContainer className='homeSecondaryMobileButtonContainer'>
                <CTAButton onClick={() => handleScrollToId("leadFormMobile")}><span>Calcular minha economia</span></CTAButton>
            </ButtonContainer>

        </HomeSecondaryBoxesContainerMobile>
    )
}