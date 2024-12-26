import dynamic from 'next/dynamic';
import DashboardSharedAccessButton from '../../utils/buttons/dashboard/shared-access/DashboardSharedAccessButton';
import DashboardWelcomeAndShareAccess from '../../utils/buttons/dashboard/welcome/DashboardWelcomeAndShareAccess';
import { NewDashboardSideBar as SideBar } from '../styles';
import DashboardInstallation from './DashboardInstallation';
import DashboardProfile from './DashboardProfile';

const DashboardSharedAccess = dynamic(() => import('./shared-access/DashboardSharedAccess'), { ssr: false });

export default function DashboardSideBar({ children }) {

    return (
        <>
            <SideBar className='dashboardSideBar'>
                <DashboardProfile isMobileContent={false} />
                <DashboardInstallation isMobileContent={false} />
                <DashboardSharedAccessButton isMobileContent={false} />

                <DashboardWelcomeAndShareAccess isMobileContent={false} />

                <DashboardSharedAccess
                    isMobileContent={true}
                    expanded={false} />
                {children}
            </SideBar>
        </>
    )
}