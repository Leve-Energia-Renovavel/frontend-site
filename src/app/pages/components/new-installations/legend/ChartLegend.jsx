import { chartLegends } from '@/app/utils/helper/installationsCarrouselHelper'
import { Legend, LegendDetailLegend } from './styles'

export default function ChartLegend() {
    return (
        <LegendDetailLegend>
            {chartLegends.map((legend) => {
                return (
                    <Legend key={legend?.title}
                        backgroundColor={legend?.backgroundColor}
                        fontColor={legend?.fontColor}>
                        <span>{legend?.title}</span>
                    </Legend>
                )
            })}
        </LegendDetailLegend>
    )
}