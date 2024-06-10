import PartnershipMain from "@/app/pages/components/lp/parcerias/PartnershipMain";

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

    return (
        <PartnershipMain />
    )
}


