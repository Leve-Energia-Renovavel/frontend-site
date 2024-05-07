"use client"

import { landingPagePresentationBoxes, lpPresentationVisionBoxes } from '@/app/utils/helper/landingPageHelper';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import percentageImage from "../../../../../resources/icons/large/icone-background-percentage-white.svg";
import sunImage from "../../../../../resources/icons/small/ellipse-small.webp";
import companyCardImage from "../../../../../resources/img/large/leve-confraternizacao-image-large.webp";
import sectionBanner from "../../../../../resources/img/large/leve-criancas-brincando-image-box-large.webp";
import homeCardImage from "../../../../../resources/img/large/leve-familia-brincando-image-large.webp";
import bannerImage from '../../../../../resources/img/large/leve-pai-e-filho-image-large.webp';
import { LandingPageContainer as Container, FifthSectionButton, FifthSectionContainer, FifthSectionContent, FourthSectionImagesContainer, FourthSectionImagesContent, LandingPageMainBanner as MainBanner, MainBannerButton, LandingPageMainContent as MainContent, MoreAboutLeveFooter, SecondSectionBox, SecondSectionBoxesContainer, SecondSectionButton, SecondSectionContainer, SecondSectionContent, SecondSectionContentTitleContainer, SecondSectionTitleContainer, SixthSectionBanner, SixthSectionBox, SixthSectionBoxesContainer, SixthSectionContainer, SixthSectionContent, SixthSectionContentHeader, SixthSectionContentManifest, ThirdSectionContainer } from './styles';


import BoxesContainer from '../../home/HomeBoxes';
import BrandsContainer from '../../home/HomeBrands';
import TutorialContainer from '../../home/HomeTutorial';

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
        energizeTheWorld: "Queremos energizar o mundo para um futuro mais leve e renovável",
        manifestFirst: "Na jornada por um mundo mais sustentável, surgimos para compartilhar energia limpa e conectar pessoas.",
        manifestSecond: "Fazemos isso de forma calorosa, no calor que é transmitido e recebido em cada conexão que criamos.",
        manifestThird: "Levamos economia, e com ela, novas possibilidades para você e sua família.",
        manifestFourth: "Estamos redefinindo os padrões da indústria, oferecendo soluções que não só atendem, mas superam as expectativas.",
        manifestFifth: "Juntos, estamos construindo um amanhã mais luminoso, onde a energia é muito mais do que um recurso: é uma ferramenta para o progresso.",
        manifestSixth: "O seu e o nosso. Juntos e leves.",
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
                <h6 className='ourSolutions'>{texts.ourSolutions}</h6>
                <p className='solutionsDescription'>{texts.weHelpYou} <span className='highlighted'>{texts.saveTwentyPercent}</span>{texts.everyMonthTo}</p>
                <BoxesContainer />
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
            <TutorialContainer />

            <SixthSectionContainer>
                <SixthSectionContent>
                    <SixthSectionContentHeader>
                        <h6 className='energizeTheWorld'>{texts.energizeTheWorld}</h6>
                    </SixthSectionContentHeader>
                    <SixthSectionContentManifest>
                        <p className='manifest'>{texts.manifestFirst}</p>
                        <p className='manifest'>{texts.manifestSecond}</p>
                        <p className='manifest'>{texts.manifestThird}</p>
                        <p className='manifest'>{texts.manifestFourth}</p>
                        <p className='manifest'>{texts.manifestFifth}</p>
                        <p className='manifest'>{texts.manifestSixth}</p>
                    </SixthSectionContentManifest>
                </SixthSectionContent>
                <SixthSectionBanner>
                    <Image class="image" src={sectionBanner} alt={"Crianças brincando na floresta e descobrindo coisas novas"} />
                    <SixthSectionBoxesContainer>
                        {lpPresentationVisionBoxes.map((box) => {
                            return (
                                <SixthSectionBox key={box.title}>
                                    <h6 className='title'>{box.title}</h6>
                                    <p className='description'>{box.description}</p>
                                </SixthSectionBox>
                            )
                        })}

                    </SixthSectionBoxesContainer>
                </SixthSectionBanner>
            </SixthSectionContainer>

            <BrandsContainer />
        </Container>
    )
}