import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainFormContent as Content } from './styles'

export default function NewHomeForm() {
    return (
        <Container className='leveHomeMainFormContainer'>
            <Content className='leveHomeMainFormContainer'>
                <h2 className='leveHomeMainFormContentTitle'>Lorem Inpsium</h2>
                <h6 className='leveHomeMainFormContentSubtitle'>Essa energia se transforma em créditos que abatem parte do seu consumo e deixa sua conta de luz mais barata todo mês</h6>
            </Content>

            <NewHomeMainForm />

        </Container>
    )
}