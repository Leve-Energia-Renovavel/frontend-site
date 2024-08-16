import dynamic from 'next/dynamic';
import { NewDashboardSideBar as SideBar } from '../styles';

import DashboardMemberGetMember from './DashboardMemberGetMember';

const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });

export default function DashboardSideBar({ children }) {

    return (
        <>
            <SideBar>
                <DashboardProfile isMobileContent={false} />
                <DashboardInstallation isMobileContent={false} />
                <DashboardMemberGetMember isSideBar={true} />
                {children}
            </SideBar>
        </>
    )
}