import DashboardMain from "@/app/pages/components/dashboard/DashboardMain";

export default function Installations() {

    const installationsInitialPageIndex = 3

    return (
        <DashboardMain page={installationsInitialPageIndex} />
    );
}