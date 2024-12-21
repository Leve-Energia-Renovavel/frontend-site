import Messages from "@/app/pages/components/messages/Messages";
import RegisterMain from "../../register/RegisterMain";

export function generateStaticParams() {
    return [
        { params: { step: 'titular' } },
        { params: { step: 'imovel' } },
        { params: { step: 'assinatura-contrato' } },
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
        <>
            <RegisterMain />

            <Messages />
        </>
    )
}