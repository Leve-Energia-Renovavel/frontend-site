import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { formatMonthAndYearInFull } from '@/app/utils/formatters/dateFormatter';
import { Chart } from "react-google-charts";
import { background, newBackground } from '../../styles';

export default function NewHistoryEnergyChart() {
    const billings = useStoreBillingHistory().billings;

    let data = [
        ["", "", "", { role: "style" }]
    ];

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

        const xAxisData = Object.keys(aggregatedData).slice(-12);

        data = [
            ["", "", "", { role: "style" }],
            ...xAxisData.map(date => {
                const availability = aggregatedData[date]?.availability ?? 0;
                const value = aggregatedData[date]?.value ?? 0;
                const status = aggregatedData[date]?.status ?? '';

                let color = background.grey;;
                if (status === 'paid') color = newBackground.green;
                else if (status === 'due') color = newBackground.orangeLight;
                else if (status === 'pending') color = newBackground.orange;

                return [date, availability * 5, value, color];
            })
        ];
    }

    const options = {
        isStacked: true,
        hAxis: {
            minValue: 0,
            title: '',
        },
        vAxis: {
            title: '',
        },
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '80%' },
    };

    return (
        <Chart
            chartType="ColumnChart"
            data={data}
            options={options}
        />
    );
}
