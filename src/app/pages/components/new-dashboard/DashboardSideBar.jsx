import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { NewDashboardSideBar as SideBar } from './styles';
import DashboardMemberGetMember from './side-bar/DashboardMemberGetMember';

const DashboardInstallation = dynamic(() => import('./side-bar/DashboardInstallation'), { ssr: false });
const DashboardProfile = dynamic(() => import('./side-bar/DashboardProfile'), { ssr: false });
const DashboardMenu = dynamic(() => import('./side-bar/DashboardMenu'), { ssr: false });

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
                    <DashboardMemberGetMember />
                    <DashboardMenu />
                </SideBar>}
        </>
    )
}