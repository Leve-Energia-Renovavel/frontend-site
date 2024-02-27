import { BarChart } from '@mui/x-charts/BarChart';
import { background } from '../../styles';

export default function HistorySpendingChart() {
    return (
        <BarChart
            colors={[background.blueLeve]}
            xAxis={[{ scaleType: 'band', label: "2024", position: 'left', data: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024'] }]}
            yAxis={[{ label: 'kWh', position: 'left' }]}
            series={[{ data: [300, 500, 1200, 600, 900] }]}
            width={600}
            height={300}
        />
    );
}