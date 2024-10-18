"use client"

import { homeBoxes } from '@/app/utils/helper/home/homeBoxesHelper'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { HomeSecondaryBoxContent as Box, HomeSecondaryBoxTitle as BoxTitle, HomeSecondaryBoxesContainer as Container } from './styles'

export default function BoxesContainer() {

    return (
        <Container className='homeMainBoxesContainer'>
            {homeBoxes.map((box) => {
                return (
                    <Box color={box.backgroundColor} descriptionColor={box.descriptionColor} key={box.description}>
                        <BoxTitle titleColor={box.titleColor} >
                            <Image src={box.icon} className="titleIcon" alt={box.description} loading="lazy" />
                            <Typography variant="subtitle1">{box.title}</Typography>
                        </BoxTitle>
                        <Typography variant="subtitle1" className='boxDescription'>{box.description}</Typography>
                    </Box>
                )
            })}
        </Container>
    )
}