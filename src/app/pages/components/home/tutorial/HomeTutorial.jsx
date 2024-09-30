"use client"


import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { homeTutorialCards, homeTutorialCardsMobile } from '@/app/utils/helper/homeBoxesHelper';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import infoJson from '../../../../../../public/info.json';
import { ButtonContainer, ButtonSimulateYourEconomy, HomeFourthSectionCard as Card, HomeFourthSectionCardContainer as CardContainer, HomeFourthSectionCardContainerMobile as CardContainerMobile, HomeFourthSectionDescription as CardDescription, HomeFourthSectionIcon as CardIcon, HomeFourthSectionCardMobile as CardMobile, HomeFourthSectionTitle as CardTitle, CTAButton, HomeFourthSectionContainer, HomeFourthSectionTitleContainer as TitleContainer } from './styles';

const texts = infoJson.home

export default function TutorialContainer() {

    const router = useRouter()
    const pathname = usePathname()
    const isLP = pathname === "/lp/apresentacao/" ? true : false

    const handlePreSignup = () => {
        const element = document.getElementById('leadForm');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
    }
    return (
        <>
            <HomeFourthSectionContainer id="howLeveWorks">
                <TitleContainer>
                    <Typography variant="subtitle1" className='sectionTitle'>{texts.howItWorks}</Typography>
                </TitleContainer>

                <CardContainer >
                    {homeTutorialCards.map((card, index) => {
                        return (
                            <Card key={index}>
                                <CardIcon>
                                    <Image src={card.icon} className="titleIcon" alt={card.description} loading="lazy" />
                                </CardIcon>
                                <div className='invisible'>
                                    <CardTitle>
                                        <Typography variant="subtitle1" className='cardTitle'>{`${index + 1}.`}</Typography>
                                    </CardTitle>
                                    <CardDescription>
                                        <Typography variant="subtitle1" className='cardDescription'>{card.description}</Typography>
                                    </CardDescription>
                                </div>
                            </Card>
                        )
                    })}
                </CardContainer>

                <CardContainerMobile>
                    {homeTutorialCardsMobile.map((card, index) => {
                        return (
                            <CardMobile key={index}>
                                <Image src={card.icon} className="cardIcon" alt={card.description} loading="lazy" />
                                <p className='cardTitle'>{`${card.title}`}</p>
                                <p className='cardDescription'>{card.description}</p>
                            </CardMobile>
                        )
                    })}


                    <ButtonContainer>
                        <CTAButton onClick={() => handleScrollToId("leadFormMobile")}><span>Calcular minha economia</span></CTAButton>
                    </ButtonContainer>

                </CardContainerMobile>

                <ButtonSimulateYourEconomy onClick={() => isLP ? router.push("/") : handlePreSignup()}>
                    <span>{texts.simulateYourEconomy}</span>
                </ButtonSimulateYourEconomy>
            </HomeFourthSectionContainer>
        </>
    )
}