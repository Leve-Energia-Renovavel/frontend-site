"use client"


import { PATH_TO } from '@/app/pages/enums/globalEnums';
import { homeTutorialCards } from '@/app/utils/helper/home/homeBoxesHelper';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import infoJson from '../../../../../../public/info.json';
import { ButtonSimulateYourEconomy, HomeFourthSectionCard as Card, HomeFourthSectionCardContainer as CardContainer, HomeFourthSectionDescription as CardDescription, HomeFourthSectionIcon as CardIcon, HomeFourthSectionTitle as CardTitle, HomeFourthSectionContainer, HomeFourthSectionTitleContainer as TitleContainer } from './styles';

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
                    <h2 className='sectionTitle'>{texts.howItWorks}</h2>
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

                <ButtonSimulateYourEconomy onClick={() => isLP ? router.push(PATH_TO.HOME) : handlePreSignup()}>
                    <span>{texts.simulateYourEconomy}</span>
                </ButtonSimulateYourEconomy>
            </HomeFourthSectionContainer>
        </>
    )
}