"use client"

import ServerErrorBanner from "./pages/components/banners/server-error-banner/ServerErrorBanner";

export default function ErrorPageMain({ error }) {

    return (
        <ServerErrorBanner />
    );
}
