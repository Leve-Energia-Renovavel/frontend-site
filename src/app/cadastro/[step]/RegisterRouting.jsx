"use client"

import NewContractSignature from '@/app/pages/components/new-contract-signature/NewContractSignature';
import EconomySimulation from '@/app/pages/components/signup/EconomySimulation';
import RegisterUser from '@/app/pages/components/register/RegisterUser';
import { usePathname } from 'next/navigation';

export default function RegisterRouting() {
    const pathname = usePathname()

    const clearPathName = (str) => {
        return str.replace(/\/|cadastro/g, '');
    };

    const routing = {
        "titular": <RegisterUser />,
        "imovel": <EconomySimulation />,
        "assinatura-contrato": <NewContractSignature />
    }

    return (
        <>
            {routing[clearPathName(pathname)]}
        </>
    )
}