
import dynamic from "next/dynamic";
import DashboardBanner from "../pages/components/banners/dashboard-banner/DashboardBanner";
const DashboardMain = dynamic(() => import("../pages/components/dashboard/DashboardMain"), { ssr: false });

export default function Dashboard() {

    return (
        <>
            <DashboardBanner />
            <DashboardMain />
        </>
    );
}
