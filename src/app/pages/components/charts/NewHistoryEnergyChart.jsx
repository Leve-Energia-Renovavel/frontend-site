"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { billHasExpired } from '@/app/utils/date/DateUtils';
import { formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter';
import ReactApexChart from 'react-apexcharts';
import { background } from '../../styles';
import { BarChartWrapper } from './styles';

export default function NewHistoryEnergyChart() {

    const billings = useStoreBillingHistory().billings

    const chartSize = -6

    const valueData = billings?.slice(chartSize).map(item => parseInt(item?.energyConsumed))

    const average = billings?.slice(chartSize)
        .map((item) => parseInt(item?.energyConsumed))
        .reduce((acc, value, _, array) => acc + value / array.length, 0);

    const availabilityData = billings?.slice(chartSize).map((item) => parseInt(average / 3))

    // const dueDateData = billings.slice(chartSize).map(item => formatDayMonthAndYearInFull(item.dueDate))
    const billDateData = billings?.slice(chartSize).map((bill) => formatMonthAndYearInFull(bill?.billDate))

    const labelColors = billings?.slice(chartSize).map((_, index, arr) => {
        return index === arr.length - 1 ? background.orange : background.green;
    });

    const energyNetwork = billings?.slice(chartSize).map((item) => {
        return parseFloat(item?.energyConsumed) - parseFloat(item?.energyInjected)
    })

    const series = [{
        name: 'Energia injetada pela Distribuidora (kWh)',
        data: availabilityData,
    }, {
        name: 'Energia Consumida (kWh)',
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
                // distributed: true,
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
        dataLabels: {
            style: {
                fontSize: '14px',
                fontWeight: 900,
                color: background.green
            },
            formatter: function (val, option) {
                if (option?.seriesIndex === 0) {
                    return energyNetwork[0]

                } else {
                    return val
                }
            },
        },
        colors: [background.grey, (item) => {
            const bill = billings?.slice(chartSize)[item.dataPointIndex];

            const status = billHasExpired(bill.status, bill.dueDate)

            if (status === "paid") return background.green;
            if (status === "due") return background.orangeFocused;
            if (status === "pending") return background.orange;
            return background.green;
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
