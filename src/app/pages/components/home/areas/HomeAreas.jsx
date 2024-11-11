import { capitalizeFirstLetter } from '@/app/utils/formatters/textFormatter';
import Image from 'next/image';
import brasilMap from '../../../../../resources/img/large/area-atendimento-leve-lps.png';
import brasilMapForTimPartnership from '../../../../../resources/img/large/area-atendimento-leve-tim.png';
import { HomeAreasContainer } from './styles';

export default function HomeAreas({ partner }) {

    const isTim = partner === "tim"

    return (
        <HomeAreasContainer className='homeAreasContainer'>
            <h3 className='areasTitle'>Veja as áreas atendidas</h3>
            <Image alt={`Área de atendimento da Leve Energia em parceria com ${capitalizeFirstLetter(partner)}`} src={isTim ? brasilMapForTimPartnership : brasilMap} loading='lazy' className='map' />
        </HomeAreasContainer>
    )
}