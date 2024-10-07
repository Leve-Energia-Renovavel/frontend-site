import NewHomeMainForm from './form/NewHomeMainForm'
import { NewHomeMainFormContainer as Container, NewHomeMainFormContent as Content } from './styles'

export default function NewHomeForm() {
    return (
        <Container className='leveHomeMainFormContainer'>
            <Content className='leveHomeMainFormContainer'>
                <div>
                    <h2 className='leveHomeMainFormContentTitle'>Calcule sua economia e poder de impacto</h2>
                </div>
                <h6 className='leveHomeMainFormContentSubtitle'>Utilize a <span className='highlighted'>calculadora Leve</span> para saber quanto você vai economizar sendo cliente Leve e como ajuda a reduzir os dados ao meio ambiente em nossa calculadora.</h6>
            </Content>

            <NewHomeMainForm />

        </Container>
    )
}