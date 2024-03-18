"use client"

import dynamic from 'next/dynamic';
import InvoicesBanner from '../pages/components/banners/invoices-banner/InvoicesBanner';
const InvoicesMain = dynamic(() => import('../pages/components/invoices/InvoicesMain'), { ssr: false });

export default function Invoices() {
    return (
        <>
            <InvoicesBanner />
            <InvoicesMain />
        </>
    );
}