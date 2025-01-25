"use client"

import dynamic from "next/dynamic";
const NotFoundBanner = dynamic(() => import("./pages/components/banners/not-found-banner/NotFoundBanner"), { ssr: false });

export default function NotFound() {

    return (
        <NotFoundBanner />
    );
}
