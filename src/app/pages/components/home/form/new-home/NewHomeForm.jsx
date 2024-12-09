import bannerImage from '../../../../../../resources/img/large/leve-economy-image-child-outside.jpg'
import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainBannerImage } from './styles'
export default function NewHomeForm({ setErrorMessage, setNotifications, selectedUserType, setSelectedUserType }) {
    return (
        <Container className='leveHomeMainFormContainer' id='calculateYourEconomy'>
            <NewHomeMainBannerImage bannerImage={bannerImage} className='leveHomeFormBannerImage'>
                <p className='leveHomeFormBannerTitle'>Compartilhando a energia do futuro com você</p>
            </NewHomeMainBannerImage>

            <NewHomeMainForm
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications}
                selectedUserType={selectedUserType}
                setSelectedUserType={setSelectedUserType} />

        </Container>
    )
}