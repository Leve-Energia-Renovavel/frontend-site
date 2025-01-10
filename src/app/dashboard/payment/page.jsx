"use client"

import NewDashboardMain from '@/app/pages/components/dashboard/DashboardMain';

export default function Invoices() {

    const paymentInitialPageIndex = 2

    return (
        <>
            <NewDashboardMain page={paymentInitialPageIndex} />
        </>
    );
}