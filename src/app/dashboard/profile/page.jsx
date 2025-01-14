"use client"

import DashboardMain from '@/app/pages/components/dashboard/DashboardMain';

export default function Profile() {

    const invoicesInitialPageIndex = 5

    return (
        <>
            <DashboardMain page={invoicesInitialPageIndex} />
        </>
    );
}