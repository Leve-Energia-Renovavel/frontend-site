"use client"

import RegisterContract from '@/app/pages/components/register/contract/RegisterContract';
import RegisterAddress from '@/app/pages/components/register/RegisterAddress';
import RegisterUser from '@/app/pages/components/register/RegisterUser';
import { usePathname } from 'next/navigation';
import RegisterHeader from './header/RegisterHeader';
import { RoutingContainer } from './styles';

export default function RegisterRouting() {
    const pathname = usePathname()

    const clearPathName = (str) => {
        return str.replace(/\/|cadastro/g, '');
    };

    const routing = {
        "titular": <RegisterUser />,
        "imovel": <RegisterAddress />,
        "assinatura-contrato": <RegisterContract />
    }

    return (
        <RoutingContainer className='routingContainer'>
            <RegisterHeader>
                {routing[clearPathName(pathname)]}
            </RegisterHeader>
        </RoutingContainer>
    )
}