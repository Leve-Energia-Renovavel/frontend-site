import PartnershipMain from "@/app/pages/components/lp/parcerias/PartnershipMain";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { params: { partner: 'tribanco' } },
        { params: { partner: 'martins' } },
        { params: { partner: 'localiza' } },
        { params: { partner: 'yduqs' } },
        { params: { partner: 'tim' } },
        { params: { partner: 'allya' } },
    ];
}

export function getStaticPaths() {
    return {
        paths: generateStaticParams(),
        fallback: true,
    };
}

export default function Partners() {

    notFound() //remove to bring back the partners pages

    return (
        <PartnershipMain />
    )
}


