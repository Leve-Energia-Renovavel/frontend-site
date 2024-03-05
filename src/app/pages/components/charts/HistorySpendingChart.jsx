import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { background } from '../../styles';

export default function HistorySpendingChart() {

    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const mobileWidth = 900
    var chartWidth = windowWidth / 3;

    if (isMobile) {
        chartWidth = windowWidth / 1.2;
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

    return (
        <>
            <BarChart
                colors={[background.blueLeve]}
                xAxis={[{ scaleType: 'band', label: "2024", position: 'left', data: ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024'] }]}
                yAxis={[{ label: 'kWh', position: 'left' }]}
                series={[{ data: [300, 500, 1200, 600, 900] }]}
                width={chartWidth}
                height={300}
            />
        </>
    );
}