import Image from 'next/image';
import { useRouter } from 'next/navigation';
import brasilMap from '../../../../../resources/img/large/area-atendimento-leve-large.svg';
import { HomeAreasContainer } from './styles';

export default function HomeAreas() {

    const router = useRouter()

    return (
        <HomeAreasContainer>
            <h3 className='areasTitle'>Veja as áreas atendidas</h3>
            <Image alt='Área de atendimento da Leve Energias' src={brasilMap} loading='lazy' className='map' />
        </HomeAreasContainer>
    )
}