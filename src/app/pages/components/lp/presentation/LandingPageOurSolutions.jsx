import infoJson from "../../../../../../public/lp-presentation-info.json";
import BoxesContainer from '../../home/HomeBoxes';
import { ThirdSectionContainer } from './styles';

export default function LandingPageOurSolutions() {

    const texts = infoJson

    return (
        <ThirdSectionContainer>
            <h6 className='ourSolutions'>{texts.ourSolutions}</h6>
            <p className='solutionsDescription'>{texts.weHelpYou} <span className='highlighted'>{texts.saveTwentyPercent}</span>{texts.everyMonthTo}</p>
            <BoxesContainer />
        </ThirdSectionContainer>
    )
}