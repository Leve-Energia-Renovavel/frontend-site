"use client"

import NewDashboardMain from '@/app/pages/components/new-dashboard/NewDashboardMain';

export default function Profile() {

    const invoicesInitialPageIndex = 5

    return (
        <>
            <NewDashboardMain page={invoicesInitialPageIndex} />
        </>
    );
}