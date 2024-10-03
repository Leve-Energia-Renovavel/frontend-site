
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { homeTutorialCardsMobile } from '@/app/utils/helper/homeBoxesHelper';
import Image from 'next/image';
import { ButtonContainer, HomeTutorialCard as Card, HomeTutorialCardContainer as CardContainer, HomeTutorialContainer as Container, HomeTutorialContent as Content, CTAButton } from './styles';

export default function NewHomeTutorial() {
    return (
        <>
            <Container className='leveTutorialContainer'>
                <Content className='leveTutorialContent'>
                    <h6 className='leveTutorialTitle'>Como funciona a Leve Energia</h6>
                    <CardContainer className='cardContainer'>
                        {homeTutorialCardsMobile.map((card, index) => {
                            return (
                                <Card key={index} className={`cardMobile-${index}`}>
                                    <Image src={card.icon} className="cardIcon" alt={card.description} loading="lazy" />
                                    <p className='cardTitle'>{`${card.title}`}</p>
                                    <p className='cardDescription'>{card.description}</p>
                                </Card>
                            )
                        })}
                    </CardContainer>

                    <ButtonContainer>
                        <CTAButton onClick={() => handleScrollToId("leadFormMobile")}><span>Calcular minha economia</span></CTAButton>
                    </ButtonContainer>
                </Content>
            </Container>
        </>
    )
}