/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreInstallations, useStoreMainInstallation, useStoreUserEconomy } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { formatBrazillianDate } from '@/app/utils/formatters/dateFormatter';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { NewDashboardContainer as Container, NewDashboardContent as Content, NewDashboardMainContent as MainContent } from './styles';

import DashboardHistory from './history/DashboardHistory';
import DashboardInvoices from './invoices/DashboardInvoices';
import DashboardSideBar from './side-bar/DashboardSideBar';

const FactoryContent = dynamic(() => import('./factory/FactoryContent'), { ssr: false });

export default function NewDashboardMain() {

    const router = useRouter()
    const storeEconomy = useStoreUserEconomy()

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
                <DashboardSideBar className="sideBar" />
                <Content className='dashboardContent'>
                    <MainContent className='dashboardMainContent'>
                        <DashboardInvoices />
                        <DashboardHistory />
                    </MainContent>

                    <FactoryContent />

                </Content>
            </Container>
        </>
    )
}