"use client"

import dynamic from 'next/dynamic';
import { NewDashboardContainer as Container, NewDashboardContent as Content, NewDashboardMainContent as MainContent } from './styles';
import DashboardInvoices from './invoices/DashboardInvoices';
const DashboardSideBar = dynamic(() => import('./DashboardSideBar'), { ssr: false });

export default function NewDashboardMain() {

    return (
        <>
            <Container className='container'>
                <DashboardSideBar className="sideBar" />
                <Content>
                    <MainContent>
                        <DashboardInvoices />

                    </MainContent>

                </Content>
            </Container>
        </>
    )
}