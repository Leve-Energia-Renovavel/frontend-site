"use client"

import { useStoreHome } from '@/app/hooks/stores/home/useStoreHome'
import { HOME_FORM_ID, USER_TYPE } from '@/app/pages/enums/globalEnums'
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils'
import { newHomeBoxes } from '@/app/utils/helper/home/homeBoxesHelper'
import companyBannerImage from '../../../../../../resources/img/large/leve-company-image-large.webp'
import homeBannerImage from '../../../../../../resources/img/large/leve-family-playing-image-large.webp'
import HomeBoxesMobile from '../mobile/HomeBoxesMobile'
import { BoxCard, BoxesContainer, ButtonContainer, NewHomeBoxesContainer as Container, NewHomeBoxesContent as Content, HomeBoxCompany, HomeBoxesCTAButton, HomeBoxHome, HomeBoxesUserTypeContainer as UserTypeContainer } from './styles'
export default function NewHomeBoxes() {

    const storeHome = useStoreHome()

    const handleSelectUserTypeAndScroll = (usertype) => {
        storeHome.changeUserType(usertype)
        handleScrollToId(HOME_FORM_ID)
    }
    return (
        <>
            <Container className="leveHomeBoxesContainer">
                <h4 className='homeBoxesTitle'>Vantagens em ser Leve</h4>
                <h3 className='homeBoxesSubTitle'>Mais economia e mais facilidades</h3>

                <Content className='leveHomeBoxesContent'>
                    <UserTypeContainer className='leveHomeBoxesUserTypeContainer'>
                        <HomeBoxHome className={"leveHomeBoxHome"} bannerImage={homeBannerImage} onClick={() => handleSelectUserTypeAndScroll(USER_TYPE.PF)}>
                            <p className='leveHomeBoxForYourHome'>Para sua casa</p>
                        </HomeBoxHome>
                        <HomeBoxCompany className={"leveHomeBoxCompany"} bannerImage={companyBannerImage} onClick={() => handleSelectUserTypeAndScroll(USER_TYPE.PJ)}>
                            <p className='leveHomeBoxForYourCompany'>Para sua empresa</p>
                        </HomeBoxCompany>
                    </UserTypeContainer>

                    <BoxesContainer className="homeBoxesContainer">
                        {newHomeBoxes.map((box, index) => {
                            return (
                                <BoxCard key={index} className={`boxCard-${index}`}>
                                    <p className='boxTitle'>{box.title}</p>
                                    {box.subtitle}
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
            <HomeBoxesMobile />
        </>
    )
}

