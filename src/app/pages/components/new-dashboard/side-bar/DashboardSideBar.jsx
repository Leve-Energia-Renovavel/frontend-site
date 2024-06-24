import dynamic from 'next/dynamic';
import { NewDashboardSideBar as SideBar } from '../styles';

import DashboardMemberGetMember from './DashboardMemberGetMember';
import DashboardMenu from './DashboardMenu';

const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });

export default function DashboardSideBar() {

    return (
        <>
            <SideBar>
                <DashboardProfile />
                <DashboardInstallation />
                <DashboardMemberGetMember />
                <DashboardMenu />
            </SideBar>
        </>
    )
}