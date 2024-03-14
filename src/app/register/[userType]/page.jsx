import { usePathname } from "next/navigation";
import RegisterMain from "./RegisterMain";

export function generateStaticParams() {
    return [
        { params: { userType: 'cpf' } },
        { params: { userType: 'cnpj' } },
    ];
}

export function getStaticPaths() {
    return {
        paths: generateStaticParams(),
        fallback: true,
    };
}

export default function Register() {




    return (
        <div>
            <RegisterMain />
        </div>
    )
}


