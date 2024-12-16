
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { homeTutorialCardsMobile } from '@/app/utils/helper/home/homeBoxesHelper';
import Image from 'next/image';
import aneelIcon from '../../../../../../resources/icons/icon-aneel-orange-gradient.svg';
import { HomeTutorialAneelCard as AneelCard, HomeTutorialAneelCardContent as AneelCardContent, ButtonContainer, ButtonContainerDesktop, HomeTutorialCard as Card, HomeTutorialCardContainer as CardContainer, HomeTutorialContainer as Container, CTAButton, Divider, HomeTutorialCTAButtonDesktop, HomeTutorialTitleContainer } from './styles';

export default function NewHomeTutorial() {
    return (
        <Container className='leveTutorialContainer'>
            <HomeTutorialTitleContainer className='leveTutorialTitleContainer'>
                <h5 className='leveTutorialTitle'>Como a nossa economia chega até você</h5>
                <h6 className='leveTutorialSubtitle'>Entregamos economia e sustentabilidade com segurança</h6>
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

            <ButtonContainer className='leveTutorialButtonContainer'>
                <CTAButton onClick={() => handleScrollToId("calculateYourEconomy")}><span>Calcular minha economia</span></CTAButton>
            </ButtonContainer>

            <Divider>
                <AneelCard className='leveTutorialAneelCard'>
                    <Image src={aneelIcon} className="aneelIcon" alt={`Logo da Aneel`} loading="lazy" />

                    <AneelCardContent className='leveTutorialAneelCardContent'>
                        <p className='title'>Aprovado pela ANEEL</p>
                        <p className='description'>Fazemos parte do sistema de Geração Distribuída regulado pela ANEEL com base na lei 14.300/22.</p>
                    </AneelCardContent>
                </AneelCard>

            </Divider>
        </Container>
    )
}