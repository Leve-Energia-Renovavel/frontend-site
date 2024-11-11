"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Messages from '../../messages/Messages';
import DashboardProfile from '../side-bar/DashboardProfile';
import { NewDashboardMainContent as MainContent } from '../styles';

const DashboardInstallation = dynamic(() => import('../side-bar/DashboardInstallation'), { ssr: false });
const DashboardSharedAccess = dynamic(() => import('../side-bar/shared-access/DashboardSharedAccess'), { ssr: false });

const FactoryContent = dynamic(() => import('../factory/FactoryContent'), { ssr: false });
const DashboardHistory = dynamic(() => import('../history/DashboardHistory'), { ssr: false });
const DashboardInvoices = dynamic(() => import('../invoices/DashboardInvoices'), { ssr: false });

export default function NewDashboardMainContent() {

    const [notifications, setNotifications] = useState([])
    const [errors, setErrorMessage] = useState([])

    return (
        <>
            <DashboardProfile isMobileContent={true} />
            <DashboardInstallation isMobileContent={true} />
            <DashboardSharedAccess
                isMobileContent={true}
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />
            <MainContent className='dashboardMainContent'>
                <DashboardInvoices />
                <DashboardHistory />
            </MainContent>
            <FactoryContent />

            <Messages notifications={notifications} errors={errors}
                setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}