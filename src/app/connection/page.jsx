import dynamic from "next/dynamic";
const ConnectionMain = dynamic(() => import('../pages/components/connection/ConnectionMain'), { ssr: false });

export default function ConnectionPage() {
    return (
        <>
            <ConnectionMain />
        </>
    )
}