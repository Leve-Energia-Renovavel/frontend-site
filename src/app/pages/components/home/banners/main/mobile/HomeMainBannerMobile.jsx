import CallToActionButton from '@/app/pages/components/utils/buttons/call-to-action/CallToActionButton'
import infoJson from '../../../../../../../../public/info.json'
import { HomeMobileMainContent } from './styles'

export default function HomeMainBannerMobile() {
    const texts = infoJson.home
    return (
        <HomeMobileMainContent className='homeMainContentMobile'>
            <h1 className='homeMainTitleMobile'>{texts.mobile.title}<span className='highlighted'>{texts.mobile.cheaper}</span>{texts.mobile.withClearEnergy}.</h1>
            <p className='homeMainSubtitleMobile'>{texts.mobile.subtitle}.</p>
            <p className='homeMainDescriptionMobile'>{texts.mobile.description}.</p>
            <CallToActionButton isMobile={true} title={`Calcular meu desconto`} starIcon={false} endIcon={false} />
        </HomeMobileMainContent>
    )
}
