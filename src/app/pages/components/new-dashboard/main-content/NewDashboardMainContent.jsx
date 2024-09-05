"use client"

import dynamic from 'next/dynamic';
import { NewDashboardMainContent as MainContent } from '../styles';

const DashboardProfile = dynamic(() => import('../side-bar/DashboardProfile'), { ssr: false });
const DashboardInstallation = dynamic(() => import('../side-bar/DashboardInstallation'), { ssr: false });

const FactoryContent = dynamic(() => import('../factory/FactoryContent'), { ssr: false });
const DashboardHistory = dynamic(() => import('../history/DashboardHistory'), { ssr: false });
const DashboardInvoices = dynamic(() => import('../invoices/DashboardInvoices'), { ssr: false });

export default function NewDashboardMainContent() {

    return (
        <>
            <DashboardProfile isMobileContent={true} />
            <DashboardInstallation isMobileContent={true} />
            <MainContent className='dashboardMainContent'>
                <DashboardInvoices />
                <DashboardHistory />
            </MainContent>
            <FactoryContent />
        </>
    )
}