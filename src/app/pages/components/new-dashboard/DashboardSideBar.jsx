import { useEffect, useState } from 'react';
import DashboardInstallation from './DashboardInstallation';
import DashboardMenu from './DashboardMenu';
import DashboardProfile from './DashboardProfile';
import { NewDashboardSideBar as SideBar } from './styles';

export default function DashboardSideBar() {

    const [isMobile, setIsMobile] = useState(false);

    const mobileWidth = 900

    useEffect(() => {
        const handleResize = () => {
            const windowSize = window.innerWidth <= mobileWidth;
            if (windowSize !== isMobile) setIsMobile(windowSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <>
            {!isMobile &&
                <SideBar>
                    <DashboardProfile />
                    <DashboardInstallation />
                    <DashboardMenu />
                </SideBar>}
        </>
    )
}