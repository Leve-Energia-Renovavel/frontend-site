import dynamic from "next/dynamic";
const NewSuccessMain = dynamic(() => import("@/app/pages/components/new-success/NewSuccessMain"), { ssr: false });
const ProvisorySuccess = dynamic(() => import("@/app/pages/components/new-success/ProvisorySuccess"), { ssr: false });

export default function SuccessPage() {
    return (
        // <NewSuccessMain />
        <ProvisorySuccess />
    )
}