import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { newHomeBoxes } from '@/app/utils/helper/home/homeBoxesHelper';
import bannerImage from "../../../../../../resources/img/new-home-image.png";
import { HomeSecondaryBannerContainerMobile as BannerImageMobile, MobileBoxesContainer as BoxesContainer, CTAButtonDiscount, CTAButtonEconomy, DiscountButtonContainer, EconomyButtonContainer, HomeBenefitBox, HomeBoxesBaloon, HomeBoxesMobileBenefitsContainer, HomeSecondaryBoxesContainerMobile, MobileBox } from './styles';

export default function HomeBoxesMobile() {
    return (
        <HomeSecondaryBoxesContainerMobile className='homeSecondaryBoxesContainerMobile'>

            <HomeBoxesBaloon className='homeBoxesBaloonMobile'>
                <p>Você economizou <span className='hihglighted'>R$42,50</span> nesse mês e já ajudou a reduzir 1.450kg da emissão de CO2 que equivale a <span className='hihglighted-final'>4 árvores plantadas.</span></p>
            </HomeBoxesBaloon>

            <BannerImageMobile image={bannerImage} className='homeSecondaryBannerImage'>
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

            <HomeBoxesMobileBenefitsContainer className='homeSecondaryBoxesBenefitsContainer'>
                <h6 className='homeBoxesBenefitsTitle'>Sua conta de luz mais Leve</h6>
                <HomeBenefitBox className='homeSecondaryBenefitBox'>
                    <p className='title'>Isenção da bandeira tarifária</p>
                    <p className='subtitle'>Só com a Leve Energia você não paga pelo adicional de bandeira tarifária em períodos de seca ou crises</p>
                </HomeBenefitBox>
                <HomeBenefitBox className='homeSecondaryBenefitBox'>
                    <p className='title'>Benefício empresarial</p>
                    <p className='subtitle'>Descontos especiais e benefícios únicos para colaboradores de empresas que possuem nosso plano empresarial</p>
                </HomeBenefitBox>
            </HomeBoxesMobileBenefitsContainer>

            <DiscountButtonContainer className='homeSecondaryMobileButtonContainer'>
                <CTAButtonDiscount onClick={() => handleScrollToId("calculateYourEconomy")}><span>Calcular meu desconto</span></CTAButtonDiscount>
            </DiscountButtonContainer>

        </HomeSecondaryBoxesContainerMobile>
    )
}