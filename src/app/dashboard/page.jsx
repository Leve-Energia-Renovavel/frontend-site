import NewDashboardMain from "../pages/components/new-dashboard/NewDashboardMain";

export default function Dashboard() {

    const dashboardInitialPageIndex = 0

    return (
        <>
            <NewDashboardMain page={dashboardInitialPageIndex} />
        </>
    );
}
