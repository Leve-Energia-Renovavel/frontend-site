import { landingPageBoxes } from '@/app/utils/helper/landingPageHelper'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { HomeSecondaryBoxContent as BoxContent, HomeSecondaryBoxTitle as BoxTitle, HomeSecondaryBoxesContainer as Container } from '../home/styles'

export default function BoxesContainer() {

    return (
        <Container className='boxesContainer'>
            {landingPageBoxes.map((box) => {
                return (
                    <BoxContent color={box.backgroundColor} descriptionColor={box.descriptionColor} key={box.description} className='boxContent'>
                        <BoxTitle titleColor={box.titleColor} >
                            <Image src={box.icon} className="titleIcon" alt={box.description} loading="lazy" />
                            <Typography variant="subtitle1">{box.title}</Typography>
                        </BoxTitle>
                        <Typography variant="subtitle1" className='boxDescription'>{box.description}</Typography>
                    </BoxContent>
                )
            })}
        </Container>
    )
}