"use client"

import dynamic from "next/dynamic";

const BrandsContainer = dynamic(() => import("./brands/HomeBrands"), { ssr: false });
const NewHomeVideo = dynamic(() => import("./video/NewHomeVideo"), { ssr: false });

export default function HomeLeveAboutUs() {
    return (
        <>
            <BrandsContainer />
            <NewHomeVideo />
        </>
    )
}