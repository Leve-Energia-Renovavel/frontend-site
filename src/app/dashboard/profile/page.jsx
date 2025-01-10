"use client"

import NewDashboardMain from '@/app/pages/components/dashboard/DashboardMain';

export default function Profile() {

    const invoicesInitialPageIndex = 5

    return (
        <>
            <NewDashboardMain page={invoicesInitialPageIndex} />
        </>
    );
}