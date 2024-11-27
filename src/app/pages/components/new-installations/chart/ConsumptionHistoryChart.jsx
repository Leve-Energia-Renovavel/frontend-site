"use client"

import { background } from '@/app/pages/styles'
import { formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter'
import ReactApexChart from 'react-apexcharts'
import { BarChartWrapper, ChartLegendContainer, LegendDetail } from './styles'

export default function ConsumptionHistoryChart({ dataType, selectedBillings }) {

    const isMoney = dataType === "money"

    const valueData = selectedBillings?.map((bill) => isMoney ? bill?.value : parseInt(bill?.energyConsumed))
    const availabilityData = selectedBillings?.map((bill) => bill?.value ? 250 : 0)
    const distributorValue = selectedBillings?.map((bill) => isMoney ? (parseFloat(bill?.value) + 250) : parseInt(bill?.energyConsumed) + 250)

    const billDateData = selectedBillings?.map((bill) => bill?.billDate ? formatFullMonthAndYear(bill?.billDate) : "")

    const series = [
        {
            name: 'Sem a Leve',
            group: 'WithoutLeve',
            data: distributorValue
        },
        {
            name: 'Distribuidora',
            group: 'WithLeve',
            data: availabilityData
        },
        {
            name: 'Com a Leve',
            group: 'WithLeve',
            data: valueData
        }
    ]

    const options = {
        chart: {
            fontFamily: 'Graphie',
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false, //hidden toolbar
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                },
            },
        },
        tooltip: {
            enabled: false, //show data on chart hover
        },
        grid: {
            show: false //show grid lines
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        stroke: {
            show: false,
        },
        dataLabels: {
            style: {
                fontSize: '14px',
                fontWeight: 900,
                color: background.green
            },
            formatter: function (val, option) {
                if (option?.seriesIndex === 0) {
                    if (isMoney) {
                        return 50
                    } else {
                        return parseInt(val) - 200
                    }
                }
                if (option?.seriesIndex === 1) {
                    return 50
                }
                else {
                    return val.toString().replace(".", ",")
                }
            },
        },
        plotOptions: {
            bar: {
                // distributed: true,   //for distributed colors 
                horizontal: false,
                columnWidth: '85%',
                borderRadius: 8,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: false,   //disable total
                        style: {
                            fontFamily: "Graphie", //total style
                            fontSize: '18px',
                            fontWeight: 900,
                            color: background.green
                        }
                    },
                },
            },
        },
        xaxis: {
            categories: billDateData,
            labels: {
                show: false,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        colors: [background.greyMedium, background.greyDark, (item) => {
            const bill = selectedBillings[item?.dataPointIndex];
            // if (bill?.status === "paid") return newBackground.green;
            // if (bill?.status === "due") return newBackground.orange;
            // if (bill?.status === "pending") return newBackground.orangeFocused;
            return background.green;
        }],
        legend: {
            show: false,
        }
    }

    return (
        <BarChartWrapper id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={250}
            />
            <ChartLegendContainer className='chartLegendContainer'>
                {billDateData?.map((billDate, index) => {
                    return (
                        <div key={billDate}>
                            <LegendDetail className={`legendDetail-${billDate}`}>
                                <span className='withoutLeve'>{billDate ? "Sem Leve" : ""}</span>
                                <span className='withLeve'>{billDate ? "Com Leve" : ""}</span>
                            </LegendDetail>
                            {billDate && <span className={`chartLegend-${index}`}>{billDate}</span>}
                        </div>
                    )
                })}
            </ChartLegendContainer>

        </BarChartWrapper>

    )
}