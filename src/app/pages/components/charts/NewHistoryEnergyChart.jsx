import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter';
import ReactApexChart from 'react-apexcharts';
import { background, newBackground } from '../../styles';

export default function NewHistoryEnergyChart() {

    const billings = useStoreBillingHistory().billings

    console.log("billings ==>>", billings)

    const chartSize = -6

    const availabilityData = billings.slice(chartSize).map((_) => 45)
    const dueDateData = billings.slice(chartSize).map(item => formatMonthAndYearInFull(item.dueDate))
    const valueData = billings.slice(chartSize).map(item => parseInt(item.value) / 10)

    const colors = billings.slice(chartSize).map((_, index, arr) => {
        return index === arr.length - 1 ? newBackground.orange : newBackground.green;
    });


    const series = [{
        name: 'availability',
        data: availabilityData
    }, {
        name: 'value',
        data: valueData
    }]

    const options = {

        chart: {
            fontFamily: 'Graphie',
            height: '100px',
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
            }
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
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '85%',
                borderRadius: 8,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            // fontFamily: "Graphie",
                            fontSize: '18px',
                            fontWeight: 900,
                            color: newBackground.green
                        }
                    },
                },
            },
        },
        colors: [background.grey, newBackground.green],
        yaxis: {
            show: false,
        },
        xaxis: {
            type: 'category',
            categories: dueDateData,
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: false,
                style: {
                    colors: colors,
                    fontFamily: 'Graphie',
                    fontSize: '14px',
                    fontWeight: 900,
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
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={200}
                />
            </div>
        </>
    );
};
