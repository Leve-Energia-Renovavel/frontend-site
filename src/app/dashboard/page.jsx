
import dynamic from "next/dynamic";
import NewDashboardMain from "../pages/components/new-dashboard/NewDashboardMain";
const DashboardMain = dynamic(() => import("../pages/components/dashboard/DashboardMain"), { ssr: false });

export default function Dashboard() {

    return (
        <>
            {/* <DashboardBanner />
            <DashboardMain /> */}
            <NewDashboardMain />
        </>
    );
}
