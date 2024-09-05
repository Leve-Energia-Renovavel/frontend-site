import dynamic from 'next/dynamic';
import { NewDashboardSideBar as SideBar } from '../styles';

const DashboardMemberGetMember = dynamic(() => import('./DashboardMemberGetMember'), { ssr: false });
const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });

export default function DashboardSideBar({ children, setErrorMessage, setNotifications }) {

    return (
        <>
            <SideBar className='dashboardSideBar'>
                <DashboardProfile isMobileContent={false} />
                <DashboardInstallation isMobileContent={false} />
                <DashboardMemberGetMember isSideBar={true}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
                {children}
            </SideBar>
        </>
    )
}