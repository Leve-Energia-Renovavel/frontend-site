"use client"

import DashboardMain from '@/app/pages/components/dashboard/DashboardMain';

export default function Invoices() {

    const paymentInitialPageIndex = 2

    return (
        <>
            <DashboardMain page={paymentInitialPageIndex} />
        </>
    );
}