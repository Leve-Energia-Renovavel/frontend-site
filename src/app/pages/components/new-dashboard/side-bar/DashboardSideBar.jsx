import dynamic from 'next/dynamic';
import DashboardSharedAccessButton from '../../utils/buttons/dashboard/shared-access/DashboardSharedAccessButton';
import { NewDashboardSideBar as SideBar } from '../styles';
import DashboardInstallation from './DashboardInstallation';
import DashboardProfile from './DashboardProfile';

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