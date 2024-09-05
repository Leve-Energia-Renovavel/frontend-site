/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreMainInstallation, useStoreUser, useStoreUserEconomy } from '@/app/hooks/useStore';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content } from './styles';

import { getDashboardMainData } from '@/app/service/dashboard-service/DashboardService';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';
import Messages from '../messages/Messages';
import DashboardMenu from './side-bar/DashboardMenu';
import DashboardSideBar from './side-bar/DashboardSideBar';

const StatusStepper = dynamic(() => import('./status-stepper/StatusStepper'), { ssr: false });

export default function NewDashboardMain(props) {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeEconomy = useStoreUserEconomy()

    const storeMainInstallation = useStoreMainInstallation()
    const { uuid, hasStartedBilling } = storeMainInstallation?.mainInstallation || {}

    const mainInstallationExists = storeMainInstallation?.mainInstallation?.uuid !== ""

    const [menuSelected, setMenuSelection] = useState(menuOptions[props.page])

    const [notifications, setNotifications] = useState([])
    const [errors, setErrorMessage] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            await getDashboardMainData(router, storeUser, storeEconomy, setErrorMessage)
        };

        if (!uuid) {
            fetchDashboardData();
        }
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
                    {mainInstallationExists && !hasStartedBilling && <StatusStepper />}
                    {menuSelected?.content}
                </Content>
            </Container>

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}