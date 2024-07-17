"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatDayMonthAndYearInFull, formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter';
import ReactApexChart from 'react-apexcharts';
import { background, newBackground } from '../../styles';
import { BarChartWrapper } from './styles';

export default function NewHistoryMoneyChart() {

    const billings = useStoreBillingHistory().billings

    const chartSize = -6

    const valueData = billings?.slice(chartSize).map((bill) => bill?.value)
    // const availabilityData = billings?.slice(chartSize).map((bill) => bill?.energyDistributorInjected)
    const availabilityData = billings?.slice(chartSize).map((_) => 250)

    // const dueDateData = billings?.slice(chartSize).map((bill) => formatDayMonthAndYearInFull(bill?.dueDate))
    const billDateData = billings?.slice(chartSize).map((bill) => formatMonthAndYearInFull(bill?.billDate))

    const labelColors = billings?.slice(chartSize).map((_, index, arr) => {
        return index === arr?.length - 1 ? newBackground.orange : newBackground.green;
    });

    const series = [{
        name: 'Energia injetada pela Distribuidora',
        data: availabilityData,
    }, {
        name: 'Valor da Fatura (R$)',
        data: valueData,
    }]

    const options = {
        chart: {
            fontFamily: 'Graphie',
            type: 'bar',
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
                            color: newBackground.green
                        }
                    },
                },
            },
        },
        dataLabels: {
            style: {
                fontSize: '14px',
                fontWeight: 900,
                color: newBackground.green
            },
            formatter: function (val, option) {
                if (option?.seriesIndex === 0) {
                    return 50
                } else {
                    return val
                }
            },
        },
        colors: [background.grey, (item) => {
            const bill = billings.slice(chartSize)[item?.dataPointIndex];
            if (bill?.status === "paid") return newBackground.green;
            if (bill?.status === "due") return newBackground.orange;
            if (bill?.status === "pending") return newBackground.orangeFocused;
            return newBackground.green;
        }],
        yaxis: {
            show: false,
        },
        xaxis: {
            type: 'category',
            categories: billDateData,
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: false,
                style: {
                    colors: labelColors,
                },
            },
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1
        }
    }

    return (
        <>
            <BarChartWrapper id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={250}
                />
            </BarChartWrapper>
        </>
    );
};
