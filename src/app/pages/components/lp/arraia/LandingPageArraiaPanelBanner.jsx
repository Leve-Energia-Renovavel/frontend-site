import { landingPageArraiaBoxes } from '@/app/utils/helper/partners/landingPageHelper';
import Image from 'next/image';
import sunImage from "../../../../../resources/icons/small/ellipse-small.webp";
import { SecondSectionBox, SecondSectionBoxesContainer, SecondSectionContainer, SecondSectionContent, SecondSectionContentTitleContainer, SecondSectionFooter, SecondSectionFooterButton } from '../banners/styles';

export default function LandingPageArraiaPanelBanner() {

    const handlePreSignup = () => {
        const element = document.getElementById('leadForm');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
    }

    return (
        <SecondSectionContainer>

            <SecondSectionContent image={sunImage} className='sectionContainer'>
                <SecondSectionContentTitleContainer className='sectionContentTitleContainer'>
                    <h4><span className='yellow'>Sem</span> obras</h4>
                    <h4><span className='yellow'>Sem</span> instalações</h4>
                    <h4><span className='yellow'>Sem</span> custos adicionais</h4>
                </SecondSectionContentTitleContainer>

                <SecondSectionBoxesContainer className='sectionBoxesContainer'>
                    {landingPageArraiaBoxes.map((box, index) => {
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
                <h3><span className='yellow'>Economize</span> agora mesmo com a Leve</h3>
                <SecondSectionFooterButton onClick={() => handlePreSignup()}>
                    <span>Assine seu plano</span>
                </SecondSectionFooterButton>
            </SecondSectionFooter>
        </SecondSectionContainer>
    )
}