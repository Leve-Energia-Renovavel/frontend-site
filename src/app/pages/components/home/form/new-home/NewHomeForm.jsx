import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainFormContent as Content } from './styles'

export default function NewHomeForm({ setErrorMessage, setNotifications }) {
    return (
        <Container className='leveHomeMainFormContainer' id='calculateYourEconomy'>
            <Content className='leveHomeMainFormContainer'>
                <div>
                    <h2 className='leveHomeMainFormContentTitle'>Calcule sua economia e poder de impacto</h2>
                </div>
                <h6 className='leveHomeMainFormContentSubtitle'>Utilize a <span className='highlighted'>calculadora Leve</span> para saber quanto você vai economizar sendo cliente Leve e como ajuda a reduzir os danos ao meio ambiente.</h6>
            </Content>

            <NewHomeMainForm
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

        </Container>
    )
}