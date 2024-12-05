
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { homeTutorialCardsMobile } from '@/app/utils/helper/home/homeBoxesHelper';
import Image from 'next/image';
import { ButtonContainer, HomeTutorialCard as Card, HomeTutorialCardContainer as CardContainer, HomeTutorialContainer as Container, HomeTutorialContent as Content, CTAButton, HomeTutorialAneelCard as AneelCard, HomeTutorialTitleContainer } from './styles';
import aneelIcon from '../../../../../../resources/icons/icon-aneel-orange-gradient.svg'

export default function NewHomeTutorial() {
    return (
        <>
            <Container className='leveTutorialContainer'>
                <Content className='leveTutorialContent'>
                    <HomeTutorialTitleContainer className='leveTutorialTitleContainer'>
                        <h6 className='leveTutorialTitle'>Como a nossa economia chega até você</h6>
                    </HomeTutorialTitleContainer>
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

                    <AneelCard className='leveTutorialAneelCard'>
                        <Image src={aneelIcon} className="aneelIcon" alt={`Logo da Aneel`} loading="lazy" />
                        <p className='title'>Aprovado pela ANEEL</p>
                        <p className='description'>Fazemos parte do sistema de Geração Distribuída regulado pela ANEEL com base na lei 14.300/22</p>

                        <ButtonContainer className='leveTutorialButtonContainer'>
                            <CTAButton onClick={() => handleScrollToId("calculateYourEconomy")}><span>Calcular minha economia</span></CTAButton>
                        </ButtonContainer>
                    </AneelCard>

                </Content>
            </Container>
        </>
    )
}