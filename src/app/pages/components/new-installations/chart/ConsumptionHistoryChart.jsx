"use client"

import { background, newBackground } from '@/app/pages/styles'
import { formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter'
import ReactApexChart from 'react-apexcharts'
import { BarChartWrapper } from './styles'

export default function ConsumptionHistoryChart({ dataType, selectedBillings }) {

    const isMoney = dataType === "money"

    const valueData = selectedBillings?.map((bill) => isMoney ? bill?.value : parseInt(bill?.energyConsumed))
    const availabilityData = selectedBillings?.map((bill) => bill?.value ? 50 : 0)
    const distributorValue = selectedBillings?.map((bill) => isMoney ? (parseFloat(bill?.value) + 50) : parseInt(bill?.energyConsumed))

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
                show: true, //hidden toolbar
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
            enabled: true,
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
                color: newBackground.green
            },
            formatter: (value) => {
                if (value) {
                    return value
                }
            }
        },
        plotOptions: {
            bar: {
                // distributed: true,   //for distributed colors 
                horizontal: false,
                columnWidth: '85%',
                borderRadius: 8,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'all', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: false,   //disable total
                        style: {
                            fontFamily: "Graphie", //total style
                            fontSize: '18px',
                            fontWeight: 900,
                            color: newBackground.green
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
        colors: ["#444", newBackground.greyDark, (item) => {
            const bill = selectedBillings[item?.dataPointIndex];
            if (bill?.status === "paid") return newBackground.green;
            if (bill?.status === "due") return newBackground.orange;
            if (bill?.status === "pending") return newBackground.orangeFocused;
            return newBackground.green;
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
            <div className='legendContainer'>
                {billDateData?.map((billDate, index) => {
                    return (
                        <span className={`chartLegend-${index}`} key={billDate}>{billDate}</span>
                    )
                })}
            </div>
            <p>{dataType}</p>

        </BarChartWrapper>

    )
}