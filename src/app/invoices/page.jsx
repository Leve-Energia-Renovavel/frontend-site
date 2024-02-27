"use client"

import InvoicesBanner from '../pages/components/banners/invoices-banner/InvoicesBanner';
import InvoicesMain from '../pages/components/invoices/InvoicesMain';

export default function Invoices() {
    return (
        <>
            <InvoicesBanner />
            <InvoicesMain />
        </>
    );
}