import dynamic from "next/dynamic";
const NewContractSignature = dynamic(() => import("@/app/pages/components/new-contract-signature/NewContractSignature"), { ssr: false });

export default function ContractSignaturePage() {
    return (
        <>
            <NewContractSignature />
        </>
    )
}