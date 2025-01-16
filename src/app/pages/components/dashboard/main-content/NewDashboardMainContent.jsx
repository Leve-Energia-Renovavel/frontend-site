"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Messages from '../../messages/Messages';
import DashboardInvoices from '../invoices/DashboardInvoices';
import DashboardInstallation from '../side-bar/DashboardInstallation';
import DashboardProfile from '../side-bar/DashboardProfile';
import { NewDashboardMainContent as MainContent } from '../styles';

const DashboardHistory = dynamic(() => import('../history/DashboardHistory'), { ssr: false });
const DashboardSharedAccessButton = dynamic(() => import('../../utils/buttons/dashboard/shared-access/DashboardSharedAccessButton'), { ssr: false });

const FactoryContent = dynamic(() => import('../factory/FactoryContent'), { ssr: false });

export default function NewDashboardMainContent() {

    const [notifications, setNotifications] = useState([])
    const [errors, setErrorMessage] = useState([])

    return (
        <>
            <DashboardProfile isMobileContent={true} />
            <DashboardInstallation isMobileContent={true} />
            <DashboardSharedAccessButton
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