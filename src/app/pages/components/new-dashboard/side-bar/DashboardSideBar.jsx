import dynamic from 'next/dynamic';
import DashboardSharedAccessButton from '../../utils/buttons/dashboard/shared-access/DashboardSharedAccessButton';
import { NewDashboardSideBar as SideBar } from '../styles';

const DashboardProfile = dynamic(() => import('./DashboardProfile'), { ssr: false });
const DashboardInstallation = dynamic(() => import('./DashboardInstallation'), { ssr: false });
const DashboardSharedAccess = dynamic(() => import('./shared-access/DashboardSharedAccess'), { ssr: false });

export default function DashboardSideBar({ children, setErrorMessage, setNotifications }) {

    return (
        <>
            <SideBar className='dashboardSideBar'>
                <DashboardProfile isMobileContent={false} />
                <DashboardInstallation isMobileContent={false} />

                <DashboardSharedAccessButton
                    isMobileContent={false}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />

                <DashboardSharedAccess
                    expanded={false}
                    isMobileContent={true}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
                {children}
            </SideBar>
        </>
    )
}