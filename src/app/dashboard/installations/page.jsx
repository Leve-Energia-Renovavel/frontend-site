import dynamic from "next/dynamic";
import InstallationsBanner from "../../pages/components/banners/installations-banner/InstallationsBanner";
const InstallationsMain = dynamic(() => import("../../pages/components/installations/InstallationsMain"), { ssr: false });

export default function Installations() {
    return (
        <>
            <InstallationsBanner />
            <InstallationsMain />
        </>
    );
}