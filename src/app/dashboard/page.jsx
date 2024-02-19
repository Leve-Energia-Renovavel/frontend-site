import DashboardBanner from "../pages/components/banners/dashboard-banner/DashboardBanner";
import DashboardHistory from "../pages/components/dashboard/DashboardHistory";
import DashboardMain from "../pages/components/dashboard/DashboardMain";
import DashboardMGM from "../pages/components/dashboard/DashboardMGM";

export default function Dashboard() {
    return (
        <>
            <DashboardBanner />
            <DashboardMain />
            {/* <DashboardMGM /> */}
            {/* <DashboardHistory /> */}
        </>
    );
}
