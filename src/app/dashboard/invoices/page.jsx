import NewDashboardMain from '@/app/pages/components/dashboard/DashboardMain';

export default function Invoices() {

    const invoicesInitialPageIndex = 1

    return (
        <NewDashboardMain page={invoicesInitialPageIndex} />
    );
}