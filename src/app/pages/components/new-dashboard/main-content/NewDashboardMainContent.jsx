"use client"

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import DashboardHistory from '../history/DashboardHistory';
import DashboardInvoices from '../invoices/DashboardInvoices';
import { NewDashboardMainContent as MainContent } from '../styles';

const FactoryContent = dynamic(() => import('../factory/FactoryContent'), { ssr: false });

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