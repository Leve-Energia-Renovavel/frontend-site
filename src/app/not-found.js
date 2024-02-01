"use client"

import { useRouter } from "next/navigation";
import NotFoundBanner from "./pages/components/banners/not-found-banner/NotFoundBanner";

export default function NotFound() {

    const router = useRouter()

    return (
        <NotFoundBanner />

    );
}
