/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUserEconomy } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { formatBrazillianDate } from '@/app/utils/formatters/dateFormatter';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content } from './styles';

import { menuOptions } from '@/app/utils/helper/dashboardHelper';
import DashboardMenu from './side-bar/DashboardMenu';
import DashboardSideBar from './side-bar/DashboardSideBar';

const StatusStepper = dynamic(() => import('./status-stepper/StatusStepper'), { ssr: false });

export default function NewDashboardMain() {

    const router = useRouter()
    const storeEconomy = useStoreUserEconomy()

    const [menuSelected, setMenuSelection] = useState(menuOptions[0])


    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
                console.log("response ==>>", response)

                if (requestSuccessful(response?.status)) {
                    const { consumidor, economia } = response?.data
                    const receivedCredits = response?.data?.creditos_recebidos
                    const carbonCredits = response?.data?.co_dois

                    const updatedUserEconomy = {
                        economySince: formatBrazillianDate(consumidor?.created_at),
                        value: economia,
                        carbonCredits: carbonCredits?.toFixed(2),
                        receivedCredits: receivedCredits?.toFixed(2),
                    }

                    storeEconomy.updateUserEconomy(updatedUserEconomy)

                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                if (error?.response?.data?.message === "Unauthenticated.") {
                    router.push("/login")
                }
            }
        };
        fetchDashboardData();
    }, []);

    return (
        <>
            <Container className='dashboardContainer'>
                <DashboardSideBar className="sideBar">
                    <DashboardMenu setMenuSelection={setMenuSelection}/>
                </DashboardSideBar>
                <Content className='dashboardContent'>
                    <StatusStepper />
                    {menuSelected?.content}
                </Content>
            </Container>
        </>
    )
}