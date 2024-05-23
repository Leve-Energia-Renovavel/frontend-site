import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { newBackground } from '../../styles';

export default function NewHistoryChart() {
    const billings = useStoreBillingHistory().billings

    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const mobileWidth = 900
    var chartWidth = windowWidth / 3;

    if (isMobile) {
        chartWidth = windowWidth / 1.3;
    }

    useEffect(() => {
        const handleResize = () => {
            const windowSize = window.innerWidth <= mobileWidth;
            if (windowSize !== isMobile) setIsMobile(windowSize);
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);


    // Aggregate data by dueDate
    const aggregatedData = billings.reduce((acc, curr) => {
        const { dueDate, value } = curr;
        acc[dueDate] = (acc[dueDate] || 0) + parseFloat(value.replace(',', '.'));
        return acc;
    }, {});

    // Convert aggregated data into arrays for chart
    const chartData = Object.keys(aggregatedData)
        .slice(-12)
        .map(dueDate => ({
            category: dueDate,
            value: aggregatedData[dueDate]
        }));

    return (
        <>
            <BarChart
                colors={[newBackground.green]}
                xAxis={[{ scaleType: 'band', position: 'left', data: chartData.map(item => item.category) }]}
                yAxis={[{ position: 'left' }]}
                series={[{ data: chartData.map(item => item.value) }]}
                width={200}
                height={200}
            />
        </>
    );
}