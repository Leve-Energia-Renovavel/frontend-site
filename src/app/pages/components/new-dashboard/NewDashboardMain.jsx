"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from '@/app/hooks/stores/useStore';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content } from './styles';

import { getGeneralDashboardData } from '@/app/service/dashboard-service/DashboardService';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';
import { isTrue } from '@/app/utils/helper/generalHelper';
import { PATH_TO } from '../../enums/globalEnums';
import Messages from '../messages/Messages';
import DashboardMenu from './side-bar/DashboardMenu';
import DashboardSideBar from './side-bar/DashboardSideBar';

const StatusStepper = dynamic(() => import('./status-stepper/StatusStepper'), { ssr: false });

export default function NewDashboardMain(props) {

    const router = useRouter()
    const pathname = usePathname()
    const storeUser = useStoreUser()
    const storeEconomy = useStoreUserEconomy()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { distributorStatus } = storeUser?.user || {}
    const { hasStartedBilling } = storeMainInstallation?.mainInstallation || {}

    const [menuSelected, setMenuSelection] = useState(menuOptions[props.page])

    const [notifications, setNotifications] = useState([])
    const [errors, setErrorMessage] = useState([])

    const mainInstallationExists = storeMainInstallation?.mainInstallation?.uuid !== ""
    const isHomeOrInstallations = pathname === PATH_TO.DASHBOARD || pathname === PATH_TO.INSTALLATIONS;
    const activeDistributor = isTrue(distributorStatus)
    
    useEffect(() => {
        const fetchAllDashboardData = async () => {
            await getGeneralDashboardData(router, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations, setErrorMessage)
        };

        fetchAllDashboardData();
    }, [router, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations]);

    return (
        <>
            <Container className='dashboardContainer'>
                <DashboardSideBar
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications}>
                    <DashboardMenu
                        isSideBar={true}
                        menuSelected={menuSelected}
                        setMenuSelection={setMenuSelection} />
                </DashboardSideBar>
                <Content className='dashboardContent'>
                    {mainInstallationExists && !hasStartedBilling && isHomeOrInstallations && activeDistributor && <StatusStepper />}
                    {menuSelected?.content}
                </Content>
            </Container>

            <Messages notifications={notifications} errors={errors}
                setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}