import dynamic from 'next/dynamic';
import { NewDashboardSideBar as SideBar } from '../styles';

const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });
const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardMemberGetMember = dynamic(() => import('./DashboardMemberGetMember'), { ssr: false });
const DashboardSharedAccess = dynamic(() => import('./shared-access/DashboardSharedAccess'), { ssr: false });

export default function DashboardSideBar({ children, setErrorMessage, setNotifications }) {

    return (
        <>
            <SideBar className='dashboardSideBar'>
                <DashboardProfile isMobileContent={false} />
                <DashboardInstallation isMobileContent={false} />
                <DashboardSharedAccess
                    isMobileContent={false}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
                <DashboardMemberGetMember isSideBar={true}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
                {children}
            </SideBar>
        </>
    )
}