import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums'
import bannerImage from '../../../../../../resources/img/large/leve-economy-image-child-outside.webp'
import HomeMainForm from './form/HomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainBannerImage } from './styles'
export default function HomeForm() {

    return (
        <Container className='leveHomeMainFormContainer' id={HOME_FORM_ID}>
            <NewHomeMainBannerImage bannerImage={bannerImage} className='leveHomeFormBannerImage'>
                <p className='leveHomeFormBannerTitle'>Compartilhando a energia do futuro com você</p>
            </NewHomeMainBannerImage>

            <HomeMainForm />
        </Container>
    )
}