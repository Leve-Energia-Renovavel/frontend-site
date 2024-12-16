import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums'
import bannerImage from '../../../../../../resources/img/large/leve-economy-image-child-outside.jpg'
import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainBannerImage } from './styles'
export default function NewHomeForm() {

    return (
        <Container className='leveHomeMainFormContainer' id={HOME_FORM_ID}>
            <NewHomeMainBannerImage bannerImage={bannerImage} className='leveHomeFormBannerImage'>
                <p className='leveHomeFormBannerTitle'>Compartilhando a energia do futuro com você</p>
            </NewHomeMainBannerImage>

            <NewHomeMainForm />

        </Container>
    )
}