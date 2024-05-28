import { landingPageCompanyPresentationBoxes } from '@/app/utils/helper/landingPageHelper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import infoJson from "../../../../../../public/lp-presentation-info.json";
import sunImage from "../../../../../resources/icons/small/ellipse-small.webp";
import { SecondSectionBox, SecondSectionBoxesContainer, SecondSectionContainer, SecondSectionContent, SecondSectionContentTitleContainer, SecondSectionFooter, SecondSectionFooterButton, SecondSectionTitleContainer } from './styles';

export default function LandingPageInvertedSolarPanelBanner() {

    const router = useRouter()
    const texts = infoJson

    return (
        <SecondSectionContainer>
            <SecondSectionTitleContainer className='sectionTitleContainer'>
                <h3>Geramos <span className='yellow'>energia limpa</span> em nossas fazendas solares para fornecer</h3>
            </SecondSectionTitleContainer>

            <SecondSectionContent image={sunImage} className='sectionContainer'>
                <SecondSectionContentTitleContainer className='sectionContentTitleContainer'>
                    <h4><span className='yellow'>Sem</span> obras</h4>
                    <h4><span className='yellow'>Sem</span> instalações</h4>
                    <h4><span className='yellow'>Sem</span> custos adicionais</h4>
                </SecondSectionContentTitleContainer>

                <SecondSectionBoxesContainer className='sectionBoxesContainer'>
                    {landingPageCompanyPresentationBoxes.map((box, index) => {
                        return (
                            <SecondSectionBox key={index} className='sectionBox'>
                                <div className='iconContainer'>
                                    <Image src={box.icon} alt={box.description} priority={false} loading='lazy' />
                                </div>
                                <p className='boxDescription'>{box.description}</p>
                            </SecondSectionBox>
                        )
                    })}
                </SecondSectionBoxesContainer>
            </SecondSectionContent>
            <SecondSectionFooter>
                <h3>E com <span className='yellow'>economia</span> garantida todos os meses</h3>
                <SecondSectionFooterButton>
                    <span>Economize hoje mesmo</span>
                </SecondSectionFooterButton>
            </SecondSectionFooter>
        </SecondSectionContainer>
    )
}