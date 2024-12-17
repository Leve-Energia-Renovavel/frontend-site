"use client"

import NewContractSignature from '@/app/pages/components/new-contract-signature/NewContractSignature';
import SignupMain from '@/app/pages/components/signup/SignupMain';
import SignupMainForm from '@/app/pages/components/signup/SignupMainForm';
import { usePathname } from 'next/navigation';

export default function RegisterRouting() {
    const pathname = usePathname()

    const clearPathName = (str) => {
        return str.replace(/\/|cadastro/g, '');
    };

    const routing = {
        "titular": <SignupMainForm />,
        "imovel": <SignupMain />,
        "assinatura-contrato": <NewContractSignature />
    }

    return (
        <>
            {routing[clearPathName(pathname)]}
        </>
    )
}