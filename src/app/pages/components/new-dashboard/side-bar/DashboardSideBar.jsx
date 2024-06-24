import dynamic from 'next/dynamic';
import { NewDashboardSideBar as SideBar } from '../styles';
import DashboardMemberGetMember from './DashboardMemberGetMember';

const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });
const DashboardMenu = dynamic(() => import('./DashboardMenu'), { ssr: false });

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