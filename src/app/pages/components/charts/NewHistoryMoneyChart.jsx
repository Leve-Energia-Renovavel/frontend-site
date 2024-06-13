import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter';
import { BarChart } from '@mui/x-charts/BarChart';
import { background, newBackground } from '../../styles';
import { BarChartWrapper, ChartContainer, ValueContainer } from './styles';

export default function NewHistoryMoneyChart() {

    const billings = useStoreBillingHistory().billings;

    let availabilityData = [];
    let valueData = [];
    let xAxisData = [];
    let statusData = [];

    if (billings && billings.length > 0) {
        const aggregatedData = billings.reduce((acc, curr) => {
            const { dueDate, availability, value, status } = curr;
            const formattedDueDate = formatMonthAndYearInFull(dueDate);

            if (!acc[formattedDueDate]) {
                acc[formattedDueDate] = { availability: 0, value: 0, status: '' };
            }

            acc[formattedDueDate].availability += parseFloat(availability.replace(',', '.'));
            acc[formattedDueDate].value += parseFloat(value.replace(',', '.'));
            acc[formattedDueDate].status = status;

            return acc;
        }, {});

        xAxisData = Object.keys(aggregatedData).slice(-12);

        availabilityData = xAxisData.map(date => aggregatedData[date].availability * 5);
        valueData = xAxisData.map(date => aggregatedData[date].value);
        statusData = xAxisData.map(date => aggregatedData[date].status);
    }

    const barChartsParams = {
        series: [
            {
                id: 'series-2',
                data: availabilityData,
                stack: 'total',
                color: background.grey
            },
            {
                id: 'series-1',
                data: valueData,
                stack: 'total',
                color: newBackground.green
            },
        ],
        xAxis: [{ data: xAxisData, scaleType: 'band', id: 'axis1' }],
    };

    return (
        <ChartContainer>
            {billings && billings.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <ValueContainer>
                        {valueData.map((value) => {
                            return (
                                <p key={value}>{parseInt(value)}</p>
                            )
                        })}
                    </ValueContainer>
                    <BarChartWrapper>
                        <BarChart
                            barLabel="value"
                            {...barChartsParams}
                        />
                    </BarChartWrapper>
                </>
            )}
        </ChartContainer>
    );
}
