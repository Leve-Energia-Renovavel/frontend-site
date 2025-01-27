import { brands } from '@/app/utils/helper/home/homeBoxesHelper';
import Image from 'next/image';
import infoJson from '../../../../../../public/info.json';
import { HomeSixthSectionCard as Card, HomeSixthSectionContainer as Container, HomeSixthSectionCardContainer as ContentContainer, HomeSixthSectionTitleContainer as TitleContainer } from '../styles';

const texts = infoJson.home

export default function BrandsContainer({ partner }) {

    const isTim = partner === "tim"

    return (
        isTim ? <> </> :
            (<Container className='brandsContainer'>
                <TitleContainer className='titleContainer'>
                    <p className='sectionTitle'>{texts.brandsThatTrust}</p>
                    <p className='sectionSubtitle'>{texts.trustEarnedByTransparency}</p>
                </TitleContainer>

                <ContentContainer className='brandsContentContainer'>
                    {brands.map((brand, index) => {
                        return (
                            <Card key={brand.company} className={`brandCard-${index}`}>
                                <Image src={brand.logo} alt={brand.company} className={`brandLogo`} loading="lazy" id={`${brand.label}`} />
                            </Card>
                        )
                    })}

                </ContentContainer>
            </Container>)
    )
}