import Image from 'next/image';
import brasilMap from '../../../../resources/img/large/area-atendimento-leve-large.svg';
import { AreaListContainer, HomeAreasContainer, LegendIcon, MapLegend, MapLegendContainer } from './styles';

export default function HomeAreas() {
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
                <p className='areaList'><span className='highlighted'>Clique aqui</span> e veja a lista completa de municípios atendidos</p>
            </AreaListContainer>
        </HomeAreasContainer>
    )
}