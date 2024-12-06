import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainFormContent as Content, NewHomeMainBannerImage } from './styles'
import bannerImage from '../../../../../../resources/img/large/leve-economy-image-child-outside.jpg'
export default function NewHomeForm({ setErrorMessage, setNotifications }) {
    return (
        <Container className='leveHomeMainFormContainer' id='calculateYourEconomy'>
            <NewHomeMainBannerImage bannerImage={bannerImage} className='leveHomeFormBannerImage'>
                <p className='leveHomeFormBannerTitle'>Compartilhando a energia do futuro com você</p>
            </NewHomeMainBannerImage>

            <NewHomeMainForm
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

        </Container>
    )
}