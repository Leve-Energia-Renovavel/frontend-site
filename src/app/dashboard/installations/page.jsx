import NewDashboardMain from "@/app/pages/components/new-dashboard/NewDashboardMain";

export default function Installations() {

    const installationsInitialPageIndex = 3

    return (
        <NewDashboardMain page={installationsInitialPageIndex} />
    );
}