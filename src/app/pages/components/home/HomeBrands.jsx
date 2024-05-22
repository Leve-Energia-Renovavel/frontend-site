"use client"

import { brands } from '@/app/utils/helper/homeBoxesHelper';
import { Typography } from '@mui/material';
import Image from 'next/image';
import infoJson from '../../../../../public/home-info.json';
import { HomeSixthSectionCard as Card, HomeSixthSectionContainer as Container, HomeSixthSectionCardContainer as ContentContainer, HomeSixthSectionTitleContainer as TitleContainer } from './styles';

const texts = infoJson

export default function BrandsContainer() {
    return (
        <Container>
            <TitleContainer>
                <Typography variant="subtitle1" className='sectionTitle'>{texts.brandsThatTrust}</Typography>
            </TitleContainer>

            <ContentContainer >
                {brands.map((brand, index) => {
                    return (
                        <Card key={brand.company}>
                            <Image src={brand.logo} alt={brand.company} className='brandLogo' loading="lazy"  />
                        </Card>
                    )
                })}

            </ContentContainer>
        </Container>
    )
}