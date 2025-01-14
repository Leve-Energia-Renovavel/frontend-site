import DashboardMain from "../pages/components/dashboard/DashboardMain";

export const fetchCache = 'force-no-store';

export default function Dashboard() {

    const dashboardInitialPageIndex = 0

    return (
        <DashboardMain page={dashboardInitialPageIndex} />
    );
}
