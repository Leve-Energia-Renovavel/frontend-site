"use client";

import { usePathname } from "next/navigation";
import RegisterHeader from "./header/RegisterHeader";
import { RoutingContainer } from "./styles";
import dynamic from "next/dynamic";

const RegisterUser = dynamic(() => import("@/app/pages/components/register/user/RegisterUser"), { ssr: false });
const RegisterAddress = dynamic(() => import("@/app/pages/components/register/address/RegisterAddress"), { ssr: false });
const RegisterContract = dynamic(() => import("@/app/pages/components/register/contract/RegisterContract"), { ssr: false });

export default function RegisterMain() {
    const pathname = usePathname();

    const currentPath = pathname.replace(/\/|cadastro/g, "");

    const routeOf = {
        "titular": { step: 0, component: <RegisterUser /> },
        "imovel": { step: 1, component: <RegisterAddress /> },
        "assinatura-contrato": { step: 2, component: <RegisterContract /> },
    };

    const { step, component } = routeOf[currentPath] || {};

    return (
        <RoutingContainer className="routingContainer">
            <RegisterHeader step={step}>{component}</RegisterHeader>
        </RoutingContainer>
    );
}
