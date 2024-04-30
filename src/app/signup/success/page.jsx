import dynamic from 'next/dynamic';
const NewSuccessMain = dynamic(() => import("../../pages/components/new-success/NewSuccessMain"), { ssr: false });

export default function SuccessPage() {
    return (
        <NewSuccessMain />
    )
}