import { homeTutorialCards } from '@/app/utils/helper/homeBoxesHelper';
import { Typography } from '@mui/material';
import Image from 'next/image';
import infoJson from '../../../../../public/home-info.json';
import { HomeFourthSectionCard as Card, HomeFourthSectionCardContainer as CardContainer, HomeFourthSectionDescription as CardDescription, HomeFourthSectionIcon as CardIcon, HomeFourthSectionTitle as CardTitle, HomeFourthSectionTitleContainer as TitleContainer } from './styles';

const texts = infoJson

export default function TutorialContainer() {
    return (
        <>
            <TitleContainer>
                <Typography variant="subtitle1" className='sectionTitle'>{texts.howItWorks}</Typography>
            </TitleContainer>

            <CardContainer >
                {homeTutorialCards.map((card, index) => {
                    return (
                        <Card key={index}>
                            <CardIcon>
                                <Image src={card.icon} className="titleIcon" alt={card.description} loading="eager" priority={true} />
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
        </>
    )
}