import NewDashboardMain from "../pages/components/new-dashboard/NewDashboardMain";

export const fetchCache = 'force-no-store';

export default function Dashboard() {

    const dashboardInitialPageIndex = 0

    return (
        <>
            <NewDashboardMain page={dashboardInitialPageIndex} />
        </>
    );
}
