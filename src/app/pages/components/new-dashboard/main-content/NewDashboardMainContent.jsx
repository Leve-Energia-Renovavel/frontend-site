"use client"

import dynamic from 'next/dynamic';
import { NewDashboardMainContent as MainContent } from '../styles';

const FactoryContent = dynamic(() => import('../factory/FactoryContent'), { ssr: false });
const DashboardHistory = dynamic(() => import('../history/DashboardHistory'), { ssr: false });
const DashboardInvoices = dynamic(() => import('../invoices/DashboardInvoices'), { ssr: false });

export default function NewDashboardMainContent() {
    return (
        <>
            <MainContent className='dashboardMainContent'>
                <DashboardInvoices />
                <DashboardHistory />
            </MainContent>
            <FactoryContent />
        </>
    )
}