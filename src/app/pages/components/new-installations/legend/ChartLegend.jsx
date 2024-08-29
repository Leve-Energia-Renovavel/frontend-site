import { chartLegends } from '@/app/utils/helper/installations/installationsCarrouselHelper'
import { Legend, LegendDetailLegend } from './styles'

export default function ChartLegend() {
    return (
        <LegendDetailLegend className='legendDetailLegendContainer'>
            {chartLegends.map((legend) => {
                return (
                    <Legend key={legend?.title} className={`chartLegend-${legend?.title}`}
                        backgroundColor={legend?.backgroundColor}
                        fontColor={legend?.fontColor}>
                        <span>{legend?.title}</span>
                    </Legend>
                )
            })}
        </LegendDetailLegend>
    )
}