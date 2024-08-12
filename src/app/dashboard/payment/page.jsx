"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain';

export default function Invoices() {

    const paymentInitialPageIndex = 2

    return (
        <>
            <NewDashboardMain page={paymentInitialPageIndex} />
        </>
    );
}