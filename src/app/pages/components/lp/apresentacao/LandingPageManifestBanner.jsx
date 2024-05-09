import { lpPresentationVisionBoxes } from '@/app/utils/helper/landingPageHelper';
import Image from 'next/image';
import infoJson from "../../../../../../public/lp-presentation-info.json";
import sectionBanner from "../../../../../resources/img/large/leve-criancas-brincando-image-box-large.webp";
import { SixthSectionBanner, SixthSectionBox, SixthSectionBoxesContainer, SixthSectionContainer, SixthSectionContent, SixthSectionContentHeader, SixthSectionContentManifest } from './styles';


export default function LandingPageManifestBanner() {

    const texts = infoJson

    return (
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
    )
}