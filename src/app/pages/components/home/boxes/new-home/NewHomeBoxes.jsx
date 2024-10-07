import { handleScrollToId } from '@/app/utils/browser/BrowserUtils'
import { newHomeBoxes } from '@/app/utils/helper/homeBoxesHelper'
import HomeBoxesMobile from '../mobile/HomeBoxesMobile'
import { BoxCard, BoxesContainer, ButtonContainer, NewHomeBoxesContainer as Container, CTAButton } from './styles'

export default function NewHomeBoxes({ isMobile }) {
    return (
        <>
            <Container className="leveHomeBoxesContainer">
                <h4 className='homeBoxesTitle'>Benefícios que você terá sendo Leve</h4>

                <BoxesContainer className="homeBoxesContainer">
                    {newHomeBoxes.map((box, index) => {
                        return (
                            <BoxCard key={index} className={`boxCard-${index}`}>
                                <p className='boxTitle'>{box.title}</p>
                                <span className='boxSubtitle'>{box.subtitle}</span>
                            </BoxCard>
                        )
                    })}
                </BoxesContainer>
                <h6 className='homeBoxesDescription'>Calcule seu desconto e veja quanto você pode economizar</h6>

                <ButtonContainer className="homeBoxesButtonContainer">
                    <CTAButton onClick={() => handleScrollToId(isMobile ? "leadFormMobile" : "leadForm")}><span>Calcular minha economia</span></CTAButton>
                </ButtonContainer>

            </Container>
            <HomeBoxesMobile className='homeMainBoxesContainerMobile' />
        </>
    )
}

