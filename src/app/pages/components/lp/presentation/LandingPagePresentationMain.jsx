"use client"

import { homeTutorialCards } from '@/app/utils/helper/homeBoxesHelper';
import { landingPagePresentationBoxes } from '@/app/utils/helper/landingPageHelper';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import Image from 'next/image';
import percentageImage from "../../../../../resources/icons/large/icone-background-percentage-white.svg";
import sunImage from "../../../../../resources/icons/small/ellipse-small.webp";
import companyCardImage from "../../../../../resources/img/large/leve-confraternizacao-image-large.webp";
import homeCardImage from "../../../../../resources/img/large/leve-familia-brincando-image-large.webp";
import bannerImage from '../../../../../resources/img/large/leve-pai-e-filho-image-large.webp';
import { LandingPageContainer as Container, FifthSectionButton, FifthSectionContainer, FifthSectionContent, FourthSectionImagesContainer, FourthSectionImagesContent, LandingPageMainBanner as MainBanner, MainBannerButton, LandingPageMainContent as MainContent, MoreAboutLeveFooter, SecondSectionBox, SecondSectionBoxesContainer, SecondSectionButton, SecondSectionContainer, SecondSectionContent, SecondSectionContentTitleContainer, SecondSectionTitleContainer, ThirdSectionCard, ThirdSectionCardContainer, ThirdSectionContainer, ThirdSectionDescription, ThirdSectionIcon, ThirdSectionTitle } from './styles';

export default function LandingPagePresentationMain() {

    const texts = {
        together: "Junto com você, a nossa energia ",
        takeCare: "cuida do planeta",
        yourPocketToo: " - e também do seu bolso",
        lighterBill: "Deixe sua conta de luz mais leve com até ",
        twentyPercent: "20% de economia",
        everyMonth: " todos os meses.",
        simulate: "Faça uma simulação",
        moreAboutLeve: "Mais sobre a Leve",
        ourSolutions: "Nossas soluções",
        weHelpYou: "Nós te ajudamos a ",
        saveTwentyPercent: "economizar até 20% na conta de luz",
        everyMonthTo: " todos os meses, para que você tenha dinheiro extra para viver momentos especiais ao lado de quem é importante para você.",
        forYourHouse: "Para a sua residência",
        forYourCompany: "Para o seu comércio ou empresa",
    }
    return (
        <Container>
            <MainBanner>
                <MainContent>
                    <h1>{texts.together}<span className='highlighted'>{texts.takeCare}</span>{texts.yourPocketToo}</h1>
                    <h2>{texts.lighterBill}<span className='underlined'>{texts.twentyPercent}</span>{texts.everyMonth}</h2>
                    <MainBannerButton
                        className='mainButton'
                        endIcon={<ArrowForwardIcon />}>
                        <span>{texts.simulate}</span>
                    </MainBannerButton>
                    <MoreAboutLeveFooter>
                        <ArrowCircleDownIcon className='arrowIcon' />
                        <p className='moreAboutLeve'>{texts.moreAboutLeve}</p>
                    </MoreAboutLeveFooter>
                </MainContent>
                <Image className='bannerImage' alt="imagem de pai e filho felizes" src={bannerImage} priority />
            </MainBanner>



            <SecondSectionContainer>
                <SecondSectionTitleContainer>
                    <h3 className='yellow'>Sem obras. Sem instalações.</h3>
                    <h3>E sem gastar R$1 a mais sequer.</h3>
                </SecondSectionTitleContainer>

                <SecondSectionContent image={sunImage}>
                    <SecondSectionContentTitleContainer>
                        <h4>Venha ser Leve com a energia do futuro</h4>
                        <SecondSectionButton
                            endIcon={<ArrowForwardIcon />}>
                            <span>{texts.simulate}</span>
                        </SecondSectionButton>
                    </SecondSectionContentTitleContainer>

                    <SecondSectionBoxesContainer >
                        {landingPagePresentationBoxes.map((box, index) => {
                            return (
                                <SecondSectionBox key={index}>
                                    <div className='iconContainer'>
                                        <Image src={box.icon} alt={box.description} priority={false} loading='lazy' />
                                    </div>
                                    <p className='boxDescription'>{box.description}</p>
                                </SecondSectionBox>
                            )
                        })}
                    </SecondSectionBoxesContainer>
                </SecondSectionContent>
            </SecondSectionContainer>

            <ThirdSectionContainer>
                <h6>{texts.ourSolutions}</h6>
                <p>{texts.weHelpYou} <span className='highlighted'>{texts.saveTwentyPercent}</span>{texts.everyMonthTo}</p>
                <ThirdSectionCardContainer>
                    {homeTutorialCards.map((card, index) => {
                        return (
                            <ThirdSectionCard key={index}>
                                <ThirdSectionIcon>
                                    <Image src={card.icon} className="titleIcon" alt={card.description} loading="lazy" />
                                </ThirdSectionIcon>
                                <div className='invisible'>
                                    <ThirdSectionTitle>
                                        <Typography variant="subtitle1" className='cardTitle'>{`${index + 1}.`}</Typography>
                                    </ThirdSectionTitle>
                                    <ThirdSectionDescription>
                                        <Typography variant="subtitle1" className='cardDescription'>{card.description}</Typography>
                                    </ThirdSectionDescription>
                                </div>
                            </ThirdSectionCard>
                        )
                    })}
                </ThirdSectionCardContainer>
            </ThirdSectionContainer>

            <FourthSectionImagesContainer>
                <FourthSectionImagesContent image={homeCardImage}  >
                    <h6 variant="subtitle1">{texts.forYourHouse}</h6>
                    <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                </FourthSectionImagesContent>
                <FourthSectionImagesContent invertedBox={true} image={companyCardImage}>
                    <h6 variant="subtitle1">{texts.forYourCompany}</h6>
                    <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                </FourthSectionImagesContent>
            </FourthSectionImagesContainer>


            <FifthSectionContainer >
                <FifthSectionContent image={percentageImage}>
                    <h6>Clique no botão abaixo e faça uma simulação real da sua economia:</h6>
                    <FifthSectionButton
                        endIcon={<ArrowForwardIcon />}>
                        <span>{texts.simulate}</span>
                    </FifthSectionButton>

                </FifthSectionContent>
            </FifthSectionContainer>



        </Container>
    )
}