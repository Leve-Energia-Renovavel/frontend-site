import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums'
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils'
import { newHomeBoxes } from '@/app/utils/helper/home/homeBoxesHelper'
import companyBannerImage from '../../../../../../resources/img/large/leve-confraternizacao-image-large-compressed.webp'
import homeBannerImage from '../../../../../../resources/img/large/leve-familia-brincando-image-large-compressed.webp'
import HomeBoxesMobile from '../mobile/HomeBoxesMobile'
import { BoxCard, BoxesContainer, ButtonContainer, NewHomeBoxesContainer as Container, NewHomeBoxesContent as Content, CTAButton, HomeBoxCompany, HomeBoxesCTAButton, HomeBoxHome, HomeBoxesUserTypeContainer as UserTypeContainer } from './styles'
export default function NewHomeBoxes() {
    return (
        <>
            <Container className="leveHomeBoxesContainer">
                <h4 className='homeBoxesTitle'>Vantagens em ser Leve</h4>
                <h3 className='homeBoxesSubTitle'>Mais economia e mais facilidades</h3>

                <Content className='leveHomeBoxesContent'>

                    <UserTypeContainer className='leveHomeBoxesUserTypeContainer'>
                        <HomeBoxHome bannerImage={homeBannerImage} onClick={() => handleScrollToId(HOME_FORM_ID)}>
                            <p className='leveHomeBoxForYourHome'>Para sua casa</p>
                        </HomeBoxHome>
                        <HomeBoxCompany bannerImage={companyBannerImage} onClick={() => handleScrollToId(HOME_FORM_ID)}>
                            <p className='leveHomeBoxForYourCompany'>Para sua empresa</p>
                        </HomeBoxCompany>
                    </UserTypeContainer>

                    <BoxesContainer className="homeBoxesContainer">
                        {newHomeBoxes.map((box, index) => {
                            return (
                                <BoxCard key={index} className={`boxCard-${index}`}>
                                    <p className='boxTitle'>{box.title}</p>
                                    <span className='boxSubtitle'>{box.subtitle}</span>
                                </BoxCard>
                            )
                        })}

                        <ButtonContainer className="homeBoxesButtonContainer">
                            <HomeBoxesCTAButton onClick={() => handleScrollToId(HOME_FORM_ID)}><span>Calcular minha economia</span></HomeBoxesCTAButton>
                        </ButtonContainer>

                    </BoxesContainer>
                </Content>
            </Container>

            {/* Mobile content here! */}
            <HomeBoxesMobile className='homeMainBoxesContainerMobile' />
        </>
    )
}

