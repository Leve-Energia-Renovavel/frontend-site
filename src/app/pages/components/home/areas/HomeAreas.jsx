import Image from 'next/image';
import brasilMap from '../../../../../resources/img/large/area-atendimento-leve-large.svg';
import { HomeAreasContainer } from './styles';

export default function HomeAreas() {
    return (
        <HomeAreasContainer className='homeAreasContainer'>
            <h3 className='areasTitle'>Veja as áreas atendidas</h3>
            <Image alt='Área de atendimento da Leve Energias' src={brasilMap} loading='lazy' className='map' />
        </HomeAreasContainer>
    )
}