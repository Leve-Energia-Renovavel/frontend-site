"use client"

import { clearPartnerName } from "@/app/utils/helper/partners/partnerHelper";
import { usePathname } from "next/navigation";
import BrandsContainer from "./brands/HomeBrands";

export default function HomeLeveAboutUs() {
    const partner = usePathname()
    return (
        <BrandsContainer partner={clearPartnerName(partner)} />
    )
}