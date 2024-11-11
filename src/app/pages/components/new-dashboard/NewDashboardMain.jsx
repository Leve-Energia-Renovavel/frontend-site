/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from '@/app/hooks/useStore';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content } from './styles';

import { getGeneralDashboardData } from '@/app/service/dashboard-service/DashboardService';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';
import Messages from '../messages/Messages';
import DashboardMenu from './side-bar/DashboardMenu';
import DashboardSideBar from './side-bar/DashboardSideBar';

const StatusStepper = dynamic(() => import('./status-stepper/StatusStepper'), { ssr: false });
const DashboardSharedAccess = dynamic(() => import('./side-bar/shared-access/DashboardSharedAccess'), { ssr: false });

export default function NewDashboardMain(props) {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeEconomy = useStoreUserEconomy()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { uuid, hasStartedBilling } = storeMainInstallation?.mainInstallation || {}

    const mainInstallationExists = storeMainInstallation?.mainInstallation?.uuid !== ""

    const [menuSelected, setMenuSelection] = useState(menuOptions[props.page])

    const [notifications, setNotifications] = useState([])
    const [errors, setErrorMessage] = useState([])

    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            await getGeneralDashboardData(router, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations, setErrorMessage)
        };

        fetchDashboardData();
    }, []);

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
                    {mainInstallationExists && !hasStartedBilling && <StatusStepper /> && <DashboardSharedAccess
                        isMobileContent={false}
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications}
                    />}
                    {menuSelected?.content}
                </Content>
            </Container>

            <Messages notifications={notifications} errors={errors}
                setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}