/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreMainInstallation, useStoreUserEconomy } from '@/app/hooks/useStore';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content } from './styles';

import { getDashboardMainData } from '@/app/service/dashboard-service/DashboardService';
import DashboardMenu from './side-bar/DashboardMenu';
import DashboardSideBar from './side-bar/DashboardSideBar';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';

const StatusStepper = dynamic(() => import('./status-stepper/StatusStepper'), { ssr: false });

export default function NewDashboardMain(props) {

    const router = useRouter()
    const storeEconomy = useStoreUserEconomy()

    const storeMainInstallation = useStoreMainInstallation()
    const { uuid, hasStartedBilling } = storeMainInstallation?.mainInstallation || {}

    const mainInstallationExists = storeMainInstallation?.mainInstallation?.uuid !== ""

    const [menuSelected, setMenuSelection] = useState(menuOptions[props.page])

    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            await getDashboardMainData(router, storeEconomy)
        };

        if (!uuid) {
            fetchDashboardData();
        }
    }, []);

    return (
        <>
            <Container className='dashboardContainer'>
                <DashboardSideBar className="sideBar">
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
        </>
    )
}