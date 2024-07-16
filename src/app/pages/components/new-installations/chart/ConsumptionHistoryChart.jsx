"use client"

import { newBackground } from '@/app/pages/styles'
import { formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter'
import ReactApexChart from 'react-apexcharts'
import { BarChartWrapper } from './styles'

export default function ConsumptionHistoryChart({ selectedBillings }) {

    console.log("selectedBillings ===>>", selectedBillings)

    const valueData = selectedBillings?.map((bill) => bill?.value)
    const availabilityData = selectedBillings?.map((bill) => bill?.value ? 50 : 0)
    const distributorValue = selectedBillings?.map((bill) => parseFloat(bill?.value) + 50)

    const billDateData = selectedBillings?.map((bill) => bill?.billDate ? formatMonthAndYearInFull(bill?.billDate) : "")

    const series = [
        {
            name: 'SEM A LEVE',
            group: 'budget',
            data: distributorValue
        },
        {
            name: 'DISTRIBUIDORA',
            group: 'actual',
            data: availabilityData
        },
        {
            name: 'VALOR LEVE',
            group: 'actual',
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
                show: true,
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
        colors: [newBackground.greenSoft, newBackground.greyDark, (item) => {
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

        </BarChartWrapper>

    )
}