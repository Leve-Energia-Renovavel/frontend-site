"use client"

import { useState } from 'react';

import Banner1 from './banner-1/Banner';
import Banner2 from './banner-2/Banner';

export default function Banners() {

    const [openDetailedBanner, setOpenDetailedBanner] = useState(false)

    function handleChangeBanner() {
        setOpenDetailedBanner(true)
    }

    return (
        <>
            {!openDetailedBanner && <Banner1 handleChangeBanner={handleChangeBanner} />}
            {openDetailedBanner && (<Banner2 />)}
        </>
    );
}