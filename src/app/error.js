"use client"

import dynamic from "next/dynamic";
const ServerErrorBanner = dynamic(() => import("./pages/components/banners/server-error-banner/ServerErrorBanner"), { ssr: false });

export default function ErrorPageMain({ error }) {

    return (
        <ServerErrorBanner />
    );
}
