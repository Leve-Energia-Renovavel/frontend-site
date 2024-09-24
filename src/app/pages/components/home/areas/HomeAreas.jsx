import Image from 'next/image';
import { useRouter } from 'next/navigation';
import brasilMap from '../../../../../resources/img/large/area-atendimento-leve-large.svg';
import { AreaListContainer, HomeAreasContainer, LegendIcon, MapLegend, MapLegendContainer } from './styles';

export default function HomeAreas() {

    const router = useRouter()

    return (
        <HomeAreasContainer>
            <h3 className='areasTitle'>Veja as áreas atendidas</h3>
            <Image alt='Área de atendimento da Leve Energias' src={brasilMap} loading='lazy' className='map' />
            <MapLegendContainer>
                <MapLegend hasFactory={true}>
                    <LegendIcon className='legendIcon' />
                    <p className='legendDescription'>Estados com usinas da Leve Energia</p>
                </MapLegend>
                <MapLegend hasFactory={false}>
                    <LegendIcon className='legendIcon' />
                    <p className='legendDescription'>Próximos estados a receber usinas</p>
                </MapLegend>
            </MapLegendContainer>
            <AreaListContainer>
                <p className='areaList'><span className='highlighted' onClick={() => router.push(`/municipios-atendidos`)}>Clique aqui</span> e veja a lista completa de municípios atendidos</p>
            </AreaListContainer>
        </HomeAreasContainer>
    )
}