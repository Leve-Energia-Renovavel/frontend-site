"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain';

export default function Invoices() {

    const invoicesInitialPageIndex = 1

    return (
        <>
            <NewDashboardMain page={invoicesInitialPageIndex} />
        </>
    );
}