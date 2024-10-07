import Image from 'next/image';
import logoLeve from '../../../../../../../../resources/icons/small/logo-leve-yellow.svg';
import { FormTitleContainer as Container } from './styles';

export default function NewHomeMainFormHeader() {
    return (
        <Container className='formTitleContainer'>
            <h2 className='formTitle'>Calculadora</h2>
            <Image src={logoLeve} alt='logo Leve' className='homeFormLogoLeve' />
        </Container>
    )
}